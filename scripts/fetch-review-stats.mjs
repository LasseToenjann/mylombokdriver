/**
 * Read the current rating and review count from the Google Business Profile and
 * write them to assets/review-stats.json — and into the fallback figures in
 * js/config.js, so the safety net cannot quietly go stale.
 *
 * Runs in GitHub Actions, not in the browser: the API key stays a repository
 * secret and never reaches a visitor. The site loads the resulting JSON, which
 * is same-origin and about 90 bytes.
 *
 *   PLACE_ID          the Google Place ID of the business
 *   GOOGLE_MAPS_KEY   API key with "Places API (New)" enabled
 *
 * Only the two fields actually needed are requested. The field mask decides
 * what Google bills, so asking for reviews or photos here would cost more for
 * no benefit — the quotes on the site are hand-picked in content.js.
 */
import { writeFile, readFile } from 'node:fs/promises';

const PLACE_ID = process.env.PLACE_ID;
const KEY = process.env.GOOGLE_MAPS_KEY;
const OUT = new URL('../assets/review-stats.json', import.meta.url);
const CONFIG = new URL('../js/config.js', import.meta.url);

if (!PLACE_ID || !KEY) {
  console.error('PLACE_ID and GOOGLE_MAPS_KEY must both be set as repository secrets.');
  console.error('See INFORMATIONEN.md, section "Bewertungszahlen automatisch aktualisieren".');
  process.exit(1);
}

const res = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(PLACE_ID)}`, {
  headers: {
    'X-Goog-Api-Key': KEY,
    'X-Goog-FieldMask': 'rating,userRatingCount'
  }
});

if (!res.ok) {
  console.error(`Places API returned ${res.status}: ${(await res.text()).slice(0, 400)}`);
  process.exit(1);
}

const { rating, userRatingCount } = await res.json();

/* A missing or zero count means something is wrong upstream — a wrong Place ID
   answers 200 with an empty body. Better to fail loudly and keep the previous
   file than to publish "0 guest reviews". */
if (typeof rating !== 'number' || typeof userRatingCount !== 'number' || userRatingCount < 1) {
  console.error(`Implausible response, keeping the existing file: ${JSON.stringify({ rating, userRatingCount })}`);
  process.exit(1);
}

const next = {
  rating: Math.round(rating * 10) / 10,
  count: userRatingCount,
  source: 'Google',
  updated: new Date().toISOString().slice(0, 10)
};

let prev = null;
try {
  prev = JSON.parse(await readFile(OUT, 'utf8'));
} catch { /* first run */ }

const touched = [];

if (!prev || prev.rating !== next.rating || prev.count !== next.count) {
  await writeFile(OUT, JSON.stringify(next, null, 2) + '\n', 'utf8');
  touched.push('assets/review-stats.json');
}

/* The figures in config.js are what the strip falls back to when the JSON does
   not load. Keeping them in step here means the fallback shows today's numbers
   instead of whatever was last typed in by hand. Only the two values inside the
   reviewStats block are touched; the block holds no nested braces, which is
   what makes matching it this narrowly safe. */
const before = await readFile(CONFIG, 'utf8');
const after = before.replace(/reviewStats:\s*\{[^{}]*\}/, block => block
  .replace(/(\brating:\s*)[\d.]+/, `$1${next.rating.toFixed(1)}`)
  .replace(/(\bcount:\s*)\d+/, `$1${next.count}`));

if (after === before) {
  /* Either already in step, or the block was renamed. Distinguishing the two is
     worth a warning rather than a failed run: the JSON above is the source the
     site actually reads, and it has been written by now. */
  if (!new RegExp(`rating:\\s*${next.rating.toFixed(1)}\\b`).test(before) ||
      !new RegExp(`count:\\s*${next.count}\\b`).test(before)) {
    console.log('::warning file=js/config.js::Could not sync the reviewStats fallback — check the block still looks as expected.');
  }
} else {
  await writeFile(CONFIG, after, 'utf8');
  touched.push('js/config.js');
}

if (!touched.length) {
  console.log(`Unchanged: ${next.rating} from ${next.count} reviews.`);
  process.exit(0);
}

console.log(`Updated: ${prev ? `${prev.rating}/${prev.count}` : 'none'} -> ${next.rating}/${next.count} (${touched.join(', ')})`);

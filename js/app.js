/* ============================================================================
   MY LOMBOK DRIVER — APPLICATION
   ----------------------------------------------------------------------------
   No framework, no build step. Everything is rendered from
   js/config.js + js/content.js + js/i18n.js so the site can be maintained by
   editing data instead of markup.
   ========================================================================== */
(function () {
  'use strict';

  const CFG   = window.MLD_CONFIG;
  const DATA  = window.MLD_CONTENT;
  const I18N  = window.MLD_I18N;

  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const SCENES = 'images/';

  /* Two pages share this script: the home page and tours.html. Rather than
     splitting it in two — which would mean maintaining the header, the modal
     and the reveal system twice — every renderer checks whether its host
     element is actually on the page and does nothing when it is not.
     `data-page` on <body> only decides the handful of things that genuinely
     differ: which tours are listed, where the booking links point, and which
     title and canonical URL the document gets. */
  const PAGE = document.body.dataset.page || 'home';
  const ON_TOURS_PAGE = PAGE === 'tours';

  /* "Book this" has to reach the form, which only exists on the home page.
     From tours.html it therefore carries the tour in the query string; the
     booking form picks it up on arrival. */
  const bookHref = id =>
    ON_TOURS_PAGE ? `index.html?service=${encodeURIComponent(id)}#book` : '#book';

  const pageTitleKey = ON_TOURS_PAGE ? 'toursPage.metaTitle' : 'meta.title';

  /* Resolve an image reference from content.js.
     A bare file name  ("waterfall.webp")     -> images/waterfall.webp
     Anything with a slash or protocol        -> used exactly as written,
     so an image may also live anywhere else ("assets/foo.svg"). */
  const img = ref => (/^(https?:)?\/\/|\//.test(ref) || ref.includes('/')) ? ref : SCENES + ref;

  /* ---------------------------------------------------------------- utils */

  const t = key => I18N[key] ?? key;

  const esc = str => String(str).replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  /** 350000 -> "IDR 350.000" (Indonesian thousands separator) */
  const idr = n => 'IDR ' + n.toLocaleString('de-DE');

  /** Rough EUR equivalent, only ever shown with a "≈". */
  const eur = n => {
    const rate = CFG.pricing.idrPerEur;
    if (!rate) return '';
    const v = n / rate;
    /* Rounded to whole euros up to €100, to fives above it. Rounding
       everything to fives used to make neighbouring cards collide — a
       1,300,000 and a 1,400,000 tour both came out at "≈ €65". */
    return '≈ €' + (v < 100 ? Math.round(v) : Math.round(v / 5) * 5);
  };

  const waDigits = () => (CFG.contact.whatsapp || '').replace(/\D/g, '');
  const hasWa    = () => waDigits().length >= 8;

  const waLink = text =>
    hasWa()
      ? `https://wa.me/${waDigits()}?text=${encodeURIComponent(text)}`
      : (CFG.contact.instagramDm || CFG.contact.instagram);

  /* --------------------------------------------------------------- icons */

  const ICONS = {
    local:  '<path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z"/><circle cx="12" cy="10" r="2.6"/>',
    price:  '<rect x="2.6" y="6" width="18.8" height="12" rx="2.4"/><circle cx="12" cy="12" r="2.6"/><path d="M6 12h.02M18 12h.02"/>',
    clock:  '<circle cx="12" cy="12" r="8.6"/><path d="M12 6.8V12.4l3.4 2"/>',
    car:    '<path d="M3.2 13.8 5.3 8.2h13.4l2.1 5.6v4.2H3.2z"/><circle cx="7.4" cy="18" r="1.9"/><circle cx="16.6" cy="18" r="1.9"/><path d="M5.6 13.8h12.8"/>',
    chat:   '<path d="M20.5 12.1c0 3.9-3.8 7.1-8.5 7.1-1 0-2-.14-2.9-.4L4 20.4l1.6-3.9a6.7 6.7 0 0 1-2.1-4.4C3.5 8.2 7.3 5 12 5s8.5 3.2 8.5 7.1Z"/>',
    shield: '<path d="M12 21s7-3.2 7-9V6.2l-7-3-7 3V12c0 5.8 7 9 7 9Z"/><path d="m8.9 12 2.2 2.2 4.2-4.4"/>'
  };

  const STAR = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2.6 2.9 5.9 6.5.95-4.7 4.6 1.1 6.45L12 17.45 6.2 20.5l1.1-6.45-4.7-4.6 6.5-.95Z"/></svg>';

  const WA_PATH = '<path d="M12.04 2C6.6 2 2.2 6.39 2.2 11.8c0 1.9.5 3.66 1.4 5.2L2 22l5.15-1.55a9.9 9.9 0 0 0 4.89 1.28h.01c5.44 0 9.84-4.39 9.84-9.8C21.89 6.39 17.48 2 12.04 2Zm5.7 13.94c-.24.67-1.4 1.29-1.93 1.34-.5.05-1.13.07-1.82-.11-.42-.11-.96-.29-1.65-.58-2.9-1.23-4.8-4.1-4.95-4.29-.14-.19-1.18-1.55-1.18-2.96 0-1.4.74-2.09 1-2.38.25-.29.55-.36.74-.36.18 0 .37 0 .53.01.17.01.4-.06.62.47.24.55.8 1.92.87 2.06.07.14.12.31.02.5-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.14-.3.3-.13.59.17.29.76 1.23 1.63 1.99 1.12.98 2.06 1.28 2.35 1.42.29.15.46.12.63-.07.17-.19.73-.83.92-1.12.19-.29.39-.24.65-.14.26.09 1.65.77 1.93.91.29.14.48.22.55.34.07.12.07.69-.17 1.36Z"/>';

  const contactIcon = {
    wa:   `<svg viewBox="0 0 24 24" style="fill:currentColor;stroke:none">${WA_PATH}</svg>`,
    ig:   '<svg viewBox="0 0 24 24"><rect x="2.8" y="2.8" width="18.4" height="18.4" rx="5.2"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.5" cy="6.6" r="1.1" style="fill:currentColor"/></svg>',
    mail: '<svg viewBox="0 0 24 24"><rect x="2.6" y="4.8" width="18.8" height="14.4" rx="2.4"/><path d="m3.4 6.6 8.6 6 8.6-6"/></svg>',
    map:  '<svg viewBox="0 0 24 24"><path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z"/><circle cx="12" cy="10" r="2.6"/></svg>'
  };

  /* ------------------------------------------------------------ page text */

  /* Fills every element carrying a data-i18n* attribute from the string table
     in i18n.js. The markup ships with the English text already in place, so
     this only has to re-apply it — the page reads fine before the script runs
     and even if it never does. */
  function applyText() {
    $$('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    $$('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
    $$('[data-i18n-attr]').forEach(el => {
      el.dataset.i18nAttr.split('|').forEach(pair => {
        const [attr, key] = pair.split(':');
        el.setAttribute(attr.trim(), t(key.trim()));
      });
    });

    /* form placeholders */
    const ph = { 'f-name': 'book.namePh', 'f-hotel': 'book.hotelPh', 'f-flight': 'book.flightPh', 'f-message': 'book.messagePh' };
    Object.entries(ph).forEach(([id, key]) => { const el = $('#' + id); if (el) el.placeholder = t(key); });
  }

  /* -------------------------------------------------------------- render */

  function renderMarquee() {
    const track = $('#marqueeTrack');
    if (!track) return;
    const items = [1, 2, 3, 4, 5].map(n => `<span>${esc(t('strip.' + n))}</span>`).join('');
    track.innerHTML = items + items;   /* duplicated for a seamless loop */
  }

  function renderValues() {
    if (!$('#valueGrid')) return;
    $('#valueGrid').innerHTML = DATA.values.map(v => `
      <article class="value-card">
        <div class="value-icon"><svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[v.icon] || ICONS.shield}</svg></div>
        <h3>${esc(v.title)}</h3>
        <p>${esc(v.text)}</p>
      </article>`).join('');
    revealGroup($$('#valueGrid .value-card'));
  }

  function priceBlock(tour) {
    if (tour.unit === 'ask') {
      return `<div class="tour-price"><span class="amount">${esc(t('tours.onRequest'))}</span></div>`;
    }
    const unit = tour.unit === 'person' ? t('tours.perPerson') : t('tours.perCar');
    const from = CFG.pricing.showFrom ? `<span class="from">${esc(t('tours.from'))}</span>` : '';
    const e = eur(tour.price);
    return `<div class="tour-price">
        ${from}
        <span class="amount">${esc(idr(tour.price))}</span>
        ${e ? `<span class="eur">${esc(e)}</span>` : ''}
        <span class="unit">${esc(unit)}</span>
      </div>`;
  }

  function catLabel(tour) {
    const first = tour.cats[0];
    const cat = DATA.categories.find(c => c.id === first);
    return cat ? cat.label : '';
  }

  /* The home page shows a shortlist — seven cards is a section, fourteen is a
     catalogue and pushes everything below it out of reach. The full list lives
     on tours.html, which is also the only page with the category filters. */
  function tourList(filter = 'all') {
    const base = ON_TOURS_PAGE ? DATA.tours : DATA.tours.filter(x => x.featured);
    return base.filter(x => filter === 'all' || x.cats.includes(filter));
  }

  function renderTours(filter = 'all') {
    const host = $('#tourGrid');
    if (!host) return;
    const list = tourList(filter);
    host.innerHTML = list.map(tour => `
      <article class="tour-card">
        <div class="tour-media">
          <span class="tour-tag">${esc(catLabel(tour))}</span>
          <img src="${img(tour.scene)}" alt="${esc(tour.title)}" loading="lazy" width="800" height="500">
          <span class="tour-dur">
            <svg viewBox="0 0 24 24" class="ico" aria-hidden="true"><circle cx="12" cy="12" r="8.6"/><path d="M12 6.8V12.4l3.4 2"/></svg>
            ${esc(tour.duration)}
          </span>
        </div>
        <div class="tour-body">
          <h3>${esc(tour.title)}</h3>
          <p>${esc(tour.short)}</p>
          ${priceBlock(tour)}
          <div class="tour-actions">
            <button class="btn btn-line" data-tour="${tour.id}">${esc(t('tours.details'))}</button>
            <a class="btn btn-gold" href="${bookHref(tour.id)}" data-book-service="${tour.id}">${esc(t('tours.book'))}</a>
          </div>
        </div>
      </article>`).join('');
    revealGroup($$('#tourGrid .tour-card'));

    /* "See all 14 tours" — the number comes from the data, so adding a tour
       never leaves a stale count on the button. */
    const all = $('#toursAllCta');
    if (all) all.textContent = t('tours.allCta').replace('{n}', DATA.tours.length);
  }

  function renderFilters() {
    const host = $('#filters');
    if (!host) return;
    host.innerHTML = DATA.categories.map((c, i) =>
      `<button type="button" role="tab" data-cat="${c.id}" aria-selected="${i === 0}">${esc(c.label)}</button>`).join('');
  }

  function renderGallery() {
    if (CFG.features.gallery === false) { $('#gallery')?.remove(); return; }
    const host = $('#galGrid');
    if (!host) return;
    host.innerHTML = DATA.gallery.map((g, i) => `
      <button class="gal-item" type="button" data-index="${i}">
        <img src="${img(g.scene)}" alt="${esc(g.caption)}" loading="lazy" width="800" height="600">
        <span class="gal-cap">${esc(g.caption)}</span>
      </button>`).join('');
    revealGroup($$('#galGrid .gal-item'), { size: 'sm', step: 85 });
  }

  /* Filled in by loadReviewStats() once assets/review-stats.json arrives. Null
     until then, which is what makes config.js the fallback rather than a
     placeholder the visitor might see. */
  let liveStats = null;

  /* assets/review-stats.json is written by the scheduled workflow in
     .github/workflows/review-stats.yml. Same origin, roughly 90 bytes, and
     every failure path — offline, 404, malformed, absurd numbers — simply
     leaves the configured figures in place. */
  function loadReviewStats() {
    if (!$('#proofBar')) return;
    fetch('assets/review-stats.json', { cache: 'no-cache' })
      .then(r => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then(d => {
        if (typeof d.rating !== 'number' || typeof d.count !== 'number' || d.count < 1) return;
        const cur = CFG.reviewStats || {};
        if (d.rating === cur.rating && d.count === cur.count) return;
        liveStats = d;
        renderProof();
      })
      .catch(() => { /* configured figures stand */ });
  }

  /* Compact rating bar under the hero. */
  function renderProof() {
    const bar = $('#proofBar');
    if (!bar) return;
    const list = DATA.reviews || [];
    if (CFG.features.reviews === false || !list.length) { bar.remove(); return; }

    /* The rating and the count come from the Google profile, not from the six
       quotes below them — quoting six and claiming six would undersell a
       profile that actually holds far more.

       Three sources, in order: the JSON a scheduled GitHub Action refreshes,
       then the figures typed into config.js, then the quotes themselves. The
       page therefore never waits on a request and never shows nothing. */
    const stats = liveStats || CFG.reviewStats || {};
    const avg = stats.rating || list.reduce((s, r) => s + r.rating, 0) / list.length;
    const count = stats.count || list.length;
    const rounded = Math.round(avg);

    bar.setAttribute('aria-label', t('proof.aria').replace('{avg}', avg.toFixed(1)).replace('{n}', count));
    bar.innerHTML = `
      <span class="proof-score" data-count-to="${avg.toFixed(1)}">${avg.toFixed(1)}</span>
      <span class="proof-stars" aria-hidden="true">${STAR.repeat(rounded)}</span>
      <span class="proof-count"><span data-count-to="${count}" data-count-int="1">${count}</span> ${esc(t('proof.reviews'))}</span>
      ${stats.source ? `<span class="proof-src">${esc(t('proof.on'))} ${esc(stats.source)}</span>` : ''}
      <span class="proof-cta">${esc(t('proof.cta'))}</span>`;
  }

  /* "About" carries a portrait of the driver — the one place on the page where
     a face belongs. Until that photo exists the section runs without a picture
     rather than showing a frame with a landscape shot in it, which is what used
     to be there and told a visitor nothing about who drives them. */
  function renderAbout() {
    const media = $('#aboutMedia');
    const grid = $('#aboutGrid');
    if (!media || !grid) return;
    const b = CFG.business;

    if (!b.driverPhoto) {
      media.remove();
      grid.classList.add('about-grid--nophoto');
      return;
    }

    const caption = b.driverName
      ? `<figcaption class="about-cap"><strong>${esc(b.driverName)}</strong>${
          b.driverRole ? `<span>${esc(b.driverRole)}</span>` : ''}</figcaption>`
      : '';
    media.hidden = false;
    /* No logo badge on top of the portrait. It sat on his shoulder and read as
       a watermark; the mark is already in the header, the hero and the footer,
       and a photograph of a person is the one place it does not belong. */
    media.innerHTML = `
      <div class="about-photo">
        <img src="${esc(img(b.driverPhoto))}" alt="${esc(b.driverName
          ? b.driverName + ' — ' + (b.driverRole || 'driver') + ' on Lombok'
          : 'Your driver on Lombok')}" width="900" height="1100" loading="lazy">
      </div>
      ${caption}`;
  }

  function renderReviews() {
    if (CFG.features.reviews === false) { $('#reviews')?.remove(); return; }
    const host = $('#reviewGrid');
    if (!host) return;
    host.innerHTML = DATA.reviews.map(r => `
      <article class="review-card reveal${r.sample ? ' is-sample' : ''}">
        <div class="stars" aria-label="${r.rating} / 5">${STAR.repeat(r.rating)}</div>
        <blockquote>${esc(r.text)}</blockquote>
        <div class="review-who">
          <strong>${esc(r.name)}</strong>
          <span>${esc(r.origin)}</span>
        </div>
      </article>`).join('');
    revealGroup($$('#reviewGrid .review-card'));
    const more = $('#reviewsMore');
    if (!more) return;
    if (CFG.contact.googleMaps) more.href = CFG.contact.googleMaps;
    else more.hidden = true;
  }

  function renderFaq() {
    if (CFG.features.faq === false) { $('#faq')?.remove(); return; }
    const host = $('#faqList');
    if (!host) return;
    host.innerHTML = DATA.faq.map((f, i) => `
      <div class="faq-item">
        <button class="faq-q" type="button" aria-expanded="false" aria-controls="faq-a-${i}">
          <span>${esc(f.q)}</span>
          <span class="faq-sign" aria-hidden="true"></span>
        </button>
        <div class="faq-a" id="faq-a-${i}" role="region"><p>${esc(f.a)}</p></div>
      </div>`).join('');
  }

  function renderFooter() {
    const year = $('#year');
    if (year) year.textContent = new Date().getFullYear();

    /* Six of the fourteen, and only ones the home page also shows — a footer
       link that scrolls to a grid the tour is not in reads as broken. */
    const footHost = $('#footServices');
    if (footHost) {
      footHost.innerHTML = DATA.tours.filter(x => x.featured).slice(0, 6)
        .map(x => `<a href="${ON_TOURS_PAGE ? '#tour-' + x.id : '#tours'}" data-tour-link="${x.id}">${esc(x.title)}</a>`)
        .join('') +
        `<a href="${ON_TOURS_PAGE ? '#tours' : 'tours.html'}" class="foot-all">${esc(t('tours.allCta').replace('{n}', DATA.tours.length))}</a>`;
    }

    const c = CFG.contact, b = CFG.business;
    const rows = [];
    if (hasWa())   rows.push(`<a href="${waLink('Hello My Lombok Driver! I would like to ask about a trip.')}" target="_blank" rel="noopener">WhatsApp${c.whatsappDisplay ? ' · ' + esc(c.whatsappDisplay) : ''}</a>`);
    if (c.email)   rows.push(`<a href="mailto:${esc(c.email)}">${esc(c.email)}</a>`);
    rows.push(`<a href="${esc(c.instagram)}" target="_blank" rel="noopener">Instagram ${esc(c.instagramHandle)}</a>`);
    /* Facebook stays deliberately quiet: one footer row, no icon, and none of
       the places Instagram appears (gallery panel, booking chips, DM fallback).
       The row only exists once contact.facebook is filled in. */
    if (c.facebook)   rows.push(`<a href="${esc(c.facebook)}" target="_blank" rel="noopener">Facebook${c.facebookName ? ' · ' + esc(c.facebookName) : ''}</a>`);
    if (c.googleMaps) rows.push(`<a href="${esc(c.googleMaps)}" target="_blank" rel="noopener">Google Maps</a>`);
    rows.push(`<address>${esc(b.address)}</address>`);
    const contactHost = $('#footContact');
    if (contactHost) contactHost.innerHTML = rows.join('');

    /* Alternatives under the booking form. WhatsApp is deliberately absent —
       the green button directly above is WhatsApp, and listing it twice makes
       the row read as a menu rather than a fallback. */
    const chips = [];
    chips.push(`<a href="${esc(c.instagram)}" target="_blank" rel="noopener">${contactIcon.ig}${esc(c.instagramHandle)}</a>`);
    if (c.email)      chips.push(`<a href="mailto:${esc(c.email)}">${contactIcon.mail}${esc(c.email)}</a>`);
    if (c.googleMaps) chips.push(`<a href="${esc(c.googleMaps)}" target="_blank" rel="noopener">${contactIcon.map}${esc(b.base)}</a>`);
    const chipHost = $('#directLinks');
    if (chipHost) chipHost.innerHTML = chips.join('');

    const ig = $('#igPanel');
    if (ig) ig.href = c.instagram;
    const handle = $('.ig-handle');
    if (handle) handle.textContent = c.instagramHandle;
  }

  function renderServiceSelect() {
    const sel = $('#f-service');
    if (!sel) return;
    const keep = sel.value;
    sel.innerHTML =
      `<option value="" disabled ${keep ? '' : 'selected'}>${esc(t('book.servicePh'))}</option>` +
      DATA.tours.map(x => `<option value="${x.id}">${esc(x.title)}</option>`).join('') +
      `<option value="custom">${esc(t('book.serviceCustom'))}</option>`;
    if (keep) sel.value = keep;
  }

  function renderMeta() {
    document.title = t(pageTitleKey);
    const url = (CFG.site.url || '').replace(/\/$/, '');
    const path = ON_TOURS_PAGE ? '/tours.html' : '/';
    const canonical = $('#canonical-link');
    if (url) {
      if (canonical) canonical.href = url + path;
      const ogImg = $('#og-image');
      if (ogImg) ogImg.content = url + '/images/og-image.jpg';
      let ogUrl = document.querySelector('meta[property="og:url"]');
      if (!ogUrl) {
        ogUrl = document.createElement('meta');
        ogUrl.setAttribute('property', 'og:url');
        document.head.appendChild(ogUrl);
      }
      ogUrl.content = url + path;
    } else if (canonical) {
      canonical.remove();
    }
  }

  function renderStructuredData() {
    document.getElementById('mld-jsonld')?.remove();
    const url = (CFG.site.url || '').replace(/\/$/, '');
    const data = {
      '@context': 'https://schema.org',
      '@type': 'TravelAgency',
      name: CFG.business.name,
      slogan: CFG.business.claim,
      description: t('meta.description'),
      image: url ? url + '/images/og-image.jpg' : 'images/og-image.jpg',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Jalan Wisata Alam Kerandangan, Senggigi',
        addressLocality: 'Lombok Barat',
        addressRegion: 'Nusa Tenggara Barat',
        addressCountry: 'ID'
      },
      /* Senggigi, the base the driver works out of. Coordinates help Google tie
         the site to the Google Business Profile for local queries. */
      geo: { '@type': 'GeoCoordinates', latitude: -8.4922, longitude: 116.0437 },
      areaServed: [
        { '@type': 'Place', name: 'Lombok' },
        { '@type': 'Place', name: 'Gili Islands' },
        { '@type': 'Place', name: 'Senggigi' },
        { '@type': 'Place', name: 'Kuta Lombok' },
        { '@type': 'Place', name: 'Mataram' },
        { '@type': 'Airport', name: 'Lombok International Airport (LOP)', iataCode: 'LOP' }
      ],
      openingHours: 'Mo-Su 00:00-23:59',
      sameAs: [CFG.contact.instagram, CFG.contact.facebook, CFG.contact.googleMaps].filter(Boolean),
      makesOffer: DATA.tours.map(x => ({
        '@type': 'Offer',
        name: x.title,
        description: x.short,
        ...(url ? { url: url + '/#tour-' + x.id } : {}),
        itemOffered: {
          '@type': 'Service',
          name: x.title,
          serviceType: x.cats.includes('transfers') ? 'Airport transfer' : 'Guided day tour',
          areaServed: { '@type': 'Place', name: 'Lombok, Indonesia' }
        },
        ...(x.unit !== 'ask'
          ? { price: x.price, priceCurrency: 'IDR',
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: x.price, priceCurrency: 'IDR',
                referenceQuantity: {
                  '@type': 'QuantitativeValue', value: 1,
                  unitText: x.unit === 'person' ? 'per person' : 'per vehicle'
                }
              } }
          : { availability: 'https://schema.org/InStock' })
      }))
    };
    if (url) data.url = url + '/';
    if (hasWa()) data.telephone = '+' + waDigits();
    if (CFG.contact.email) data.email = CFG.contact.email;

    /* The FAQ is the one part of this page that can win a rich result on its
       own, so it gets its own graph node. Google only honours it when the same
       questions and answers are visible on the page — they are, in #faq. */
    const graph = [data];
    /* Only where the questions are actually on the page — Google discards
       FAQPage markup it cannot see, and tours.html has no FAQ section. */
    if (!ON_TOURS_PAGE && CFG.features.faq !== false && (DATA.faq || []).length) {
      graph.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        ...(url ? { '@id': url + '/#faq' } : {}),
        mainEntity: DATA.faq.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a }
        }))
      });
    }

    /* Still deliberately NOT emitted: aggregateRating / Review markup — even
       though the quotes are now genuine Google reviews. Google does not show
       review rich results for self-serving reviews, meaning a business
       publishing reviews about itself on its own site. Marking them up buys no
       stars in search and only invites a structured-data warning. The stars
       that do count already live on the Google Business Profile. */

    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.id = 'mld-jsonld';
    s.textContent = JSON.stringify(graph.length > 1 ? graph : data);
    document.head.appendChild(s);
  }

  /* --------------------------------------------------- find your match */

  /* Four questions, one tour. State is a plain object of answers and an index
     — no history entries, no URL, nothing to restore. Somebody who reloads
     the page starts over, which is fine for a twenty-second quiz and avoids a
     back button that appears to do two different things.                    */
  const MATCH = { step: 0, answers: {} };

  const matchQuestions = () => (DATA.matcher && DATA.matcher.questions) || [];

  /* How well one tour answers everything picked so far.

     `pace` is scored on a scale rather than as a hit or a miss: somebody who
     asked for an easy day and gets offered a medium one has been served
     reasonably, while an active one has not. Without that, three tours often
     tied on the exact same integer and the "best" match was decided by
     nothing more than array order. */
  const PACE_ORDER = ['easy', 'medium', 'active'];

  function scoreTour(tour, answers) {
    const m = tour.match;
    if (!m) return 0;
    let score = 0;
    matchQuestions().forEach(q => {
      const a = answers[q.id];
      if (!a) return;
      const w = q.weight || 1;
      if (q.id === 'pace') {
        const d = Math.abs(PACE_ORDER.indexOf(m.pace) - PACE_ORDER.indexOf(a));
        score += d === 0 ? w : d === 1 ? w * 0.4 : 0;
        return;
      }
      const field = m[q.id];
      const hit = Array.isArray(field) ? field.includes(a) : field === a;
      if (hit) score += w;
    });
    return score;
  }

  function rankTours(answers) {
    return DATA.tours
      .map(x => ({ tour: x, score: scoreTour(x, answers) }))
      .sort((a, b) => b.score - a.score)
      .filter(r => r.score > 0);
  }

  /* The answers spelled back, so the result is explainable rather than
     magic. A recommendation nobody can check is a recommendation nobody
     trusts. */
  function answerChips(answers) {
    return matchQuestions()
      .map(q => {
        const opt = (q.options || []).find(o => o.value === answers[q.id]);
        return opt ? `<span class="match-chip">${esc(opt.label)}</span>` : '';
      })
      .join('');
  }

  function renderMatch() {
    const host = $('#matchBox');
    if (!host) return;
    const qs = matchQuestions();
    if (!qs.length) { $('#match')?.remove(); return; }

    /* ---- questions ---- */
    if (MATCH.step < qs.length) {
      const q = qs[MATCH.step];
      host.innerHTML = `
        <div class="match-step" role="group" aria-labelledby="matchQ">
          <div class="match-prog" aria-hidden="true">
            ${qs.map((_, i) => `<span class="${i <= MATCH.step ? 'on' : ''}"></span>`).join('')}
          </div>
          <p class="match-count">${esc(t('match.step').replace('{n}', MATCH.step + 1).replace('{total}', qs.length))}</p>
          <h3 id="matchQ">${esc(q.q)}</h3>
          <div class="match-opts">
            ${(q.options || []).map(o => `
              <button type="button" class="match-opt${MATCH.answers[q.id] === o.value ? ' picked' : ''}"
                      data-answer="${esc(o.value)}">
                <span class="match-opt-l">${esc(o.label)}</span>
                ${o.hint ? `<span class="match-opt-h">${esc(o.hint)}</span>` : ''}
              </button>`).join('')}
          </div>
          ${MATCH.step > 0 ? `<button type="button" class="match-back" data-match-back>${esc(t('match.back'))}</button>` : ''}
        </div>`;
      host.querySelector('.match-opt')?.focus({ preventScroll: true });
      return;
    }

    /* ---- result ---- */
    const ranked = rankTours(MATCH.answers);
    const best = ranked[0];
    if (!best) {                                  /* cannot happen with the
                                                     current data, but a quiz
                                                     that renders nothing is a
                                                     dead end, so: */
      MATCH.step = 0; MATCH.answers = {};
      renderMatch();
      return;
    }
    const alts = ranked.slice(1, 3).map(r => r.tour);
    const x = best.tour;

    host.innerHTML = `
      <div class="match-result">
        <p class="match-count">${esc(t('match.result'))}</p>
        <article class="match-card">
          <div class="match-media">
            <img src="${img(x.scene)}" alt="${esc(x.title)}" width="800" height="500" loading="lazy">
          </div>
          <div class="match-body">
            <h3>${esc(x.title)}</h3>
            <p>${esc(x.short)}</p>
            ${priceBlock(x)}
            <div class="tour-actions">
              <button class="btn btn-line" data-tour="${x.id}">${esc(t('match.details'))}</button>
              <a class="btn btn-gold" href="${bookHref(x.id)}" data-book-service="${x.id}">${esc(t('match.book'))}</a>
            </div>
          </div>
        </article>

        <div class="match-why">
          <span class="match-why-l">${esc(t('match.because'))}</span>
          ${answerChips(MATCH.answers)}
        </div>

        ${alts.length ? `
          <div class="match-alts">
            <p class="match-alts-l">${esc(t('match.alts'))}</p>
            ${alts.map(a => `
              <button type="button" class="match-alt" data-tour="${a.id}">
                <img src="${img(a.scene)}" alt="" width="120" height="80" loading="lazy">
                <span class="match-alt-t">${esc(a.title)}</span>
                <span class="match-alt-p">${a.unit === 'ask'
                  ? esc(t('tours.onRequest'))
                  : esc(idr(a.price))}</span>
              </button>`).join('')}
          </div>` : ''}

        <div class="match-foot">
          <button type="button" class="match-back" data-match-restart>${esc(t('match.again'))}</button>
          <a class="link-gold" href="${ON_TOURS_PAGE ? '#tours' : 'tours.html'}">${esc(t('match.allCta'))}</a>
        </div>
      </div>`;
  }

  function initMatch() {
    const host = $('#matchBox');
    if (!host) return;
    host.addEventListener('click', e => {
      const opt = e.target.closest('[data-answer]');
      if (opt) {
        const q = matchQuestions()[MATCH.step];
        MATCH.answers[q.id] = opt.dataset.answer;
        MATCH.step++;
        renderMatch();
        return;
      }
      if (e.target.closest('[data-match-back]'))    { MATCH.step = Math.max(0, MATCH.step - 1); renderMatch(); return; }
      if (e.target.closest('[data-match-restart]')) { MATCH.step = 0; MATCH.answers = {}; renderMatch(); return; }
      const details = e.target.closest('[data-tour]');
      if (details) openTourModal(details.dataset.tour);
    });
    renderMatch();
  }

  /* --------------------------------------------------------------- modal */

  let lastFocus = null;

  function openTourModal(id) {
    const x = DATA.tours.find(o => o.id === id);
    if (!x) return;
    lastFocus = document.activeElement;

    const priceLine = x.unit === 'ask'
      ? t('tours.onRequest')
      : `${CFG.pricing.showFrom ? t('tours.from') + ' ' : ''}${idr(x.price)}`;
    const unitLine = x.unit === 'ask' ? '' : (x.unit === 'person' ? t('tours.perPerson') : t('tours.perCar'));
    const e = x.unit === 'ask' ? '' : eur(x.price);

    $('#modalBody').innerHTML = `
      <div class="modal-hero">
        <img src="${img(x.scene)}" alt="${esc(x.title)}" width="1200" height="675">
        <h3>${esc(x.title)}</h3>
      </div>
      <div class="modal-inner">
        <div class="modal-meta">
          <div><span class="k">${esc(t('modal.duration'))}</span><span class="v">${esc(x.duration)}</span></div>
          <div><span class="k">${esc(t('modal.price'))}</span><span class="v">${esc(priceLine)}</span>
            <span class="k" style="text-transform:none;letter-spacing:0">${esc([unitLine, e].filter(Boolean).join(' · '))}</span></div>
        </div>
        <p>${esc(x.long)}</p>

        <h4>${esc(t('modal.highlights'))}</h4>
        <ul class="modal-list">${x.highlights.map(h => `<li>${esc(h)}</li>`).join('')}</ul>

        <h4>${esc(t('modal.includes'))}</h4>
        <ul class="modal-list">${x.includes.map(h => `<li>${esc(h)}</li>`).join('')}</ul>

        ${x.note ? `<p class="modal-note"><strong>${esc(t('modal.note'))}:</strong> ${esc(x.note)}</p>` : ''}

        <div class="modal-cta">
          <a class="btn btn-gold btn-block" href="#book" data-book-service="${x.id}" data-close>${esc(t('modal.book'))}</a>
        </div>
      </div>`;

    const m = $('#tourModal');
    m.hidden = false;
    document.body.classList.add('no-scroll');
    m.querySelector('.modal-x').focus();

    /* Give the open tour its own address. It makes a tour shareable, lets the
       back button close it, and — the reason it matters here — the #tour-<id>
       URLs published in the structured data actually resolve to something. */
    document.title = x.title + ' — ' + CFG.business.name;
    if (location.hash !== '#tour-' + id) history.pushState({ tour: id }, '', '#tour-' + id);
  }

  function closeModal(fromPopState) {
    $('#tourModal').hidden = true;
    document.body.classList.remove('no-scroll');
    document.title = t(pageTitleKey);
    if (!fromPopState && location.hash.startsWith('#tour-')) history.pushState({}, '', location.pathname + location.search);
    lastFocus?.focus();
  }

  /* Open the tour named in the address bar, on first load and on back/forward. */
  function syncTourFromHash() {
    if (!$('#tourModal')) return;
    const id = location.hash.startsWith('#tour-') ? location.hash.slice(6) : null;
    const open = !$('#tourModal').hidden;
    if (id && DATA.tours.some(x => x.id === id)) openTourModal(id);
    else if (open) closeModal(true);
  }

  /* ------------------------------------------------------------ lightbox */

  let lbIndex = 0;

  function openLightbox(i) {
    lbIndex = (i + DATA.gallery.length) % DATA.gallery.length;
    const g = DATA.gallery[lbIndex];
    $("#lbImg").src = img(g.scene);
    $('#lbImg').alt = g.caption;
    $('#lbCap').textContent = g.caption;
    $('#lightbox').hidden = false;
    document.body.classList.add('no-scroll');
    $('.lb-x').focus();
  }
  const closeLightbox = () => {
    $('#lightbox').hidden = true;
    document.body.classList.remove('no-scroll');
  };

  /* ------------------------------------------------------------- booking */

  function serviceLabel(value) {
    if (!value || value === 'custom') return 'Custom itinerary / advice';
    const x = DATA.tours.find(o => o.id === value);
    return x ? x.title : value;
  }

  /* Read by element id — `form.name` and `form.method` would collide with
     properties that already exist on HTMLFormElement. */
  function formValues() {
    return {
      name:    $('#f-name').value.trim(),
      service: $('#f-service').value,
      date:    $('#f-date').value,
      guests:  $('#f-guests').value || '1',
      hotel:   $('#f-hotel').value.trim(),
      flight:  $('#f-flight').value.trim(),
      extra:   $('#f-message').value.trim()
    };
  }

  function composeMessage() {
    const v = formValues();
    return window.MLD_MESSAGE_TEMPLATE({
      name:    v.name    || '—',
      service: serviceLabel(v.service),
      date:    v.date    || '—',
      guests:  v.guests,
      hotel:   v.hotel,
      flight:  v.flight,
      extra:   v.extra
    });
  }

  function initBooking() {
    const form = $('#bookForm');
    const err  = $('#formError');
    if (!form) return;                      /* tours.html has no booking form */

    $('#f-date').min = new Date().toISOString().slice(0, 10);

    /* Arriving from tours.html, where "Book this" cannot reach this form and
       links here with ?service=<id> instead. The parameter is dropped from
       the address afterwards so a reload or a shared link does not carry a
       stale preselection around. */
    const wanted = new URLSearchParams(location.search).get('service');
    if (wanted) {
      const sel = $('#f-service');
      if ([...sel.options].some(o => o.value === wanted)) sel.value = wanted;
      history.replaceState({}, '', location.pathname + location.hash);
    }

    /* The car seats four. Rather than capping the field — which would just
       turn a large group away — the limit is stated the moment they exceed
       it, together with the way around it. */
    const guests = $('#f-guests');
    const gHint  = $('#guestsHint');
    const syncGuestsHint = () => {
      gHint.hidden = !(parseInt(guests.value, 10) > 4);
    };
    guests.addEventListener('input', syncGuestsHint);
    syncGuestsHint();

    form.addEventListener('input', () => { err.hidden = true; });

    form.addEventListener('submit', async e => {
      e.preventDefault();
      const v = formValues();
      if (!v.name || !v.service || !v.date) {
        err.textContent = t('book.required');
        err.hidden = false;
        (!v.name ? $('#f-name') : !v.service ? $('#f-service') : $('#f-date')).focus();
        return;
      }
      const msg = composeMessage();
      if (!hasWa()) {
        /* No number configured yet: put the message on the clipboard so it can
           be pasted straight into the Instagram conversation that opens. */
        try { await navigator.clipboard.writeText(msg); } catch (_) { /* ignore */ }
      }
      window.open(waLink(msg), '_blank', 'noopener');
    });

    /* "Book this" buttons preselect the service */
    document.addEventListener('click', e => {
      const trigger = e.target.closest('[data-book-service]');
      if (!trigger) return;
      const val = trigger.dataset.bookService;
      const sel = $('#f-service');
      if ([...sel.options].some(o => o.value === val)) sel.value = val;
      setTimeout(() => $('#f-name').focus({ preventScroll: true }), 620);
    });
  }

  function applyWaState() {
    const hint = $('#waHint');
    const label = $('#submitBtn span');
    const float = $('#waFloat');
    if (hasWa()) {
      if (hint) hint.hidden = true;
      if (label) label.textContent = t('book.submit');
      if (float) {
        float.href = waLink('Hello My Lombok Driver! I would like to ask about a trip.');
        float.target = '_blank';
        float.rel = 'noopener';
      }
    } else {
      if (hint) hint.hidden = false;
      if (label) label.textContent = t('book.submitIg');
      if (float) {
        /* No form on tours.html to fall back to, so the button goes to the
           page that has one. */
        float.href = ON_TOURS_PAGE ? 'index.html#book' : '#book';
        float.removeAttribute('target');
      }
      console.warn('[My Lombok Driver] No WhatsApp number in js/config.js — booking buttons fall back to Instagram.');
    }
  }

  /* ----------------------------------------------------------- behaviour */

  function initHeader() {
    const head = $('#siteHead');
    const nav  = $('#nav');
    const burger = $('#burger');

    const book = $('#book');

    const float = $('#waFloat');

    const onScroll = () => {
      head.classList.toggle('scrolled', window.scrollY > 40);
      /* The floating button is a shortcut to the booking form, so it only gets
         in the way once the form itself is on screen — on a phone it sat right
         on top of the submit button. */
      const bookVisible = book
        ? (() => { const r = book.getBoundingClientRect();
                   return r.top < window.innerHeight && r.bottom > 0; })()
        : false;
      float?.classList.toggle('show', window.scrollY > 600 && !bookVisible);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    burger.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', e => {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });

    /* Active section in the nav. Only same-page anchors take part: on
       tours.html the nav points back at "index.html#tours" and friends, and
       feeding that to querySelector throws a SyntaxError that would take the
       rest of this function — burger menu included — down with it. */
    const links = $$('#nav a');
    const map = new Map();
    links.forEach(a => {
      const href = a.getAttribute('href') || '';
      if (!href.startsWith('#') || href.length < 2) return;
      const sec = document.querySelector(href);
      if (sec) map.set(sec, a);
    });
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        const a = map.get(en.target);
        if (!a) return;
        if (en.isIntersecting) {
          links.forEach(l => l.classList.remove('active'));
          a.classList.add('active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    map.forEach((_, sec) => io.observe(sec));
  }

  /* ------------------------------------------------------------ motion */

  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)');
  let revealObserver = null;

  /* One observer for the whole page, reusable: sections rendered later — the
     tour grid after a filter change — call this again and their new elements
     join in. Unobserving on first hit is what keeps rule 5, animate once. */
  function observeReveals(root = document) {
    if (REDUCED.matches) { $$('.reveal', root).forEach(el => el.classList.add('in')); return; }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver((entries, obs) => {
        /* Stagger is decided HERE, not when the markup is rendered.

           It used to be baked in: card seven carried --delay:660ms for its
           whole life, so if it happened to come into view on its own it sat
           invisible for two thirds of a second first, while card one in the
           same grid started instantly. Same section, visibly different
           behaviour — which is exactly how it looked.

           Now the delay comes from what arrives together in this one callback:
           a group entering at once cascades in reading order, an element
           arriving alone starts immediately. And anything already scrolled
           past gets no delay at all — it is being caught up with, not
           introduced. */
        const hits = entries.filter(e => e.isIntersecting);
        if (!hits.length) return;
        hits.sort((a, b) =>
          (a.boundingClientRect.top - b.boundingClientRect.top) ||
          (a.boundingClientRect.left - b.boundingClientRect.left));
        hits.forEach((en, i) => {
          const passed = en.boundingClientRect.bottom < 0;
          en.target.style.setProperty('--delay', passed ? '0ms' : Math.min(i, 5) * 90 + 'ms');
          en.target.classList.add('in');
          obs.unobserve(en.target);
        });
        /* Two margins, two jobs.

           Bottom, 0: an element starts exactly as its top edge crosses the
           bottom of the screen — the first instant it is visible at all. This
           has been wrong in both directions. Shrinking the root (-6% at first)
           meant an element was already sitting on screen before it began, so
           you watched it appear. Growing it (+35% later) meant it had finished
           before it came into view, so there was nothing left to see. Zero is
           the one value where the movement happens while it is being watched.

           Top, effectively unbounded: anything at or above the viewport counts
           as intersecting. Without it a flick scroll leaves elements invisible
           forever — the observer only reports *changes*, and an element
           teleported from below the root to above it between two frames never
           registers at all. Whole sections stayed blank in testing. */
      }, { rootMargin: '100000px 0px 0px 0px', threshold: 0 });
    }
    $$('.reveal:not(.in)', root).forEach(el => revealObserver.observe(el));
  }

  /* A lazy image arrives whenever the network delivers it, which is long after
     its card faded in — it lands with a snap that no reveal system catches.
     Sixteen of the page's images were still loading when their container
     appeared. Cached images are already complete on the first pass and skip
     straight to visible, so nothing flashes on a repeat visit. */
  function initImageFade(root = document) {
    $$('img[loading="lazy"]', root).forEach(im => {
      if (im.classList.contains('fade-img')) return;
      im.classList.add('fade-img');
      if (im.complete && im.naturalWidth) { im.classList.add('img-in'); return; }
      const done = () => im.classList.add('img-in');
      im.addEventListener('load', done, { once: true });
      im.addEventListener('error', done, { once: true });
    });
  }

  /* Marks a freshly rendered group as revealable. No delays are assigned here
     — the observer works those out from what actually arrives together. */
  function revealGroup(els, opts = {}) {
    Array.from(els).forEach(el =>
      el.classList.add('reveal', ...(opts.size ? ['reveal-' + opts.size] : [])));
    initImageFade();
    observeReveals();
  }

  /* The rating counts up the first time the bar is seen. It is the one number
     on the page worth drawing an eye to, and counting is cheap: one rAF loop,
     under a second, no layout. */
  function countUp(el) {
    const to = parseFloat(el.dataset.countTo);
    if (!isFinite(to)) return;
    const int = el.dataset.countInt === '1';
    const fmt = v => (int ? String(Math.round(v)) : v.toFixed(1));
    if (REDUCED.matches) { el.textContent = fmt(to); return; }
    const dur = 1100;
    const t0 = performance.now();
    const tick = now => {
      const p = Math.min(1, (now - t0) / dur);
      el.textContent = fmt(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(tick);
    };
    el.textContent = fmt(0);
    requestAnimationFrame(tick);
  }

  /* Both figures in the rating block count, and they start together with the
     stars building next to them — the three read as one gesture rather than
     three separate effects. */
  function initCountUp() {
    const targets = $$('[data-count-to]');
    if (!targets.length) return;
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        countUp(en.target);
        obs.unobserve(en.target);
      });
    }, { threshold: 0.5 });
    targets.forEach(el => io.observe(el));
  }

  /* Section furniture; the grids mark their own cards when they render.

     The rating bar, the filter row, the "read on Google" link and the footer
     used to be missing entirely and simply appeared with the page, which is
     exactly the popping that was left over after the curve was fixed. */
  function markReveal() {
    $$('.sec-head, .book-form').forEach(el => el.classList.add('reveal', 'reveal-lg'));
    $$('.custom-panel, .ig-panel, .direct, .proof, .marquee, .sec-foot, .tour-capacity, .tours-more, .match-box, .foot-brand, .foot-col')
      .forEach(el => el.classList.add('reveal'));
    $$('.faq-item').forEach(el => el.classList.add('reveal', 'reveal-sm'));

    /* Side by side on a wide screen, so they settle in from their own sides. */
    $('.about-media')?.classList.add('reveal', 'reveal-lg', 'reveal-from-left');
    $('.about-copy')?.classList.add('reveal', 'reveal-lg', 'reveal-from-right');

    const filters = $('#filters');
    if (filters) {
      $$('button', filters).forEach(b => b.classList.add('reveal', 'reveal-sm'));
    }
  }

  function initDelegates() {
    /* tour filters — tours.html only */
    $('#filters')?.addEventListener('click', e => {
      const b = e.target.closest('button');
      if (!b) return;
      $$('#filters button').forEach(x => x.setAttribute('aria-selected', String(x === b)));
      renderTours(b.dataset.cat);
    });

    /* details buttons */
    $('#tourGrid')?.addEventListener('click', e => {
      const b = e.target.closest('[data-tour]');
      if (b) openTourModal(b.dataset.tour);
    });

    /* footer service links open the matching tour */
    $('#footServices')?.addEventListener('click', e => {
      const a = e.target.closest('[data-tour-link]');
      if (a) setTimeout(() => openTourModal(a.dataset.tourLink), 500);
    });

    /* modal */
    $('#tourModal')?.addEventListener('click', e => { if (e.target.closest('[data-close]')) closeModal(); });

    /* gallery */
    $('#galGrid')?.addEventListener('click', e => {
      const b = e.target.closest('[data-index]');
      if (b) openLightbox(Number(b.dataset.index));
    });
    const lb = $('#lightbox');
    lb?.addEventListener('click', e => {
      if (e.target.closest('[data-lb-close]') || e.target === lb) closeLightbox();
      if (e.target.closest('[data-lb-prev]')) openLightbox(lbIndex - 1);
      if (e.target.closest('[data-lb-next]')) openLightbox(lbIndex + 1);
    });

    /* FAQ accordion */
    $('#faqList')?.addEventListener('click', e => {
      const q = e.target.closest('.faq-q');
      if (!q) return;
      const item = q.parentElement;
      const panel = item.querySelector('.faq-a');
      const open = item.classList.toggle('open');
      q.setAttribute('aria-expanded', String(open));
      panel.style.height = open ? panel.scrollHeight + 'px' : '0px';
    });

    /* keyboard */
    document.addEventListener('keydown', e => {
      const lbOpen    = lb && !lb.hidden;
      const modalOpen = $('#tourModal') && !$('#tourModal').hidden;
      if (e.key === 'Escape') {
        if (lbOpen) closeLightbox();
        else if (modalOpen) closeModal();
      }
      if (lbOpen) {
        if (e.key === 'ArrowLeft')  openLightbox(lbIndex - 1);
        if (e.key === 'ArrowRight') openLightbox(lbIndex + 1);
      }
    });
  }

  /* ------------------------------------------------------------ lifecycle */

  function renderAll() {
    applyText();
    renderMeta();
    renderMarquee();
    renderProof();
    renderFilters();
    renderTours($('#filters button[aria-selected="true"]')?.dataset.cat || 'all');
    renderValues();
    renderGallery();
    renderAbout();
    renderReviews();
    renderFaq();
    renderFooter();
    renderServiceSelect();
    renderStructuredData();
    applyWaState();
    markReveal();
    initImageFade();
    observeReveals();
    initCountUp();
  }

  /* A quiet note for whoever maintains the site, never for a visitor. Several
     tours currently borrow a photo from another tour because no picture of
     their own exists yet; content.js records what each one still needs, and
     this prints that list where the owner will actually trip over it. */
  function reportPhotoTodos() {
    const open = DATA.tours.filter(x => x.photoTodo);
    if (!open.length || !/localhost|127\.0\.0\.1/.test(location.hostname)) return;
    console.groupCollapsed(`[My Lombok Driver] ${open.length} tours are still using a stand-in photo`);
    open.forEach(x => console.info(`${x.id} (${x.scene}) — ${x.photoTodo}`));
    console.groupEnd();
  }

  function init() {
    renderAll();
    initDelegates();
    initMatch();
    initHeader();
    initBooking();
    window.addEventListener('popstate', syncTourFromHash);
    syncTourFromHash();
    loadReviewStats();
    reportPhotoTodos();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

# Fotos / Photos

Hier liegen alle Bilder der Website als WebP. Zwei davon sind echte Aufnahmen von
My Lombok Driver, die übrigen acht sind lizenzfreie Lombok-Fotos von Pexels —
wer welches gemacht hat, steht in `../CREDITS.md`.

*This folder holds every photo on the site. Two are My Lombok Driver's own, the
other eight are free Pexels photos of Lombok — see `../CREDITS.md`.*

## Ein Bild austauschen

1. Neues Foto hier ablegen, z. B. `tiu-kelep.webp`
2. In `../js/content.js` bei der passenden Tour `scene:` auf den Dateinamen setzen:
   `scene: 'tiu-kelep.webp'`
3. Die `caption` bzw. `title` daneben anpassen, damit Alt-Text und Bildunterschrift
   noch stimmen — die sind gleichzeitig der Text für Screenreader und für Google.

Ein Name **ohne** Schrägstrich wird in `images/` gesucht, ein Name **mit**
Schrägstrich (`assets/foo.svg`) wird direkt als Pfad verwendet.

Hero-Bild und das grosse Bild im „Über uns"-Block stehen nicht in `content.js`,
sondern direkt in `../index.html`.

## Welches Bild wo erscheint

| Datei | Verwendung |
|---|---|
| `hero.webp` | Startbild ganz oben, und die grosse Kachel in der Galerie |
| `kuta-coast.webp` | Tour „Airport Transfer" |
| `gili-shallows.webp` | Tour „Gili Islands Snorkelling Trip" — **eigenes Foto** |
| `gili-boat.webp` | Tour „Lombok – Gili Fast Boat" — **eigenes Foto** |
| `waterfall.webp` | Tour „Sendang Gile & Tiu Kelep Waterfalls" |
| `rinjani.webp` | Tour „Sembalun Valley & Rinjani Viewpoints" |
| `selong-belanak.webp` | Tour „Sasak Culture & the South Coast" |
| `tanjung-bloam.webp` | Tour „Pink Beach & the Wild South East" |
| `tanjung-aan.webp` | Tour „Gili Trawangan Day Trip" |
| `waterfall-tall.webp` | grosses Bild im Block „Über uns" |
| `og-image.jpg` | Vorschaubild beim Teilen in WhatsApp, Facebook, Instagram |

Alle Bilder tauchen zusätzlich in der Galerie auf (Reihenfolge in `content.js`
unter `gallery:`).

## Empfohlene Grössen

| Verwendung | Seitenverhältnis | Breite |
|---|---|---|
| Hero | 16:9 | 2200 px |
| Tour-Karte und Galerie | 16:10 | 1600 px |
| „Über uns" | 4:5 | 1000 px |
| `og-image.jpg` | 1200 × 630 | exakt, als JPEG |

## Vor dem Hochladen

- **Als WebP speichern und komprimieren.** Ziel: unter 250 KB pro Bild,
  das Hero-Bild unter 400 KB. [squoosh.app](https://squoosh.app) im Browser
  reicht dafür. Grosse Dateien machen die Seite auf indonesischem Mobilfunk
  unbenutzbar langsam — und genau dort schauen die meisten Gäste drauf.
- **Dateinamen** klein, ohne Leerzeichen und Umlaute: `gili-meno-turtle.webp`
- **Personen:** Gäste, die klar erkennbar sind, sollten dem Foto auf der Website
  zugestimmt haben. Bei Bildern mit Kindern gilt das besonders.

## Die beiden eigenen Fotos ersetzen

`gili-shallows.webp` und `gili-boat.webp` stammen aus Screenshots des
Instagram-Kanals und sind deshalb nur 1176 px breit. Für die Tour-Karten reicht
das, aber sobald die Originaldateien vorliegen, sollten sie ersetzt werden —
gleicher Dateiname, dann muss nichts weiter geändert werden.

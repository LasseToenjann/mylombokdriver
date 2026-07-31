# Fotos / Photos

Hier liegen alle Bilder der Website als WebP. Bis auf das Fahrerporträt sind es
lizenzfreie Lombok-Fotos von Pexels — wer welches gemacht hat, steht in
`../CREDITS.md`.

*This folder holds every photo on the site. Apart from the driver's portrait
they are free Pexels photos of Lombok — see `../CREDITS.md`.*

## Ein Bild austauschen

1. Neues Foto hier ablegen, z. B. `tiu-kelep.webp`
2. In `../js/content.js` bei der passenden Tour `scene:` auf den Dateinamen setzen:
   `scene: 'tiu-kelep.webp'`
3. Den `title` daneben prüfen — er ist gleichzeitig der Alt-Text des Bildes, also
   das, was Screenreader vorlesen und was Google liest.

Ein Name **ohne** Schrägstrich wird in `images/` gesucht, ein Name **mit**
Schrägstrich (`assets/foo.svg`) wird direkt als Pfad verwendet.

Das Startbild steht nicht in `content.js`, sondern direkt in `../index.html`.

## Welches Bild wo erscheint

| Datei | Verwendung |
|---|---|
| `hero.webp` | Startbild ganz oben |
| `og-image.jpg` | Vorschaubild beim Teilen in WhatsApp, Facebook, Instagram |
| `driver.webp` | Porträt im Block „Über uns" |
| `airport-arrival.webp` | Airport Transfer |
| `gili-anchorage.webp` | Transfer to the Gili Islands |
| `waterfall.webp` | Sendang Gile & Tiu Kelep Waterfalls |
| `jungle-waterfall.webp` | Benang Stokel & Benang Kelambu Waterfalls |
| `tetebatu-valley.webp` | Tetebatu — Rice Fields & Countryside |
| `rinjani-trail.webp` | Sembalun Valley & Rinjani Viewpoints |
| `selong-belanak.webp` | Sasak Culture & the South Coast |
| `coastal-town.webp` | City & Culture, West Lombok |
| `gili-turtle.webp` | Gili Islands Snorkelling Trip |
| `reef-guide.webp` | Gili Nanggu, Sudak & Kedis |
| `pink-sand.webp` | Pink Beach & Gili Petelu |
| `harbour-jetty.webp` | Hidden Paradise — the North-East Islands |
| `gili-meno-swing.webp` | Gili Trawangan Day Trip |

**Jede Tour hat ihr eigenes Bild** — keine Datei wird zweimal verwendet.
`kuta-coast.webp` ist mit der Drei-Tages-Tour weggefallen und gelöscht.

## Empfohlene Grössen

| Verwendung | Seitenverhältnis | Breite |
|---|---|---|
| Hero | 16:9 | 2200 px |
| Tour-Karte | 16:10 oder 3:2 | 1400–1600 px |
| „Über uns" | 4:5 | 1000 px |
| `og-image.jpg` | 1200 × 630 | exakt, als JPEG |

Die Karten schneiden mit `object-fit: cover` zu, exakte Masse sind also nicht
nötig. `jungle-waterfall.webp` ist bewusst Hochformat, weil ein Wasserfall von
oben nach unten läuft — der mittige Zuschnitt der Karte trifft ihn trotzdem.

## Vor dem Hochladen

- **Als WebP speichern und komprimieren.** Ziel: unter 300 KB pro Bild,
  das Hero-Bild unter 400 KB. [squoosh.app](https://squoosh.app) im Browser
  reicht dafür. Grosse Dateien machen die Seite auf indonesischem Mobilfunk
  unbenutzbar langsam — und genau dort schauen die meisten Gäste drauf.

  Wer es lieber im Terminal macht:

  ```python
  from PIL import Image
  im = Image.open('quelle.jpg').convert('RGB')
  im = im.resize((1600, round(im.size[1] * 1600 / im.size[0])), Image.LANCZOS)
  im.save('images/ziel.webp', 'WEBP', quality=82, method=6)
  ```

- **Dateinamen** klein, ohne Leerzeichen und Umlaute: `gili-meno-turtle.webp`
- **Personen:** Gäste, die klar erkennbar sind, sollten dem Foto auf der Website
  zugestimmt haben. Bei Bildern mit Kindern gilt das besonders.

## Nicht eingebunden

`gili-shallows.webp` und `gili-boat.webp` sind die einzigen **eigenen**
Aufnahmen von My Lombok Driver, aus Instagram-Screenshots gewonnen und deshalb
nur 1176 px breit. Sie lagen in der Galerie, die es nicht mehr gibt, und sind
aktuell nirgends eingebunden. Sie bleiben hier liegen, weil sie das einzige
Originalmaterial sind — sobald die Dateien in voller Auflösung vorliegen,
gehören sie auf die passende Gili-Tour statt eines Stockfotos.

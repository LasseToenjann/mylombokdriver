# My Lombok Driver — Website

Website für **[@mylombokdriver](https://www.instagram.com/mylombokdriver)** — privater Fahrer,
Flughafentransfers, Tagestouren, Schnorcheltouren und Speedboot-Transfers auf Lombok.

Statische Website: HTML, CSS, Vanilla-JavaScript. **Kein Build-Schritt, keine Abhängigkeiten.**
Inhalte werden aus drei Daten-Dateien gerendert — Texte und Preise ändert man dort, nicht im Markup.

Die Website ist **komplett auf Englisch**, mit einem Umschalter auf Deutsch.

---

## ⚠️ Vor dem Livegang zwingend erledigen

Stand der Dinge — nur die offenen Punkte müssen noch erledigt werden:

| # | Was | Wo | Status |
|---|-----|-----|--------|
| 1 | **WhatsApp-Nummer** eintragen | `js/config.js` → `contact.whatsapp` | ✅ erledigt |
| 2 | **Echte Fotos** einsetzen | `images/` | ✅ erledigt (2 eigene, 8 von Pexels) |
| 3 | **Live-URL** eintragen | `js/config.js`, `sitemap.xml`, `robots.txt` | ✅ erledigt |
| 4 | **Preise** vom Fahrer bestätigen lassen | `js/content.js` → `price:` bei jeder Tour | ❌ offen |
| 5 | **Beispiel-Bewertungen ersetzen** | `js/content.js` → `reviews:` | ❌ offen |
| 6 | **Name des Fahrers / Gründungsjahr** | `js/config.js` → `business.driverName`, `since` | ❌ offen |
| 7 | **Facebook-Seite** verlinken (optional) | `js/config.js` → `contact.facebook` | ❌ offen |

Punkt 4 und 5 sind die beiden echten Blocker: solange sie offen sind, stehen
unbestätigte Preise und erfundene Bewertungen auf der Seite.

Alle Stellen mit offener Aufgabe sind im Code mit `### TODO ###` markiert:

```bash
grep -rn "### TODO ###" js/
```

---

## 1. Kontaktdaten eintragen

Alles Geschäftliche steht in **`js/config.js`**:

```js
contact: {
  whatsapp: '6281234567890',        // international, nur Ziffern, ohne "+"
  whatsappDisplay: '+62 812 3456 7890',
  email: 'info@mylombokdriver.com',
  ...
}
```

**Wichtig zur Nummer:** indonesische Handynummern beginnen mit `62`.
Aus `0812 3456 7890` wird also `6281234567890` — die führende `0` fällt weg.

Solange das Feld leer ist, funktioniert die Seite trotzdem: alle WhatsApp-Buttons
öffnen dann eine **Instagram-Direktnachricht**, und die fertige Buchungsnachricht
wird automatisch in die Zwischenablage kopiert. In der Browser-Konsole steht ein Hinweis.

---

## 2. Preise ändern

In **`js/content.js`**, bei jeder Tour:

```js
price: 800000,      // in Indonesischen Rupiah, ohne Punkte
unit:  'car',       // 'car' = pro Fahrzeug (bis 6 Gäste)
                    // 'person' = pro Person
                    // 'ask' = kein Preis, zeigt "on request"
```

Die Seite zeigt zusätzlich einen groben Euro-Betrag mit „≈" an. Der Umrechnungskurs
steht in `js/config.js` → `pricing.idrPerEur` (Standard: 17.500). Auf `0` setzen
blendet die Euro-Preise komplett aus.

> Die aktuell hinterlegten Preise sind **marktübliche Richtwerte**, keine echten Preise
> des Fahrers. Sie müssen vor dem Livegang bestätigt werden.

---

## 3. Fotos austauschen

Die Seite läuft mit **echten Fotos** im Ordner `images/` (WebP). Zwei davon sind
eigene Aufnahmen von My Lombok Driver, die übrigen acht sind lizenzfreie
Lombok-Fotos von Pexels — die Zuordnung steht in **`CREDITS.md`**.

**So tauschst du eins aus:**

1. Foto in den Ordner `images/` legen, z. B. `images/tiu-kelep.webp`
2. In `js/content.js` den Dateinamen bei der passenden Tour ändern:

```js
// vorher
{ id: 'waterfalls-north', scene: 'waterfall.webp', ... }

// nachher
{ id: 'waterfalls-north', scene: 'tiu-kelep.webp', ... }
```

Das war's — kein CSS, kein HTML. Namen **ohne** Schrägstrich werden in `images/`
gesucht, Namen **mit** Schrägstrich (`assets/foo.svg`) direkt als Pfad verwendet.

Details zu Bildgrössen, Zuschnitt und der Tabelle „welches Bild wo erscheint":
**`images/README.md`**.

Hero-Bild und das grosse Bild im „Über uns"-Block stehen nicht in `content.js`,
sondern direkt in `index.html` (`images/hero.webp` bzw. `images/waterfall-tall.webp`).

> `gili-shallows.webp` und `gili-boat.webp` sind aus Instagram-Screenshots
> gewonnen und deshalb nur 1176 px breit. Sobald die Originaldateien vorliegen,
> sollten sie unter gleichem Namen ersetzt werden.

---

## 4. Beispiel-Bewertungen ersetzen

Die vier Bewertungen in `js/content.js` sind **Platzhaltertexte**, erkennbar am
`sample: true` und an der gestrichelten Umrandung auf der Seite.

**Sie müssen durch echte Zitate ersetzt werden.** Erfundene Bewertungen zu
veröffentlichen ist irreführend und in der EU nach dem UWG abmahnbar.

```js
{
  name: 'Sarah & Tom',
  origin: { en: 'Google review', de: 'Google-Bewertung' },
  rating: 5,
  text: { en: '…', de: '…' }
}
```

Das Feld `sample: true` dabei löschen — dann verschwindet die gestrichelte Umrandung.
Wer keine deutsche Übersetzung hat, lässt `de` einfach weg; dann wird automatisch
der englische Text angezeigt.

---

## Das Logo

`assets/logo-lockup.svg` ist eine **Vektor-Nachzeichnung** des Instagram-Logos
(Lenkrad mit goldenem Schriftzug „MY LOMBOK DRIVER — Your journey, our priority").
Dazu gibt es `logo-mark.svg` (nur das Lenkrad, für Header und „Über uns") und
`favicon.svg` (Browser-Icon).

Wenn die Original-Datei vom Fahrer vorliegt (idealerweise SVG oder PNG mit
transparentem Hintergrund), einfach in `assets/` ablegen und die Verweise in
`index.html` ersetzen (Zeilen mit `logo-lockup.svg` bzw. `logo-mark.svg`).
Danach `images/og-image.jpg` neu anlegen — das ist das Vorschaubild beim Teilen
in WhatsApp und Facebook, exakt 1200 × 630 px als JPEG.

---

## Struktur

```
index.html               alle Sektionen, sprachneutral (data-i18n-Attribute)
css/style.css            Design-System (Farben, Typografie, alle Komponenten)
js/config.js             ← Kontaktdaten, Live-URL, Umrechnungskurs, Feature-Schalter
js/content.js            ← Touren, Preise, Galerie, Bewertungen, FAQ (EN + DE)
js/i18n.js               ← Oberflächentexte EN + DE, WhatsApp-Nachrichtenvorlage
js/app.js                Rendering, Sprachumschalter, Modals, Lightbox, Formular
assets/logo-lockup.svg   Logo mit Schriftzug (Hero und Footer)
assets/logo-mark.svg     Logo, nur Lenkrad (Header, „Über uns")
assets/favicon.svg       Browser-Icon
images/*.webp            alle Fotos der Seite
images/og-image.jpg      Vorschaubild fürs Teilen (1200 × 630)
CREDITS.md               Bildnachweise (Pexels-Fotografen)
robots.txt, sitemap.xml  SEO — enthalten die Live-URL
.nojekyll                nötig, damit GitHub Pages die Dateien unverändert ausliefert
```

## Funktionen

- **Buchung über WhatsApp ohne Backend** — das Formular baut aus den Eingaben eine
  fertige Nachricht. Sie wird **immer auf Englisch** verfasst, egal in welcher Sprache
  der Gast surft, damit der Fahrer sie ohne Übersetzung lesen kann. Nichts wird
  automatisch versendet: der Gast sieht die Nachricht vorher und drückt selbst auf Senden.
- **Zweisprachig EN/DE** mit Auto-Erkennung der Browsersprache und Speicherung der Wahl
- **8 Touren** mit Filter nach Kategorie und Detail-Ansicht (Ablauf, Leistungen, Hinweise)
- **Galerie** mit Lightbox und Pfeiltasten-Navigation
- **FAQ-Akkordeon**, Bewertungen, „Über uns"
- **Instagram** prominent verlinkt: eigene Sektion, Header-Buchungspfad, Footer
- **SEO:** Meta-Tags, Open Graph, `TravelAgency`-JSON-LD mit allen Touren als `Offer`
- Barrierefreiheit: Skip-Link, Fokus-Ringe, ARIA-Zustände, `prefers-reduced-motion`
- Kein Tracking, keine Cookies, keine externen Anfragen ausser Google Fonts

## Lokal starten

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

Ein einfacher Doppelklick auf `index.html` funktioniert auch, nur die
„Kopieren"-Buttons brauchen `http://` oder `https://`.

## Veröffentlichen (GitHub Pages, kostenlos)

Die Dateien liegen bereits im Repository `LasseToenjann/mylombokdriver` auf `main`,
und die Live-Adresse ist in `js/config.js`, `sitemap.xml` und `robots.txt` eingetragen.
Offen ist nur noch der Schalter bei GitHub:

1. **Settings → Pages → Branch: `main`, Ordner: `/ (root)` → Save**
2. Nach ~1 Minute erreichbar unter **https://lassetoenjann.github.io/mylombokdriver/**

**Eigene Domain später:** A-Records auf GitHub Pages zeigen lassen, Domain unter
Settings → Pages eintragen und eine Datei `CNAME` mit der Domain im Repository-Root
anlegen. Danach die Adresse an genau drei Stellen ändern: `js/config.js` → `site.url`,
`sitemap.xml` und `robots.txt`.

---

## For the owner (English)

Everything you will ever need to change is in two files:

- **`js/config.js`** — your WhatsApp number, e-mail, address, exchange rate
- **`js/content.js`** — your tours, your prices, your reviews, the FAQ

To change a price, find your tour in `js/content.js` and edit the `price:` line.
It is in Rupiah, written without dots: `800000` shows as `IDR 800.000`.

To use your own photos, put them in the `images/` folder and change the `scene:`
line of that tour to `scene: 'images/your-photo.jpg'`.

The reviews currently on the site are **placeholders**. Please replace them with
real ones from Google before showing the site to guests.

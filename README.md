# My Lombok Driver — Website

Website für **[@mylombokdriver](https://www.instagram.com/mylombokdriver)** — privater Fahrer,
Flughafentransfers, Tagestouren, Schnorcheltouren und Speedboot-Transfers auf Lombok.

Statische Website: HTML, CSS, Vanilla-JavaScript. **Kein Build-Schritt, keine Abhängigkeiten.**
Inhalte werden aus drei Daten-Dateien gerendert — Texte und Preise ändert man dort, nicht im Markup.

Die Website ist **komplett auf Englisch**, mit einem Umschalter auf Deutsch.

---

## ⚠️ Vor dem Livegang zwingend erledigen

Diese vier Punkte müssen gemacht werden, sonst ist die Seite nicht einsatzbereit:

| # | Was | Wo |
|---|-----|-----|
| 1 | **WhatsApp-Nummer** eintragen | `js/config.js` → `contact.whatsapp` |
| 2 | **Preise** vom Fahrer bestätigen lassen | `js/content.js` → `price:` bei jeder Tour |
| 3 | **Beispiel-Bewertungen ersetzen** | `js/content.js` → `reviews:` |
| 4 | **Echte Fotos** einsetzen | siehe unten |

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

## 3. Echte Fotos einsetzen

Die Seite läuft aktuell mit **selbst gezeichneten SVG-Illustrationen** in `assets/scenes/`.
Grund: die Fotos vom Instagram-Kanal waren technisch nicht abrufbar. Die Illustrationen
sind bewusst so gebaut, dass die Seite sofort fertig aussieht — sie sind aber als
Platzhalter gedacht.

**So tauschst du sie gegen echte Fotos:**

1. Foto in den Ordner `images/` legen, z. B. `images/tiu-kelep.jpg`
2. In `js/content.js` den Dateinamen ändern:

```js
// vorher
{ id: 'waterfalls-north', scene: 'waterfall.svg', ... }

// nachher
{ id: 'waterfalls-north', scene: 'images/tiu-kelep.jpg', ... }
```

Das war's — kein CSS, kein HTML. Namen **mit** Schrägstrich werden als Pfad verwendet,
Namen **ohne** Schrägstrich werden in `assets/scenes/` gesucht.

Details zu Bildgrössen und Zuschnitt: **`images/README.md`**.

Auch das Hero-Bild und das Portrait lassen sich ersetzen — die stehen direkt in
`index.html` (`assets/scenes/hero-sunset.svg` bzw. `assets/scenes/portrait.svg`).

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

`assets/logo-badge.svg` ist eine **Vektor-Nachzeichnung** des Instagram-Logos
(schwarzer Kreis, Lenkrad, goldener Schriftzug „MY LOMBOK DRIVER — Your journey, our priority").
Dazu gibt es `logo-mark.svg` (nur das Lenkrad, für den Header) und `favicon.svg`.

Wenn die Original-Datei vom Fahrer vorliegt (idealerweise PNG mit transparentem
Hintergrund oder das originale Vektorformat), einfach in `assets/` ablegen und die
Verweise in `index.html` ersetzen. Danach in `assets/og-image.svg` denselben Schriftzug
anpassen — das ist das Vorschaubild beim Teilen in WhatsApp und Facebook.

---

## Struktur

```
index.html               alle Sektionen, sprachneutral (data-i18n-Attribute)
css/style.css            Design-System (Farben, Typografie, alle Komponenten)
js/config.js             ← Kontaktdaten, Umrechnungskurs, Feature-Schalter
js/content.js            ← Touren, Preise, Galerie, Bewertungen, FAQ (EN + DE)
js/i18n.js               ← Oberflächentexte EN + DE, WhatsApp-Nachrichtenvorlage
js/app.js                Rendering, Sprachumschalter, Modals, Lightbox, Formular
assets/logo-badge.svg    Logo, volle Badge-Variante
assets/logo-mark.svg     Logo, nur Lenkrad (Header)
assets/favicon.svg       Browser-Icon
assets/og-image.svg      Vorschaubild fürs Teilen
assets/scenes/*.svg      Bild-Illustrationen (durch Fotos ersetzbar)
images/                  ← hier echte Fotos ablegen
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

1. Repository auf GitHub anlegen (public)
2. Diese Dateien pushen
3. **Settings → Pages → Branch: `main`, Ordner: `/ (root)` → Save**
4. Nach ~1 Minute erreichbar unter `https://<benutzer>.github.io/mylombokdriver/`
5. Die finale Adresse in `js/config.js` → `site.url` eintragen
   (sonst fehlen Canonical-URL und Open-Graph-Bild) und in `sitemap.xml` und `robots.txt`

Eigene Domain: A-Records auf GitHub Pages zeigen lassen, Domain unter Settings → Pages
eintragen und eine Datei `CNAME` mit der Domain im Repository-Root anlegen.

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

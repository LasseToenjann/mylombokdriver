# My Lombok Driver — Website

Website für **[@mylombokdriver](https://www.instagram.com/mylombokdriver)** — privater Fahrer,
Flughafentransfers, Tagestouren, Schnorcheltouren und Speedboot-Transfers auf Lombok.

Statische Website: HTML, CSS, Vanilla-JavaScript. **Kein Build-Schritt, keine Abhängigkeiten.**
Inhalte werden aus drei Daten-Dateien gerendert — Texte und Preise ändert man dort, nicht im Markup.

Die Website ist **komplett auf Englisch**. Gäste kommen aus allen möglichen Ländern —
eine Sprache, die alle lesen, schlägt eine halb übersetzte Seite.

---

## ⚠️ Vor dem Livegang zwingend erledigen

Stand der Dinge — nur die offenen Punkte müssen noch erledigt werden:

| # | Was | Wo | Status |
|---|-----|-----|--------|
| 1 | **WhatsApp-Nummer** eintragen | `js/config.js` → `contact.whatsapp` | ✅ erledigt |
| 2 | **Echte Fotos** einsetzen | `images/` | ✅ erledigt (2 eigene, 8 von Pexels) |
| 3 | **Live-URL** eintragen | `js/config.js`, `sitemap.xml`, `robots.txt` | ✅ erledigt |
| 4 | **Preise & Touren** an die Vorlagen-Websites angleichen | `js/content.js` | ❌ offen — Websites nicht abrufbar, siehe unten |
| 5 | **Bewertungen** | `js/content.js` → `reviews:` | ✅ echte Google-Bewertungen |
| 6 | **Name des Fahrers / Gründungsjahr** | `js/config.js` → `business.driverName`, `since` | ❌ offen |
| 7 | **Facebook-Seite** verlinken | `js/config.js` → `contact.facebook` | ✅ erledigt (Share-Link) |

Punkt 4 ist der letzte echte Blocker: solange er offen ist, stehen unbestätigte
Preise auf der Seite. Die beiden als Vorlage genannten Websites liegen hinter
`share.google`-Kurzlinks, die aus der Entwicklungsumgebung nicht abrufbar sind
(Google ist dort geblockt) — Inhalte müssen als Text oder Screenshot vorliegen.

Ebenfalls noch zu klären: das Fahrzeug. Die Seite sagt jetzt **bis 4 Gäste**;
die Beschreibung nennt nur noch „car" statt „MPV", weil das Modell nicht
bestätigt ist.

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
unit:  'car',       // 'car' = pro Fahrzeug (bis 4 Gäste)
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

## 4. Bewertungen pflegen

Die sechs Bewertungen in `js/content.js` sind **echte Google-Bewertungen** aus
dem Unternehmensprofil, mit den dort veröffentlichten Namen und Sternen. Aus
neun vorliegenden wurden sie so ausgewählt, dass jede eine andere Frage
beantwortet, die ein Gast tatsächlich hat: Sicherheit (Rani), Kinder (Martin),
fairer Preis (Robert), Flexibilität auf Mehrtagestour (Angeline), Ortskenntnis
(Aimee), Bandbreite der Ziele (Mathilde).

Ein Hinweis zum Wortlaut: die Vorlagen lagen als Screenshots vor, in denen
Google alles ins Indonesische übersetzt hatte. Der Text hier ist also eine
sorgfältige Rückübersetzung ins Englische, kein wörtliches Zitat. Bei
**Angeline** und **Mathilde** sind die Originale französisch — Englisch ist so
oder so eine Übersetzung. Bei **Martin, Robert, Aimee und Rani** ist das
Original bereits englisch: auf Google auf „Original ansehen" tippen und den
exakten Wortlaut hier einsetzen ist besser als jede Rückübersetzung.

```js
{
  name: 'Sarah T.',
  origin: 'Google review',      // oder 'Local Guide · Google'
  rating: 5,
  text: 'Wortlaut der Bewertung.'
}
```

Vier bis sechs auf der Seite sind ideal; mehr liest ohnehin niemand.

Der Vertrauens-Streifen unter dem Hero zeigt **nicht** die Anzahl der Zitate,
sondern die echten Zahlen des Google-Profils — sechs Zitate auf der Seite, 41
im Profil. Woher die Zahlen kommen und wie sie sich selbst aktualisieren, steht
im nächsten Abschnitt.

---

## Bewertungszahlen automatisch aktualisieren

Der Vertrauens-Streifen zieht Schnitt und Anzahl aus **`assets/review-stats.json`**.
Diese Datei wird von einem **GitHub-Action-Cron** (`.github/workflows/review-stats.yml`)
einmal täglich aus dem Google-Profil aktualisiert und eingecheckt — Pages baut
danach automatisch neu.

Der API-Schlüssel liegt als Repository-Secret und landet **nie** im Browser.
Das ist der Unterschied zu einem Aufruf aus dem JavaScript heraus, wo der
Schlüssel für jeden lesbar wäre.

### Einrichten (einmalig, ~10 Minuten)

1. **Place ID** der Firma holen:
   [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
   — Firma suchen, die `ChIJ…`-Kennung kopieren.
2. In der [Google Cloud Console](https://console.cloud.google.com/) ein Projekt
   anlegen, **Places API (New)** aktivieren, unter *Anmeldedaten* einen
   **API-Schlüssel** erstellen. Den Schlüssel auf die Places API beschränken.
3. Im Repository unter **Settings → Secrets and variables → Actions** zwei
   Secrets anlegen:
   - `PLACE_ID` → die Kennung aus Schritt 1
   - `GOOGLE_MAPS_KEY` → der Schlüssel aus Schritt 2
4. Unter **Actions → Refresh Google review stats → Run workflow** einmal von
   Hand starten und prüfen, dass die Ausgabe die richtigen Zahlen zeigt.

Danach läuft es allein. Ein Aufruf pro Tag sind ~30 im Monat; das Kontingent
der Places API liegt weit darüber, und die Feldmaske fragt nur `rating` und
`userRatingCount` ab — die günstigste Abfrage, die es gibt.

### Wenn etwas schiefgeht

Nichts. Der Streifen fällt der Reihe nach zurück auf: JSON-Datei → die Zahlen
in `js/config.js` → `reviewStats` → die Anzahl der Zitate. Fehlende Datei,
kaputtes JSON, HTTP 403 wegen falschem Schlüssel, unplausible Werte wie `0` —
alles getestet, in jedem Fall stehen weiter die Zahlen aus `config.js`. Die
Werte dort sollten daher gepflegt bleiben, sie sind das Sicherheitsnetz.

Das Skript bricht bei einer unplausiblen Antwort bewusst mit Fehler ab und
lässt die alte Datei stehen, statt „0 guest reviews" zu veröffentlichen. Ein
fehlgeschlagener Lauf ist in der Actions-Übersicht rot sichtbar.

### Was damit *nicht* geht

Die **Bewertungstexte** bleiben handverlesen in `content.js`. Die Places API
gibt maximal fünf zurück, von Google ausgewählt — nicht die aussagekräftigsten.
Die sechs auf der Seite sind gezielt nach Nutzen für Gäste ausgewählt, das ist
besser als alles, was eine API liefern würde.

---|---|
| **Google Places API direkt aus dem Browser** | Der API-Schlüssel steht im JavaScript und ist damit für jeden lesbar. Wer ihn kopiert, verbraucht das Kontingent auf Kosten des Profilinhabers. Ausserdem liefert die Places API nur **fünf** Bewertungen, von Google ausgewählt — nicht die besten, nicht alle 41. |
| **Fertige Widgets** (Elfsight, Trustindex …) | Laden fremdes JavaScript, setzen Cookies, kosten monatlich und machen die Seite langsamer. Widerspricht dem Grundsatz „kein Tracking, keine externen Anfragen ausser Google Fonts". |
| **Eigene Serverless-Funktion** (Cloudflare Worker, Netlify Function) | Funktioniert wirklich: Der Schlüssel bleibt geheim, das Ergebnis lässt sich zwischenspeichern. Kostet nichts in der Gratisstufe, ist aber ein zweiter Dienst, der eingerichtet und gepflegt werden muss. Auch hier gilt das Limit von fünf Bewertungen. |

**Empfehlung:** so lassen. Zwei Zahlen von Hand pflegen, die sich alle paar
Wochen um eins ändern, ist weniger Aufwand als ein Worker — und die
handverlesenen Zitate sind ohnehin besser als das, was die API zurückgibt.
Wenn es später doch automatisch sein soll, ist der Cloudflare Worker der Weg.

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
index.html               alle Sektionen (Texte über data-i18n aus i18n.js)
css/style.css            Design-System (Farben, Typografie, alle Komponenten)
js/config.js             ← Kontaktdaten, Live-URL, Umrechnungskurs, Feature-Schalter
js/content.js            ← Touren, Preise, Galerie, Bewertungen, FAQ
js/i18n.js               ← Oberflächentexte, WhatsApp-Nachrichtenvorlage
js/app.js                Rendering, Modals, Lightbox, Formular
assets/logo-lockup.svg   Logo mit Schriftzug (Hero und Footer)
assets/logo-mark.svg     Logo, nur Lenkrad (Header, „Über uns")
assets/favicon.svg       Browser-Icon
images/*.webp            alle Fotos der Seite
images/og-image.jpg      Vorschaubild fürs Teilen (1200 × 630)
assets/qr/               QR-Codes zur Website (schlicht + gebrandet), siehe dortige README
assets/review-stats.json Schnitt + Anzahl vom Google-Profil, taeglich per Action aktualisiert
scripts/                 Hilfsskript fuer den Action-Cron
.github/workflows/       Cron, der die Bewertungszahlen holt
CREDITS.md               Bildnachweise (Pexels-Fotografen)
robots.txt, sitemap.xml  SEO — enthalten die Live-URL
.nojekyll                nötig, damit GitHub Pages die Dateien unverändert ausliefert
```

## Funktionen

- **Buchung über WhatsApp ohne Backend** — das Formular baut aus den Eingaben eine
  fertige Nachricht. Nichts wird automatisch versendet: der Gast sieht die
  Nachricht vorher und drückt selbst auf Senden.
- **Mobile First** — auf 360–430 px entworfen, Touch-Flächen ab 44 px, kein horizontales Scrollen
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

Die Seite ist in der **Google Search Console** angemeldet. Das Meta-Tag
`google-site-verification` im `<head>` von `index.html` muss dafür stehen
bleiben — wird es entfernt, verliert die Property ihre Bestätigung.

**Eigene Domain später:** A-Records auf GitHub Pages zeigen lassen, Domain unter
Settings → Pages eintragen und eine Datei `CNAME` mit der Domain im Repository-Root
anlegen. Danach die Adresse an genau drei Stellen ändern: `js/config.js` → `site.url`,
`sitemap.xml` und `robots.txt`.

---

## SEO

**Was eingebaut ist**

- `title` und `meta description` in `js/i18n.js` (`meta.title`, `meta.description`).
  Sie stehen zusätzlich statisch in `index.html` — beide Stellen müssen gleich
  bleiben, sonst sieht ein Crawler ohne JavaScript etwas anderes als ein Besucher.
  Faustregel: Titel bis ~60 Zeichen sichtbar, Description bis ~155.
- **Strukturierte Daten** (`js/app.js` → `renderStructuredData`): `TravelAgency`
  mit Adresse, Koordinaten, Einzugsgebiet und allen 8 Touren als `Offer`, plus
  eine eigene `FAQPage` aus `content.js`. Prüfen unter
  [search.google.com/test/rich-results](https://search.google.com/test/rich-results).
- **Kein `aggregateRating`/`Review`-Markup** — auch jetzt nicht, wo die
  Bewertungen echt sind. Google zeigt keine Bewertungs-Rich-Results für
  „self-serving reviews", also für ein Unternehmen, das Bewertungen über sich
  selbst auf der eigenen Seite veröffentlicht. Das Markup brächte keine Sterne
  in der Suche und provoziert nur eine Warnung. Die Sterne, die zählen, stehen
  ohnehin im Google-Unternehmensprofil.
- **Tour-Deeplinks**: jede Tour hat eine eigene Adresse (`#tour-airport-transfer`),
  teilbar und mit funktionierender Zurück-Taste.
- `sitemap.xml`, `robots.txt`, `canonical`, Open Graph, `google-site-verification`.

**Die größte verbleibende Schwäche**

Das ist *eine* Seite. Google indexiert `#tour-…` nicht als eigene Seiten, also
konkurriert die Startseite mit sich selbst um alle Suchbegriffe gleichzeitig.
Wer für „lombok airport transfer" **und** „sendang gile waterfall tour" separat
ranken will, braucht echte HTML-Dateien pro Tour (`/airport-transfer/`,
`/waterfalls/` …) mit eigenem Titel, eigener Description und eigenem Text.
Das ist der mit Abstand größte Hebel, wenn die Seite ernsthaft Traffic bringen soll.

**Search Console — Reihenfolge**

1. Sitemap einreichen: `sitemap.xml` unter „Sitemaps".
2. Startseite über „URL-Prüfung" → „Indexierung beantragen" anstoßen.
3. Nach 2–3 Tagen unter „Seiten" prüfen, ob die URL wirklich indexiert ist.
4. Nach ~2 Wochen unter „Leistung" die Suchanfragen ansehen — daraus ergeben
   sich die echten Keywords, nicht aus Vermutungen.
5. Das **Google-Unternehmensprofil** ist für einen lokalen Fahrer wichtiger als
   die Website: vollständig ausfüllen, Fotos hochladen, Gäste um echte
   Bewertungen bitten, Website-Link auf diese Adresse setzen.

---

## For the owner (English)

Everything you will ever need to change is in two files:

- **`js/config.js`** — your WhatsApp number, e-mail, address, exchange rate
- **`js/content.js`** — your tours, your prices, your reviews, the FAQ

To change a price, find your tour in `js/content.js` and edit the `price:` line.
It is in Rupiah, written without dots: `800000` shows as `IDR 800.000`.

To use your own photos, put them in the `images/` folder and change the `scene:`
line of that tour to `scene: 'images/your-photo.jpg'`.

The reviews currently on the site were **written to fill the page**, not
collected from guests. Please replace them with real ones from Google as soon
as you have them.

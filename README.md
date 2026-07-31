# My Lombok Driver — Website

Website für **[@mylombokdriver](https://www.instagram.com/mylombokdriver)** — privater Fahrer,
Flughafentransfers, Tagestouren, Schnorcheltouren und Speedboot-Transfers auf Lombok.

Statische Website: HTML, CSS, Vanilla-JavaScript. **Kein Build-Schritt, keine Abhängigkeiten.**
Inhalte werden aus drei Daten-Dateien gerendert — Texte und Preise ändert man dort, nicht im Markup.

Die Website ist **komplett auf Englisch**. Gäste kommen aus allen möglichen Ländern —
eine Sprache, die alle lesen, schlägt eine halb übersetzte Seite.

---

## ✅ Vor dem Livegang zwingend erledigen

Diese Liste ist abgearbeitet — sie bleibt stehen, damit nachvollziehbar ist,
was geprüft wurde:

| # | Was | Wo | Status |
|---|-----|-----|--------|
| 1 | **WhatsApp-Nummer** eintragen | `js/config.js` → `contact.whatsapp` | ✅ erledigt |
| 2 | **Echte Fotos** einsetzen | `images/` | ✅ jede Tour hat ihr eigenes Bild |
| 3 | **Live-URL** eintragen | `js/config.js`, `sitemap.xml`, `robots.txt` | ✅ erledigt |
| 4 | **Preise & Touren** an die Vorlagen-Websites angleichen | `js/content.js` | ✅ vom Fahrer bestätigt (31.07.26) |
| 5 | **Bewertungen** | `js/content.js` → `reviews:` | ✅ echte Google-Bewertungen |
| 6 | **Fahrer-Foto und Name** | `js/config.js` → `business.driverPhoto`, `driverName` | ✅ erledigt (Suhar) |
| 7 | **Facebook-Seite** verlinken | `js/config.js` → `contact.facebook` | ✅ erledigt, Link vom Betreiber geprüft |
| 8 | **Fahrzeug: 4 Plätze** klarstellen | `js/content.js`, `js/i18n.js` | ✅ erledigt |

Ein Gründungsjahr wird bewusst **nicht** genannt — es stand früher als offener
Punkt hier und ist auf Wunsch des Betreibers ersatzlos entfallen.

### Der einzige verbliebene Punkt

**Die Bewertungszahlen werden von Hand gepflegt.** In `js/config.js` stehen
5,0 aus 41 Bewertungen; der Vertrauensbalken unter dem Hero zeigt genau diese
Zahlen. Sie veralten mit jeder neuen Google-Bewertung.

Der Workflow, der sie automatisch holt, liegt fertig im Repository und braucht
nur zwei Repository-Secrets — siehe Abschnitt „Live-Bewertungen" weiter unten.
Alles andere auf dieser Seite ist abgenommen: Preise, Touren, Texte, Fotos,
Kontaktdaten, Facebook-Link und die Anmeldung in der Search Console.

### Preise und Touren: woher die Zahlen kommen

Grundlage sind die beiden als Vorlage genannten Anbieter:
**lombokprivatetour.com** (im Folgenden A) und **lombokroute.com** (B). Beide
Websites sind aus der Entwicklungsumgebung nicht abrufbar (Netzwerksperre), die
Daten liegen deshalb als aufbereitete Zusammenfassung vor.

Die beiden rechnen **unterschiedlich**, das ist der wichtigste Punkt:

* **A** rechnet **pro Fahrzeug**, Preis angegeben für **2 Gäste**, Auto bis 6 Sitze,
  ausdrücklich 100 % privat.
* **B** rechnet **pro Person**, Mindestteilnehmerzahl 2 — und schreibt im eigenen
  FAQ, dass viele Gäste die **geteilten** Touren buchen. Bei sechs von elf
  B-Touren steht im Leistungsumfang nur „Car" ohne „private". B ist also
  vermutlich kein reiner Privatanbieter, was einen Teil des Preisunterschieds
  erklärt.

**Getroffene Entscheidungen:**

| Frage | Entscheidung |
|---|---|
| Preismodell | Landtouren und Transfers **pro Auto** (bis 4 Gäste), Boots- und Schnorcheltouren **pro Person** |
| Preisniveau | rund **12 % unter A** — A hat dieselbe Positionierung wie wir |
| Mittagessen | **nicht** enthalten, außer wo es vor Ort nichts zu kaufen gibt (Pink Beach, Nordost-Inseln) |
| Eintritte | **enthalten**, inklusive lokaler Guides — so machen es beide Anbieter |
| Umfang | **13 Touren**, deckt praktisch alles ab, was A und B zusammen anbieten |

**Eine Annahme, die der Fahrer geprüft hat:** A nennt seine Fahrzeugpreise für
**zwei** Gäste, unsere gelten für **bis zu vier**. Eine vierköpfige Familie zahlt
bei uns damit deutlich weniger als bei A. Er hat das so bestätigt — ein Auto,
ein Preis, kein Aufschlag ab dem dritten Gast.

**Nicht übernommen wurden** die Fehler der Quellseiten: B nennt bei einer Tour
68 statt 38 USD, im Footer die Vorwahl +68 statt +62, und bei der Waterfall Tour
beschreibt der Highlights-Abschnitt eine ganz andere Tour.

**Die Preise sind inzwischen vom Fahrer bestätigt**, einschließlich der
Annahme mit den vier Gästen pro Auto — er hat die Liste durchgesehen und sie so
übernommen. Ab jetzt ist jede Änderung hier eine Änderung an seinen Preisen,
also vorher fragen.

### Das Fahrzeug: vier Plätze

Die Seite sagt durchgehend **vier Gäste**, und zwar an vier Stellen, damit es
niemand erst nach der Buchung merkt:

* der Preiszusatz an jeder Tourkarte („per car · up to 4 guests")
* ein Hinweis direkt unter dem Tourenraster (`tours.capacity` in `js/i18n.js`),
  mit goldener Linie am linken Rand
* zwei FAQ-Einträge — „How many people fit in the car?" und „How much luggage
  fits?"
* im Buchungsformular ein Hinweis, der **erst ab fünf Gästen** erscheint, statt
  das Feld bei vier zu deckeln. Wer zu sechst ist, wird nicht weggeschickt,
  sondern liest, dass ein zweites Auto möglich ist.

Der Grundton ist überall gleich: vier passen rein, bei mehr bitte vorher fragen,
es findet sich fast immer eine Lösung.

**Gepäck:** Koffer beim Transfer sind kein Problem, sperriges Sportgerät schon.
Surfboards, Fahrräder und Tauchflaschen sind ausdrücklich als „passt nicht"
benannt — vorher stand „space for luggage and surfboards" auf der Seite, das war
falsch und ist raus.

Das Modell steht weiterhin nicht auf der Seite („car" statt „MPV"), weil es
nicht bestätigt ist.

**Der Name des früheren Fahrers ist überall entfernt** — er stand in allen sechs
Google-Bewertungen und stimmt nicht mehr. In den Zitaten steht jetzt „our
driver" bzw. ein Pronomen; inhaltlich ist nichts verändert. Auch der
Facebook-Seitenname wird nicht mehr angezeigt, solange er den alten Namen
trägt (`contact.facebookName` ist leer).

**Facebook-Link:** eingetragen ist jetzt `facebook.com/100083377775106` — die
numerische Profil-URL, die dauerhaft gilt. Der Parameter `?http_ref=…`, den
Facebook beim Kopieren anhängt, ist entfernt: er enthält nur einen Zeitstempel
des Kopiervorgangs. Der Link konnte aus der Entwicklungsumgebung nicht geöffnet
werden (Facebook ist dort geblockt). Der Betreiber hat den Link im Browser
geprüft: er landet auf dem richtigen Profil.

Offene Aufgaben wären im Code mit `### TODO ###` markiert — aktuell gibt es
keine mehr:

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
price: 1300000,     // in Indonesischen Rupiah, ohne Punkte
unit:  'car',       // 'car' = pro Fahrzeug (bis 4 Gäste)
                    // 'person' = pro Person
                    // 'ask' = kein Preis, zeigt "on request"
```

Die Seite zeigt zusätzlich einen groben Euro-Betrag mit „≈" an. Der Umrechnungskurs
steht in `js/config.js` → `pricing.idrPerEur` (aktuell 20.800). Auf `0` setzen
blendet die Euro-Preise komplett aus. Bis 100 € wird auf ganze Euro gerundet,
darüber auf Fünferschritte — auf Fünfer zu runden hatte dazu geführt, dass zwei
benachbarte Karten mit 1.300.000 und 1.400.000 beide „≈ €65" anzeigten.

**Der aktuelle Katalog:**

| Tour | Preis | Einheit |
|---|---|---|
| Airport Transfer | ab 350.000 | pro Auto |
| Transfer to the Gili Islands | ab 700.000 | pro Auto |
| Sasak Culture & the South Coast | 1.200.000 | pro Auto |
| City & Culture, West Lombok | 1.200.000 | pro Auto |
| Sendang Gile & Tiu Kelep Waterfalls | 1.300.000 | pro Auto |
| Benang Stokel & Benang Kelambu | 1.400.000 | pro Auto |
| Sembalun Valley, Rinjani Viewpoints & the Waterfalls | 1.450.000 | pro Auto |
| Tetebatu — Rice Fields & Countryside | 1.500.000 | pro Auto |
| Gili Trawangan Day Trip | 650.000 | pro Person |
| Gili Nanggu, Sudak & Kedis | 800.000 | pro Person |
| Pink Beach & Gili Petelu | 1.000.000 | pro Person |
| Gili Islands Snorkelling Trip | 1.050.000 | pro Person |
| Hidden Paradise — North-East Islands | 1.100.000 | pro Person |

Die Einzelpreise der Punkt-zu-Punkt-Transfers (Senggigi–Bangsal, Senggigi–Kuta
und so weiter) stehen im `note`-Feld der Tour `airport-transfer`, damit die
Tourenliste nicht mit zehn Transferkarten zugestellt wird.

> Die Preise sind aus den beiden Vorlage-Anbietern abgeleitet (siehe oben) und
> **vom Fahrer bestätigt**.

---

## 3. Fotos austauschen

Die Seite läuft mit **echten Fotos** im Ordner `images/` (WebP). Zwei davon sind
eigene Aufnahmen von My Lombok Driver, der Rest sind lizenzfreie Lombok-Fotos
von Pexels — die Zuordnung steht in **`CREDITS.md`**.

**Keine angefassten Tiere.** Ein Stockfoto zeigte einen Guide, der einem Kind
einen Kugelfisch in die Hand hält; der Fahrer hat darum gebeten, es zu
entfernen. Es ist gelöscht, und bei neuen Fotos gilt dasselbe: keine Hände an
Schildkröten, Seesternen, Fischen oder Korallen.

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

Das Hero-Bild steht nicht in `content.js`, sondern direkt in `index.html`
(`images/hero.webp`); das Porträt im „Über uns"-Block kommt aus
`js/config.js` → `business.driverPhoto`.

> `gili-shallows.webp` und `gili-boat.webp` sind aus Instagram-Screenshots
> gewonnen und deshalb nur 1176 px breit. Sobald die Originaldateien vorliegen,
> sollten sie unter gleichem Namen ersetzt werden.

### Der Bilderstand

**Jede der 13 Touren hat ihr eigenes Foto** — keine Datei wird zweimal
verwendet. Welches Bild wo hängt, steht in `images/README.md`.

Bei **Gili Nanggu, Sudak & Kedis** hängt seit dem Tierschutz-Tausch die erste
**eigene** Aufnahme auf einer Tourkarte: `gili-shallows.webp`, klares Flachwasser
mit ankerndem Boot und Lombok im Hintergrund. Sie ist mit 1176 px kleiner als
die Stock-Fotos, sitzt aber inhaltlich genauer — und sie ist echt.

Es gibt keinen Behelf mehr: Der letzte war die Kuta-Panorama-Aufnahme bei
der Drei-Tages-Tour, und mit der Tour ist auch das Bild weggefallen.

**Der Bilderstand ist abgenommen.** `coastal-town.webp` bei „City & Culture,
West Lombok" war der einzige Zweifelsfall — unten links eine Kirche mit Kreuz,
die Bauweise erinnert eher an Ostindonesien als an Mataram. Der Betreiber hat
es geprüft und so bestätigt. Bildunterschrift und Tourtext behaupten dort
ohnehin keinen Ort, den das Bild nicht zeigt.

### Ein Bild, das wieder entfernt wurde

`reef-guide.webp` zeigte einen Guide, der einem Kind einen Kugelfisch in die
Hand hält. Der Fahrer hat ausdrücklich darum gebeten, es zu tauschen: Tiere
werden nicht angefasst. Das ist keine Kosmetik — ein Foto auf der Website
verkauft ein Verhalten mit, und Gäste machen nach, was sie dort gesehen haben.
Ersetzt durch die eigene Aufnahme `gili-shallows.webp`, gelöscht ist es auch.

### Drei Bilder, die bewusst nicht eingesetzt wurden

Ein geliefertes Foto (Pexels, Rizknas: weiter Strand mit grünen Hügeln) ist
**dieselbe Aufnahme wie `selong-belanak.webp`**, nur anders beschnitten —
gleicher Strand, gleiche Wolken, gleiche Personen im Wasser. Zwei Karten damit
zu bebildern hätte wie eine Dopplung ausgesehen.

Zwei weitere sind liegen geblieben, weil sie höchstwahrscheinlich **nicht auf
Lombok** aufgenommen wurden:

* **Mann mit Flossen am Strand** (Pexels, Kaique Nizer): Granitfelsen und
  atlantischer Küstenwald — typisch für Santa Catarina in Brasilien.
* **Holzschiff mit badenden Kindern** (Pexels, Picko Pictura): am Rumpf steht
  „KAJUARA MURNI". Kajuara liegt in Süd-Sulawesi, und der Schiffstyp ist ein
  bugineischer Pinisi.

Sie liegen bereit und sind in einer Minute eingebaut, falls die Herkunft doch
geklärt ist. Gebraucht werden sie nicht: jede der dreizehn Touren hat ihr
eigenes Bild.

### Die Galerie gibt es nicht mehr

Der Bildteppich „Where the days go on Lombok" ist entfernt — samt Lightbox,
Pfeiltasten-Navigation und den zehn Bildunterschriften. Er versprach „das
echte Lombok" und zeigte gekaufte Stockfotos; der Instagram-Kanal macht
dieselbe Sache ehrlich.

Geblieben ist an derselben Stelle ein schmales Band mit dem
**Instagram-Verweis**. Das hat zwei Gründe: ohne Galerie ist es der einzige Ort,
an dem Gäste echte Fotos sehen — und es hält den Hell-Dunkel-Rhythmus. Ohne
dieses Band stießen „Why book direct" und „Reviews" als zwei dunkle Abschnitte
direkt aneinander.

Mit der Galerie sind fünf Stockfotos verschwunden, die sonst nirgends mehr
gebraucht wurden. `gili-shallows.webp` und `gili-boat.webp` bleiben liegen,
obwohl sie aktuell nicht eingebunden sind: sie sind das einzige eigene
Bildmaterial, und sobald die Originale in voller Auflösung vorliegen, gehören
sie auf eine der Gili-Touren.

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

Der Name des früheren Fahrers wurde in allen sechs Texten durch „our driver"
bzw. ein Pronomen ersetzt — er stimmt nicht mehr. Sonst ist an den Bewertungen
nichts verändert.

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

## Foto des Fahrers einsetzen

Der „About"-Bereich ist die Stelle für ein Porträt — es ist der einzige Platz
auf der Seite, an dem ein Gesicht hingehört. Vorher stand dort ein Wasserfall,
was über die Person nichts aussagte.

**Aktuell hinterlegt:** `images/driver.webp` — Suhar vor dem Wagen, 900 × 1100,
58 KB. Bewusst **ohne Logo-Emblem** darauf: es lag auf der Schulter und wirkte
wie ein Wasserzeichen. Das Logo steht ohnehin im Header, im Hero und im Footer.

**Ist kein Foto hinterlegt, läuft der Bereich ohne Bild:** Text und Eckdaten
nehmen die volle Breite ein, zentriert. Ein leerer Rahmen oder ein
Platzhalterbild sieht schlechter aus als gar kein Bild.

Die Einstellungen dazu in `js/config.js`:

```js
business: {
  driverName:  'Suhar',
  driverRole:  'Driver & guide',      // steht klein unter dem Namen
  driverPhoto: 'driver.webp',         // Datei in images/
}
```

Sobald `driverPhoto` gefüllt ist, erscheint die Bildspalte automatisch, mit
Namensschild darunter und dem Lenkrad-Emblem in der Bildecke. Das Bild wird
auf **9:11 hochkant** zugeschnitten (`object-position: center 22%`, also auf
Kopfhöhe) — am besten ein Porträt mit etwa 900 × 1100 px, als WebP unter 250 KB.

Ohne `driverName` erscheint kein Namensschild, das Foto steht dann allein.

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

## Bewegung und Animationen

Das Konzept steht als Kommentar im Abschnitt `MOTION` in `css/style.css`.

**Der Kern ist die Kurve, nicht die Geschwindigkeit.** Drei frühere Fassungen
wirkten billig, obwohl Strecke, Dauer und Auslösepunkt jedes Mal anders waren.
Der eigentliche Grund: eine gewöhnliche Ease-Out-Kurve legt die letzten Pixel
in den letzten Millisekunden zurück, und das Auge liest das als Einrasten.
Langsamer machen ergab nur ein langsameres Einrasten.

Jetzt läuft alles auf `cubic-bezier(.16, 1, .3, 1)` — einer Expo-Kurve mit sehr
langem Auslauf. Gemessen an den 24 px Weg:

| nach | zurückgelegt | Restweg |
|---|---|---|
| 350 ms | 83 % | 4,2 px |
| 500 ms | 92 % | 2,0 px |
| 700 ms | 97 % | 0,7 px |
| 1400 ms | 100 % | 0 px |

Gefühlt ist das Element nach einer halben Sekunde da, aber es hört nie sichtbar
auf sich zu bewegen — und was nicht sichtbar stoppt, kann nicht aufploppen.

Alles andere folgt daraus:

- **Weg großzügig, 24 px.** Mit langem Auslauf wirkt Strecke souverän; kurze
  Wege in kurzer Zeit sind das, was billig aussieht.
- **Deckkraft in 0,8 s**, deutlich vor der 1,4 s langen Bewegung. Text ist
  lesbar, während die letzten Pixel noch sitzen.
- **Staffelung entsteht im Beobachter, nicht beim Rendern.** Sie war vorher
  fest vergeben: Karte sieben trug ihr Leben lang `--delay: 660ms`. Kam sie
  allein in Sicht, saß sie erst zwei Drittel einer Sekunde unsichtbar da,
  während Karte eins im selben Raster sofort startete — gleicher Bereich,
  sichtbar unterschiedliches Verhalten. Jetzt ergibt sich die Verzögerung aus
  dem, was **gemeinsam** eintrifft: eine Gruppe kaskadiert in Leserichtung
  (90 ms), ein einzeln ankommendes Element startet sofort, und alles bereits
  Vorbeigescrollte bekommt gar keine Verzögerung.
- **Auslösen exakt an der Sichtkante.** Dieser Wert war in beide Richtungen
  falsch: erst zu spät (der Beobachter verkleinerte seinen Bereich um 6 %, ein
  Element saß also schon auf dem Schirm bevor es losging — man sah ihm beim
  Erscheinen zu), dann zu früh (35 % Vorlauf, alles war fertig bevor man
  hinsah — man sah gar nichts mehr). Null ist der einzige Wert, bei dem die
  Bewegung im Sichtbaren stattfindet. Gemessen, ±2 px genau.

Wie viel man tatsächlich sieht, gemessen bei ruhigem Scrollen:

| Element steht … im Bild | Deckkraft | Restweg |
|---|---|---|
| 15 px | 14 % | 24 px |
| 45 px | 49 % | 12 px |
| 76 px | 78 % | 5 px |
| 119 px | 97 % | 1 px |

Die Animation läuft also über die ersten ~120 px ab, die ein Element ins Bild
kommt — vollständig sichtbar, und die letzten Pixel gleiten aus statt zu stoppen.
- Einzelne Karten animieren einzeln, Abschnitts-Überschriften und große Blöcke
  reisen kürzer (16–20 px) als kleine Elemente.

**Was sonst noch animiert, damit es nicht monoton wird:**

| Wo | Was |
|---|---|
| Bewertungsleiste | Schnitt zählt von 0,0 auf 5,0, die Anzahl von 0 auf 41, die fünf Sterne bauen sich im Abstand von 70 ms auf — die drei zusammen lesen sich als *eine* Geste |
| Bewertungskarten | Dieselben aufbauenden Sterne pro Karte |
| „Über uns", ab 901 px | Foto kommt von links, Text von rechts — dort stehen sie tatsächlich nebeneinander, also liest sich die seitliche Bewegung als Einrasten |
| Bilder | Blenden beim Dekodieren ein statt hart zu erscheinen |

**Zwei Ursachen für das restliche Aufploppen waren gar keine Kurven-Frage:**

1. **Ganze Bereiche waren nie im Reveal-System** — die Bewertungsleiste, das
   Laufband, die Filter-Buttons, der „Read on Google"-Link und der komplette
   Footer erschienen einfach mit der Seite. Jetzt sind alle 62 animierten
   Elemente abgedeckt, geprüft per Skript.
2. **Bilder mit `loading="lazy"`** kommen, wenn das Netz sie liefert — bei
   16 von 24 lange nachdem ihre Karte eingeblendet war. Kein Reveal-System
   fängt das ab. Sie blenden jetzt beim Dekodieren ein; bereits zwischen-
   gespeicherte Bilder überspringen das, damit beim zweiten Besuch nichts
   blinkt.

**Ein wichtiger Fehler steckte im Beobachter.** Er meldet nur Zustandswechsel.
Wischt man schnell, springt ein Element zwischen zwei Frames von unterhalb des
Beobachtungsbereichs nach oberhalb — es gilt nie als sichtbar und bleibt
**dauerhaft unsichtbar**. Im Test blieben ganze Abschnitte leer. Behoben, indem
der Bereich nach oben praktisch unbegrenzt aufgespannt wird: alles, was die
Auslöselinie je erreicht hat, zählt. Geprüft bei vier Geschwindigkeiten bis hin
zum Sprung ans Seitenende — kein Element bleibt zurück.

Es werden nur `opacity` und `transform` animiert, das bleibt auf dem Compositor.
**Kein `will-change`:** es auf Dutzende Elemente zu setzen fordert Dutzende
Compositor-Ebenen an und erzeugt genau das Ruckeln, das es verhindern soll.

**`prefers-reduced-motion` schaltet alles ab.** Getestet.

---

## Struktur

```
index.html               Startseite (Texte über data-i18n aus i18n.js)
tours.html               vollständige Tourenübersicht, alle 13
css/style.css            Design-System (Farben, Typografie, alle Komponenten)
js/config.js             ← Kontaktdaten, Live-URL, Umrechnungskurs, Feature-Schalter
js/content.js            ← Touren, Preise, Matcher-Fragen, Bewertungen, FAQ
js/i18n.js               ← Oberflächentexte, WhatsApp-Nachrichtenvorlage
js/app.js                Rendering, Tour-Modal, Formular, „Find your match"
assets/logo-lockup.svg   Logo mit Schriftzug (Hero und Footer)
assets/logo-mark.svg     Logo, nur Lenkrad (Header, „Über uns")
assets/favicon.svg       Browser-Icon
images/*.webp            alle Fotos der Seite
images/og-image.jpg      Vorschaubild fürs Teilen (1200 × 630)
images/driver.webp       Porträt von Suhar (About-Abschnitt)
assets/qr/               QR-Codes zur Website (schlicht + gebrandet), siehe dortige README
assets/review-stats.json Schnitt + Anzahl vom Google-Profil, taeglich per Action aktualisiert
scripts/                 Hilfsskript fuer den Action-Cron
.github/workflows/       Cron, der die Bewertungszahlen holt
CREDITS.md               Bildnachweise (Pexels-Fotografen)
robots.txt, sitemap.xml  SEO — enthalten die Live-URL
.nojekyll                nötig, damit GitHub Pages die Dateien unverändert ausliefert
```

## Zwei Seiten statt einer

Mit einem Dutzend Touren wurde die Startseite zum Katalog: die Tourenliste allein war
länger als alles darunter, und auf dem Handy war der Buchungsbereich
unerreichbar weit unten. Deshalb jetzt:

* **`index.html`** zeigt **nur die sieben beliebtesten** Touren, gefolgt von zwei
  Wegen weiter: „Find your match in 4 questions" (golden, also die primäre
  Aktion) und „See all 13 tours" (nur umrandet).
* **`tours.html`** zeigt **alle 13**, mit den Kategoriefiltern, die vorher auf
  der Startseite saßen.

Der Matcher ist bewusst der goldene Knopf. Wer sieben Karten durchgescrollt hat,
ohne sich zu entscheiden, sagt damit, dass er noch nicht weiß was er will — für
den ist eine noch längere Liste die schlechtere von zwei Antworten.

**Was in diesem Bereich bewusst nicht mehr steht:** der Fließtext unter der
Überschrift „Lombok tours & airport transfers" (die Karten darunter sagen
dasselbe, der Absatz schob nur die erste Tour aus dem Handybild) und der Hinweis
„The seven guests book most often are shown here". Der Block „None of these
quite right?" ist in den Matcher-Abschnitt gewandert: er stand vorher direkt
darüber, sodass zwei Blöcke hintereinander dieselbe Frage stellten.

**Welche Touren die Startseite zeigt**, steht in `js/content.js` — jede Tour hat
ein Feld `featured`:

```js
featured: true,     // erscheint auf der Startseite
featured: false,    // nur auf tours.html
```

Mehr braucht es nicht. Der Knopf „See all 13 tours" zählt selbst, wie viele
Touren es insgesamt gibt, und der Footer verlinkt automatisch dieselbe Auswahl.

Beide Seiten teilen sich **eine** `app.js`. Jede Render-Funktion prüft, ob ihr
Ziel-Element überhaupt existiert, und tut sonst nichts — dadurch braucht
`tours.html` kein eigenes Skript. Das Attribut `data-page="tours"` am `<body>`
entscheidet nur drei Dinge: welche Touren gelistet werden, wohin „Book this"
zeigt (auf tours.html gibt es kein Formular, der Knopf verlinkt deshalb auf
`index.html?service=<id>#book` und das Formular wählt die Tour beim Ankommen
selbst aus) und welchen Titel und welche Canonical-URL das Dokument bekommt.

---

## „Find your match"

Vier Fragen, danach eine Empfehlung plus die zwei nächstbesten. Der Abschnitt
steht auf beiden Seiten und wird komplett aus `js/content.js` gebaut.

**Die Fragen** stehen unter `matcher.questions`. Jede Frage hat ein `weight`:

| Frage | Gewicht | Warum |
|---|---|---|
| Was willst du sehen? | 5 | entscheidet den Tag |
| Wie viel Zeit? | 4 | schließt Halbtages- gegen Mehrtagestouren aus |
| Wer kommt mit? | 2 | sortiert um, schließt nichts aus |
| Wie aktiv? | 2 | Stichentscheid |

**Die Zuordnung** steht bei jeder Tour im Feld `match`:

```js
match: { vibe: ['sea'], time: 'day', who: ['couple','kids','friends'], pace: 'medium' },
```

`pace` wird als Skala gewertet, nicht als Treffer oder Fehlschlag: wer „easy"
wählt und „medium" angeboten bekommt, ist ordentlich bedient, „active" nicht.
Ohne das landeten regelmäßig drei Touren auf exakt derselben Punktzahl und die
„beste" wurde durch nichts als die Reihenfolge im Array bestimmt.

Das Ergebnis zeigt unter der Empfehlung die gewählten Antworten als Chips
(„Because you said …"). Eine Empfehlung, die niemand nachprüfen kann, glaubt
auch niemand.

**Sichtbarkeit:** Der Abschnitt hat auf der Startseite einen leicht helleren
Untergrund (`--ink-1`), zwei Haarlinien und einen weichen Goldschimmer. Ohne
das lief er in „Why book direct" über, das ebenfalls dunkel ist und direkt
darauf folgt — zwei dunkle Abschnitte am Stück lasen sich als ein einziger
langer schwarzer Block, und der Matcher verlor genau die Betonung, für die er
dort steht. Verlinkt ist er außerdem im Hauptmenü, im Footer und als goldener
Knopf unter der Tourenauswahl.

**Eine neue Tour aufnehmen** heißt nur: das `match`-Feld ausfüllen. Fehlt es,
kann die Tour nie empfohlen werden — sie taucht aber ganz normal in den Listen
auf.

---

## Funktionen

- **Buchung über WhatsApp ohne Backend** — das Formular baut aus den Eingaben eine
  fertige Nachricht. Nichts wird automatisch versendet: der Gast sieht die
  Nachricht vorher und drückt selbst auf Senden.
- **Mobile First** — auf 360–430 px entworfen, Touch-Flächen ab 44 px, kein horizontales Scrollen
- **13 Touren**, sieben davon auf der Startseite, alle auf `tours.html` mit Filter nach Kategorie und Detail-Ansicht (Ablauf, Leistungen, Hinweise)
- **„Find your match"** — vier Fragen, eine Empfehlung, zwei Alternativen
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
anlegen. Danach die Adresse an fünf Stellen ändern:

| Datei | Was |
|---|---|
| `js/config.js` | `site.url` |
| `sitemap.xml` | beide `<loc>` |
| `robots.txt` | die `Sitemap:`-Zeile |
| `index.html` | `<link rel="canonical">` und `og:url` im `<head>` |
| `tours.html` | dieselben zwei Zeilen |

Die letzten beiden standen früher leer und wurden erst von JavaScript gefüllt.
Sie stehen jetzt ausgeschrieben da, damit ein Crawler sie ohne JavaScript sieht —
der Preis dafür sind genau diese zwei zusätzlichen Stellen. `js/app.js`
überschreibt sie weiterhin aus `site.url`, eine vergessene Zeile fällt also nur
im Quelltext auf, nicht im gerenderten Ergebnis.

In der Search Console ist eine neue Domain eine **neue Property** — sie muss
frisch bestätigt und die Sitemap dort noch einmal eingereicht werden. Alte und
neue Adresse laufen dann eine Weile parallel; das ist normal.

---

## SEO

**Was eingebaut ist**

- `title` und `meta description` in `js/i18n.js` (`meta.title`, `meta.description`).
  Sie stehen zusätzlich statisch in `index.html` — beide Stellen müssen gleich
  bleiben, sonst sieht ein Crawler ohne JavaScript etwas anderes als ein Besucher.
  Faustregel: Titel bis ~60 Zeichen sichtbar, Description bis ~155.
- **Strukturierte Daten** (`js/app.js` → `renderStructuredData`): `TravelAgency`
  mit Adresse, Koordinaten, Einzugsgebiet und allen 13 Touren als `Offer`, plus
  eine `FAQPage` — die aber nur auf der Startseite, weil die Fragen nur dort
  sichtbar sind und Google Markup für unsichtbare Inhalte abstraft. Prüfen unter
  [search.google.com/test/rich-results](https://search.google.com/test/rich-results).
- **Kein `aggregateRating`/`Review`-Markup** — auch jetzt nicht, wo die
  Bewertungen echt sind. Google zeigt keine Bewertungs-Rich-Results für
  „self-serving reviews", also für ein Unternehmen, das Bewertungen über sich
  selbst auf der eigenen Seite veröffentlicht. Das Markup brächte keine Sterne
  in der Suche und provoziert nur eine Warnung. Die Sterne, die zählen, stehen
  ohnehin im Google-Unternehmensprofil.
- **Tour-Deeplinks**: jede Tour hat eine eigene Adresse (`#tour-airport-transfer`),
  teilbar und mit funktionierender Zurück-Taste.
- `sitemap.xml` mit `lastmod`, `robots.txt`, `canonical`, Open Graph,
  `google-site-verification`.

**Die größte verbleibende Schwäche**

Das sind *zwei* Seiten für dreizehn Angebote. Google indexiert `#tour-…` nicht
als eigene Seiten, also konkurrieren Startseite und Tourenübersicht um alle
Suchbegriffe gleichzeitig. Wer für „lombok airport transfer" **und**
„sendang gile waterfall tour" separat ranken will, braucht echte HTML-Dateien
pro Tour (`/airport-transfer/`, `/waterfalls/` …) mit eigenem Titel, eigener
Description und eigenem Text. Das ist der mit Abstand größte Hebel, wenn die
Seite ernsthaft Traffic bringen soll — und `tours.html` zeigt, dass eine
zweite Seite mit demselben Skript keine Doppelpflege bedeutet.

### Search Console — was zu tun ist

Die Property ist bestätigt (Meta-Tag in `index.html`). Der Rest läuft in der
Oberfläche der Search Console, nicht im Repository:

1. **Sitemap (neu) einreichen** unter „Sitemaps". In eine URL-Präfix-Property
   wird der Pfad **relativ** eingetragen, also `sitemap.xml` — nicht die volle
   Adresse. Steht sie schon drin, genügt „Erneut einreichen"; die Sitemap
   enthält jetzt zwei Adressen statt einer.
2. **`tours.html` prüfen lassen:** URL-Prüfung → vollständige Adresse eingeben →
   „Indexierung beantragen". Das ist der schnellste Weg, eine neue Seite in den
   Index zu bekommen; die Sitemap allein kann Wochen dauern.
3. **Startseite ebenfalls neu prüfen lassen** — sie hat sich mit den dreizehn
   Touren inhaltlich deutlich geändert.
4. Nach 2–3 Tagen unter „Seiten" nachsehen, ob beide Adressen wirklich
   indexiert sind. Erwartbare Meldungen und was sie heißen:
   * *„Gecrawlt – zurzeit nicht indexiert"* → normal bei neuen Seiten, abwarten.
   * *„Alternative Seite mit richtigem kanonischen Tag"* → Google hat sich für
     die jeweils andere Adresse entschieden. Dann prüfen, ob sich die Texte der
     beiden Seiten zu stark ähneln.
   * *„Seite mit Weiterleitung"* → tritt hier nicht auf; wenn doch, stimmt etwas
     mit den Pages-Einstellungen nicht.
5. Nach ~2 Wochen unter „Leistung" die Suchanfragen ansehen — daraus ergeben
   sich die echten Keywords, nicht aus Vermutungen.
6. Das **Google-Unternehmensprofil** ist für einen lokalen Fahrer wichtiger als
   die Website: vollständig ausfüllen, Fotos hochladen, Gäste um echte
   Bewertungen bitten, Website-Link auf diese Adresse setzen.

**Ohne JavaScript im Quelltext sichtbar** sind Titel, Description, Canonical,
og:url und das Verification-Tag. Titel, Preise und die strukturierten Daten
schreibt `js/app.js`. Google rendert JavaScript, das funktioniert also — es
dauert nur einen Crawl länger als reines HTML. Wenn in der URL-Prüfung unter
„Gerendertes HTML" die Touren auftauchen, ist alles in Ordnung.

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

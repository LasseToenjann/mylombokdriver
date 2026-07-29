# QR-Codes zur Website

Beide Codes führen auf `https://lassetoenjann.github.io/mylombokdriver/`.

| Datei | Wofür |
|---|---|
| `qr-plain.svg` / `.png` | Schlicht, schwarz auf weiss. Für alles, was klein gedruckt oder auf fremdem Material platziert wird — Rechnungen, Aushänge, Visitenkarten Dritter. |
| `qr-brand.svg` / `.png` | Im Design der Website: Sandfarbener Grund, goldener Rahmen, Lenkrad in der Mitte. Für eigene Flyer, Autoaufkleber, Beschilderung. |

**SVG nehmen, wenn möglich** — beliebig skalierbar, gestochen scharf in jeder
Grösse. Die PNGs (1200 × 1200) sind für Fälle gedacht, in denen SVG nicht geht,
etwa Instagram oder WhatsApp.

## Getestet

Beide Codes wurden gerastert und mit zwei unabhängigen Decodern zurückgelesen —
ZBar (die Grundlage der meisten Handy-Scanner) und OpenCV — bei 120, 150, 200,
300 und 600 Pixel Kantenlänge. Alle zehn Kombinationen lesen sauber.

## Warum der gebrandete Code nicht schwarz-gold ist

Die naheliegende Variante — goldene Module auf dem schwarzen Markenhintergrund —
war der erste Versuch. Sie sah deutlich besser aus und **liess sich von keinem
Decoder lesen**. Der QR-Standard setzt dunkle Module auf hellem Grund voraus;
ein Scanner, der es nicht zusätzlich invertiert probiert, sieht schlicht nichts.
iPhones sind da oft tolerant, viele Android-Scanner nicht.

Ebenfalls verworfen, aus demselben Grund:

- **Runde Punkte statt Quadrate.** ZBar misst Lauflängen entlang von Scanlinien;
  die Lücken zwischen Punkten zerstören das 1:1:3:1:1-Verhältnis, an dem der
  Code erkannt wird.
- **Abgerundete Suchmuster** (die drei grossen Quadrate in den Ecken). Das war
  der schlimmste Fall — damit schlug die Dekodierung in *jeder* Grösse fehl.
  Genau diese drei Quadrate sucht ein Decoder als Erstes.

Geblieben ist: quadratische, aneinandergrenzende Module, unangetastete
Suchmuster, dunkel auf hellem Grund. Die Marke sitzt im sandfarbenen Feld, im
Goldrahmen und im Lenkrad — alles Stellen ohne Funktionsdaten.

## Neu erzeugen

Nötig, sobald die Website unter einer anderen Adresse läuft:

```bash
pip install qrcode
# URL oben in generate.py anpassen
python3 assets/qr/generate.py
```

Danach **testen**, bevor irgendetwas gedruckt wird — ein QR-Code, der nicht
scannt, ist schlimmer als gar keiner. Die PNGs werden nicht mitgeneriert; sie
entstehen durch Rastern der SVGs bei 1200 px.

## Vor dem Druck

- **Mindestgrösse**: 2 × 2 cm bei normalem Leseabstand. Für einen Aufkleber am
  Auto, den man aus zwei Metern scannt, eher 8 × 8 cm.
- **Die helle Ruhezone rundherum muss frei bleiben.** Sie ist Teil des Codes,
  kein Rand zum Wegschneiden.
- Nicht auf ein Foto legen und nicht einfärben.

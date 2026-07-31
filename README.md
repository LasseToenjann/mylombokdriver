# My Lombok Driver — Website

Website für **[@mylombokdriver](https://www.instagram.com/mylombokdriver)** —
privater Fahrer, Flughafentransfers, Tagestouren, Schnorcheltouren und
Speedboot-Transfers auf Lombok, Indonesien.

**Live:** <https://lassetoenjann.github.io/mylombokdriver/>

---

## Worum es sich handelt

Eine statische Website aus HTML, CSS und Vanilla-JavaScript. **Kein
Build-Schritt, keine Abhängigkeiten, kein Server** — die Dateien liegen so im
Repository, wie sie im Browser ankommen, und GitHub Pages liefert sie aus.

Sie besteht aus zwei Seiten: der Startseite mit den sieben beliebtesten
Angeboten und `tours.html` mit allen dreizehn. Alle Inhalte — Touren, Preise,
Bewertungen, FAQ, jeder Knopftext — kommen aus drei Datendateien und nicht aus
dem Markup:

| Datei | Inhalt |
|---|---|
| `js/config.js` | Kontaktdaten, Live-Adresse, Umrechnungskurs, Bewertungszahlen |
| `js/content.js` | Touren, Preise, Matcher-Fragen, Bewertungen, FAQ |
| `js/i18n.js` | alle Oberflächentexte, WhatsApp-Nachrichtenvorlage |

Gebucht wird über WhatsApp: das Formular baut aus den Eingaben eine fertige
Nachricht, die der Gast selbst absendet. Es gibt kein Backend, keine Datenbank
und keine Zahlungsabwicklung.

Die Seite ist **komplett auf Englisch**, weil die Gäste aus aller Welt kommen.

---

## 📘 Alles Weitere: [INFORMATIONEN.md](INFORMATIONEN.md)

Dort steht das gesamte Wissen aus dem Bau — Anleitungen zum Ändern von
Preisen, Fotos, Kontaktdaten und Bewertungen, die Begründung hinter jeder
Design- und Textentscheidung, die Fallen, in die wir unterwegs getappt sind,
und was zum Abschluss geprüft wurde.

**Vor jeder Änderung dort nachschlagen.** Vieles auf dieser Seite sieht
willkürlich aus und ist es nicht.

Zwei kleinere Dateien ergänzen das:

* **[CREDITS.md](CREDITS.md)** — woher jedes Foto stammt und unter welcher Lizenz
* **[images/README.md](images/README.md)** — welches Bild an welcher Tour hängt und wie man eines austauscht

---

## Lokal anschauen

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

Ein einfacher Server genügt; direktes Öffnen der Datei funktioniert
größtenteils auch, nur der Abruf der Bewertungszahlen wird dabei vom Browser
blockiert.

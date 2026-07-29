/* ============================================================================
   MY LOMBOK DRIVER — CONTENT
   ----------------------------------------------------------------------------
   Tours, prices, gallery captions, reviews and FAQ. Every text carries an
   English (en) and a German (de) version.

   Prices are in Indonesian Rupiah (IDR), as a whole number, no dots.
   unit: 'car'    -> price is per vehicle (up to 6 guests)
         'person' -> price is per person
         'ask'    -> no price shown, "on request" instead

   ### TODO ###  UNCONFIRMED PRICES
   Every price below is a typical market rate researched for Lombok, NOT a rate
   quoted by the driver. They have not been confirmed yet. Before the site is
   advertised to guests, go through them with the driver and correct them.
   If a price cannot be confirmed in time, set that tour to unit: 'ask' — the
   card then reads "on request" instead of promising a figure.
   ========================================================================== */

window.MLD_CONTENT = {

  /* --------------------------------------------------------------------- */
  /* Why guests book directly                                              */
  /* --------------------------------------------------------------------- */
  values: [
    {
      icon: 'local',
      title: { en: 'Born and raised on Lombok',
               de: 'Auf Lombok geboren und aufgewachsen' },
      text:  { en: 'Not an agency reselling your day. A local driver who knows which viewpoint is empty at 9 a.m. and which road washed out last rainy season.',
               de: 'Keine Agentur, die deinen Tag weiterverkauft. Ein einheimischer Fahrer, der weiss, welcher Aussichtspunkt um 9 Uhr leer ist und welche Strasse die letzte Regenzeit weggespült hat.' }
    },
    {
      icon: 'price',
      title: { en: 'One fixed price, agreed up front',
               de: 'Ein Festpreis, vorher vereinbart' },
      text:  { en: 'Fuel, parking, tolls and the driver are always included. No meter, no detour to a "friend’s" shop, no surprise at the end of the day.',
               de: 'Sprit, Parken, Maut und Fahrer sind immer drin. Kein Taxameter, kein Umweg zum Laden eines „Freundes", keine Überraschung am Ende des Tages.' }
    },
    {
      icon: 'clock',
      title: { en: 'Your itinerary, not a fixed route',
               de: 'Dein Ablauf, keine feste Route' },
      text:  { en: 'Want to stay an extra hour at the waterfall or skip the market? Just say so. The day is planned around you, not around a schedule.',
               de: 'Noch eine Stunde am Wasserfall bleiben oder den Markt auslassen? Sag einfach Bescheid. Der Tag richtet sich nach dir, nicht nach einem Fahrplan.' }
    },
    {
      icon: 'car',
      title: { en: 'Clean, air-conditioned car',
               de: 'Sauberes, klimatisiertes Auto' },
      text:  { en: 'A well kept MPV with real air conditioning, cold water on board, space for luggage and surfboards, and a child seat whenever you need one.',
               de: 'Ein gepflegter MPV mit echter Klimaanlage, kaltem Wasser an Bord, Platz für Gepäck und Surfboards und auf Wunsch ein Kindersitz.' }
    },
    {
      icon: 'chat',
      title: { en: 'English speaking, answers fast',
               de: 'Englischsprachig, antwortet schnell' },
      text:  { en: 'Message on WhatsApp, any hour of the day, and you get a real answer from the person who will actually drive you — usually within the hour.',
               de: 'Schreib auf WhatsApp, zu jeder Tages- und Nachtzeit, und du bekommst eine echte Antwort von der Person, die dich auch fährt — meist innerhalb einer Stunde.' }
    },
    {
      icon: 'shield',
      title: { en: 'Safe, unhurried driving',
               de: 'Sicher und ohne Hektik' },
      text:  { en: 'Lombok’s roads reward patience. Seat belts, sensible speeds, and a stop whenever somebody needs a break or a photo.',
               de: 'Lomboks Strassen belohnen Geduld. Anschnallen, vernünftiges Tempo und ein Stopp, wann immer jemand eine Pause oder ein Foto braucht.' }
    }
  ],

  /* --------------------------------------------------------------------- */
  /* Tours & transfers                                                      */
  /* --------------------------------------------------------------------- */
  categories: [
    { id: 'all',       label: { en: 'Everything',        de: 'Alles' } },
    { id: 'transfers', label: { en: 'Transfers',         de: 'Transfers' } },
    { id: 'tours',     label: { en: 'Day tours',         de: 'Tagestouren' } },
    { id: 'islands',   label: { en: 'Islands & sea',     de: 'Inseln & Meer' } }
  ],

  tours: [
    {
      id: 'airport-transfer',
      cats: ['transfers'],
      scene: 'kuta-coast.webp',
      price: 300000, unit: 'car',
      duration: { en: '30–90 min', de: '30–90 Min.' },
      title:  { en: 'Airport Transfer', de: 'Flughafentransfer' },
      short:  { en: 'Met at arrivals with a name sign, bags carried, cold water in the car — and a fixed price to any hotel on Lombok.',
                de: 'Empfang in der Ankunftshalle mit Namensschild, Gepäckhilfe, kaltes Wasser im Auto — und ein Festpreis zu jedem Hotel auf Lombok.' },
      long:   { en: 'Lombok International Airport (LOP) sits in the south, so most hotels are still one to two hours away. Send your flight number when you book and your arrival is tracked: if the plane is late, the waiting time is free. Your driver stands in the public arrivals area with a sign showing your name, helps with the luggage and takes you straight to your door — Senggigi, Kuta, Mataram, Bangsal harbour for the Gilis, or anywhere else on the island.',
                de: 'Lombok International Airport (LOP) liegt im Süden, die meisten Hotels sind also noch ein bis zwei Stunden entfernt. Schick bei der Buchung deine Flugnummer mit, dann wird die Ankunft verfolgt: Bei Verspätung ist die Wartezeit kostenlos. Dein Fahrer steht mit Namensschild im öffentlichen Ankunftsbereich, hilft beim Gepäck und bringt dich direkt vor die Tür — Senggigi, Kuta, Mataram, Hafen Bangsal für die Gilis oder sonst wohin auf der Insel.' },
      highlights: [
        { en: 'Flight tracked — free waiting time if you are delayed', de: 'Flug wird verfolgt — kostenlose Wartezeit bei Verspätung' },
        { en: 'Name sign in the arrivals hall', de: 'Namensschild in der Ankunftshalle' },
        { en: 'Up to 6 guests plus luggage', de: 'Bis zu 6 Gäste plus Gepäck' },
        { en: 'Also available for your departure, at any hour', de: 'Auch für den Rückflug, zu jeder Uhrzeit' }
      ],
      includes: [
        { en: 'Driver, fuel, parking and tolls', de: 'Fahrer, Sprit, Parken und Maut' },
        { en: 'Chilled bottled water', de: 'Gekühltes Wasser' },
        { en: 'Child seat on request, free', de: 'Kindersitz auf Wunsch, kostenlos' }
      ],
      note: { en: 'Price is for the south of the island (Kuta area). Senggigi, Bangsal and the north are a little more — ask for your exact hotel.',
              de: 'Der Preis gilt für den Süden der Insel (Region Kuta). Senggigi, Bangsal und der Norden kosten etwas mehr — frag für dein genaues Hotel nach.' }
    },
    {
      id: 'gili-snorkeling',
      cats: ['islands'],
      scene: 'gili-shallows.webp',
      price: 450000, unit: 'person',
      duration: { en: 'Full day, approx. 8 h', de: 'Ganzer Tag, ca. 8 Std.' },
      title:  { en: 'Gili Islands Snorkelling Trip', de: 'Schnorcheltour Gili-Inseln' },
      short:  { en: 'Three snorkelling stops around Gili Trawangan, Meno and Air — turtles, the underwater statues and a coral garden.',
                de: 'Drei Schnorchelstopps rund um Gili Trawangan, Meno und Air — Schildkröten, die Unterwasser-Statuen und ein Korallengarten.' },
      long:   { en: 'Picked up at your hotel in the morning, driven to the harbour and out on a local boat for the classic three-island route. The turtle point off Gili Meno is the highlight for most guests — green turtles here are used to swimmers and simply carry on grazing. You also stop at the underwater statue circle and a shallow coral garden that works for beginners. Lunch on Gili Air or Trawangan, free time on the beach, and back to your hotel in the late afternoon.',
                de: 'Morgens Abholung am Hotel, Fahrt zum Hafen und mit einem lokalen Boot raus auf die klassische Drei-Inseln-Route. Der Turtle Point vor Gili Meno ist für die meisten Gäste das Highlight — die Suppenschildkröten hier sind Schwimmer gewohnt und grasen einfach weiter. Dazu der Kreis der Unterwasser-Statuen und ein flacher Korallengarten, der auch für Anfänger passt. Mittagessen auf Gili Air oder Trawangan, freie Zeit am Strand, am späten Nachmittag zurück zum Hotel.' },
      highlights: [
        { en: 'Green turtles at the Gili Meno turtle point', de: 'Suppenschildkröten am Turtle Point Gili Meno' },
        { en: 'The underwater statues ("Nest")', de: 'Die Unterwasser-Statuen („Nest")' },
        { en: 'Shallow coral garden, fine for first-timers', de: 'Flacher Korallengarten, auch für Anfänger' },
        { en: 'Beach time and lunch on a Gili', de: 'Strandzeit und Mittagessen auf einer Gili' }
      ],
      includes: [
        { en: 'Hotel pick-up and drop-off', de: 'Abholung und Rückfahrt zum Hotel' },
        { en: 'Boat, mask, snorkel and fins', de: 'Boot, Maske, Schnorchel und Flossen' },
        { en: 'Life jacket and boat crew', de: 'Schwimmweste und Bootscrew' },
        { en: 'Drinking water and fresh fruit', de: 'Trinkwasser und frisches Obst' }
      ],
      note: { en: 'Lunch and the island entrance fee are paid on the spot. Bring reef-safe sunscreen — it makes a real difference here.',
              de: 'Mittagessen und Inselgebühr werden vor Ort bezahlt. Bring riff-freundliche Sonnencreme mit — das macht hier wirklich einen Unterschied.' }
    },
    {
      id: 'speedboat-gili',
      cats: ['transfers', 'islands'],
      scene: 'gili-boat.webp',
      price: 200000, unit: 'person',
      duration: { en: '15–30 min crossing', de: '15–30 Min. Überfahrt' },
      title:  { en: 'Lombok – Gili Fast Boat', de: 'Speedboot Lombok – Gili' },
      short:  { en: 'Car to the harbour, ticket in your hand, boat to Gili Trawangan, Meno or Air. One booking instead of three.',
                de: 'Auto zum Hafen, Ticket in der Hand, Boot nach Gili Trawangan, Meno oder Air. Eine Buchung statt drei.' },
      long:   { en: 'Getting to the Gilis is easy once somebody has done the harbour part for you. You are collected at your hotel, driven to Bangsal or Teluk Nara, and your boat ticket is arranged before you arrive — no queue, no negotiating on the pier, no porters insisting on carrying your bag. The crossing takes 15 to 30 minutes depending on the island. The same works in reverse, and the car can be waiting for you on the day you come back.',
                de: 'Der Weg auf die Gilis ist unkompliziert, sobald jemand den Hafenteil für dich übernimmt. Du wirst am Hotel abgeholt, nach Bangsal oder Teluk Nara gefahren, und dein Bootsticket ist organisiert, bevor du ankommst — keine Schlange, kein Verhandeln am Pier, keine Träger, die dir die Tasche abnehmen wollen. Die Überfahrt dauert je nach Insel 15 bis 30 Minuten. Das Ganze klappt auch in die andere Richtung, und das Auto kann am Rückreisetag auf dich warten.' },
      highlights: [
        { en: 'Boat ticket arranged before you arrive', de: 'Bootsticket ist vor deiner Ankunft organisiert' },
        { en: 'No haggling and no porter pressure at the pier', de: 'Kein Feilschen und kein Träger-Druck am Pier' },
        { en: 'Works for all three Gilis, both directions', de: 'Für alle drei Gilis, in beide Richtungen' },
        { en: 'Luggage stays with you', de: 'Dein Gepäck bleibt bei dir' }
      ],
      includes: [
        { en: 'Hotel pick-up anywhere in west or central Lombok', de: 'Abholung überall in West- oder Zentral-Lombok' },
        { en: 'Boat ticket and harbour fee', de: 'Bootsticket und Hafengebühr' },
        { en: 'Help with luggage on and off the boat', de: 'Gepäckhilfe beim Ein- und Aussteigen' }
      ],
      note: { en: 'Boat price per person, car transfer to the harbour quoted separately by distance.',
              de: 'Bootspreis pro Person, die Autofahrt zum Hafen wird je nach Entfernung separat berechnet.' }
    },
    {
      id: 'waterfalls-north',
      cats: ['tours'],
      scene: 'waterfall.webp',
      price: 800000, unit: 'car',
      duration: { en: 'Full day, approx. 9 h', de: 'Ganzer Tag, ca. 9 Std.' },
      title:  { en: 'Sendang Gile & Tiu Kelep Waterfalls', de: 'Wasserfälle Sendang Gile & Tiu Kelep' },
      short:  { en: 'The two great waterfalls on Rinjani’s northern slope, plus the monkey forest on the Pusuk pass.',
                de: 'Die zwei grossen Wasserfälle an Rinjanis Nordhang, dazu der Affenwald am Pusuk-Pass.' },
      long:   { en: 'North through the Pusuk pass, where the road curls through jungle and long-tailed macaques sit on the crash barriers waiting for an audience. Then on to Senaru: Sendang Gile drops in two stages a few minutes from the entrance, and a further 30-minute walk — a shallow river crossing, so wear something you do not mind soaking — brings you to Tiu Kelep, the wide one people come back for. Local guides at the gate know the path in any weather. Back along the coast road with a stop wherever the light is good.',
                de: 'Nordwärts über den Pusuk-Pass, wo sich die Strasse durch den Dschungel windet und Javaneraffen auf den Leitplanken auf Publikum warten. Weiter nach Senaru: Sendang Gile stürzt wenige Minuten vom Eingang entfernt in zwei Stufen herab, und ein weiterer 30-minütiger Weg — mit flacher Flussdurchquerung, also zieh etwas an, das nass werden darf — führt zu Tiu Kelep, dem breiten, wegen dem man wiederkommt. Die lokalen Guides am Eingang kennen den Pfad bei jedem Wetter. Zurück über die Küstenstrasse, mit Stopp überall dort, wo das Licht gut ist.' },
      highlights: [
        { en: 'Sendang Gile — five minutes from the car park', de: 'Sendang Gile — fünf Minuten vom Parkplatz' },
        { en: 'Tiu Kelep — 30 minutes on foot through the forest', de: 'Tiu Kelep — 30 Minuten zu Fuss durch den Wald' },
        { en: 'Monkey forest on the Pusuk pass', de: 'Affenwald am Pusuk-Pass' },
        { en: 'Rice terrace and coastline photo stops', de: 'Fotostopps an Reisterrassen und Küste' }
      ],
      includes: [
        { en: 'Private car and driver for the whole day', de: 'Privates Auto mit Fahrer für den ganzen Tag' },
        { en: 'Fuel, parking and all road fees', de: 'Sprit, Parken und alle Strassengebühren' },
        { en: 'Chilled water for everyone', de: 'Gekühltes Wasser für alle' }
      ],
      note: { en: 'National park entrance and the local waterfall guide are paid at the gate, roughly IDR 30,000 per person.',
              de: 'Nationalpark-Eintritt und der örtliche Wasserfall-Guide werden am Eingang bezahlt, ungefähr 30.000 IDR pro Person.' }
    },
    {
      id: 'rinjani-sembalun',
      cats: ['tours'],
      scene: 'rinjani.webp',
      price: 900000, unit: 'car',
      duration: { en: 'Full day, approx. 10 h', de: 'Ganzer Tag, ca. 10 Std.' },
      title:  { en: 'Sembalun Valley & Rinjani Viewpoints', de: 'Sembalun-Tal & Rinjani-Aussichtspunkte' },
      short:  { en: 'The volcano without the two-day climb: Bukit Selong, the Sembalun valley and the famous switchback road.',
                de: 'Der Vulkan ohne den Zwei-Tages-Aufstieg: Bukit Selong, das Sembalun-Tal und die berühmte Serpentinenstrasse.' },
      long:   { en: 'You do not have to trek Rinjani to stand in front of it. An early start gets you to the east side before the cloud builds. From Bukit Selong the patchwork of garlic and rice fields spreads out below with the volcano behind it — the picture most people have in mind when they think of Lombok. The road up through Pusuk Sembalun bends back on itself again and again with viewpoints at almost every turn, and the valley villages still feel unhurried. On a clear afternoon you can add the Rinjani trailhead at Sembalun Lawang.',
                de: 'Man muss den Rinjani nicht besteigen, um vor ihm zu stehen. Ein früher Start bringt dich auf die Ostseite, bevor sich die Wolken aufbauen. Vom Bukit Selong breitet sich unten das Flickenteppich-Muster aus Knoblauch- und Reisfeldern aus, dahinter der Vulkan — genau das Bild, das die meisten im Kopf haben, wenn sie an Lombok denken. Die Strasse hinauf über den Pusuk Sembalun schlängelt sich in immer neuen Kehren nach oben, mit Aussichtspunkten an fast jeder Kurve, und die Dörfer im Tal wirken noch immer entschleunigt. An einem klaren Nachmittag lässt sich der Rinjani-Startpunkt in Sembalun Lawang anhängen.' },
      highlights: [
        { en: 'Bukit Selong viewpoint over the rice patchwork', de: 'Aussichtspunkt Bukit Selong über den Reisfeld-Flickenteppich' },
        { en: 'The Pusuk Sembalun switchback road', de: 'Die Serpentinenstrasse Pusuk Sembalun' },
        { en: 'Sembalun village life and strawberry fields', de: 'Dorfleben in Sembalun und Erdbeerfelder' },
        { en: 'Early start to beat the cloud on the summit', de: 'Früher Start, bevor der Gipfel in Wolken verschwindet' }
      ],
      includes: [
        { en: 'Private car and driver, 10 hours', de: 'Privates Auto mit Fahrer, 10 Stunden' },
        { en: 'Fuel, parking and all road fees', de: 'Sprit, Parken und alle Strassengebühren' },
        { en: 'Chilled water for everyone', de: 'Gekühltes Wasser für alle' }
      ],
      note: { en: 'Best between April and October. Bring a light jacket — Sembalun sits at 1,150 m and mornings are genuinely cool.',
              de: 'Am besten zwischen April und Oktober. Nimm eine leichte Jacke mit — Sembalun liegt auf 1.150 m, morgens ist es wirklich frisch.' }
    },
    {
      id: 'south-sasak',
      cats: ['tours'],
      scene: 'selong-belanak.webp',
      price: 750000, unit: 'car',
      duration: { en: 'Full day, approx. 9 h', de: 'Ganzer Tag, ca. 9 Std.' },
      title:  { en: 'Sasak Culture & the South Coast', de: 'Sasak-Kultur & Südküste' },
      short:  { en: 'Sade village, the weavers of Sukarara, then the bays of Kuta, Tanjung Aan and Merese hill at sunset.',
                de: 'Dorf Sade, die Weberinnen von Sukarara, dann die Buchten von Kuta, Tanjung Aan und der Merese-Hügel bei Sonnenuntergang.' },
      long:   { en: 'The Sasak are Lombok’s own people, and the south is where that is easiest to see. Sade is a working village of bamboo and thatch houses where the floors are still sealed the traditional way; a villager walks you through it and explains rather than performs. In Sukarara the songket weaving takes weeks per cloth and you can sit at the loom yourself. Then the coast: the wide white curve of Tanjung Aan, the fishing boats at Kuta, and Merese hill for the last hour of light, when the whole coastline turns gold.',
                de: 'Die Sasak sind Lomboks eigene Bevölkerung, und im Süden sieht man das am deutlichsten. Sade ist ein bewohntes Dorf aus Bambus- und Reetdachhäusern, in dem die Böden noch traditionell versiegelt werden; ein Dorfbewohner führt dich hindurch und erklärt, statt vorzuführen. In Sukarara dauert eine Songket-Webarbeit Wochen pro Tuch, und du kannst dich selbst an den Webstuhl setzen. Dann die Küste: der weite weisse Bogen von Tanjung Aan, die Fischerboote von Kuta und der Merese-Hügel in der letzten Stunde Licht, wenn die ganze Küste golden wird.' },
      highlights: [
        { en: 'Sade — a living Sasak village, not a museum', de: 'Sade — ein bewohntes Sasak-Dorf, kein Museum' },
        { en: 'Songket weaving in Sukarara', de: 'Songket-Weberei in Sukarara' },
        { en: 'Tanjung Aan and the pepper-grain sand', de: 'Tanjung Aan und der pfefferkorn-artige Sand' },
        { en: 'Sunset from Merese hill', de: 'Sonnenuntergang vom Merese-Hügel' }
      ],
      includes: [
        { en: 'Private car and driver for the whole day', de: 'Privates Auto mit Fahrer für den ganzen Tag' },
        { en: 'Fuel, parking and all road fees', de: 'Sprit, Parken und alle Strassengebühren' },
        { en: 'Chilled water for everyone', de: 'Gekühltes Wasser für alle' }
      ],
      note: { en: 'Village donations are small and go to the community. Nobody will push you to buy anything.',
              de: 'Die Dorfspenden sind gering und kommen der Gemeinschaft zugute. Niemand drängt dich, etwas zu kaufen.' }
    },
    {
      id: 'pink-beach',
      cats: ['tours', 'islands'],
      scene: 'tanjung-bloam.webp',
      price: 950000, unit: 'car',
      duration: { en: 'Full day, approx. 10 h', de: 'Ganzer Tag, ca. 10 Std.' },
      title:  { en: 'Pink Beach & the Wild South East', de: 'Pink Beach & der wilde Südosten' },
      short:  { en: 'The coral-pink sand of Tangsi, a snorkel stop by boat and the cliffs of Tanjung Ringgit.',
                de: 'Der korallenrosa Sand von Tangsi, ein Schnorchelstopp per Boot und die Klippen von Tanjung Ringgit.' },
      long:   { en: 'The long way east, past salt pans and tobacco fields, to a corner of Lombok most visitors never reach. Pink Beach gets its colour from red coral ground into the white sand — strongest when the sand is wet, so the morning is the time to be there. A small boat takes you around the headland to snorkel and, if you want, on to the empty beaches further east. Tanjung Ringgit adds high cliffs, a Japanese cave from the war and a view straight across to Sumbawa.',
                de: 'Der weite Weg nach Osten, vorbei an Salzfeldern und Tabakplantagen, in eine Ecke Lomboks, die die meisten Besucher nie erreichen. Pink Beach verdankt seine Farbe roten Korallen, die im weissen Sand zerrieben sind — am stärksten, wenn der Sand nass ist, der Vormittag ist also die richtige Zeit. Ein kleines Boot bringt dich um die Landzunge zum Schnorcheln und, wenn du magst, weiter zu den leeren Stränden im Osten. Tanjung Ringgit ergänzt hohe Klippen, eine japanische Höhle aus dem Krieg und den Blick hinüber nach Sumbawa.' },
      highlights: [
        { en: 'Pink sand at Tangsi beach', de: 'Rosa Sand am Strand von Tangsi' },
        { en: 'Boat trip to a quiet snorkel spot', de: 'Bootsfahrt zu einem ruhigen Schnorchelplatz' },
        { en: 'Tanjung Ringgit cliffs and the Japanese cave', de: 'Klippen von Tanjung Ringgit und die japanische Höhle' },
        { en: 'A long drive through an untouristed east', de: 'Eine lange Fahrt durch den untouristischen Osten' }
      ],
      includes: [
        { en: 'Private car and driver, 10 hours', de: 'Privates Auto mit Fahrer, 10 Stunden' },
        { en: 'Fuel, parking and all road fees', de: 'Sprit, Parken und alle Strassengebühren' },
        { en: 'Chilled water for everyone', de: 'Gekühltes Wasser für alle' }
      ],
      note: { en: 'The local boat and snorkel gear are paid at the beach. The last stretch of road is rough — worth it, but not a smooth ride.',
              de: 'Das lokale Boot und die Schnorchelausrüstung werden am Strand bezahlt. Das letzte Stück Strasse ist rau — es lohnt sich, aber es ist keine glatte Fahrt.' }
    },
    {
      id: 'gili-day-trip',
      cats: ['islands'],
      scene: 'tanjung-aan.webp',
      price: 600000, unit: 'person',
      duration: { en: 'Full day, approx. 9 h', de: 'Ganzer Tag, ca. 9 Std.' },
      title:  { en: 'Gili Trawangan Day Trip', de: 'Tagesausflug Gili Trawangan' },
      short:  { en: 'A day on the car-free island: bicycle, the sea swing, sunset on the west side and back the same evening.',
                de: 'Ein Tag auf der autofreien Insel: Fahrrad, die Meeresschaukel, Sonnenuntergang im Westen und abends zurück.' },
      long:   { en: 'No cars, no motorbikes, no traffic noise — just horse carts, bicycles and a coastline you can ride around in ninety minutes. You are driven to the harbour, put on the boat and met again in the evening. Rent a bike at the pier, find the sea swings on the west shore, eat at the night market, and be back on the mainland before bedtime. It also works as a first look before deciding whether to stay a few nights.',
                de: 'Keine Autos, keine Motorräder, kein Verkehrslärm — nur Pferdekutschen, Fahrräder und eine Küste, die man in anderthalb Stunden umrunden kann. Du wirst zum Hafen gefahren, aufs Boot gebracht und abends wieder abgeholt. Miete am Pier ein Rad, such die Meeresschaukeln an der Westküste, iss auf dem Nachtmarkt und sei vor dem Schlafengehen zurück auf dem Festland. Funktioniert auch gut als erster Eindruck, bevor du entscheidest, ob du ein paar Nächte bleibst.' },
      highlights: [
        { en: 'The sea swings on the west coast', de: 'Die Meeresschaukeln an der Westküste' },
        { en: 'Sunset over Bali and Mount Agung', de: 'Sonnenuntergang über Bali und dem Gunung Agung' },
        { en: 'Snorkelling straight off the beach', de: 'Schnorcheln direkt vom Strand aus' },
        { en: 'Night market for dinner before the boat back', de: 'Nachtmarkt zum Abendessen vor der Rückfahrt' }
      ],
      includes: [
        { en: 'Hotel pick-up and evening drop-off', de: 'Abholung am Hotel und Rückfahrt am Abend' },
        { en: 'Return boat ticket and harbour fee', de: 'Bootsticket hin und zurück plus Hafengebühr' },
        { en: 'Chilled water for the drive', de: 'Gekühltes Wasser für die Fahrt' }
      ],
      note: { en: 'Bicycle rental, food and drinks on the island are your own. The last boats back leave in the early evening.',
              de: 'Fahrradmiete, Essen und Getränke auf der Insel gehen auf eigene Rechnung. Die letzten Boote zurück fahren am frühen Abend.' }
    }
  ],

  /* --------------------------------------------------------------------- */
  /* Gallery                                                                */
  /* --------------------------------------------------------------------- */
  gallery: [
    { scene: 'hero.webp',           caption: { en: 'The west coast near Nipah, with Bali on the horizon', de: 'Die Westküste bei Nipah, am Horizont Bali' } },
    { scene: 'gili-shallows.webp',  caption: { en: 'Clear water off the Gili Islands',                    de: 'Klares Wasser vor den Gili-Inseln' } },
    { scene: 'rinjani.webp',        caption: { en: 'Mount Rinjani seen across the bay',                   de: 'Der Rinjani über die Bucht gesehen' } },
    { scene: 'waterfall.webp',      caption: { en: 'Tiu Kelep waterfall, Senaru',                         de: 'Wasserfall Tiu Kelep, Senaru' } },
    { scene: 'kuta-coast.webp',     caption: { en: 'Merese hill and the bays around Kuta',                de: 'Merese-Hügel und die Buchten um Kuta' } },
    { scene: 'gili-boat.webp',      caption: { en: 'Boats on the beach, Gili Trawangan',                  de: 'Boote am Strand, Gili Trawangan' } },
    { scene: 'tanjung-aan.webp',    caption: { en: 'Turquoise shallows on the south coast',               de: 'Türkises Flachwasser an der Südküste' } },
    { scene: 'selong-belanak.webp', caption: { en: 'The long sweep of Selong Belanak',                    de: 'Der weite Bogen von Selong Belanak' } },
    { scene: 'tanjung-bloam.webp',  caption: { en: 'A quiet cove in the south east',                      de: 'Eine stille Bucht im Südosten' } },
    { scene: 'waterfall-tall.webp', caption: { en: 'Rainforest on the northern slope of Rinjani',         de: 'Regenwald am Nordhang des Rinjani' } }
  ],

  /* --------------------------------------------------------------------- */
  /* Reviews                                                                */
  /* --------------------------------------------------------------------- */
  /*  !!  SAMPLE TEXTS  !!
      These are placeholders so you can see the layout. Replace them with real
      quotes from Google or Instagram before the site goes live — publishing
      invented reviews is misleading and, in the EU, illegal.
      See README.md, section "Replacing the sample reviews".                */
  reviews: [
    {
      sample: true,
      name: 'Sample review 1',
      origin: { en: 'Google review', de: 'Google-Bewertung' },
      rating: 5,
      text: { en: 'Replace this text with a real review. Keep it to two or three sentences — the specific detail is what convinces the next reader.',
              de: 'Ersetze diesen Text durch eine echte Bewertung. Zwei bis drei Sätze reichen — das konkrete Detail überzeugt die nächste Leserin.' }
    },
    {
      sample: true,
      name: 'Sample review 2',
      origin: { en: 'Google review', de: 'Google-Bewertung' },
      rating: 5,
      text: { en: 'Replace this text with a real review. Mention where the guest travelled from if they are happy for you to.',
              de: 'Ersetze diesen Text durch eine echte Bewertung. Nenne, woher der Gast angereist ist, wenn er einverstanden ist.' }
    },
    {
      sample: true,
      name: 'Sample review 3',
      origin: { en: 'Instagram message', de: 'Instagram-Nachricht' },
      rating: 5,
      text: { en: 'Replace this text with a real review. Ask guests for one on the drive back to the airport — that is when they are most willing.',
              de: 'Ersetze diesen Text durch eine echte Bewertung. Frag Gäste auf der Rückfahrt zum Flughafen danach — dann ist die Bereitschaft am grössten.' }
    },
    {
      sample: true,
      name: 'Sample review 4',
      origin: { en: 'Google review', de: 'Google-Bewertung' },
      rating: 5,
      text: { en: 'Replace this text with a real review. Four to six good reviews are plenty; more than that and nobody reads them.',
              de: 'Ersetze diesen Text durch eine echte Bewertung. Vier bis sechs gute Bewertungen reichen völlig; mehr liest ohnehin niemand.' }
    }
  ],

  /* --------------------------------------------------------------------- */
  /* FAQ                                                                    */
  /* --------------------------------------------------------------------- */
  faq: [
    {
      q: { en: 'How do I book?', de: 'Wie buche ich?' },
      a: { en: 'Use the form on this page — it writes a complete WhatsApp message for you, with your dates, group size and hotel already filled in. You send it, you get a price and a confirmation back. No deposit, no online payment, no account.',
           de: 'Nutze das Formular auf dieser Seite — es schreibt dir eine fertige WhatsApp-Nachricht mit Datum, Gruppengrösse und Hotel. Du schickst sie ab und bekommst Preis und Bestätigung zurück. Keine Anzahlung, keine Online-Zahlung, kein Konto.' }
    },
    {
      q: { en: 'How do I pay?', de: 'Wie bezahle ich?' },
      a: { en: 'Cash in Indonesian Rupiah at the end of the day or the transfer is the simplest. Bank transfer works too, and there are ATMs at the airport and in every town. The price agreed on WhatsApp is the price you pay.',
           de: 'Am einfachsten bar in indonesischen Rupiah am Ende des Tages bzw. des Transfers. Banküberweisung geht auch, und Geldautomaten gibt es am Flughafen und in jeder Stadt. Der auf WhatsApp vereinbarte Preis ist der Preis, den du zahlst.' }
    },
    {
      q: { en: 'What if my flight is delayed?', de: 'Was, wenn mein Flug Verspätung hat?' },
      a: { en: 'Send your flight number when you book and the arrival is tracked. Waiting time for a delayed flight is free — you will not be left standing and you will not be charged extra.',
           de: 'Schick bei der Buchung deine Flugnummer mit, dann wird die Ankunft verfolgt. Wartezeit bei Flugverspätung ist kostenlos — du stehst nicht allein da und zahlst nichts drauf.' }
    },
    {
      q: { en: 'Can I cancel?', de: 'Kann ich stornieren?' },
      a: { en: 'Yes. Cancel free of charge up to 24 hours before the pick-up, just send a message. Nothing is paid in advance, so there is nothing to refund. Weather ruining a boat day is never charged.',
           de: 'Ja. Bis 24 Stunden vor der Abholung kostenlos, eine Nachricht genügt. Es wird nichts im Voraus bezahlt, es gibt also nichts zurückzuerstatten. Wenn das Wetter einen Bootstag unmöglich macht, wird nie etwas berechnet.' }
    },
    {
      q: { en: 'How many people fit in the car?', de: 'Wie viele Personen passen ins Auto?' },
      a: { en: 'Up to six guests plus luggage in an air-conditioned MPV. For larger groups a second car with a second driver is arranged at the same rate — just say how many you are.',
           de: 'Bis zu sechs Gäste plus Gepäck in einem klimatisierten MPV. Für grössere Gruppen wird ein zweites Auto mit zweitem Fahrer zum gleichen Tarif organisiert — sag einfach, wie viele ihr seid.' }
    },
    {
      q: { en: 'Do you have child seats?', de: 'Gibt es Kindersitze?' },
      a: { en: 'Yes, free of charge. Tell me the age of the child when you book so the right seat is in the car. Families are very welcome — the itinerary is easily shortened for small children.',
           de: 'Ja, kostenlos. Sag bei der Buchung das Alter des Kindes, damit der passende Sitz im Auto ist. Familien sind sehr willkommen — der Ablauf lässt sich für kleine Kinder problemlos kürzen.' }
    },
    {
      q: { en: 'Are the tours fixed, or can I change them?', de: 'Sind die Touren fest oder kann ich sie ändern?' },
      a: { en: 'Change them. The tours on this page are the routes guests ask for most often, not a package. Mix two of them, drop a stop, add a warung somebody recommended — it is your day.',
           de: 'Ändere sie. Die Touren auf dieser Seite sind die am häufigsten gewünschten Routen, kein Paket. Kombiniere zwei, lass einen Stopp weg, hänge ein empfohlenes Warung an — es ist dein Tag.' }
    },
    {
      q: { en: 'Do the prices include entrance fees and lunch?', de: 'Sind Eintritte und Mittagessen im Preis?' },
      a: { en: 'The price covers the car, driver, fuel, parking, tolls and water. Park entrances, local guides, boats and food are paid on the spot and stay with the people providing them. Every tour on this page lists exactly what is extra.',
           de: 'Der Preis deckt Auto, Fahrer, Sprit, Parken, Maut und Wasser ab. Parkeintritte, lokale Guides, Boote und Essen werden vor Ort bezahlt und bleiben bei den Menschen, die sie anbieten. Bei jeder Tour auf dieser Seite steht genau, was extra ist.' }
    },
    {
      q: { en: 'Can you drive us for several days?', de: 'Könnt ihr uns mehrere Tage fahren?' },
      a: { en: 'That is the nicest way to see Lombok. Multi-day itineraries — including an overnight on the Gilis or a run around the whole island — are priced per day and get cheaper the longer you book. Send your dates and what you would like to see.',
           de: 'Das ist die schönste Art, Lombok zu sehen. Mehrtägige Routen — inklusive Übernachtung auf den Gilis oder einer Runde um die ganze Insel — werden pro Tag berechnet und werden günstiger, je länger du buchst. Schick deine Daten und was du sehen möchtest.' }
    }
  ]
};

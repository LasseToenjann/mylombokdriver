/* ============================================================================
   MY LOMBOK DRIVER — CONTENT
   ----------------------------------------------------------------------------
   Tours, prices, gallery captions, reviews and FAQ. The site is English only,
   so every text here is a plain string — edit it and it is live.

   Prices are in Indonesian Rupiah (IDR), as a whole number, no dots.
   unit: 'car'    -> price is per vehicle (up to 4 guests)
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
      title: 'Born and raised on Lombok',
      text:  'Not an agency reselling your day. A local driver who knows which viewpoint is empty at 9 a.m. and which road washed out last rainy season.'
    },
    {
      icon: 'price',
      title: 'One fixed price, agreed up front',
      text:  'Fuel, parking, tolls and the driver are always included. No meter, no detour to a "friend’s" shop, no surprise at the end of the day.'
    },
    {
      icon: 'clock',
      title: 'Your itinerary, not a fixed route',
      text:  'Want to stay an extra hour at the waterfall or skip the market? Just say so. The day is planned around you, not around a schedule.'
    },
    {
      icon: 'car',
      title: 'Clean, air-conditioned car',
      text:  'A well kept car with real air conditioning, cold water on board, space for luggage and surfboards, and a child seat whenever you need one.'
    },
    {
      icon: 'chat',
      title: 'English speaking, answers fast',
      text:  'Message on WhatsApp, any hour of the day, and you get a real answer from the person who will actually drive you — usually within the hour.'
    },
    {
      icon: 'shield',
      title: 'Safe, unhurried driving',
      text:  'Lombok’s roads reward patience. Seat belts, sensible speeds, and a stop whenever somebody needs a break or a photo.'
    }
  ],

  /* --------------------------------------------------------------------- */
  /* Tours & transfers                                                      */
  /* --------------------------------------------------------------------- */
  categories: [
    { id: 'all',       label: 'Everything' },
    { id: 'transfers', label: 'Transfers' },
    { id: 'tours',     label: 'Day tours' },
    { id: 'islands',   label: 'Islands & sea' }
  ],

  tours: [
    {
      id: 'airport-transfer',
      cats: ['transfers'],
      scene: 'kuta-coast.webp',
      price: 300000, unit: 'car',
      duration: '30–90 min',
      title:  'Airport Transfer',
      short:  'Met at arrivals with a name sign, bags carried, cold water in the car — and a fixed price to any hotel on Lombok.',
      long:   'Lombok International Airport (LOP) sits in the south, so most hotels are still one to two hours away. Send your flight number when you book and your arrival is tracked: if the plane is late, the waiting time is free. Your driver stands in the public arrivals area with a sign showing your name, helps with the luggage and takes you straight to your door — Senggigi, Kuta, Mataram, Bangsal harbour for the Gilis, or anywhere else on the island.',
      highlights: [
        'Flight tracked — free waiting time if you are delayed',
        'Name sign in the arrivals hall',
        'Up to 4 guests plus luggage',
        'Also available for your departure, at any hour'
      ],
      includes: [
        'Driver, fuel, parking and tolls',
        'Chilled bottled water',
        'Child seat on request, free'
      ],
      note: 'Price is for the south of the island (Kuta area). Senggigi, Bangsal and the north are a little more — ask for your exact hotel.'
    },
    {
      id: 'gili-snorkeling',
      cats: ['islands'],
      scene: 'gili-shallows.webp',
      price: 450000, unit: 'person',
      duration: 'Full day, approx. 8 h',
      title:  'Gili Islands Snorkelling Trip',
      short:  'Three snorkelling stops around Gili Trawangan, Meno and Air — turtles, the underwater statues and a coral garden.',
      long:   'Picked up at your hotel in the morning, driven to the harbour and out on a local boat for the classic three-island route. The turtle point off Gili Meno is the highlight for most guests — green turtles here are used to swimmers and simply carry on grazing. You also stop at the underwater statue circle and a shallow coral garden that works for beginners. Lunch on Gili Air or Trawangan, free time on the beach, and back to your hotel in the late afternoon.',
      highlights: [
        'Green turtles at the Gili Meno turtle point',
        'The underwater statues ("Nest")',
        'Shallow coral garden, fine for first-timers',
        'Beach time and lunch on a Gili'
      ],
      includes: [
        'Hotel pick-up and drop-off',
        'Boat, mask, snorkel and fins',
        'Life jacket and boat crew',
        'Drinking water and fresh fruit'
      ],
      note: 'Lunch and the island entrance fee are paid on the spot. Bring reef-safe sunscreen — it makes a real difference here.'
    },
    {
      id: 'speedboat-gili',
      cats: ['transfers', 'islands'],
      scene: 'gili-boat.webp',
      price: 200000, unit: 'person',
      duration: '15–30 min crossing',
      title:  'Lombok – Gili Fast Boat',
      short:  'Car to the harbour, ticket in your hand, boat to Gili Trawangan, Meno or Air. One booking instead of three.',
      long:   'Getting to the Gilis is easy once somebody has done the harbour part for you. You are collected at your hotel, driven to Bangsal or Teluk Nara, and your boat ticket is arranged before you arrive — no queue, no negotiating on the pier, no porters insisting on carrying your bag. The crossing takes 15 to 30 minutes depending on the island. The same works in reverse, and the car can be waiting for you on the day you come back.',
      highlights: [
        'Boat ticket arranged before you arrive',
        'No haggling and no porter pressure at the pier',
        'Works for all three Gilis, both directions',
        'Luggage stays with you'
      ],
      includes: [
        'Hotel pick-up anywhere in west or central Lombok',
        'Boat ticket and harbour fee',
        'Help with luggage on and off the boat'
      ],
      note: 'Boat price per person, car transfer to the harbour quoted separately by distance.'
    },
    {
      id: 'waterfalls-north',
      cats: ['tours'],
      scene: 'waterfall.webp',
      price: 800000, unit: 'car',
      duration: 'Full day, approx. 9 h',
      title:  'Sendang Gile & Tiu Kelep Waterfalls',
      short:  'The two great waterfalls on Rinjani’s northern slope, plus the monkey forest on the Pusuk pass.',
      long:   'North through the Pusuk pass, where the road curls through jungle and long-tailed macaques sit on the crash barriers waiting for an audience. Then on to Senaru: Sendang Gile drops in two stages a few minutes from the entrance, and a further 30-minute walk — a shallow river crossing, so wear something you do not mind soaking — brings you to Tiu Kelep, the wide one people come back for. Local guides at the gate know the path in any weather. Back along the coast road with a stop wherever the light is good.',
      highlights: [
        'Sendang Gile — five minutes from the car park',
        'Tiu Kelep — 30 minutes on foot through the forest',
        'Monkey forest on the Pusuk pass',
        'Rice terrace and coastline photo stops'
      ],
      includes: [
        'Private car and driver for the whole day',
        'Fuel, parking and all road fees',
        'Chilled water for everyone'
      ],
      note: 'National park entrance and the local waterfall guide are paid at the gate, roughly IDR 30,000 per person.'
    },
    {
      id: 'rinjani-sembalun',
      cats: ['tours'],
      scene: 'rinjani.webp',
      price: 900000, unit: 'car',
      duration: 'Full day, approx. 10 h',
      title:  'Sembalun Valley & Rinjani Viewpoints',
      short:  'The volcano without the two-day climb: Bukit Selong, the Sembalun valley and the famous switchback road.',
      long:   'You do not have to trek Rinjani to stand in front of it. An early start gets you to the east side before the cloud builds. From Bukit Selong the patchwork of garlic and rice fields spreads out below with the volcano behind it — the picture most people have in mind when they think of Lombok. The road up through Pusuk Sembalun bends back on itself again and again with viewpoints at almost every turn, and the valley villages still feel unhurried. On a clear afternoon you can add the Rinjani trailhead at Sembalun Lawang.',
      highlights: [
        'Bukit Selong viewpoint over the rice patchwork',
        'The Pusuk Sembalun switchback road',
        'Sembalun village life and strawberry fields',
        'Early start to beat the cloud on the summit'
      ],
      includes: [
        'Private car and driver, 10 hours',
        'Fuel, parking and all road fees',
        'Chilled water for everyone'
      ],
      note: 'Best between April and October. Bring a light jacket — Sembalun sits at 1,150 m and mornings are genuinely cool.'
    },
    {
      id: 'south-sasak',
      cats: ['tours'],
      scene: 'selong-belanak.webp',
      price: 750000, unit: 'car',
      duration: 'Full day, approx. 9 h',
      title:  'Sasak Culture & the South Coast',
      short:  'Sade village, the weavers of Sukarara, then the bays of Kuta, Tanjung Aan and Merese hill at sunset.',
      long:   'The Sasak are Lombok’s own people, and the south is where that is easiest to see. Sade is a working village of bamboo and thatch houses where the floors are still sealed the traditional way; a villager walks you through it and explains rather than performs. In Sukarara the songket weaving takes weeks per cloth and you can sit at the loom yourself. Then the coast: the wide white curve of Tanjung Aan, the fishing boats at Kuta, and Merese hill for the last hour of light, when the whole coastline turns gold.',
      highlights: [
        'Sade — a living Sasak village, not a museum',
        'Songket weaving in Sukarara',
        'Tanjung Aan and the pepper-grain sand',
        'Sunset from Merese hill'
      ],
      includes: [
        'Private car and driver for the whole day',
        'Fuel, parking and all road fees',
        'Chilled water for everyone'
      ],
      note: 'Village donations are small and go to the community. Nobody will push you to buy anything.'
    },
    {
      id: 'pink-beach',
      cats: ['tours', 'islands'],
      scene: 'tanjung-bloam.webp',
      price: 950000, unit: 'car',
      duration: 'Full day, approx. 10 h',
      title:  'Pink Beach & the Wild South East',
      short:  'The coral-pink sand of Tangsi, a snorkel stop by boat and the cliffs of Tanjung Ringgit.',
      long:   'The long way east, past salt pans and tobacco fields, to a corner of Lombok most visitors never reach. Pink Beach gets its colour from red coral ground into the white sand — strongest when the sand is wet, so the morning is the time to be there. A small boat takes you around the headland to snorkel and, if you want, on to the empty beaches further east. Tanjung Ringgit adds high cliffs, a Japanese cave from the war and a view straight across to Sumbawa.',
      highlights: [
        'Pink sand at Tangsi beach',
        'Boat trip to a quiet snorkel spot',
        'Tanjung Ringgit cliffs and the Japanese cave',
        'A long drive through an untouristed east'
      ],
      includes: [
        'Private car and driver, 10 hours',
        'Fuel, parking and all road fees',
        'Chilled water for everyone'
      ],
      note: 'The local boat and snorkel gear are paid at the beach. The last stretch of road is rough — worth it, but not a smooth ride.'
    },
    {
      id: 'gili-day-trip',
      cats: ['islands'],
      scene: 'tanjung-aan.webp',
      price: 600000, unit: 'person',
      duration: 'Full day, approx. 9 h',
      title:  'Gili Trawangan Day Trip',
      short:  'A day on the car-free island: bicycle, the sea swing, sunset on the west side and back the same evening.',
      long:   'No cars, no motorbikes, no traffic noise — just horse carts, bicycles and a coastline you can ride around in ninety minutes. You are driven to the harbour, put on the boat and met again in the evening. Rent a bike at the pier, find the sea swings on the west shore, eat at the night market, and be back on the mainland before bedtime. It also works as a first look before deciding whether to stay a few nights.',
      highlights: [
        'The sea swings on the west coast',
        'Sunset over Bali and Mount Agung',
        'Snorkelling straight off the beach',
        'Night market for dinner before the boat back'
      ],
      includes: [
        'Hotel pick-up and evening drop-off',
        'Return boat ticket and harbour fee',
        'Chilled water for the drive'
      ],
      note: 'Bicycle rental, food and drinks on the island are your own. The last boats back leave in the early evening.'
    }
  ],

  /* --------------------------------------------------------------------- */
  /* Gallery                                                                */
  /* --------------------------------------------------------------------- */
  gallery: [
    { scene: 'hero.webp',           caption: 'The west coast near Nipah, with Bali on the horizon' },
    { scene: 'gili-shallows.webp',  caption: 'Clear water off the Gili Islands' },
    { scene: 'rinjani.webp',        caption: 'Mount Rinjani seen across the bay' },
    { scene: 'waterfall.webp',      caption: 'Tiu Kelep waterfall, Senaru' },
    { scene: 'kuta-coast.webp',     caption: 'Merese hill and the bays around Kuta' },
    { scene: 'gili-boat.webp',      caption: 'Boats on the beach, Gili Trawangan' },
    { scene: 'tanjung-aan.webp',    caption: 'Turquoise shallows on the south coast' },
    { scene: 'selong-belanak.webp', caption: 'The long sweep of Selong Belanak' },
    { scene: 'tanjung-bloam.webp',  caption: 'A quiet cove in the south east' },
    { scene: 'waterfall-tall.webp', caption: 'Rainforest on the northern slope of Rinjani' }
  ],

  /* --------------------------------------------------------------------- */
  /* Reviews                                                                */
  /* --------------------------------------------------------------------- */
  /*  Real reviews from the Google Business Profile — names and ratings as
      published there.

      A note on the wording: Google had translated all of these into Indonesian
      in the screenshots they were taken from, so the text here is a careful
      translation back into English, not a byte-for-byte copy. Angeline's and
      Mathilde's originals are French, so English is a translation either way.
      Only Angeline's and Mathilde's originals are French; the rest were
      written in English — tapping "See original (English)" on Google gives the
      exact wording, and pasting that in here beats any translation.

      Six were picked from nine so that each one answers a different question a
      guest actually has: is it safe (Rani), is he good with children (Martin),
      is the price fair (Robert), how flexible is a multi-day trip (Angeline),
      does he know the island (Aimee), what else is there to see (Mathilde).  */
  reviews: [
    {
      name: 'Miss Rani Girl',
      origin: 'Local Guide · Google',
      rating: 5,
      text: 'I have just come back from Lombok, where I spent six days going round the island with five girlfriends. As women travelling Lombok by scooter, we wanted a guide who could show us the island, speak the local language on our behalf when needed, and above all keep us safe. Al built the itinerary with me personally, around the places we wanted to see, and suggested others we would never have found on our own. He also sorted out the scooter hire. His English is excellent and I would recommend him for any tour you want to book, by car or by scooter.'
    },
    {
      name: 'Martin Ville Borg Andersen',
      origin: 'Google review',
      rating: 5,
      text: 'Al took us on two wonderful trips during our stay in Lombok — the market, the rice fields, a waterfall and a snorkelling day. Most importantly, he was fantastic with our children and made them feel comfortable and safe. According to our daughter, Al deserves a million stars. Thank you Al for your kindness.'
    },
    {
      name: 'Robert Chomicz',
      origin: 'Google review',
      rating: 5,
      text: 'I am very happy to recommend Al. He knows the island inside out, speaks good English, and is very fair in what he charges for the transport and the guiding. A thoroughly good person.'
    },
    {
      name: 'Angeline Billiard',
      origin: 'Local Guide · Google',
      rating: 5,
      text: 'The two of us were on a short break in Lombok and Al was with us every day, driving us and putting our tours together. We saw rice fields, waterfalls and made a trip out to the quieter Gili islands. He is friendly and completely dependable, his English is excellent — and there is a little French now too. He always kept things flexible, waited while we stopped to eat or shop, and told us to take our time. He is the reason we miss Lombok.'
    },
    {
      name: 'Aimee Atkinson',
      origin: 'Google review',
      rating: 5,
      text: 'Al is the best guide on Lombok. He knows every part of the island and took us to places we would never have found on our own. We booked him for two days, one for the north and one for the south, and saw a great deal in a short time. Always punctual, always reachable, excellent English and a good sense of humour. Nothing was ever rushed.'
    },
    {
      name: 'Mathilde Rousselot',
      origin: 'Local Guide · Google',
      rating: 5,
      text: 'Two wonderful days with Al, the perfect guide. A waterfall, the rice fields, the monkey forest, up Mount Pergasingan for the sunrise, picking strawberries and plenty more. He has no shortage of ideas for exploring Lombok, he is always enthusiastic, full of stories — and a fantastic photographer for your memories.'
    }
  ],

  /* --------------------------------------------------------------------- */
  /* FAQ                                                                    */
  /* --------------------------------------------------------------------- */
  faq: [
    {
      q: 'How do I book?',
      a: 'Use the form on this page — it writes a complete WhatsApp message for you, with your dates, group size and hotel already filled in. You send it, you get a price and a confirmation back. No deposit, no online payment, no account.'
    },
    {
      q: 'How do I pay?',
      a: 'Cash in Indonesian Rupiah at the end of the day or the transfer is the simplest. Bank transfer works too, and there are ATMs at the airport and in every town. The price agreed on WhatsApp is the price you pay.'
    },
    {
      q: 'What if my flight is delayed?',
      a: 'Send your flight number when you book and the arrival is tracked. Waiting time for a delayed flight is free — you will not be left standing and you will not be charged extra.'
    },
    {
      q: 'Can I cancel?',
      a: 'Yes. Cancel free of charge up to 24 hours before the pick-up, just send a message. Nothing is paid in advance, so there is nothing to refund. Weather ruining a boat day is never charged.'
    },
    {
      q: 'How many people fit in the car?',
      a: 'Up to four guests plus luggage in an air-conditioned car. For larger groups a second car with a second driver is arranged — just say how many you are and you get one price for the whole party.'
    },
    {
      q: 'Do you have child seats?',
      a: 'Yes, free of charge. Tell me the age of the child when you book so the right seat is in the car. Families are very welcome — the itinerary is easily shortened for small children.'
    },
    {
      q: 'Are the tours fixed, or can I change them?',
      a: 'Change them. The tours on this page are the routes guests ask for most often, not a package. Mix two of them, drop a stop, add a warung somebody recommended — it is your day.'
    },
    {
      q: 'Do the prices include entrance fees and lunch?',
      a: 'The price covers the car, driver, fuel, parking, tolls and water. Park entrances, local guides, boats and food are paid on the spot and stay with the people providing them. Every tour on this page lists exactly what is extra.'
    },
    {
      q: 'Can you drive us for several days?',
      a: 'That is the nicest way to see Lombok. Multi-day itineraries — including an overnight on the Gilis or a run around the whole island — are priced per day and get cheaper the longer you book. Send your dates and what you would like to see.'
    }
  ]
};

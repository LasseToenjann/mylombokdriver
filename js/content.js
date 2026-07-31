/* ============================================================================
   MY LOMBOK DRIVER — CONTENT
   ----------------------------------------------------------------------------
   Tours, prices, gallery captions, reviews and FAQ. The site is English only,
   so every text here is a plain string — edit it and it is live.

   Prices are in Indonesian Rupiah (IDR), as a whole number, no dots.
   unit: 'car'    -> price is per vehicle (up to 4 guests)
         'person' -> price is per person
         'ask'    -> no price shown, "on request" instead

   ### TODO ###  PRICES NOT YET CONFIRMED BY THE DRIVER
   The prices below are derived from two established Lombok operators —
   lombokprivatetour.com and lombokroute.com — and sit roughly 12 % below the
   first of them, which has the same positioning we do (fully private, own
   driver, based near Senggigi). They are a defensible market position, not a
   rate the driver has quoted. Go through the list with him before the site is
   advertised.

   One assumption worth checking: the operator these figures come from quotes
   its per-vehicle prices for TWO guests in a six-seat car. Ours are quoted for
   up to FOUR in a four-seat car, so a family of four pays noticeably less here
   than there. That is deliberate — one car, one price — but he may want a
   surcharge above two guests.

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
      text:  'A well kept car for four guests with real air conditioning, cold water on board, room for your luggage and a child seat whenever you need one.'
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
    { id: 'islands',   label: 'Islands & sea' },
    { id: 'multi',     label: 'Multi-day' }
  ],

  tours: [
    {
      id: 'airport-transfer',
      cats: ['transfers'],
      scene: 'kuta-coast.webp',
      photoTodo: 'A pick-up shot: the car at LOP arrivals, or luggage going into the boot.',
      featured: true,
      match: { vibe: ['transfer'], time: 'short', who: ['couple','kids','friends'], pace: 'easy' },
      price: 350000, unit: 'car',
      duration: '30–90 min',
      title:  'Airport Transfer',
      short:  'Met at arrivals with a name sign, bags carried, cold water in the car — and a fixed price to any hotel on Lombok.',
      long:   'Lombok International Airport (LOP) sits in the south, so most hotels are still one to two hours away. Send your flight number when you book and your arrival is tracked: if the plane is late, the waiting time is free. Your driver stands in the public arrivals area with a sign showing your name, helps with the luggage and takes you straight to your door — Kuta, Senggigi, Mataram, Bangsal harbour for the Gilis, or anywhere else on the island.',
      highlights: [
        'Flight tracked — free waiting time if you are delayed',
        'Name sign in the arrivals hall',
        'Four guests plus luggage, one price for the car',
        'Also available for your departure, at any hour'
      ],
      includes: [
        'Driver, fuel, parking and tolls',
        'Chilled bottled water',
        'Child seat on request, free'
      ],
      note: 'Price per car, one way. Airport to Kuta or Mandalika IDR 350,000 · to Senggigi or Mataram IDR 450,000 · to Bangsal harbour IDR 500,000 · to Senaru and the north IDR 750,000. Transfers between towns are the same idea: Senggigi–Bangsal IDR 250,000, Senggigi–Kuta or Tetebatu IDR 500,000, Senggigi–Lembar IDR 350,000. Departures run from 05:00 to 21:00; earlier or later on request.'
    },
    {
      id: 'speedboat-gili',
      cats: ['transfers', 'islands'],
      scene: 'gili-boat.webp',
      photoTodo: 'The speedboat at Teluk Nara. Current file is a 1176 px Instagram screenshot.',
      featured: true,
      match: { vibe: ['transfer','sea'], time: 'short', who: ['couple','kids','friends'], pace: 'easy' },
      price: 700000, unit: 'car',
      duration: 'Approx. 2 h door to island',
      title:  'Transfer to the Gili Islands',
      short:  'Car to the harbour and a private speedboat to Trawangan, Meno or Air. One booking instead of three, one price for the whole car.',
      long:   'Getting to the Gilis is easy once somebody has done the harbour part for you. You are collected at your hotel, driven to Teluk Nara or Bangsal, and the boat is waiting — no queue, no negotiating on the pier, no porters insisting on carrying your bag. The crossing takes 15 to 30 minutes depending on the island. The same works in reverse, and the car can be waiting for you on the day you come back.',
      highlights: [
        'Private speedboat, no fixed departure time',
        'No haggling and no porter pressure at the pier',
        'Works for all three Gilis, both directions',
        'Luggage stays with you the whole way'
      ],
      includes: [
        'Hotel pick-up anywhere in west or central Lombok',
        'Private speedboat and harbour fees',
        'Help with luggage on and off the boat'
      ],
      note: 'Price per car and boat, one way, up to four guests. From Senggigi IDR 700,000 · from the airport IDR 1,100,000. The scheduled public fast boat is cheaper if you do not mind fixed departure times — ask and you get that price instead.'
    },
    {
      id: 'waterfalls-north',
      cats: ['tours'],
      scene: 'waterfall.webp',
      featured: true,
      match: { vibe: ['green'], time: 'day', who: ['couple','kids','friends'], pace: 'medium' },
      price: 1300000, unit: 'car',
      duration: 'Full day, approx. 9 h',
      title:  'Sendang Gile & Tiu Kelep Waterfalls',
      short:  'The two great waterfalls on Rinjani’s northern slope, the Pusuk monkey forest and a sunset stop on the way home.',
      long:   'North through the Pusuk pass, where the road curls through jungle and long-tailed macaques sit on the crash barriers waiting for an audience, with a stop at the traditional market in Tanjung. Then on to Senaru: Sendang Gile drops in two stages a few minutes from the entrance, and a further 30-minute walk — a shallow river crossing, so wear something you do not mind soaking — brings you to Tiu Kelep, the wide one people come back for. Afterwards a walk through Senaru village, then the coast road home with a sunset stop at Nipah beach, looking across at the three northern Gilis and Mount Agung on Bali.',
      highlights: [
        'Sendang Gile — five minutes from the car park',
        'Tiu Kelep — 30 minutes on foot through the forest',
        'Monkey forest on the Pusuk pass',
        'Sunset at Nipah beach with Bali on the horizon'
      ],
      includes: [
        'Private car and driver for the whole day',
        'Fuel, parking and all road fees',
        'National park entrance and the local waterfall guide',
        'Chilled water and soft drinks'
      ],
      note: 'Pick-up around 08:30, about 2.5 hours to Senaru. Lunch is your own — there are warungs at the waterfall entrance and grilled fish from the stalls at Nipah on the way back.'
    },
    {
      id: 'benang-stokel',
      cats: ['tours'],
      scene: 'waterfall-tall.webp',
      photoTodo: 'Benang Kelambu — the curtain of water coming straight out of the rock.',
      featured: false,
      match: { vibe: ['green','culture'], time: 'day', who: ['couple','kids','friends'], pace: 'medium' },
      price: 1400000, unit: 'car',
      duration: 'Full day, approx. 8 h',
      title:  'Benang Stokel & Benang Kelambu Waterfalls',
      short:  'The curtain waterfall in central Lombok, the Lingsar temple where two religions share one courtyard, and a weaving village on the way back.',
      long:   'First Lingsar, the temple where Hindu and Muslim Sasak traditions are practised side by side — a local guide explains how that came about, because it is not obvious from looking. Then east through Narmada, where the roadside is rambutan, durian and mangosteen in season. At Benang Stokel a motorbike taxi takes you the last stretch up to Benang Kelambu, where the water does not fall over an edge but seeps straight out of the rock face in dozens of strands, like a curtain — you can stand under it. Fifteen minutes further down is Benang Stokel itself. Lunch in a warung, then Sukarara, where songket weaving takes weeks per cloth and you can sit at the loom yourself.',
      highlights: [
        'Benang Kelambu — water straight out of the cliff face',
        'Swimming under the falls',
        'Lingsar temple, Hindu and Sasak side by side',
        'Songket weaving in Sukarara'
      ],
      includes: [
        'Private car and driver for the whole day',
        'Fuel, parking and all road fees',
        'Temple and waterfall entrance, local guides',
        'Motorbike taxi to the upper falls',
        'Chilled water and soft drinks'
      ],
      note: 'Pick-up around 08:30. Lunch in a local warung is your own, usually IDR 30,000–60,000. A small donation at Lingsar temple is customary and not included.'
    },
    {
      id: 'tetebatu',
      cats: ['tours'],
      scene: 'rinjani.webp',
      photoTodo: 'The Tetebatu rice terraces. Current file shows Rinjani from the coast.',
      featured: false,
      match: { vibe: ['green','culture'], time: 'day', who: ['couple','friends'], pace: 'active' },
      price: 1500000, unit: 'car',
      duration: 'Full day, approx. 9 h',
      title:  'Tetebatu — Rice Fields & Countryside',
      short:  'A three-hour walk through the rice terraces on Rinjani’s southern slope, with coffee, cocoa and vanilla growing at the side of the path.',
      long:   'Tetebatu sits high enough that the air is noticeably cooler, and the whole village looks out at Rinjani. The heart of the day is a walk of about three hours with a local guide, through the terraced fields and the plantations behind them — he will stop and show you a cocoa pod, a vanilla vine, a coffee cherry, and explain what happens to each of them next. The path passes the hidden Sarang Walet waterfall and skirts the monkey forest. Afterwards there is time for the bamboo craftsmen of Loyok and the weavers of Pringgasela, both of whom will hand you the tools and let you try.',
      highlights: [
        'Three-hour panorama walk through the rice terraces',
        'Coffee, cocoa, vanilla and nutmeg growing wild along the way',
        'The hidden Sarang Walet waterfall',
        'Bamboo weaving in Loyok, cloth weaving in Pringgasela'
      ],
      includes: [
        'Private car and driver for the whole day',
        'Fuel, parking and all road fees',
        'Local walking guide and the waterfall entrance',
        'Chilled water and soft drinks'
      ],
      note: 'Pick-up around 08:30, roughly two hours each way. Lunch in the village is your own. Bring shoes you can walk in — the field paths are narrow and often wet.'
    },
    {
      id: 'rinjani-sembalun',
      cats: ['tours'],
      scene: 'rinjani.webp',
      photoTodo: 'Bukit Selong looking over the field patchwork, or the switchback road.',
      featured: true,
      match: { vibe: ['green'], time: 'day', who: ['couple','friends'], pace: 'medium' },
      price: 1450000, unit: 'car',
      duration: 'Full day, approx. 10 h',
      title:  'Sembalun Valley & Rinjani Viewpoints',
      short:  'The volcano without the two-day climb: Bukit Selong, the Sembalun valley and the famous switchback road.',
      long:   'You do not have to trek Rinjani to stand in front of it. An early start gets you to the east side before the cloud builds. From Bukit Selong the patchwork of garlic and rice fields spreads out below with the volcano behind it — the picture most people have in mind when they think of Lombok. The road up through Pusuk Sembalun bends back on itself again and again with viewpoints at almost every turn, and the valley villages still feel unhurried. Sembalun is farming country: strawberries, onions, garlic, and in season you can pick the strawberries yourself. The way home runs along the north coast to a sunset stop at Nipah.',
      highlights: [
        'Bukit Selong viewpoint over the rice patchwork',
        'The Pusuk Sembalun switchback road',
        'Strawberry fields you can pick in season',
        'North coast road and sunset at Nipah'
      ],
      includes: [
        'Private car and driver, 10 hours',
        'Fuel, parking and all road fees',
        'Viewpoint entrances',
        'Chilled water and soft drinks'
      ],
      note: 'Pick-up around 08:00, about three hours to Sembalun. Best between April and October. Lunch with a view of Rinjani is your own. Bring a light jacket — Sembalun sits at 1,150 m and mornings are genuinely cool.'
    },
    {
      id: 'south-sasak',
      cats: ['tours'],
      scene: 'selong-belanak.webp',
      featured: true,
      match: { vibe: ['culture','sea'], time: 'day', who: ['couple','kids','friends'], pace: 'easy' },
      price: 1200000, unit: 'car',
      duration: 'Full day, approx. 9 h',
      title:  'Sasak Culture & the South Coast',
      short:  'Pottery in Banyumulek, weaving in Sukarara, a living Sasak village — then Selong Belanak, Mawun and Tanjung Aan.',
      long:   'The Sasak are Lombok’s own people, and the south is where that is easiest to see. In Banyumulek the pots are still thrown and fired the old way, and you are welcome to sit down at the wheel; anything you buy gets packed for the flight. In Sukarara the songket weaving takes weeks per cloth. Sade and Rambitan are working villages of bamboo and thatch where a villager walks you through and explains rather than performs. Then the coast: the wide white curve of Selong Belanak, the quieter bays at Mawun and Lancing, the pepper-grain sand of Tanjung Aan, and the fishing boats at Kuta. Beginners can take a surf lesson at Selong Belanak, where the waves are made for it.',
      highlights: [
        'Banyumulek pottery — try the wheel yourself',
        'Sade and Rambitan, living Sasak villages',
        'Selong Belanak, Mawun and Tanjung Aan',
        'Surf lesson for beginners if you want one'
      ],
      includes: [
        'Private car and driver for the whole day',
        'Fuel, parking and all road fees',
        'Village entrance and the local guide',
        'Chilled water and soft drinks'
      ],
      note: 'Pick-up around 09:00. Lunch at one of the beach restaurants is your own. Village donations are small, go to the community, and are not included. Surf lessons are booked on the beach. Nobody will push you to buy anything.'
    },
    {
      id: 'city-culture',
      cats: ['tours'],
      scene: 'hero.webp',
      photoTodo: 'The Islamic Centre, Kebon Roek market or Ampenan old town at dusk.',
      featured: false,
      match: { vibe: ['culture'], time: 'day', who: ['couple','kids'], pace: 'easy' },
      price: 1200000, unit: 'car',
      duration: 'Full day, approx. 7 h',
      title:  'City & Culture, West Lombok',
      short:  'Mataram and the west: the morning market, the great mosque, Lingsar temple, the water palace and old Ampenan at sunset.',
      long:   'The short day, and the one that makes the most sense on your first morning. Kebon Roek market in Ampenan is where the island shops — fish, spices, palm sugar, and nobody performing for visitors. The Islamic Centre in Mataram is the largest mosque on Lombok and you can go up the minaret. Lingsar is the temple Hindus and Sasak Muslims share. Narmada was the king’s summer palace, built around a lake meant to imitate Rinjani’s crater. Then the potters of Banyumulek or the weavers of Sukarara, and finally Ampenan old town — Dutch and Chinese shopfronts, faded and still lived in, best in the last hour of light.',
      highlights: [
        'Kebon Roek market, where the island actually shops',
        'Islamic Centre — the biggest mosque on Lombok',
        'Narmada water palace and its sacred pool',
        'Ampenan old town at sunset'
      ],
      includes: [
        'Private car and driver, 7 hours',
        'Fuel, parking and all road fees',
        'Mosque and temple entrance, local guide',
        'Chilled water and soft drinks'
      ],
      note: 'Pick-up around 09:00. Lunch is your own. For the inside of the mosque, arms and legs need to be covered — a sarong is lent at the door if you do not have one. A small donation at Lingsar is customary and not included.'
    },
    {
      id: 'gili-snorkeling',
      cats: ['islands'],
      scene: 'gili-shallows.webp',
      photoTodo: 'Underwater or the turtle point. Current file is a 1176 px screenshot.',
      featured: true,
      match: { vibe: ['sea'], time: 'day', who: ['couple','kids','friends'], pace: 'medium' },
      price: 1050000, unit: 'person',
      duration: 'Full day, approx. 8 h',
      title:  'Gili Islands Snorkelling Trip',
      short:  'Your own boat around Trawangan, Meno and Air — turtles, the underwater statues and a coral garden that suits beginners.',
      long:   'Picked up at your hotel in the morning, driven to Teluk Nara and out on a boat that is yours for the day, so the route bends to what you feel like. The turtle point off Gili Meno is the highlight for most guests — green turtles here are used to swimmers and simply carry on grazing. You also stop at the underwater statue circle and a shallow coral garden that works for first-timers. Time on Gili Trawangan, lunch and more snorkelling off Gili Air, and back to the harbour in the late afternoon with a sunset stop at Malimbu hill on the drive home.',
      highlights: [
        'Green turtles at the Gili Meno turtle point',
        'The underwater statues ("Nest")',
        'Shallow coral garden, fine for first-timers',
        'Sunset from Malimbu hill on the way back'
      ],
      includes: [
        'Hotel pick-up and drop-off',
        'Private boat with crew for the day',
        'Mask, snorkel, fins and life jacket',
        'Chilled water, soft drinks and fresh fruit'
      ],
      note: 'Per person, from two guests. Pick-up around 09:00. Lunch on the island and the Gili entrance fee are your own. A private speedboat instead of the traditional boat gives you more time in the water and costs about IDR 250,000 more per person. Bring reef-safe sunscreen — it makes a real difference here.'
    },
    {
      id: 'southwest-islands',
      cats: ['islands'],
      scene: 'tanjung-aan.webp',
      photoTodo: 'Gili Nanggu or Gili Kedis. Current file shows the south coast instead.',
      featured: false,
      match: { vibe: ['sea'], time: 'day', who: ['couple','kids','friends'], pace: 'medium' },
      price: 800000, unit: 'person',
      duration: 'Full day, approx. 8 h',
      title:  'Gili Nanggu, Sudak & Kedis',
      short:  'The quiet islands off the south-west coast — reef a few metres off the beach, and a sandbank barely big enough to stand on.',
      long:   'Two hours south-west to Sekotong, past villages where bricks are still made by hand, and out on a local boat past the floating pearl farms. Gili Nanggu is the one people mean when they call this a living aquarium: the reef starts a few metres off the sand, shallow enough for a first-timer and good enough that experienced snorkellers stay in the water for an hour. Gili Sudak has the clear water and the beach restaurant where lunch happens. Gili Kedis is tiny, uninhabited and takes about four minutes to walk around. Nobody is selling anything on any of them.',
      highlights: [
        'Reef snorkelling straight off the beach at Gili Nanggu',
        'Starfish and clear shallows at Gili Sudak',
        'Gili Kedis — an uninhabited islet you can walk around',
        'Floating pearl farms on the boat ride out'
      ],
      includes: [
        'Hotel pick-up and drop-off',
        'Private boat with crew for the day',
        'Mask, snorkel, fins and life jacket',
        'Chilled water, soft drinks and fresh fruit'
      ],
      note: 'Per person, from two guests. Pick-up around 08:30, roughly two hours each way. Lunch at the beach restaurant on Gili Sudak is your own. Back around 16:00.'
    },
    {
      id: 'pink-beach',
      cats: ['islands', 'tours'],
      scene: 'tanjung-bloam.webp',
      photoTodo: 'The pink sand itself, wet, so the colour actually shows.',
      featured: true,
      match: { vibe: ['sea'], time: 'day', who: ['couple','friends'], pace: 'medium' },
      price: 1000000, unit: 'person',
      duration: 'Full day, approx. 9 h',
      title:  'Pink Beach & Gili Petelu',
      short:  'The coral-pink sand of Tangsi, snorkelling at one of east Lombok’s best reefs, and a sandbank that only exists at low tide.',
      long:   'The long way east, past salt pans and tobacco fields, to the harbour at Tanjung Luar and a boat of your own. If the tide is out there is a stop at Pulau Pasir, a bare sandbank in open water covered in coloured starfish — it disappears again a few hours later. Gili Petelu is the snorkelling: clownfish, healthy coral, one of the best spots on this side of the island. Then Pink Beach itself, where red coral ground into white sand gives the colour, strongest where the water has just washed over it. Tangsi hill behind the beach is a five-minute climb for the view along the whole coast.',
      highlights: [
        'Pink sand at Tangsi beach',
        'Snorkelling at Gili Petelu, clownfish and live coral',
        'Pulau Pasir sandbank at low tide, covered in starfish',
        'The climb up Tangsi hill for the coastline view'
      ],
      includes: [
        'Hotel pick-up and drop-off',
        'Private boat with crew for the day',
        'Mask, snorkel, fins and life jacket',
        'Seafood lunch on the beach',
        'Chilled water, soft drinks and fresh fruit'
      ],
      note: 'Per person, from two guests. Pick-up around 08:00, two to two and a half hours each way. Lunch is included on this trip because there are no restaurants at Pink Beach — everything is brought and grilled on the spot. Back around 15:00. The last stretch of road is rough; worth it, but not a smooth ride.'
    },
    {
      id: 'hidden-paradise',
      cats: ['islands'],
      scene: 'gili-shallows.webp',
      photoTodo: 'Gili Kapal, the sandbank at low tide, or the mangrove channels.',
      featured: false,
      match: { vibe: ['sea'], time: 'day', who: ['couple','friends'], pace: 'active' },
      price: 1100000, unit: 'person',
      duration: 'Full day, approx. 10 h',
      title:  'Hidden Paradise — the North-East Islands',
      short:  'Four uninhabited islands off the north-east coast, a mangrove forest you snorkel through, and a sandbank that comes and goes with the tide.',
      long:   'The longest day on the list and the one almost nobody else books. Two and a half hours to the harbour at Sambelia, then out to Gili Petagan, where the mangroves grow into the water and you snorkel through the channels between them — a strange, quiet, green kind of swimming. Gili Kapal is a pure sandbank that only shows above water at low tide; an hour later it is gone. Gili Bidara and Gili Kondo are small, empty and have nothing on them but sand and shade, which is the point. Lunch is cooked on the beach by the boat crew, because there is nowhere out here to buy it.',
      highlights: [
        'Snorkelling through the mangrove channels at Gili Petagan',
        'Gili Kapal — a sandbank that appears and disappears',
        'Gili Bidara and Gili Kondo, empty and undeveloped',
        'Lunch grilled on the beach by the crew'
      ],
      includes: [
        'Hotel pick-up and drop-off',
        'Private boat with crew for the day',
        'Mask, snorkel, fins and life jacket',
        'Lunch cooked on the island',
        'Chilled water, soft drinks and fresh fruit'
      ],
      note: 'Per person, from two guests. Pick-up around 07:30 — it is a long drive and the tides decide the schedule. At high tide it may not be possible to land on Gili Petagan, in which case the mangroves are seen from the boat. Bring water shoes.'
    },
    {
      id: 'gili-day-trip',
      cats: ['islands'],
      scene: 'gili-boat.webp',
      photoTodo: 'The sea swings on the west shore of Trawangan.',
      featured: false,
      match: { vibe: ['sea'], time: 'day', who: ['couple','friends'], pace: 'easy' },
      price: 650000, unit: 'person',
      duration: 'Full day, approx. 9 h',
      title:  'Gili Trawangan Day Trip',
      short:  'A day on the car-free island: bicycle, the sea swing, sunset on the west side and back the same evening.',
      long:   'No cars, no motorbikes, no traffic noise — just horse carts, bicycles and a coastline you can ride around in ninety minutes. You are driven to the harbour, put on the boat and met again in the evening. Rent a bike at the pier, find the sea swings on the west shore, snorkel straight off the beach, and be back on the mainland before bedtime. It also works as a first look before deciding whether to stay a few nights.',
      highlights: [
        'The sea swings on the west coast',
        'Sunset over Bali and Mount Agung',
        'Snorkelling straight off the beach',
        'Ninety minutes to cycle round the whole island'
      ],
      includes: [
        'Hotel pick-up and evening drop-off',
        'Return boat ticket and harbour fee',
        'Chilled water for the drive'
      ],
      note: 'Per person, from two guests. Bicycle rental, food and drinks on the island are your own. The last boats back leave in the early evening. For a private speedboat instead of the scheduled one, see the Gili transfer.'
    },
    {
      id: 'lombok-3-day',
      cats: ['multi', 'tours', 'islands'],
      scene: 'hero.webp',
      photoTodo: 'One frame that carries three days — the boat day is the strongest candidate.',
      featured: false,
      match: { vibe: ['green','sea','culture'], time: 'multi', who: ['couple','friends'], pace: 'active' },
      price: 0, unit: 'ask',
      duration: '3 days, 2 nights',
      title:  'Lombok in Three Days',
      short:  'North to the waterfalls, a boat day among the empty north-east islands, then the rice terraces of Tetebatu — sleeping where the next day starts.',
      long:   'The nicest way to see Lombok, and the only way to reach the far corners without spending the whole time in the car. Day one runs north along the coast to Sendang Gile and Tiu Kelep, then east to Labuan Pandan for the night. Day two is on the water: the mangroves of Gili Petagan, the Gili Kapal sandbank, snorkelling and lunch on Gili Bidara, and in the afternoon inland to Tetebatu, stopping at the giant trees the Dutch planted centuries ago. Day three is the long walk through the Tetebatu rice terraces, then back to Senggigi through the weaving villages. Each night is spent where the next morning begins, so no day starts with two hours of driving.',
      highlights: [
        'Sendang Gile and Tiu Kelep waterfalls, day one',
        'A private boat day among four uninhabited islands',
        'Two nights in the countryside, not in a resort strip',
        'The three-hour rice terrace walk at Tetebatu'
      ],
      includes: [
        'Private car and driver for all three days',
        'Two nights’ accommodation with breakfast',
        'Private boat, snorkelling gear and lunch on day two',
        'All entrance fees and local guides',
        'Chilled water and soft drinks throughout'
      ],
      note: 'Priced with the itinerary rather than off a list, because the hotels depend on how many of you there are. As a guide, two guests in one room comes to roughly IDR 6,400,000 for the three days, everything above included; a third and fourth guest add a room. Dinners and the two lunches on days one and three are your own. Starting from Kuta or the airport, the whole thing can be run in reverse.'
    }
  ],

  /* --------------------------------------------------------------------- */
  /* "Find your match" — the four questions                                 */
  /* --------------------------------------------------------------------- */
  /*  Every tour carries a `match` object with the same four keys. A tour
      scores points for each answer it satisfies, and the highest score wins.

      The weights below are deliberately lopsided. What somebody wants to SEE
      decides the day; how active they feel is a tiebreaker. Getting that
      order wrong produces a technically correct answer that feels wrong —
      somebody who says "the sea" should never be handed a temple tour just
      because the pace matched.

      `who` and `pace` never rule a tour out, they only reorder. With four
      questions and fourteen tours there is always a sensible answer, and a
      matcher that says "nothing fits" is worse than no matcher.               */
  matcher: {
    questions: [
      {
        id: 'vibe', weight: 5,
        q: 'What are you here for?',
        options: [
          { value: 'sea',      label: 'The sea and the islands', hint: 'Snorkelling, boats, empty beaches' },
          { value: 'green',    label: 'Waterfalls and mountains', hint: 'Rinjani, rainforest, rice terraces' },
          { value: 'culture',  label: 'Villages and markets',     hint: 'Sasak life, temples, weaving, pottery' },
          { value: 'transfer', label: 'Just getting somewhere',   hint: 'Airport, harbour, hotel to hotel' }
        ]
      },
      {
        id: 'time', weight: 4,
        q: 'How much time do you have?',
        options: [
          { value: 'short', label: 'A couple of hours', hint: 'A ride, not a day out' },
          { value: 'day',   label: 'A whole day',       hint: 'Out after breakfast, back for dinner' },
          { value: 'multi', label: 'Several days',      hint: 'Sleeping somewhere new' }
        ]
      },
      {
        id: 'who', weight: 2,
        q: 'Who is coming along?',
        options: [
          { value: 'couple',  label: 'One or two of us',   hint: '' },
          { value: 'kids',    label: 'With children',      hint: 'Shorter walks, child seat, no long boat rides' },
          { value: 'friends', label: 'A group of friends', hint: 'Up to four in the car' }
        ]
      },
      {
        id: 'pace', weight: 2,
        q: 'How active should it be?',
        options: [
          { value: 'easy',   label: 'Easy',        hint: 'Mostly looking, short walks' },
          { value: 'medium', label: 'A bit of both', hint: 'Some walking, some swimming' },
          { value: 'active', label: 'As much as fits', hint: 'Long walks, long days, early starts' }
        ]
      }
    ]
  },

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
      The reviewers name a driver who no longer drives for the business, so
      that name has been replaced with "our driver" or a pronoun throughout.
      Everything else about each review is unchanged.

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
      text: 'I have just come back from Lombok, where I spent six days going round the island with five girlfriends. As women travelling Lombok by scooter, we wanted a guide who could show us the island, speak the local language on our behalf when needed, and above all keep us safe. Our driver built the itinerary with me personally, around the places we wanted to see, and suggested others we would never have found on our own. He also sorted out the scooter hire. His English is excellent and I would recommend him for any tour you want to book, by car or by scooter.'
    },
    {
      name: 'Martin Ville Borg Andersen',
      origin: 'Google review',
      rating: 5,
      text: 'Our driver took us on two wonderful trips during our stay in Lombok — the market, the rice fields, a waterfall and a snorkelling day. Most importantly, he was fantastic with our children and made them feel comfortable and safe. According to our daughter, he deserves a million stars. Thank you for your kindness.'
    },
    {
      name: 'Robert Chomicz',
      origin: 'Google review',
      rating: 5,
      text: 'I am very happy to recommend this service. Our driver knew the island inside out, speaks good English, and is very fair in what he charges for the transport and the guiding. A thoroughly good person.'
    },
    {
      name: 'Angeline Billiard',
      origin: 'Local Guide · Google',
      rating: 5,
      text: 'The two of us were on a short break in Lombok and our driver was with us every day, driving us and putting our tours together. We saw rice fields, waterfalls and made a trip out to the quieter Gili islands. He is friendly and completely dependable, his English is excellent — and there is a little French now too. He always kept things flexible, waited while we stopped to eat or shop, and told us to take our time. He is the reason we miss Lombok.'
    },
    {
      name: 'Aimee Atkinson',
      origin: 'Google review',
      rating: 5,
      text: 'The best guide on Lombok. He knows every part of the island and took us to places we would never have found on our own. We booked him for two days, one for the north and one for the south, and saw a great deal in a short time. Always punctual, always reachable, excellent English and a good sense of humour. Nothing was ever rushed.'
    },
    {
      name: 'Mathilde Rousselot',
      origin: 'Local Guide · Google',
      rating: 5,
      text: 'Two wonderful days with the perfect guide. A waterfall, the rice fields, the monkey forest, up Mount Pergasingan for the sunrise, picking strawberries and plenty more. He has no shortage of ideas for exploring Lombok, he is always enthusiastic, full of stories — and a fantastic photographer for your memories.'
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
      a: 'Four guests plus their luggage, in an air-conditioned car. If you are more than four, ask before you book and say how many you are — a second car with a second driver can usually be arranged, and you get one price for the whole party. There is almost always a way to make it work.'
    },
    {
      q: 'How much luggage fits?',
      a: 'For an airport transfer, four guests with normal suitcases and hand luggage is no problem. Bulky sports gear is a different matter — surfboards, bicycles and diving tanks do not fit in the car. Say what you are bringing when you book and it gets checked first rather than at the kerb.'
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
      a: 'Entrance fees, park tickets and the local guides at waterfalls, temples and villages are included — you will not be asked for money at a gate. Lunch is not, on purpose: you eat where you feel like eating and pay what a local pays, usually IDR 30,000 to 60,000. The two exceptions are Pink Beach and the north-east islands, where there is nowhere to buy food, so lunch is brought and cooked on the beach and is included in the price. Every tour on this page lists exactly what is included and what is not.'
    },
    {
      q: 'Can you drive us for several days?',
      a: 'That is the nicest way to see Lombok, and the three-day trip on this page is the version guests book most: north to the waterfalls, a boat day among the empty north-east islands, then the rice terraces at Tetebatu, sleeping each night where the next day starts. Anything else — an overnight on the Gilis, a run right around the island, a week with the luggage in the boot — is priced per day and gets cheaper the longer you book. Send your dates and what you would like to see.'
    }
  ]
};

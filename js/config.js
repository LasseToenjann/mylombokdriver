/* ============================================================================
   MY LOMBOK DRIVER — SITE CONFIGURATION
   ----------------------------------------------------------------------------
   This is the ONLY file you need to touch for day-to-day changes:
   phone number, e-mail, address, prices and the exchange rate.

   Everything marked  ### TODO ###  must be filled in before going live.
   ========================================================================== */

window.MLD_CONFIG = {

  business: {
    name: 'My Lombok Driver',
    claim: 'Your journey, our priority',
    /* The driver's first name. Shown under the portrait in "About".
       Leave empty to keep the section generic. */
    driverName: 'Suhar',
    /* Printed under the name. Only shown when driverName is filled in. */
    driverRole: 'Driver & guide',
    /* Portrait for the "About" section. A file in images/, ideally a real
       photo of the driver, portrait format, roughly 900 x 1100.

       While this is empty the section renders WITHOUT a picture — the text and
       the facts simply take the full width. That is deliberate: an empty frame
       or a stand-in landscape shot looks worse than no photo at all. Drop the
       file in, name it here, and the portrait column appears. */
    driverPhoto: 'driver.webp',
    /* Year the business started — shown as "since ...". Empty = hidden. */
    since: '',                                             // ### TODO ###
    base: 'Senggigi, West Lombok',
    address: 'Jalan Wisata Alam Kerandangan, Senggigi, Lombok Barat, Nusa Tenggara Barat, Indonesia',
    serviceArea: 'All of Lombok, Gili Islands & Lombok International Airport (LOP)'
  },

  contact: {
    /* WhatsApp number in INTERNATIONAL format, digits only, no "+", no spaces.
       Indonesian mobile numbers start with 62 (0812... becomes 62812...).
       While this is empty, every WhatsApp button falls back to an
       Instagram direct message, so the site still works.  */
    whatsapp: '6285338695234',
    /* How the number is printed on the page. */
    whatsappDisplay: '+62 853 3869 5234',
    email: 'suharholiday@gmail.com',
    instagram: 'https://www.instagram.com/mylombokdriver',
    instagramHandle: '@mylombokdriver',
    /* Instagram DM deep link — used as the fallback while whatsapp is empty. */
    instagramDm: 'https://ig.me/m/mylombokdriver',
    /* Google Business Profile taken from the Instagram bio. */
    googleMaps: 'https://g.co/kgs/VWJeLQ',
    /* Facebook. One quiet row in the footer, nowhere else, so it stays behind
       Instagram. Empty renders nothing at all.
       This is the numeric profile URL, which is permanent. The tracking
       parameter Facebook appends when you copy the link (?http_ref=…) is
       stripped — it carries a timestamp and belongs to the copy, not the page.
       If the profile ever gets a vanity URL (facebook.com/SomeName), prefer
       that: it reads better and is a stronger signal for Google when it links
       the business's profiles together. */
    facebook: 'https://www.facebook.com/100083377775106',
    /* Optional: shown after "Facebook ·" in that row. Left empty on purpose —
       the page still carries a former driver's name, so the row just reads
       "Facebook" until the page is renamed. */
    facebookName: ''
  },

  /* --------------------------------------------------------------------- */
  /* Google Business Profile figures                                        */
  /* --------------------------------------------------------------------- */
  /* The trust strip under the hero shows these, NOT a count of the quotes in
     content.js. Six quotes are shown on the page; the profile itself holds far
     more, and the honest number is the one guests can go and verify.

     These are typed in by hand because the site has no backend — see the
     "Live-Bewertungen" section in README.md for why, and what it would take.
     Check them against the Google profile now and then; they only move when a
     new review comes in. */
  reviewStats: {
    rating: 5.0,
    count: 41,
    /* Set to '' to hide the strip's source label. */
    source: 'Google'
  },

  site: {
    /* Full public URL, no trailing slash. Used for SEO tags and sitemap.
       This is the GitHub Pages address of this repository. If a custom domain
       is added later (e.g. 'https://mylombokdriver.com'), change it here and
       in sitemap.xml and robots.txt — those are the only three places. */
    url: 'https://lassetoenjann.github.io/mylombokdriver'
  },

  pricing: {
    /* Prices in js/content.js are stored in Indonesian Rupiah.
       The site additionally prints a rough EUR figure so European guests can
       judge the price. Update this rate now and then — it is only an estimate
       and is always labelled with "≈". Set to 0 to hide EUR prices entirely. */
    idrPerEur: 20800,
    /* Prices are honest "from" prices. Set to false to drop the "from". */
    showFrom: true
  },

  /* Sections can be switched off without touching the HTML. */
  features: {
    reviews: true,
    gallery: true,
    faq: true
  }
};

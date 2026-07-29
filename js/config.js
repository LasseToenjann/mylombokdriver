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
    /* The driver's first name. Shown in the "About" section and in the
       WhatsApp greeting. Leave as an empty string to keep it generic. */
    driverName: '',                                        // ### TODO ###
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
       This is Facebook's short share link. If the page has a proper vanity URL
       (facebook.com/SomeName), prefer that — it is stabler and a better signal
       for Google when it links the business's profiles together. */
    facebook: 'https://www.facebook.com/share/1AtEDdNNih/',
    /* Optional: shown after "Facebook ·" in that row. */
    facebookName: 'Al Akhtar Lombok Tours'
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
    idrPerEur: 17500,
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

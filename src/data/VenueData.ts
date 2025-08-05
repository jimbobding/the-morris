const PUB_BASE = "/images/venue-images/pub";
const COCKTAIL_BASE = "/images/venue-images/cocktail-bar";
const HIRE_BASE = "/images/venue-images/venue-hire";

const PLACEHOLDER = "/menus/placeholder.pdf";

export const venueData = {
  pub: {
    name: "The Pub",
    venueType: "pub",

    // ——— General Info ———
    description: "Cozy neighborhood pub on the ground floor.",
    icon: "🍺",
    blurb:
      "Cozy pub in the middle of Manchester! The Morris is your quintessential Manchester pub in the heart of the Northern Quarter. Come and grab a table or a stool at the bar to sample our locally brewed Mancunian beers.",
    hours: [
      "Mon: 12pm – 11.30pm",
      "Tue: 12pm – 11.30pm",
      "Wed: 12pm – 11.30pm",
      "Thu: 12pm – 11.30pm",
      "Fri: 12pm – 11.30pm",
      "Sat: 12pm – 11.30pm",
      "Sun: 12pm – 11.30pm",
    ],

    contact: {
      phone: "0161 123 4567",
      email: "pub@themorris.com",
      contactBackgroundImage: `${PUB_BASE}/backgrounds/SOLO DIAMOND BACKGROUND PATTERN_LINEN.jpg`,
    },

    // ——— Branding & Logos ———
    image: `${PUB_BASE}/logos/THE MORRIS_PUB LOGO_SKEWED_LINEN.png`,
    hoverLogo: `${PUB_BASE}/logos/THE MORRIS_PUB LOGO_SKEWED_CHARCOAL.png`,

    // ——— Backgrounds ———
    bgImage: `${PUB_BASE}/backgrounds/SOLO DIAMOND BACKGROUND PATTERN_CHARCOAL.jpg`,
    galleryBgImage: `${PUB_BASE}/backgrounds/SOLO DIAMOND BACKGROUND PATTERN_CHARCOAL.jpg`,
    menuBackground: `${PUB_BASE}/other-assets/IMG_2839.jpg`,
    menuGalleryBackground: `${PUB_BASE}/backgrounds/SOLO DIAMOND BACKGROUND PATTERN_TEAL.jpg`,
    openingHoursBgImage: `${PUB_BASE}/backgrounds/SOLO DIAMOND BACKGROUND PATTERN_LINEN.jpg`,
    // contactBackgroundImage: `${PUB_BASE}/backgrounds/SOLO DIAMOND BACKGROUND PATTERN_LINEN.jpg`,

    // ——— Gallery ———
    gallery: [
      `${PUB_BASE}/other-assets/IMG_1963.jpeg`,
      `${PUB_BASE}/other-assets/IMG_2282.JPG`,
      `${PUB_BASE}/other-assets/IMG_2031.jpeg`,
    ],

    // ——— Menu ———
    menu: {
      food: PLACEHOLDER,
      drinks: PLACEHOLDER,
    },
    menuDescription:
      "A proper pub menu with traditional snacks and locally brewed ales.",
    menuGallery: [
      `${PUB_BASE}/other-assets/IMG_2122.jpeg`,
      `${PUB_BASE}/other-assets/IMG_2274.JPG`,
      `${PUB_BASE}/other-assets/IMG_1966.jpeg`,
    ],
  },

  "cocktail-bar": {
    name: "Cocktail Bar",
    venueType: "cocktail-bar",

    // ——— General Info ———
    description: "Bespoke cocktails on the first floor.",
    icon: "🍸",
    blurb:
      "Elegant and intimate cocktail experience on the first floor. Sip on our bespoke creations made with premium spirits and fresh ingredients.",
    hours: "Mon–Sun: 12pm – 11.30pm",

    contact: {
      phone: "0161 765 4321",
      email: "cocktails@themorris.com",
      contactBackgroundImage: `${COCKTAIL_BASE}/other-assets/IMG_2264 (1).jpg`,
    },

    // ——— Branding & Logos ———
    image: `${COCKTAIL_BASE}/logos/THE MORRIS_COCKTAIL BAR LOGO_RED.png`,
    hoverLogo: `${COCKTAIL_BASE}/logos/THE%20MORRIS_COCKTAIL%20BAR%20LOGO_LIGHT%20YELLOW.png`,

    // ——— Backgrounds ———
    bgImage: `${COCKTAIL_BASE}/backgrounds/ELONGATED DIAMOND BACKGROUND PATTERN_LIGHT GREEN.jpg`,
    galleryBgImage: `${COCKTAIL_BASE}/backgrounds/ELONGATED%20DIAMOND%20BACKGROUND%20PATTERN_RED.jpg`,
    cpImage: `${COCKTAIL_BASE}/backgrounds/ELONGATED DIAMOND BACKGROUND PATTERN_DARK GREEN.jpg`,
    menuBackground: `${COCKTAIL_BASE}/other-assets/IMG_2006.JPG`,
    menuGalleryBackground: `${COCKTAIL_BASE}/backgrounds/ELONGATED DIAMOND PATTERN_DARK YELLOW.jpg`,
    openingHoursBgImage: `${COCKTAIL_BASE}/backgrounds/ELONGATED DIAMOND BACKGROUND PATTERN_LIGHT GREEN.jpg`,
    // contactBackgroundImage: `${COCKTAIL_BASE}/backgrounds/emerald07.jpg`,

    // ——— Gallery ———
    gallery: [
      `${COCKTAIL_BASE}/other-assets/IMG_2044.jpeg`,
      `${COCKTAIL_BASE}/other-assets/creamsoda01.jpg`,
      `${COCKTAIL_BASE}/other-assets/IMG_2205.jpeg`,
    ],

    // ——— Menu ———
    menu: {
      food: PLACEHOLDER,
      drinks: PLACEHOLDER,
    },
    menuDescription:
      "Sip on handcrafted cocktails with seasonal flavors and retro flair.",
    menuGallery: [
      `${COCKTAIL_BASE}/other-assets/IMG_3452.png`,
      `${COCKTAIL_BASE}/other-assets/IMG_2311.jpg`,
      `${COCKTAIL_BASE}/other-assets/fruitsalad04.jpg`,
    ],
  },

  "venue-hire": {
    name: "Private Hire Room",
    venueType: "private-hire",

    // ——— General Info ———
    description: "Private event room on the second floor.",
    icon: "🎉",
    blurb:
      "Host your private parties, meetings or events in our beautifully styled hire space. Tailored packages available.",
    hours: "Available by booking only",
    contact: {
      phone: "0161 225 6789",
      email: "events@themorris.com",
    },

    // ——— Branding & Logos ———
    image: `${HIRE_BASE}/logos/venue-hire-logo.png`,

    // ——— Backgrounds ———
    bgImage: `${HIRE_BASE}/backgrounds/bg.jpg`,
    cpImage: "",

    // ——— Gallery ———
    gallery: [
      `${HIRE_BASE}/gallery/hire1.jpg`,
      `${HIRE_BASE}/gallery/hire2.jpg`,
      `${HIRE_BASE}/gallery/hire3.jpg`,
    ],

    // ——— Menu ———
    menu: {
      food: PLACEHOLDER,
      drinks: PLACEHOLDER,
    },
    menuDescription: "hire me.",
  },
} as const;

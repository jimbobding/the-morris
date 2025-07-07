const PUB_BASE = "/images/venue-images/pub";
const COCKTAIL_BASE = "/images/venue-images/cocktail-bar";
const HIRE_BASE = "/images/venue-images/venue-hire";

const PLACEHOLDER = "/menus/placeholder.pdf";

export const venueData = {
  pub: {
    name: "The Pub",
    venueType: "pub",
    description: "Cozy neighborhood pub on the ground floor.",
    image: `${PUB_BASE}/logos/THE MORRIS_PUB LOGO_SKEWED_LINEN.png`,
    hoverLogo: `${PUB_BASE}/logos/THE MORRIS_PUB LOGO_SKEWED_CHARCOAL.png`,
    bgImage: `${PUB_BASE}/backgrounds/SOLO DIAMOND BACKGROUND PATTERN_CHARCOAL.jpg`,
    galleryBgImage: `${PUB_BASE}/backgrounds/SOLO DIAMOND BACKGROUND PATTERN_CHARCOAL.jpg`,
    cpImage: "",
    icon: "🍺",
    blurb:
      "Cozy pub in the middle of Manchester! The Morris is your quintessential Manchester pub in the heart of the Northern Quarter. Come and grab a table or a stool at the bar to sample our locally brewed Mancunian beers.",
    gallery: [
      `${PUB_BASE}/other-assets/IMG_1963.jpeg`,
      `${PUB_BASE}/other-assets/IMG_2282.JPG`,
      `${PUB_BASE}/other-assets/IMG_2031.jpeg`,
    ],
    menu: {
      food: PLACEHOLDER,
      drinks: PLACEHOLDER,
    },
    menuBackground: `${PUB_BASE}/other-assets/IMG_2839.jpg`,
    menuDescription:
      "A proper pub menu with traditional snacks and locally brewed ales.",
    menuGalleryBackground: `${PUB_BASE}/backgrounds/SOLO DIAMOND BACKGROUND PATTERN_TEAL.jpg`,
    menuGallery: [
      `${PUB_BASE}/other-assets/IMG_2122.jpeg`,
      `${PUB_BASE}/other-assets/IMG_2274.JPG`,
      `${PUB_BASE}/other-assets/IMG_1966.jpeg`,
    ],
    hours: "Mon–Sun: 12pm – 11.30pm",
    contact: {
      phone: "0161 123 4567",
      email: "pub@themorris.com",
    },
  },

  "cocktail-bar": {
    name: "Cocktail Bar",
    venueType: "cocktail",
    description: "Bespoke cocktails on the first floor.",
    image: `${COCKTAIL_BASE}/logos/THE MORRIS_COCKTAIL BAR LOGO_RED.png`,
    hoverLogo: `${COCKTAIL_BASE}/logos/THE%20MORRIS_COCKTAIL%20BAR%20LOGO_LIGHT%20YELLOW.png`,

    bgImage: `${COCKTAIL_BASE}/backgrounds/ELONGATED DIAMOND BACKGROUND PATTERN_LIGHT GREEN.jpg`,
    galleryBgImage: `${COCKTAIL_BASE}/backgrounds/ELONGATED%20DIAMOND%20BACKGROUND%20PATTERN_RED.jpg`,

    cpImage: `${COCKTAIL_BASE}/backgrounds/ELONGATED DIAMOND BACKGROUND PATTERN_DARK GREEN.jpg`,
    icon: "🍸",
    blurb:
      "Elegant and intimate cocktail experience on the first floor. Sip on our bespoke creations made with premium spirits and fresh ingredients.",
    gallery: [
      `${COCKTAIL_BASE}/other-assets/IMG_2044.jpeg`,
      `${COCKTAIL_BASE}/other-assets/IMG_2045.jpeg`,
      `${COCKTAIL_BASE}/other-assets/IMG_2205.jpeg`,
    ],
    menu: {
      food: PLACEHOLDER,
      drinks: PLACEHOLDER,
    },
    menuBackground: `${COCKTAIL_BASE}/other-assets/morris-menu.jpeg`,
    menuDescription:
      "Sip on handcrafted cocktails with seasonal flavors and retro flair.",
    menuGalleryBackground: `${COCKTAIL_BASE}/backgrounds/ELONGATED DIAMOND PATTERN_DARK YELLOW.jpg`,
    menuGallery: [
      `${COCKTAIL_BASE}/other-assets/IMG_2320.jpg`,
      `${COCKTAIL_BASE}/other-assets/IMG_2883.jpg`,
      `${COCKTAIL_BASE}/other-assets/IMG_2887.jpg`,
    ],
    hours: "Wed–Sat: 5pm – Late",
    contact: {
      phone: "0161 765 4321",
      email: "cocktails@themorris.com",
    },
  },

  "venue-hire": {
    name: "Private Hire Room",
    venueType: "private-hire",
    description: "Private event room on the second floor.",
    image: `${HIRE_BASE}/logos/venue-hire-logo.png`,
    bgImage: `${HIRE_BASE}/backgrounds/bg.jpg`,
    cpImage: "",
    icon: "🎉",
    blurb:
      "Host your private parties, meetings or events in our beautifully styled hire space. Tailored packages available.",
    gallery: [
      `${HIRE_BASE}/gallery/hire1.jpg`,
      `${HIRE_BASE}/gallery/hire2.jpg`,
      `${HIRE_BASE}/gallery/hire3.jpg`,
    ],
    menu: {
      food: PLACEHOLDER,
      drinks: PLACEHOLDER,
    },
    menuDescription: "hire me.",
    hours: "Available by booking only",
    contact: {
      email: "events@themorris.com",
      phone: "0161 225 6789",
    },
  },
} as const;

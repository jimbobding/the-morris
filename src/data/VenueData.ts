"use client";

const PUB_BASE = "/images/venue-images/pub";
const COCKTAIL_BASE = "/images/venue-images/cocktail-bar";
const HIRE_BASE = "/images/venue-images/venue-hire";

const PLACEHOLDER = "/menus/placeholder.pdf";

export const venueData = {
  pub: {
    name: "The Pub",
    venueType: "pub",
    description: "Cozy neighborhood pub on the ground floor.",
    blurb:
      "Our ground floor is everything a pub should be — familiar, welcoming and full of character. We pour the best of Manchester’s brewing scene alongside a great pint of Guinness and a carbonated spritz on tap, all set to an easy-going soundtrack that keeps the conversation flowing. Whether it’s a quiet midweek pint or a busy Saturday catch-up, Downstairs is where The Morris comes alive.",

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
      address: "123 Morris St, Manchester, M1 2AB",
      instagram: "@themorrispub",
    },

    image: `${PUB_BASE}/logos/THE MORRIS_PUB LOGO_SKEWED_LINEN.png`,
    hoverLogo: `${PUB_BASE}/logos/THE MORRIS_PUB LOGO_SKEWED_CHARCOAL.png`,
    menuBackground: `${PUB_BASE}/other-assets/IMG_2839.jpg`,

    backgroundColor: "#000000",
    textColor: "#FFFFFF",
    borderColor: "#FFFFFF",
    navbarBorderColor: "#B8860B",
    hoverColor: "#FFCC00",

    gallery: [
      `${PUB_BASE}/other-assets/IMG_1963.jpeg`,
      `${PUB_BASE}/other-assets/IMG_2282.JPG`,
      `${PUB_BASE}/other-assets/IMG_2031.jpeg`,
    ],

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
    description: "Bespoke cocktails on the first floor.",
    blurb:
      "A cocktail bar with a retro spirit and modern edge. Inspired by the creative energy of the Northern Quarter over the years, Upstairs is where nostalgia meets craft. Expect refined classics, playful signatures and an atmosphere that blends low-lit comfort with a touch of glamour. Every detail — from the glassware to the playlist — is designed for good taste and good times.",

    hours: "Mon–Sun: 12pm – 11.30pm",

    contact: {
      phone: "0161 393 2283",
      email: "pub@themorris.com",
      address: "57 Thomas St, Manchester M4 1NA",
      instagram: "@themorrispub",
    },

    image: `${COCKTAIL_BASE}/logos/THE MORRIS_COCKTAIL BAR LOGO_LIGHT YELLOW.png`,
    hoverLogo: `${COCKTAIL_BASE}/logos/THE%20MORRIS_COCKTAIL%20BAR%20LOGO_LIGHT%20YELLOW.png`,
    menuBackground: `${COCKTAIL_BASE}/other-assets/IMG_2006.JPG`,

    backgroundColor: "#72233F",
    textColor: "#FF9B7A",
    borderColor: "#FF9B7A",
    navbarBorderColor: "#FF5E5E",
    hoverColor: "#D5654D",
    footerBgColor: "#2B0000",

    gallery: [
      `${COCKTAIL_BASE}/other-assets/IMG_2044.jpeg`,
      `${COCKTAIL_BASE}/other-assets/creamsoda01.jpg`,
      `${COCKTAIL_BASE}/other-assets/IMG_2205.jpeg`,
    ],

    menu: {
      food: PLACEHOLDER,
      drinks: PLACEHOLDER,
    },
    menuDescription:
      "Sip on handcrafted cocktails with seasonal flavors and retro flair.",
    menuGallery: [],
  },

  "venue-hire": {
    name: "Private Hire Room",
    venueType: "private-hire",
    description: "Private event room on the second floor.",
    blurb:
      "Host your private parties, meetings or events in our beautifully styled hire space. Tailored packages available.",

    hours: "Available by booking only",

    contact: {
      phone: "0161 225 6789",
      email: "events@themorris.com",
      address: "57 Thomas St, Manchester M4 1NA",
      instagram: "@themorrispub",
    },

    image: `${HIRE_BASE}/logos/venue-hire-logo.png`,

    backgroundColor: "#BDBDB2",
    textColor: "#D5654D",
    borderColor: "#D5654D",
    navbarBorderColor: "#FFFFFF",

    gallery: [],

    menu: {
      food: PLACEHOLDER,
      drinks: PLACEHOLDER,
    },
    menuDescription: "Hire space info.",
  },

  landing: {
    name: "Landing Page",
    backgroundColor: "#2B3036",
    textColor: "#F1E8E0",
    hoverColor: "#BDBDB2",
  },
} as const;

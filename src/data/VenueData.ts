export const venueData = {
  pub: {
    name: "The Pub",
    description: "Cozy neighborhood pub on the ground floor.",
    image:
      "/images/venue-images/pub/logos/THE MORRIS_PUB LOGO_SKEWED_LINEN.png",
    bgImage:
      "/images/venue-images/pub/backgrounds/SOLO DIAMOND BACKGROUND PATTERN_CHARCOAL.jpg",
    cpImage: "",
    icon: "🍺",
  },
  "cocktail-bar": {
    name: "Cocktail Bar",
    description: "Bespoke cocktails on the first floor.",
    image:
      "/images/venue-images/cocktail-bar/logos/THE MORRIS_COCKTAIL BAR LOGO_RED.png",
    bgImage:
      "/images/venue-images/cocktail-bar/backgrounds/ELONGATED DIAMOND BACKGROUND PATTERN_LIGHT GREEN.jpg",
    cpImage:
      "/images/venue-images/cocktail-bar/backgrounds/ELONGATED DIAMOND BACKGROUND PATTERN_DARK GREEN.jpg",
    icon: "🍸",
  },
  "venue-hire": {
    name: "Private Hire Room",
    description: "Private event room on the second floor.",
    bgImage: "",
    cpImage: "",
    icon: "", // ✅ add this
  },
} as const;

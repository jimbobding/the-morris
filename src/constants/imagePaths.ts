// /constants/imagePaths.ts

export const PUB_BASE = "/images/venue-images/pub";
export const COCKTAIL_BASE = "/images/venue-images/cocktail-bar";
export const HIRE_BASE = "/images/venue-images/venue-hire";
export const MATES = "/images/venue-images/mates";

export const LOGOS = {
  pub: {
    // switched
    default: `${COCKTAIL_BASE}/logos/THE MORRIS_COCKTAIL BAR LOGO_LIGHT GREEN.png`,
    hover: `${PUB_BASE}/logos/THE MORRIS_PUB HORIZONTAL LOGO_LINEN.png`,
  },
  "cocktail-bar": {
    default: `${PUB_BASE}/logos/THE MORRIS_PUB HORIZONTAL LOGO_LINEN.png`,
    hover: `${COCKTAIL_BASE}/logos/THE MORRIS_COCKTAIL BAR LOGO_LIGHT GREEN.png`,
  },
  "private-hire": {
    default: `${PUB_BASE}/logos/THE MORRIS_PUB HORIZONTAL LOGO_LINEN.png`,
    hover: `${HIRE_BASE}/logos/THE MORRIS_PRIVATE HIRE LOGO.png`,
  },
  " mates": {
    default: `${MATES}/logos/THE MORRIS_MATES LOGO_LIGHT GREEN.png`,
    hover: `${MATES}/logos/THE MORRIS_MATES LOGO_LINEN.png`,
  },
  default: {
    default: `${COCKTAIL_BASE}/logos/THE MORRIS_COCKTAIL BAR LOGO_LIGHT GREEN.png`,
    hover: `${PUB_BASE}/logos/THE MORRIS_PUB HORIZONTAL LOGO_LINEN.png`,
  },
};

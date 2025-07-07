export type Venue = {
  id: string;
  label: string;
  logo: string;
  hoverLogo: string;
};

export const venues: Venue[] = [
  {
    id: "pub",
    label: "Ground Floor Pub",
    logo: "/images/venue-images/pub/logos/THE MORRIS_PUB HORIZONTAL LOGO_LINEN.png",
    hoverLogo:
      "/images/venue-images/pub/logos/THE MORRIS_PUB HORIZONTAL LOGO_TEAL.png",
  },
  {
    id: "cocktail-bar",
    label: "First Floor Cocktail Bar",
    logo: "/images/venue-images/cocktail-bar/logos/THE MORRIS_COCKTAIL BAR LOGO_LIGHT GREEN.png",
    hoverLogo:
      "/images/venue-images/cocktail-bar/logos/THE MORRIS_COCKTAIL BAR LOGO_LIGHT YELLOW.png",
  },
];

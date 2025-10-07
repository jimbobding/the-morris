// src/components/Navbar/MobileMenu.tsx
import NavLinks from "./NavLinks";
import { venueData } from "@/data/VenueData";

type Props = {
  close: () => void;
};

type VenueSlug = keyof typeof venueData; // "pub" | "cocktail-bar" (private-hire is commented out)

export default function MobileMenu({ close }: Props) {
  const venueSlugs = Object.keys(venueData) as VenueSlug[];

  return (
    <ul className="md:hidden mt-3 space-y-2 text-sm">
      {venueSlugs.map((slug) => (
        <NavLinks key={slug} onClick={close} targetSlug={slug} />
      ))}
    </ul>
  );
}

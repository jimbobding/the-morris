// src/components/Navbar/MobileMenu.tsx
import NavLinks from "./NavLinks";

type Props = {
  close: () => void;
};

export default function MobileMenu({ close }: Props) {
  return (
    <ul className="md:hidden mt-3 space-y-2 text-sm">
      <NavLinks
        targetSlug="default" // or use a dynamic value like venueSlug if available
        textColor="#fff" // or another color that fits your theme
        onClick={close}
      />
    </ul>
  );
}

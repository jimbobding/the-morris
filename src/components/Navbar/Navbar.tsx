"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useNavbarToggle } from "../hooks/useNavbarToggle";
import NavLinks from "./NavLinks";
import HamburgerButton from "./HamburgerButton";
import MobileMenu from "./MobileMenu";

type VenueSlug = "pub" | "cocktail-bar" | "private-hire" | "default";

type NavbarProps = {
  bgColor?: string;
  textColor?: string;
  targetSlug?: VenueSlug;
};

export default function Navbar({
  bgColor = "#000",
  textColor = "#fff",
  targetSlug = "default",
}: NavbarProps) {
  const { isOpen, toggle, close } = useNavbarToggle();
  const pathname = usePathname();

  const segments = pathname.split("/");
  const venueSlug =
    segments[1] === "venues" ? (segments[2] as VenueSlug) : "default";

  // distinct accent (hover + border) colors per venue
  const accentColors: Record<VenueSlug, string> = {
    pub: "#B8860B", // golden amber
    "cocktail-bar": "#FF5E5E", // neon red
    "private-hire": "#FFD700", // bright gold
    default: "#FFB6C1", // soft pink
  };

  const accent = accentColors[venueSlug] || accentColors.default;

  return (
    <nav
      className="px-6 py-3 sticky top-0 z-50 backdrop-blur-md transition-all duration-500"
      style={{
        backgroundColor: bgColor,
        color: textColor,
        borderBottom: `3px solid ${accent}`,
      }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Brand link */}
        <div className="text-lg font-semibold tracking-wide">
          <Link href="/">The Morris</Link>
        </div>

        {/* Hamburger (mobile) */}
        <HamburgerButton isOpen={isOpen} toggle={toggle} />

        {/* Desktop nav */}
        <ul className="hidden md:flex space-x-6 text-sm">
          <NavLinks targetSlug={venueSlug} textColor={textColor} />
        </ul>
      </div>

      {/* Mobile menu */}
      {isOpen && <MobileMenu close={close} />}
    </nav>
  );
}

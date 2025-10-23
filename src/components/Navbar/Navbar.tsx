"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useNavbarToggle } from "../hooks/useNavbarToggle";
import NavLinks from "./NavLinks";
import HamburgerButton from "./HamburgerButton";
import MobileMenu from "./MobileMenu";

// Correct import
import { venueData } from "@/data/VenueData";

type VenueSlug = "pub" | "cocktail-bar" | "private-hire" | "default";

type NavbarProps = {
  bgColor?: string;
  textColor?: string;
  targetSlug?: VenueSlug;
  navbarBorderColor?: string;
  hoverColor?: string;
};

export default function Navbar({
  bgColor,
  textColor,

  navbarBorderColor,
}: NavbarProps) {
  const { isOpen, toggle, close } = useNavbarToggle();
  const pathname = usePathname();

  const segments = pathname.split("/");
  const venueSlug =
    segments[1] === "venues" ? (segments[2] as VenueSlug) : "default";

  // Get colors from dataset
  const venueInfo = venueData[venueSlug] || venueData.landing;

  const bg = bgColor || venueInfo.backgroundColor || "#000";
  const text = textColor || venueInfo.textColor || "#fff";
  const border = navbarBorderColor || venueInfo.borderColor || "#ccc";

  return (
    <nav
      className="px-6 py-3 sticky top-0 z-50 backdrop-blur-md transition-all duration-500"
      style={{
        backgroundColor: bg,
        color: text,
        borderBottom: `3px solid ${border}`,
      }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="text-lg font-semibold tracking-wide">
          <Link href="/">The Morris</Link>
        </div>

        <HamburgerButton isOpen={isOpen} toggle={toggle} />

        <ul className="hidden md:flex space-x-6 text-sm">
          <NavLinks targetSlug={venueSlug} textColor={text} />
        </ul>
      </div>

      {isOpen && <MobileMenu close={close} />}
    </nav>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useNavbarToggle } from "../hooks/useNavbarToggle";
import NavLinks from "./NavLinks";
import HamburgerButton from "./HamburgerButton";
import MobileMenu from "./MobileMenu";
import { venueData } from "@/data/VenueData";

type VenueSlug = "pub" | "cocktail-bar" | "private-hire" | "default";

type NavbarProps = {
  bgColor?: string;
  textColor?: string;
  navbarBorderColor?: string;
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

  const venueInfo = venueData[venueSlug] || venueData.landing;

  const bg = bgColor || venueInfo.backgroundColor || "#000";
  const text = textColor || venueInfo.textColor || "#fff";
  const border = navbarBorderColor || venueInfo.borderColor || "#ccc";

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-500"
      style={{
        backgroundColor: bg,
        color: text,
        borderBottom: `3px solid ${border}`,
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="text-lg font-semibold tracking-wide">
          <Link href="/">The Morris</Link>
        </div>

        {/* Hamburger button for mobile */}
        <HamburgerButton isOpen={isOpen} toggle={toggle} />

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-sm">
          <NavLinks targetSlug={venueSlug} textColor={text} />
        </ul>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && <MobileMenu close={close} />}
    </nav>
  );
}

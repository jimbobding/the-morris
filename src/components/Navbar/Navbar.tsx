"use client";

import Link from "next/link";
import { useNavbarToggle } from "../hooks/useNavbarToggle";
import NavLinks from "./NavLinks";
import HamburgerButton from "./HamburgerButton";
import MobileMenu from "./MobileMenu";

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

  const bg = bgColor || "#000";
  const text = textColor || "#fff";
  const border = navbarBorderColor || "#ccc";

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
        <div className="text-lg font-semibold tracking-wide">
          <Link href="/">The Morris</Link>
        </div>

        <HamburgerButton isOpen={isOpen} toggle={toggle} />

        <ul className="hidden md:flex space-x-6 text-sm">
          <NavLinks textColor={text} />
        </ul>
      </div>

      {isOpen && <MobileMenu close={close} />}
    </nav>
  );
}

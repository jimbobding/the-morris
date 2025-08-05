"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // import here
import { useNavbarToggle } from "../hooks/useNavbarToggle";
import NavLinks from "./NavLinks";
import HamburgerButton from "./HamburgerButton";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const { isOpen, toggle, close } = useNavbarToggle();
  const pathname = usePathname();

  // Extract venue slug from URL (e.g., /venues/pub)
  const segments = pathname.split("/");
  const targetSlug = segments[1] === "venues" ? segments[2] : "default";

  return (
    <nav className="bg-gray-900 text-white px-4 py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="text-lg font-semibold">
          <Link className="m-0 p-0" href="/">
            The Morris
          </Link>
        </div>

        <HamburgerButton isOpen={isOpen} toggle={toggle} />

        {/* Desktop nav */}
        <ul className="hidden md:flex space-x-6 text-sm">
          <NavLinks targetSlug={targetSlug} />
        </ul>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && <MobileMenu close={close} />}
    </nav>
  );
}

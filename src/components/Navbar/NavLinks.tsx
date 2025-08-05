"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { LOGOS } from "@/constants/imagePaths"; // logo config

// Define allowed slugs
type VenueSlug = "pub" | "cocktail-bar" | "private-hire" | "default";

type Props = {
  onClick?: () => void;
  targetSlug: VenueSlug;
};

export default function NavLinks({ onClick, targetSlug }: Props) {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);

  const venueSlug: VenueSlug = pathname.startsWith("/venues")
    ? (pathname.split("/")[2] as VenueSlug)
    : "default";

  const linkBaseStyles =
    "relative inline-block px-2 py-1 transition duration-300";

  const baseUnderlineStyles = `
    after:content-[''] after:absolute after:left-0 after:-bottom-0.5 
    after:w-0 after:h-[2px] after:transition-all after:duration-300 
    hover:after:w-full
  `;

  const venueStyles: Record<VenueSlug, string> = {
    pub: "after:bg-[#FFFDD0] hover:text-[#FFFDD0]",
    "cocktail-bar": "after:bg-[#980001] hover:text-[#980001]",
    "private-hire": "after:bg-[#00CED1] hover:text-[#00CED1]",
    default: "after:bg-white hover:text-white",
  };

  const venueSpecificStyles = venueStyles[venueSlug] || venueStyles.default;

  // Safely access logo paths
  const currentLogos = LOGOS[targetSlug] || LOGOS.default;
  const logoSrc = isHovered ? currentLogos.hover : currentLogos.default;

  // Alternate venue logo switching logic
  const venueOrder: VenueSlug[] = ["pub", "cocktail-bar"];
  const currentIndex = venueOrder.indexOf(targetSlug);
  const nextSlug = venueOrder[(currentIndex + 1) % venueOrder.length];

  const navLinks = [
    { href: "#gallery", label: "Gallery" },
    { href: "#menu", label: "Menu" },
    { href: "#contact", label: "Contact" },
    { href: "#opening", label: "Opening Hours" },
  ];

  return (
    <ul className="flex items-center space-x-6">
      {pathname.startsWith("/venues") && (
        <li>
          <Link
            href={`/venues/${nextSlug}`}
            className="block w-[120px] h-[40px] relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              src={logoSrc}
              alt={`${nextSlug} logo`}
              fill
              className="object-contain"
              priority
            />
          </Link>
        </li>
      )}

      {navLinks.map(({ href, label }) => {
        if (href.startsWith("#") && !pathname.startsWith("/venues"))
          return null;

        return (
          <li key={label}>
            <Link
              href={href}
              onClick={onClick}
              className={`${linkBaseStyles} ${baseUnderlineStyles} ${venueSpecificStyles}`}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

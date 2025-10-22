"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LOGOS } from "@/constants/imagePaths";
import { venueData } from "@/data/VenueData";

type VenueSlug = "pub" | "cocktail-bar" | "private-hire" | "default";

type Props = {
  targetSlug: VenueSlug;
  textColor: string;
  onClick?: () => void;
};

export default function NavLinks({ targetSlug, textColor, onClick }: Props) {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);

  // Pull hover color dynamically from dataset
  const venueInfo = venueData[targetSlug as keyof typeof venueData];
  const hoverColor =
    venueInfo?.hoverColor || venueInfo?.borderColor || "#FFB6C1";

  // Handle logos
  const currentLogos = LOGOS[targetSlug] || LOGOS.default;
  const logoSrc = isHovered ? currentLogos.hover : currentLogos.default;

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
      {navLinks.map(({ href, label }) => {
        // Only show hash links if on /venues pages
        if (href.startsWith("#") && !pathname.startsWith("/venues"))
          return null;

        return (
          <li key={label}>
            <Link
              href={href}
              onClick={onClick}
              className="relative inline-block px-2 py-1 transition-colors duration-300 group"
              style={
                {
                  color: textColor,
                  "--hover-color": hoverColor,
                } as React.CSSProperties
              }
            >
              {label}
              {/* Animated underline */}
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-[var(--hover-color)] transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
        );
      })}

      {/* Venue swap logo */}
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
    </ul>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LOGOS } from "@/constants/imagePaths";

type VenueSlug = "pub" | "cocktail-bar" | "private-hire" | "default";

type Props = {
  targetSlug: VenueSlug;
  textColor: string;
  onClick?: () => void;
};

export default function NavLinks({ targetSlug, textColor, onClick }: Props) {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);

  const hoverColors: Record<VenueSlug, string> = {
    pub: "#B8860B", // golden amber
    "cocktail-bar": "#FF5E5E", // neon red
    "private-hire": "#FFD700", // gold
    default: "#FFB6C1", // pink accent
  };

  const hoverColor = hoverColors[targetSlug] || hoverColors.default;

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
      {/* Nav links */}
      {navLinks.map(({ href, label }) => {
        if (href.startsWith("#") && !pathname.startsWith("/venues"))
          return null;

        return (
          <li key={label}>
            <Link
              href={href}
              onClick={onClick}
              className="relative inline-block px-2 py-1 transition-all duration-300"
              style={{
                color: textColor,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = hoverColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = textColor;
              }}
            >
              {label}
              <span
                className="absolute left-0 -bottom-0.5 h-[2px] transition-all duration-300 w-0 group-hover:w-full"
                style={{ backgroundColor: hoverColor }}
              ></span>
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

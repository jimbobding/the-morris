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

  const venueInfo = venueData[targetSlug];
  const hoverColor =
    venueInfo?.hoverColor || venueInfo?.borderColor || "#FFB6C1";

  const currentLogos = LOGOS[targetSlug] || LOGOS.default;
  const logoSrc = isHovered ? currentLogos.hover : currentLogos.default;

  const navLinks = [
    { href: "#Morris", label: "The Morris" },
    { href: "#Downstairs", label: "Downstairs" },
    { href: "#Upstairs", label: "Upstairs" },
    { href: "#Loft", label: "The Loft" },
    { href: "#Mates", label: "Mates of Morris" },
  ];

  return (
    <>
      {navLinks.map(({ href, label }) => {
        // 🔥 ALWAYS show hash links
        if (href.startsWith("#")) {
          return (
            <li key={label}>
              <a
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
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-[var(--hover-color)] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          );
        }

        // Normal Next.js route link
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
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-[var(--hover-color)] transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
        );
      })}

      {/* Venue swap logo */}
      {pathname.startsWith("/venues") && (
        <li>
          <Link
            href={`/venues/${targetSlug === "pub" ? "cocktail-bar" : "pub"}`}
            className="block w-[120px] h-[40px] relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              src={logoSrc}
              alt="venue logo"
              fill
              className="object-contain"
            />
          </Link>
        </li>
      )}
    </>
  );
}

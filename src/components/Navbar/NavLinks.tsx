"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LOGOS } from "@/constants/imagePaths";
import { venueData } from "@/data/VenueData";

type VenueSlug = "pub" | "cocktail-bar" | "private-hire" | "default";

type Props = {
  targetSlug: VenueSlug;
  textColor: string;
  onClick?: () => void; // called to close mobile menu
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

  const handleHashScroll = (href: string) => {
    if (onClick) onClick(); // close mobile menu first

    const scrollToId = () => {
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (!el) return;

      const header = document.querySelector("header");
      const headerHeight = header ? header.clientHeight : 0;

      const y = el.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({ top: y, behavior: "smooth" });
    };

    // Wait for DOM & layout to settle
    requestAnimationFrame(() => {
      scrollToId();
      setTimeout(scrollToId, 50); // extra frame for mobile menu animations
    });
  };

  return (
    <>
      {navLinks.map(({ href, label }) => {
        // Hash links use button for smooth scroll
        if (href.startsWith("#")) {
          return (
            <li key={label}>
              <button
                onClick={() => handleHashScroll(href)}
                className="relative inline-block px-2 py-1 transition-colors duration-300 group text-left"
                style={
                  {
                    color: textColor,
                    "--hover-color": hoverColor,
                  } as React.CSSProperties
                }
              >
                {label}
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-[var(--hover-color)] transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          );
        }

        // Regular Next.js links
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
      })}

      {/* Venue swap logo */}
      {pathname.startsWith("/venues") && (
        <li>
          <button
            className="block w-[120px] h-[40px] relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick} // close mobile menu if clicked
          >
            <Image
              src={logoSrc}
              alt="venue logo"
              fill
              className="object-contain"
            />
          </button>
        </li>
      )}
    </>
  );
}

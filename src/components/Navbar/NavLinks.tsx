"use client";

import { useEffect } from "react";

type Props = {
  textColor: string;
  onClick?: () => void; // for closing mobile menu
};

export default function NavLinks({ textColor, onClick }: Props) {
  const navLinks = [
    { href: "#morris", label: "The Morris" },
    { href: "#downstairs", label: "Downstairs" },
    { href: "#upstairs", label: "Upstairs" },
    { href: "#loft", label: "The Loft" },
    { href: "#mates", label: "Mates of Morris" },
  ];

  // Scroll to the target section
  const scrollToHash = (hash: string) => {
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    // Measure nav height dynamically
    const nav = document.querySelector("nav");
    const navHeight = nav ? nav.clientHeight : 0;

    // Pixel-perfect target Y
    const targetY = el.offsetTop - navHeight;

    // Debug logging
    console.log("NAV CLICK:", hash);
    console.log("Resolved ID:", id);
    console.log("Element found:", !!el);
    console.log("Element offsetTop:", el.offsetTop);
    console.log("Navbar height:", navHeight);
    console.log("Scroll targetY:", targetY);

    // Smooth scroll
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  // Handle hash in URL on first load
  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash.toLowerCase();
      console.log("Initial hash detected:", hash);

      // Delay scroll slightly to wait for layout
      setTimeout(() => scrollToHash(hash), 50);
    }
  }, []);

  return (
    <>
      {navLinks.map(({ href, label }) => (
        <li key={label}>
          <button
            onClick={(e) => {
              e.preventDefault(); // Prevent native browser jump
              scrollToHash(href);
              if (onClick) onClick(); // close mobile menu
            }}
            className="relative inline-block px-2 py-1 transition-colors duration-300 group text-left"
            style={{ color: textColor }}
          >
            {label}
            <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-current transition-all duration-300 group-hover:w-full" />
          </button>
        </li>
      ))}
    </>
  );
}

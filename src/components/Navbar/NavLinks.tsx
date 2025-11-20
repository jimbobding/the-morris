"use client";

import { useEffect } from "react";

type Props = {
  textColor: string;
  onClick?: () => void; // optional, e.g., to close mobile menu
};

export default function NavLinks({ textColor, onClick }: Props) {
  const navLinks = [
    { href: "#Morris", label: "The Morris" },
    { href: "#Downstairs", label: "Downstairs" },
    { href: "#Upstairs", label: "Upstairs" },
    { href: "#Loft", label: "The Loft" },
    { href: "#Mates", label: "Mates of Morris" },
  ];

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const header = document.querySelector("header");
    const headerHeight = header ? header.clientHeight : 0;

    const y =
      el.getBoundingClientRect().top + window.scrollY - headerHeight - 5;

    // Smooth scroll
    window.scrollTo({ top: y, behavior: "smooth" });

    // iOS Safari fallback
    setTimeout(() => window.scrollTo(0, y), 50);
  };

  const handleClick = (href: string) => {
    if (onClick) onClick(); // close mobile menu if applicable
    const id = href.replace("#", "");
    // Small delay to allow mobile menu animation to finish
    setTimeout(() => scrollToId(id), 100);
  };

  // Scroll to hash on initial load
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const id = hash.replace("#", "");
    scrollToId(id);
  }, []);

  return (
    <>
      {navLinks.map(({ href, label }) => (
        <li key={label}>
          <button
            onClick={() => handleClick(href)}
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

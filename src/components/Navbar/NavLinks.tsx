"use client";

import { useEffect } from "react";

type Props = {
  textColor: string;
  onClick?: () => void;
};

export default function NavLinks({ textColor, onClick }: Props) {
  const navLinks = [
    { href: "#morris", label: "The Morris" },
    { href: "#downstairs", label: "Downstairs" },
    { href: "#upstairs", label: "Upstairs" },
    { href: "#loft", label: "The Loft" },
    { href: "#mates", label: "Mates of Morris" },
  ];

  const scrollToID = (href: string) => {
    if (onClick) onClick(); // close mobile menu

    setTimeout(() => {
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (!el) return;

      const header = document.querySelector("nav");
      const headerHeight = header ? header.clientHeight : 0;

      const y =
        el.getBoundingClientRect().top + window.scrollY - headerHeight - 4;

      window.scrollTo({ top: y, behavior: "smooth" });

      // iPhone double-scroll fix
      setTimeout(() => {
        window.scrollTo({ top: y });
      }, 60);
    }, 80);
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    const header = document.querySelector("nav");
    const headerHeight = header ? header.clientHeight : 0;

    const y =
      el.getBoundingClientRect().top + window.scrollY - headerHeight - 4;

    window.scrollTo({ top: y, behavior: "smooth" });

    setTimeout(() => window.scrollTo({ top: y }), 80);
  }, []);

  return (
    <>
      {navLinks.map(({ href, label }) => (
        <li key={label}>
          <button
            onClick={() => scrollToID(href)}
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

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
  ];

  // -------------------------
  // SCROLL FUNCTION
  // -------------------------
  const scrollToHash = (hash: string) => {
    const id = hash.replace("#", "").toLowerCase();
    const el = document.getElementById(id);
    if (!el) return;

    const nav = document.querySelector("nav");
    const navHeight = nav ? nav.clientHeight : 0;

    // THE FIX — do not change this line
    const targetY = el.offsetTop - navHeight - 4;

    console.log("Scrolling to:", id);
    console.log("el.offsetTop:", el.offsetTop);
    console.log("navHeight:", navHeight);
    console.log("targetY:", targetY);

    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  // -------------------------
  // SCROLL ON PAGE LOAD IF HASH EXISTS
  // -------------------------
  useEffect(() => {
    const handleLoad = () => {
      if (window.location.hash) scrollToHash(window.location.hash); // <-- fixed function name
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  // -------------------------
  // RENDER NAV LINKS
  // -------------------------
  return (
    <>
      {navLinks.map(({ href, label }) => (
        <li key={label}>
          <button
            onClick={(e) => {
              e.preventDefault(); // prevent native jump
              scrollToHash(href);
              if (onClick) onClick(); // close mobile menu if needed
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

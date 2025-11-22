"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function useHashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash.toLowerCase();
    if (!hash) return;

    const id = hash.replace("#", "");

    const interval = setInterval(() => {
      const el = document.getElementById(id);
      if (!el) return;

      const header = document.querySelector("nav");
      const headerHeight = header ? header.clientHeight : 0;

      const y = el.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({ top: y, behavior: "smooth" });
      clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, [pathname]);
}

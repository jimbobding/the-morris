"use client";

import React from "react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const venue = segments[1] === "venues" ? segments[2] : "default";

  // 🎨 Venue color palette
  const colorMap: Record<string, { bg: string; text: string; accent: string }> =
    {
      pub: {
        bg: "#000000",
        text: "#FFFFFF",
        accent: "#B8860B", // gold
      },
      "cocktail-bar": {
        bg: "#2B0000",
        text: "#FFF8E1",
        accent: "#FF5E5E", // neon red
      },
      "private-hire": {
        bg: "#1A1A1A",
        text: "#FFFFFF",
        accent: "#FFD700", // bright gold
      },
      default: {
        bg: "#111111",
        text: "#FFFFFF",
        accent: "#FFB6C1", // soft pink
      },
    };

  const { bg, text, accent } = colorMap[venue] || colorMap.default;

  return (
    <footer
      className="p-4 text-center space-y-2 transition-all duration-500 border-t-2"
      style={{
        backgroundColor: bg,
        color: text,
        borderTopColor: accent,
      }}
    >
      <p className="text-sm">&copy; 2025 The Morris. All rights reserved.</p>
      <p className="text-sm">
        Visit our sister venue{" "}
        <a
          href="https://www.blinkerbar.co.uk/"
          className="inline-block px-4 py-2 border-b-2 border-transparent transition-all duration-300 hover:-translate-y-1"
          style={{
            color: accent,
            borderBottomColor: "transparent",
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLElement).style.borderBottomColor = accent)
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLElement).style.borderBottomColor = "transparent")
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          BLINKER
        </a>
      </p>
    </footer>
  );
}

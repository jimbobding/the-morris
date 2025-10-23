"use client";

import React from "react";
import clsx from "clsx";

type OpeningHoursSectionProps = {
  hours: string[] | string;
  venueType: "cocktail-bar" | "pub";
  openingHoursBgImage?: string;
  address?: string;
  phone?: string;
  textColor?: string; // primary color
  outlineColor?: string; // secondary color for outline
};

export default function OpeningHours({
  hours,
  venueType,
  openingHoursBgImage,

  textColor = "#FF9B7A", // primary
  outlineColor = "#72233F", // secondary
}: OpeningHoursSectionProps) {
  const isPub = venueType === "pub";
  const isCocktailBar = venueType === "cocktail-bar";

  const backgroundStyle = openingHoursBgImage
    ? {
        backgroundImage: `url('${openingHoursBgImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
    : {};

  // glow + outline using multiple text-shadow layers
  const textShadowStyle = `
    0 0 2px ${outlineColor},
    0 0 4px ${outlineColor},
    0 0 8px ${textColor},
    0 0 16px ${textColor}
  `;

  return (
    <div
      className={clsx(
        "relative py-24 px-4 flex justify-center items-center",
        isPub ? "text-white" : ""
      )}
      style={backgroundStyle}
    >
      {/* PUB Layout */}
      {isPub && Array.isArray(hours) && (
        <div className="bg-black/60 border border-white rounded-xl p-10 max-w-md w-full text-center shadow-xl relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-white rounded-b-full"></div>
          <h2 className="text-3xl font-semibold tracking-wider uppercase mb-8">
            Opening Hours
          </h2>
          <ul className="space-y-4">
            {hours.map((entry, index) => {
              const [day, time] = entry.split(":");
              return (
                <li
                  key={index}
                  className="flex justify-between border-b border-white/20 pb-1 text-white/90"
                >
                  <span className="uppercase tracking-wide text-sm">
                    {day.trim()}
                  </span>
                  <span className="font-bold text-base">{time.trim()}</span>
                </li>
              );
            })}
          </ul>
          <div className="mt-8 text-xs text-white/70 tracking-wider uppercase">
            themorris.com
          </div>
        </div>
      )}

      {/* COCKTAIL BAR Layout */}
      {isCocktailBar && typeof hours === "string" && (
        <div className="text-center">
          <h2
            className="text-5xl font-extrabold mb-4 tracking-widest uppercase"
            style={{
              color: textColor,
              textShadow: textShadowStyle,
            }}
          >
            Opening Hours
          </h2>
          <p
            className="text-2xl font-medium"
            style={{
              color: textColor,
              textShadow: textShadowStyle,
            }}
          >
            {hours}
          </p>
        </div>
      )}
    </div>
  );
}

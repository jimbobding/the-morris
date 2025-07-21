"use client";

import React from "react";
import clsx from "clsx";

type OpeningHoursSectionProps = {
  hours: string[] | string;
  venueType: "cocktail-bar" | "pub";
  openingHoursBgImage: string;
};

export default function OpeningHoursSection({
  hours,
  venueType,
  openingHoursBgImage,
}: OpeningHoursSectionProps) {
  const isPub = venueType === "pub";
  const isCocktailBar = venueType === "cocktail-bar";

  const backgroundStyle = {
    backgroundImage: `url('${openingHoursBgImage}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      className={clsx(
        "relative py-24 px-4 flex justify-center items-center",
        isPub ? "text-white" : "text-white font-neon"
      )}
      style={backgroundStyle}
    >
      {/* === PUB Layout === */}
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
      {/* === COCKTAIL BAR Layout === */}
      {isCocktailBar && typeof hours === "string" && (
        <div className="text-center text-yellow-300">
          <h2 className="text-5xl font-extrabold mb-4 tracking-widest uppercase drop-shadow-neon">
            Opening Hours
          </h2>
          <p
            className="text-2xl font-medium drop-shadow-neon {
"
          >
            {hours}
          </p>
        </div>
      )}
    </div>
  );
}

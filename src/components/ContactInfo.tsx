"use client";

import Image from "next/image";
import clsx from "clsx";

type VenueInfoSectionProps = {
  hours: string[] | string;
  venueType: "pub" | "cocktail-bar";
  address: string;
  phone: string;
  email: string;
  backgroundImage?: string;
};

export default function VenueInfoSection({
  hours,
  venueType,
  address,
  phone,
  email,
  backgroundImage,
}: VenueInfoSectionProps) {
  const isPub = venueType === "pub";
  const isCocktailBar = venueType === "cocktail-bar";

  return (
    <section className="relative w-full py-20 px-6 text-white">
      {/* Background image */}
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt="Venue background"
            fill
            className="object-cover object-center -z-10"
            quality={85}
          />
          <div className="absolute inset-0 bg-black/60 -z-10" />
        </>
      )}

      {/* 2 Column Layout */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* === Opening Hours === */}
        <div
          className={clsx(
            "p-8 rounded-2xl bg-black/60 border border-white/20 shadow-lg backdrop-blur-md",
            isCocktailBar && "text-yellow-300"
          )}
        >
          <h2 className="text-3xl font-bold mb-6 uppercase tracking-widest">
            Opening Hours
          </h2>

          {Array.isArray(hours) ? (
            <ul className="space-y-3 text-lg">
              {hours.map((entry, i) => {
                const [day, time] = entry.split(":");
                return (
                  <li
                    key={i}
                    className="flex justify-between border-b border-white/10 pb-1"
                  >
                    <span className="font-medium uppercase tracking-wide">
                      {day.trim()}
                    </span>
                    <span className="text-white/90 font-semibold">
                      {time.trim()}
                    </span>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="text-xl font-semibold">{hours}</p>
          )}
        </div>

        {/* === Contact & Address === */}
        <div className="p-8 rounded-2xl bg-black/60 border border-white/20 shadow-lg backdrop-blur-md">
          <h2 className="text-3xl font-bold mb-6 uppercase tracking-widest">
            Visit Us
          </h2>

          <p className="text-lg mb-6 text-white/90 whitespace-pre-line">
            📍 {address}
          </p>

          <div className="space-y-4 text-lg">
            <p>
              📞{" "}
              <a
                href={`tel:${phone}`}
                className="underline hover:text-yellow-300 transition-colors"
              >
                {phone}
              </a>
            </p>
            <p>
              📧{" "}
              <a
                href={`mailto:${email}`}
                className="underline hover:text-yellow-300 transition-colors"
              >
                {email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

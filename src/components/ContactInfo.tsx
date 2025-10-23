"use client";

import React from "react";
import { venueData } from "@/data/VenueData";

type ContactInfoProps = {
  venueSlug: "pub" | "cocktail-bar" | "private-hire" | "default";
  contact?: {
    phone?: string;
    email?: string;
    address?: string;
    instagram?: string;
  };
  bgColor: string;
  textColor: string;
  cardColor: string;
  hoverColor?: string;
  hours?: string[] | string;
};

export default function ContactInfoSection({
  venueSlug,
  contact,
  bgColor,
  textColor,
  cardColor,
  hours,
}: ContactInfoProps) {
  if (!contact) return null;

  // Pull hover color dynamically from dataset
  const venueInfo = venueData[venueSlug];

  const hoverColor =
    venueInfo?.hoverColor || venueInfo?.borderColor || textColor;

  return (
    <section
      id="contact"
      className="relative w-full py-20 px-6"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Opening Hours */}
        <div
          className="p-8 rounded-2xl border shadow-lg backdrop-blur-md"
          style={{ backgroundColor: cardColor, borderColor: textColor }}
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
                      {day?.trim() || "-"}
                    </span>
                    <span className="font-semibold">{time?.trim() || "-"}</span>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="text-xl font-semibold">
              {hours || "Hours not available"}
            </p>
          )}
        </div>

        {/* Contact Info */}
        <div
          className="p-8 rounded-2xl border shadow-lg backdrop-blur-md flex flex-col gap-4"
          style={{ backgroundColor: cardColor, borderColor: textColor }}
        >
          <h2 className="text-3xl font-bold mb-6 uppercase tracking-widest">
            Visit Us
          </h2>

          {contact.address && (
            <p className="text-lg whitespace-pre-line">📍 {contact.address}</p>
          )}

          {contact.phone && (
            <a
              href={`tel:${contact.phone}`}
              className="text-lg transition-colors duration-300"
              style={{ color: textColor }}
              onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
              onMouseLeave={(e) => (e.currentTarget.style.color = textColor)}
            >
              📞 {contact.phone}
            </a>
          )}

          {contact.email && (
            <a
              href={`mailto:${contact.email}`}
              className="text-lg transition-colors duration-300"
              style={{ color: textColor }}
              onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
              onMouseLeave={(e) => (e.currentTarget.style.color = textColor)}
            >
              📧 {contact.email}
            </a>
          )}

          {contact.instagram && (
            <a
              href={`https://instagram.com/${contact.instagram.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg transition-colors duration-300"
              style={{ color: textColor }}
              onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
              onMouseLeave={(e) => (e.currentTarget.style.color = textColor)}
            >
              📷 {contact.instagram}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

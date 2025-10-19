"use client";

import clsx from "clsx";

type ContactInfoProps = {
  venueType: "pub" | "cocktail-bar" | "private-hire";
  contact: { phone: string; email: string; address: string };
  bgColor: string; // Primary background color
  textColor: string; // Primary text color
  cardColor: string; // Card background color
  borderColor: string;
  hours?: string[] | string;
};

export default function ContactInfoSection({
  venueType,
  contact,
  bgColor,
  textColor,
  cardColor,
  borderColor,
  hours,
}: ContactInfoProps) {
  return (
    <section
      className="relative w-full py-20 px-6"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Opening Hours Card */}
        <div
          className="p-8 rounded-2xl border shadow-lg backdrop-blur-md"
          style={{ backgroundColor: cardColor, color: textColor, borderColor }}
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
                    <span className="font-semibold">{time.trim()}</span>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="text-xl font-semibold">{hours}</p>
          )}
        </div>

        {/* Contact Info Card */}
        <div
          className="p-8 rounded-2xl border shadow-lg backdrop-blur-md"
          style={{ backgroundColor: cardColor, color: textColor, borderColor }}
        >
          <h2 className="text-3xl font-bold mb-6 uppercase tracking-widest">
            Visit Us
          </h2>

          <p className="text-lg mb-6 whitespace-pre-line">{contact.address}</p>
          <p className="mb-2">
            📞 <a href={`tel:${contact.phone}`}>{contact.phone}</a>
          </p>
          <p>
            📧 <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
        </div>
      </div>
    </section>
  );
}

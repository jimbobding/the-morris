"use client";

type ContactInfoProps = {
  venueType: "pub" | "cocktail-bar" | "private-hire";
  contact?: {
    // <-- make optional
    phone?: string;
    email?: string;
    address?: string;
    instagram?: string;
  };
  bgColor: string;
  textColor: string;
  cardColor: string;
  hoverColor: string;
  hours?: string[] | string;
};

export default function ContactInfoSection({
  contact,
  bgColor,
  textColor,
  cardColor,
  hoverColor,
  hours,
}: ContactInfoProps) {
  if (!contact) return null; // prevents crash

  return (
    <section
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
          className="p-8 rounded-2xl border shadow-lg backdrop-blur-md"
          style={{ backgroundColor: cardColor, borderColor: textColor }}
        >
          <h2 className="text-3xl font-bold mb-6 uppercase tracking-widest">
            Visit Us
          </h2>

          <p className="text-lg mb-6 whitespace-pre-line">
            {contact.address || "Address not available"}
          </p>

          <p className="mb-2">
            📞 <span>{contact.phone || "-"}</span>
          </p>

          <p className="mb-2">
            📧 <span>{contact.email || "-"}</span>
          </p>

          {contact.instagram && (
            <p className="flex items-center gap-2">
              📷 <span>{contact.instagram}</span>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { Hanken_Grotesk } from "next/font/google";

const hanken = Hanken_Grotesk({ weight: "400", subsets: ["latin"] });

type VenueData = {
  venueType: "pub" | "cocktail-bar" | "private-hire";
  borderColor?: string;
  backgroundColor?: string;
  textColor?: string;
};

type MenuSectionProps = {
  food?: string;
  drinks?: string;
  menuBackground?: string;
  menuDescription?: string;
  menuGallery?: string[];
  venueData: {
    venueType?: string;
    backgroundColor: string;
    textColor: string;
    borderColor: string;
  };
};

export default function MenuSection({
  food,
  drinks,
  menuBackground,
  venueData,
  menuDescription,
  menuGallery,
}: MenuSectionProps) {
  const borderColor = venueData?.borderColor || "#ffe680";
  const bgColor = venueData?.backgroundColor || "#72233F";
  const textColor = venueData?.textColor || "#fff";

  return (
    <section
      id="menu"
      className="relative w-full py-16 px-6"
      style={{ backgroundColor: bgColor }}
    >
      <div className="relative w-full flex items-center justify-center text-center">
        {/* Border wrapper */}
        <div
          className="relative w-full max-w-6xl rounded-3xl border-[12px] overflow-hidden mt-12"
          style={{ borderColor }}
        >
          {/* Image inside border */}
          {menuBackground && (
            <Image
              src={menuBackground}
              alt="Menu background"
              fill
              className="object-cover object-center"
              quality={100}
              priority
            />
          )}

          {/* Menu content */}
          <div className="relative w-full px-12 py-16 flex flex-col items-center justify-center space-y-6 z-10">
            <h2
              className={`text-6xl md:text-7xl drop-shadow-lg ${hanken.className}`}
              style={{ color: textColor }}
            >
              Our Menu
            </h2>

            {food && (
              <a
                href={food}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-2 transition block pt-4 pb-4"
                style={{ color: textColor }}
              >
                <h3 className="text-2xl font-bold uppercase tracking-wider mb-2">
                  Bar Snacks
                </h3>
              </a>
            )}

            {drinks && (
              <a
                href={drinks}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-2 transition block pt-4 pb-4"
                style={{ color: textColor }}
              >
                <h3 className="text-2xl font-bold uppercase tracking-wider mb-2">
                  Drinks
                </h3>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Menu Gallery */}
      {menuGallery && menuGallery.length > 0 && (
        <section className="relative py-16 px-6 text-center">
          <div className="relative w-full max-w-7xl mx-auto space-y-12">
            {menuDescription && (
              <div
                className="max-w-3xl mx-auto mb-12 text-lg leading-relaxed"
                style={{ color: textColor }}
              >
                <p>{menuDescription}</p>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {menuGallery.map((src, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl shadow-xl border-4 aspect-[3/3] relative"
                  style={{ borderColor }}
                >
                  <Image
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </section>
  );
}

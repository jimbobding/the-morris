"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

import { Dancing_Script, Hanken_Grotesk } from "next/font/google";

const dancing = Dancing_Script({ weight: "400", subsets: ["latin"] });
const hanken = Hanken_Grotesk({ weight: "400", subsets: ["latin"] });

type MenuSectionProps = {
  food?: string;
  drinks?: string;
  backgroundImage?: string;
  menuDescription?: string;
  menuGallery?: string[];
  menuGalleryBackground?: string;
  borderColor?: string;
};

const venueBorderColors: Record<string, string> = {
  pub: "#FFFDD0",
  "cocktail-bar": "#980001", // <-- updated key here
  "private-hire": "#00CED1",
};

export default function MenuSection({
  food,
  drinks,
  backgroundImage,
  menuDescription,
  menuGallery,
  menuGalleryBackground,
  borderColor,
}: MenuSectionProps) {
  const pathname = usePathname();

  // Parse the venue slug from the URL (e.g. "/venues/cocktail" → "cocktail")
  const venueSlug = pathname?.startsWith("/venues")
    ? pathname.split("/")[2]
    : "pub"; // default fallback if not on a venue page

  const fontClass =
    venueSlug === "cocktail-bar" ? dancing.className : hanken.className;

  const resolvedBorderColor =
    borderColor || venueBorderColors[venueSlug] || "#98FF98";

  console.log("venueSlug:", venueSlug);
  return (
    <>
      <section id="menu">
        {/* SECTION WITH BACKGROUND IMAGE */}
        <section className="relative min-h-screen px-4 py-20 text-white text-center flex items-center justify-center">
          {backgroundImage && (
            <Image
              src={backgroundImage}
              alt="Menu background"
              fill
              className="object-cover object-center -z-10"
              quality={100}
              priority
            />
          )}
          <div className="absolute inset-0 bg-black/40 -z-10" />

          <div
            className="relative w-full max-w-7xl mx-auto border-8 rounded-3xl py-16 px-12 bg-black/40 space-y-12"
            style={{ borderColor: resolvedBorderColor }}
          >
            <h2
              className={`text-6xl md:text-7xl tracking-wide text-[#ffe680] drop-shadow-md ${fontClass}`}
            >
              Our Menu
            </h2>

            {food && (
              <div className="pt-6 pb-6">
                <a
                  href={food}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-200 underline underline-offset-[6px] decoration-2 hover:text-white transition"
                >
                  <h3 className="text-2xl font-bold text-pink-200 uppercase tracking-wider mb-2">
                    Bar Snacks
                  </h3>
                </a>
              </div>
            )}

            {drinks && (
              <div className="pt-6 pb-6">
                <a
                  href={drinks}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-200 underline underline-offset-[6px] decoration-2 hover:text-white transition"
                >
                  <h3 className="text-2xl font-bold text-green-200 uppercase tracking-wider mb-2">
                    Drinks
                  </h3>
                </a>
              </div>
            )}
          </div>
        </section>

        {/* PARAGRAPH + IMAGE GALLERY BELOW */}
        <section className="relative py-16 px-6 text-center text-gray-800">
          {menuGalleryBackground && (
            <Image
              src={menuGalleryBackground}
              alt="Background for menu gallery"
              fill
              className="object-cover object-center -z-10"
              quality={80}
              priority
            />
          )}
          <div className="absolute inset-0 bg-black/40 -z-10" />

          <div
            className="relative w-full max-w-7xl mx-auto border-8 rounded-3xl py-16 px-12 bg-black/40"
            style={{ borderColor: resolvedBorderColor }}
          >
            {menuDescription && (
              <div className="relative max-w-3xl mx-auto mb-12 text-lg leading-relaxed text-white">
                <p>{menuDescription}</p>
              </div>
            )}

            {menuGallery && menuGallery.length > 0 && (
              <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {menuGallery.map((src, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-2xl shadow-xl border-4 aspect-[3/3] relative"
                  >
                    <Image
                      src={src}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </section>
    </>
  );
}

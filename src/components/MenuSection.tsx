import Image from "next/image";
import { Hanken_Grotesk, Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({ weight: "400", subsets: ["latin"] });
const hanken = Hanken_Grotesk({ weight: "400", subsets: ["latin"] });

type VenueData = {
  venueType: "pub" | "cocktail-bar" | "private-hire";
  borderColor?: string;
};

type MenuSectionProps = {
  food?: string;
  drinks?: string;
  menuBackground?: string; // main menu background image
  venueData?: VenueData;
  menuDescription?: string;
  menuGallery?: string[];
};

export default function MenuSection({
  food,
  drinks,
  menuBackground,
  venueData,
  menuDescription,
  menuGallery,
}: MenuSectionProps) {
  const venueType = venueData?.venueType ?? "pub";
  const fontClass =
    venueType === "cocktail-bar" ? dancing.className : hanken.className;

  const borderColor = venueData?.borderColor || "#ffe680";

  return (
    <section id="menu" className="relative">
      {/* ===== Menu Section with Background Image ===== */}
      <section className="relative w-full h-screen flex items-center justify-center text-center">
        {/* Border Wrapper */}
        <div
          className="relative w-full h-full max-w-6xl rounded-3xl border-[12px] overflow-hidden mt-12"
          style={{ borderColor }}
        >
          {/* Background Image fills the wrapper */}
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
          <div className="relative w-full h-full px-12 py-16 flex flex-col items-center justify-center space-y-6 z-10">
            <h2
              className={`text-6xl md:text-7xl tracking-wide drop-shadow-lg text-white ${fontClass}`}
            >
              Our Menu
            </h2>

            {food && (
              <a
                href={food}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-2 hover:text-white transition text-white block pt-4 pb-4"
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
                className="underline decoration-2 hover:text-white transition text-white block pt-4 pb-4"
              >
                <h3 className="text-2xl font-bold uppercase tracking-wider mb-2">
                  Drinks
                </h3>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ===== Menu Gallery Section (optional) ===== */}
      {menuGallery && menuGallery.length > 0 && (
        <section className="relative py-16 px-6 text-center">
          <div className="relative w-full max-w-7xl mx-auto space-y-12">
            {menuDescription && (
              <div className="max-w-3xl mx-auto mb-12 text-lg leading-relaxed text-gray-800">
                <p>{menuDescription}</p>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {menuGallery.map((src, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl shadow-xl border-4 aspect-[3/3] relative"
                >
                  {/* <Image
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  /> */}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </section>
  );
}

import Image from "next/image";
import {
  Pacifico,
  Righteous,
  Hanken_Grotesk,
  Dancing_Script,
} from "next/font/google";

const dancing = Dancing_Script({ weight: "400", subsets: ["latin"] });
const hanken = Hanken_Grotesk({ weight: "400", subsets: ["latin"] });

type VenueData = {
  venueType: "pub" | "cocktail" | "private-hire";
  borderColor: string;
};

type MenuSectionProps = {
  food?: string;
  drinks?: string;
  backgroundImage?: string;
  venueData?: VenueData;
  menuDescription?: string;
  menuGallery?: string[];
  menuGalleryBackground?: string;
  borderColor?: string;
};

export default function MenuSection({
  food,
  drinks,
  backgroundImage,
  venueData,
  menuDescription,
  menuGallery,
  menuGalleryBackground,
  borderColor,
}: MenuSectionProps) {
  const venueType = venueData?.type ?? "pub";
  const fontClass =
    venueType === "cocktail" ? dancing.className : hanken.className;

  const resolvedBorderColor =
    borderColor || venueData?.borderColor || "#98FF98";

  return (
    <>
      {/* SECTION WITH BACKGROUND IMAGE */}
      <section className="relative min-h-screen px-4 py-20 overflow-hidden text-white text-center flex flex-col justify-center items-center">
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
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0" />

        <div
          className="relative z-10 flex flex-col items-center space-y-10 border-8 rounded-3xl p-8 max-w-5xl mx-auto"
          style={{ borderColor: resolvedBorderColor }}
        >
          <h2
            className={`text-6xl md:text-7xl tracking-wide text-[#ffe680] drop-shadow-md ${fontClass}`}
          >
            Our Menu
          </h2>

          {food && (
            <div>
              <h3 className="text-2xl font-bold text-pink-200 uppercase tracking-wider mb-2">
                Bar Snacks
              </h3>
              <a
                href={food}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-200 underline underline-offset-[6px] decoration-2 hover:text-white transition"
              >
                View PDF
              </a>
            </div>
          )}

          {drinks && (
            <div>
              <h3 className="text-2xl font-bold text-green-200 uppercase tracking-wider mb-2">
                Drinks
              </h3>
              <a
                href={drinks}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-200 underline underline-offset-[6px] decoration-2 hover:text-white transition"
              >
                View PDF
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
          className="relative max-w-6xl mx-auto border-8 rounded-3xl p-8 bg-black/40"
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
                  className={`overflow-hidden rounded-2xl shadow-xl border-4`}
                  // style={{ borderColor: resolvedBorderColor }}
                >
                  <Image
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    width={600}
                    height={400}
                    className="object-cover w-full h-64 hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

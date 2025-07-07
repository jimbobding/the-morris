"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  onClick?: () => void;
};

export default function NavLinks({ onClick }: Props) {
  const pathname = usePathname();
  const isVenuePage = pathname.startsWith("/venues");
  const venueSlug = pathname.split("/")[2] || "default";

  const linkBaseStyles =
    "relative inline-block px-2 py-1 transition duration-300";

  const baseUnderlineStyles = `
    after:content-[''] after:absolute after:left-0 after:-bottom-0.5 
    after:w-0 after:h-[2px] after:transition-all after:duration-300 
    hover:after:w-full
  `;

  const venueStyles: Record<string, string> = {
    pub: "after:bg-[#FFFDD0] hover:text-[#FFFDD0]",
    "cocktail-bar": "after:bg-[#90EE90] hover:text-[#90EE90]",
    "private-hire": "after:bg-[#00CED1] hover:text-[#00CED1]",
    default: "after:bg-white hover:text-white",
  };

  const venueSpecificStyles = venueStyles[venueSlug] || venueStyles.default;

  return (
    <ul className="flex space-x-4">
      <li>
        <Link
          href="/"
          onClick={onClick}
          className={`${linkBaseStyles} ${baseUnderlineStyles} ${venueSpecificStyles}`}
        >
          Home
        </Link>
      </li>

      {isVenuePage && (
        <>
          <li>
            <Link
              href="#gallery"
              onClick={onClick}
              className={`${linkBaseStyles} ${baseUnderlineStyles} ${venueSpecificStyles}`}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              href="#menu"
              onClick={onClick}
              className={`${linkBaseStyles} ${baseUnderlineStyles} ${venueSpecificStyles}`}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              onClick={onClick}
              className={`${linkBaseStyles} ${baseUnderlineStyles} ${venueSpecificStyles}`}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="#opening"
              onClick={onClick}
              className={`${linkBaseStyles} ${baseUnderlineStyles} ${venueSpecificStyles}`}
            >
              Opening Hours
            </Link>
          </li>
        </>
      )}
    </ul>
  );
}

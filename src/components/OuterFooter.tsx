"use client";

import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export default function OuterFooter() {
  return (
    <div
      className="w-full text-center py-6 md:py-8 border-t-2"
      style={{
        backgroundColor: "#3E5C4C", // complementary to main footer
        color: "#F4EFE9",
        borderColor: "#F4EFE9",
      }}
    >
      {/* Address */}
      <p className="text-sm md:text-base mb-2">
        The Morris, 123 Thomas Street, Manchester, M4 1XX
      </p>

      {/* Instagram */}
      <Link
        href="https://www.instagram.com/themorrisvenue"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center space-x-2 text-sm md:text-base font-semibold hover:underline"
      >
        <FaInstagram className="text-[#F4EFE9]" />
        <span>@themorrisvenue</span>
      </Link>
    </div>
  );
}

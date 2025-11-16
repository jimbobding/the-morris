import React from "react";
import Image from "next/image";
import { PUB_BASE } from "@/constants/imagePaths";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex justify-center items-center overflow-hidden" id="">
      {/* Background image */}
      <Image
        src="/images/venue-images/pub/backgrounds/solo_diamond_charcoal.jpg"
        alt="Charcoal Background"
        fill // makes the image cover the parent section
        style={{ objectFit: "cover", objectPosition: "center" }}
        priority
      />

      {/* Optional overlay for better logo contrast */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Logo */}
      <div className="relative z-10">
        <Image
          src={`${PUB_BASE}/logos/THE MORRIS_PUB LOGO_SKEWED_WHITE.png`}
          alt="The Morris Logo"
          width={600}
          height={200}
          priority
          className="w-auto max-w-[100%] h-auto object-contain"
        />
      </div>
    </section>
  );
}

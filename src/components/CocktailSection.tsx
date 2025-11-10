import React from "react";
import Image from "next/image";
import Link from "next/link";
import { COCKTAIL_BASE } from "@/constants/imagePaths";

export default function CocktailSection() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 py-24"
      style={{ backgroundColor: "#72233F", color: "#FF9B7A" }}
    >
      {/* Title */}
      <span className="text-4xl font-bold text-center mb-8">Upstairs</span>
      <div className="flex flex-col items-center mb-6">
        <Image
          src="/images/venue-images/cocktail-bar/logos/THE MORRIS_COCKTAIL BAR LOGO_WHITE.png"
          alt="Cocktail Icon"
          width={100}
          height={100}
          className="mb-4"
        />
      </div>

      {/* Paragraph */}
      <p className="text-center max-w-2xl mb-6">
        A cocktail bar with a retro spirit and modern edge. Carbonated
        cocktails, nostalgic flavours. Inspired by the creative energy of the
        Northern Quarter over the years, Upstairs is where nostalgia meets
        craft. Expect refined classics, playful signatures and an atmosphere
        that blends low-lit comfort with a touch of glamour. Every detail — from
        the glassware to the playlist — is designed for good taste and good
        times.
      </p>

      {/* Opening Hours Section (low key, optional) */}
      <div
        className="text-center border border-[#FF9B7A]/40 rounded-lg px-6 py-4 mb-10 max-w-md mx-auto backdrop-blur-sm"
        style={{
          backgroundColor: "rgba(255, 155, 122, 0.08)",
        }}
      >
        <h3 className="text-lg font-semibold mb-2 text-[#FF9B7A]">
          Opening Hours
        </h3>
        <p className="text-sm leading-relaxed">
          <strong>Monday:</strong> Closed <br />
          <strong>Tuesday - Thursday:</strong> 4pm – 11:30pm <br />
          <strong>Fridayy - Saturday:</strong> 4pm – 1:30am <br />
          <strong>Sunday:</strong> 4pm – 11pm
        </p>
      </div>

      {/* Diamond under paragraph */}
      <div className="mb-12">
        <Image
          src="/images/diamonds/DIAMOND_1_WHITE.png"
          alt="Diamond separator"
          width={40}
          height={40}
          className="mx-auto"
        />
      </div>

      {/* Pictures */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <Image
          src="/images/venue-images/cocktail-bar/pics/cock-bar-1.jpg"
          alt="Cocktail Bar 1"
          width={280}
          height={100}
          className="rounded-lg border border-gray-300 shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl object-cover"
        />
        <Image
          src="/images/venue-images/cocktail-bar/pics/cock-bar-3.jpg"
          width={280}
          height={100}
          alt="Cocktail Bar 2"
          className="rounded-lg border border-gray-300 shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl object-cover"
        />
        <Image
          src="/images/venue-images/cocktail-bar/pics/cock-bar-4.jpg"
          width={280}
          height={100}
          alt="Cocktail Bar 3"
          className="rounded-lg border border-gray-300 shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl object-cover"
        />
      </div>

      {/* Diamond under pictures */}
      <div className="mb-6">
        <Image
          src="/images/diamonds/DIAMOND_1_WHITE.png"
          alt="Diamond separator"
          width={40}
          height={40}
          className="mx-auto"
        />
      </div>

      {/* Menu link */}
      <Link
        href={`${COCKTAIL_BASE}/menu/FUNKY_VOL1_23.09.25.pdf`}
        target="_blank"
        className="mt-4 inline-block bg-[#FF9B7A] text-[#72233F] font-semibold py-3 px-6 rounded-lg hover:bg-[#72233F] hover:text-[#FF9B7A] transition-colors duration-300"
      >
        View the Menu
      </Link>
    </section>
  );
}

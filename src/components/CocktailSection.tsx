"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PUB_BASE, COCKTAIL_BASE } from "@/constants/imagePaths";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      {/* --- Downstairs / Pub Section --- */}
      <section
        className="min-h-screen flex flex-col justify-center items-center bg-black text-[#F1E8E0] px-4 sm:px-6 py-24"
        id="downstairs"
      >
        {/* Title */}
        <span className="mb-8 text-4xl font-bold text-center">Downstairs</span>

        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <Image
            src="/images/venue-images/pub/logos/THE MORRIS_PUB HORIZONTAL LOGO_WHITE.png"
            alt="Pub Icon"
            width={100}
            height={100}
            className="mb-4"
          />
        </div>

        {/* Paragraph */}
        <p className="text-center max-w-2xl mb-4">
          Our ground floor is everything a pub should be — familiar, welcoming
          and full of character. We pour the best of Manchester&apos;s brewing
          scene alongside a great pint of Guinness and a carbonated spritz on
          tap, all set to an easy-going soundtrack that keeps the conversation
          flowing, whether it&apos;s a quiet midweek pint or a busy Saturday
          catch-up. Downstairs is where The Morris comes alive.
        </p>

        {/* Caveat */}
        <p className="text-center max-w-xl text-sm text-[#F1E8E0]/70 italic mb-6">
          Upstairs operates as a walk-in only venue — we do not take bookings.
        </p>

        {/* Opening Hours */}
        <div
          className="text-center border border-[#F1E8E0]/40 rounded-lg px-6 py-4 mb-10 max-w-md mx-auto backdrop-blur-sm"
          style={{ backgroundColor: "rgba(241, 232, 224, 0.08)" }}
        >
          <h3 className="text-lg font-semibold mb-2 text-[#F1E8E0]">
            Opening Hours
          </h3>
          <p className="text-sm leading-relaxed">
            <strong>Monday:</strong> Closed <br />
            <strong>Tuesday - Thursday:</strong> 2pm – 11:30pm <br />
            <strong>Friday - Saturday:</strong> 2pm – 1:30am <br />
            <strong>Sunday:</strong> 2pm – 11pm
          </p>
        </div>

        {/* Diamond separator */}
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
            src="/images/venue-images/pub/pics/pub-pic-5.jpeg"
            alt="Pub 1"
            width={280}
            height={100}
            className="rounded-lg border border-gray-300 shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl object-cover"
          />
          <Image
            src="/images/venue-images/pub/pics/pub-pic-4.jpeg"
            width={280}
            height={100}
            alt="Pub 2"
            className="rounded-lg border border-gray-300 shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl object-cover"
          />
          <Image
            src="/images/venue-images/pub/pics/pub-pic-3.jpeg"
            width={280}
            height={100}
            alt="Pub 3"
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
          href={`${PUB_BASE}/menu/PUB_MENU_03.12.25.pdf`}
          target="_blank"
          className="mt-4 inline-block bg-[#F1E8E0] text-black font-semibold py-3 px-6 rounded-lg hover:bg-black hover:text-white transition-colors duration-300"
        >
          View the Menu
        </Link>
      </section>

      {/* --- Upstairs / Cocktail Section --- */}
      <section
        className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 py-24"
        style={{ backgroundColor: "#72233F", color: "#FF9B7A" }}
        id="upstairs"
      >
        {/* Title */}
        <span className="text-4xl font-bold text-center mb-8">Upstairs</span>

        {/* Logo */}
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
        <p className="text-center max-w-2xl mb-4">
          A cocktail bar with a retro spirit and modern edge. Carbonated
          cocktails, nostalgic flavours. Inspired by the creative energy of the
          Northern Quarter over the years, Upstairs is where nostalgia meets
          craft. Expect refined classics, playful signatures and an atmosphere
          that blends low-lit comfort with a touch of glamour. Every detail —
          from the glassware to the playlist — is designed for good taste and
          good times.
        </p>

        {/* Caveat */}
        <p className="text-center max-w-xl text-sm text-[#FF9B7A]/70 italic mb-6">
          Upstairs operates as a walk-in only venue — we do not take bookings.
        </p>

        {/* Opening Hours */}
        <div
          className="text-center border border-[#FF9B7A]/40 rounded-lg px-6 py-4 mb-10 max-w-md mx-auto backdrop-blur-sm"
          style={{ backgroundColor: "rgba(255, 155, 122, 0.08)" }}
        >
          <h3 className="text-lg font-semibold mb-2 text-[#FF9B7A]">
            Opening Hours
          </h3>
          <p className="text-sm leading-relaxed">
            <strong>Monday:</strong> Closed <br />
            <strong>Tuesday - Thursday:</strong> 4pm – 11:30pm <br />
            <strong>Friday - Saturday:</strong> 4pm – 1:30am <br />
            <strong>Sunday:</strong> 4pm – 11pm
          </p>
        </div>

        {/* Diamond separator */}
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
            className="rounded-lg border border-[#FF9B7A] shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl object-cover"
          />
          <Image
            src="/images/venue-images/cocktail-bar/pics/cock-bar-3.jpg"
            width={280}
            height={100}
            alt="Cocktail Bar 2"
            className="rounded-lg border border-[#FF9B7A] shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl object-cover"
          />
          <Image
            src="/images/venue-images/cocktail-bar/pics/cock-bar-4.jpg"
            width={280}
            height={100}
            alt="Cocktail Bar 3"
            className="rounded-lg border border-[#FF9B7A] shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl object-cover"
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
    </main>
  );
}

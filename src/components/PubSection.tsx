"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PUB_BASE } from "@/constants/imagePaths";

export default function PubSection() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center bg-black text-[#F1E8E0] px-4 sm:px-6 py-24"
      id="downstairs"
    >
      {/* Title */}
      <span className="mb-8 text-4xl font-bold text-center">Downstairs</span>
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
      <p className="text-center max-w-2xl mb-6">
        Our ground floor is everything a pub should be — familiar, welcoming and
        full of character. We pour the best of Manchester&apos;s brewing scene
        alongside a great pint of Guinness and a carbonated spritz on tap, all
        set to an easy-going soundtrack that keeps the conversation flowing,
        whether it&apos;s a quiet midweek pint or a busy Saturday catch-up,
        Downstairs is where The Morris comes alive.
      </p>

      {/* Opening Hours Section */}
      <div
        className="text-center border border-[#F1E8E0]/40 rounded-lg px-6 py-4 mb-10 max-w-md mx-auto backdrop-blur-sm"
        style={{
          backgroundColor: "rgba(241, 232, 224, 0.08)", // subtle translucent background
        }}
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
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CocktailSection() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 py-24"
      style={{ backgroundColor: "#72233F", color: "#FF9B7A" }}
    >
      {/* Title */}
      <h2 className="text-4xl font-bold mb-6 text-center">
        Upstairs - The Cocktail Bar
      </h2>

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
        href="/menu" // replace with the cocktail menu page or PDF link
        className="mt-4 inline-block bg-[#FF9B7A] text-[#72233F] font-semibold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors duration-300"
      >
        View the Menu
      </Link>
    </section>
  );
}

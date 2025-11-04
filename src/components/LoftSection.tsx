import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function LoftTextStroke() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 py-24"
      style={{ backgroundColor: "#BDBDB2", color: "#000000" }}
    >
      <h2
        className="text-4xl font-bold mb-6 text-center"
        style={{ WebkitTextStroke: "1px rgba(0,0,0,0.6)" }}
      >
        The Loft
      </h2>

      <p
        className="text-center max-w-2xl mb-6"
        style={{ WebkitTextStroke: "0.5px rgba(0,0,0,0.5)" }}
      >
        High above the buzz of Thomas Street sits our most flexible space — a
        light-filled room designed for connection, creativity and celebration.
        From brand launches and cocktail masterclasses to corporate events and
        milestone parties, The Loft transforms to fit your occasion. With
        Manchester Union on draught, bespoke drinks menus, Nell’s New York-style
        pizza and a great sound system.
      </p>

      <div className="mb-12">
        <Image
          src="/images/diamonds/DIAMOND_1_WHITE.png"
          alt="Diamond separator"
          width={40}
          height={40}
          className="mx-auto"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <Image
          src="/images/venue-images/loft/pics/loft-pic-1.jpg"
          alt="Loft 1"
          width={280}
          height={100}
          className="rounded-lg border border-gray-300 shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl object-cover"
        />
        <Image
          src="/images/venue-images/loft/pics/loft-pic-2.jpg"
          width={280}
          height={100}
          alt="Loft 2"
          className="rounded-lg border border-gray-300 shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl object-cover"
        />
        <Image
          src="/images/venue-images/loft/pics/loft-pic-3.jpg"
          width={280}
          height={100}
          alt="Loft 3"
          className="rounded-lg border border-gray-300 shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl object-cover"
        />
      </div>

      <div className="mb-6">
        <Image
          src="/images/diamonds/DIAMOND_1_WHITE.png"
          alt="Diamond separator"
          width={40}
          height={40}
          className="mx-auto"
        />
      </div>

      <Link
        href="/menu"
        className="mt-4 inline-block bg-[#D5654D] text-[#BDBDB2] font-semibold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors duration-300"
      >
        View the Menu
      </Link>
    </section>
  );
}

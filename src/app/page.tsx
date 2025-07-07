import React from "react";
import Link from "next/link";
import Image from "next/image";
import { venues } from "@/data/Venues";
import { PUB_BASE, COCKTAIL_BASE } from "@/constants/imagePaths";

const Home = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Split Background */}
      <div className="absolute inset-0 z-0 grid grid-cols-2">
        <div
          className="bg-cover bg-center h-full w-full"
          style={{
            backgroundImage: `url(${PUB_BASE}/backgrounds/SOLO%20DIAMOND%20BACKGROUND%20PATTERN_TEAL.jpg)`,
          }}
        />
        <div
          className="bg-cover bg-center h-full w-full"
          style={{
            backgroundImage: `url(${PUB_BASE}/backgrounds/SOLO%20DIAMOND%20BACKGROUND%20PATTERN_TEAL.jpg)`,
          }}
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-black/60" />

      {/* Foreground Content */}
      <div className="relative z-20 flex flex-col justify-center items-center px-4 sm:px-6 py-16 sm:py-24">
        {/* Hero Logo (static + hover swap) */}
        <div className="group relative mb-12 w-full max-w-[600px]">
          <Image
            src={`${COCKTAIL_BASE}/logos/THE MORRIS_COCKTAIL BAR LOGO_LIGHT GREEN.png`}
            alt="The Morris Cocktail Bar"
            width={600}
            height={300}
            className="w-full h-auto mb-4 transition-opacity duration-300 group-hover:opacity-0"
          />
          <Image
            src={`${PUB_BASE}/logos/THE MORRIS_PUB LOGO_SKEWED_CHARCOAL.png`}
            alt="The Morris Pub"
            width={300}
            height={150}
            className="object-contain mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
          Welcome to The Morris
        </h1>

        {/* Paragraph */}
        <p className="text-white text-center max-w-2xl mb-12 text-base sm:text-lg px-4">
          A historic building reimagined — home to a beautifully curated
          cocktail bar and a welcoming pub, all under one roof. Explore our
          unique venues and discover where your next great evening begins.
        </p>

        {/* Venue Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl px-4">
          {venues.map(({ id, label, logo, hoverLogo }) => (
            <Link
              key={id}
              href={`/venues/${id}`}
              className="group relative bg-black rounded-2xl overflow-hidden shadow-md transition-all duration-500 hover:scale-105"
            >
              <div className="relative h-56 flex items-center justify-center group-hover:bg-white transition-colors duration-300 ease-in-out p-6">
                {/* Normal logo */}
                <Image
                  src={logo}
                  alt={label}
                  width={300}
                  height={150}
                  className="absolute inset-0 object-contain m-auto transition-opacity duration-300 ease-in-out group-hover:opacity-0 will-change-opacity"
                />
                {/* Hover logo */}
                <Image
                  src={hoverLogo}
                  alt={`${label} hover`}
                  width={300}
                  height={150}
                  className="absolute inset-0 object-contain m-auto opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 will-change-opacity"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

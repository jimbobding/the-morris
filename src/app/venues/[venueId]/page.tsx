"use client";

import React from "react";
import { useParams } from "next/navigation";
import CocktailBarContent from "@/components/CocktailBarContent"; // adjust path as needed
const venueData = {
  pub: {
    name: "The Pub",
    description: "Cozy neighborhood pub on the ground floor.",
    image:
      "/images/venue-images/pub-images/THE MORRIS_PUB HORIZONTAL LOGO_TEAL.jpg",
    bgImage: "/images/venue-images/background-red.jpg",
    background: "/images/venue-images/background-red.jpg",
  },
  "cocktail-bar": {
    name: "Cocktail Bar",
    description: "Bespoke cocktails on the first floor.",
    image:
      "/images/venue-images/cocktail-bar-images/THE MORRIS_COCKTAIL BAR LOGO_LIGHT GREEN.png",

    bgImage: "/images/venue-images/cocktail-bar-images/background-red.jpg",
  },

  "venue-hire": {
    name: "Private Hire Room",
    description: "Private event room on the second floor.",
    // image: "/images/venue-images/venue-hire-images/logo.jpg",
    bgImage: "", // or a default
  },
} as const;

export default function VenuePage() {
  const { venueId } = useParams();
  const venue = venueData[venueId as keyof typeof venueData];

  if (!venue) {
    return (
      <div className="p-6 text-center text-red-600">
        <h1 className="text-2xl font-bold">Venue not found</h1>
        <p>Check the URL or go back to the homepage.</p>
      </div>
    );
  }

  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center p-8 flex flex-col items-center text-center"
        style={{ backgroundImage: `url(${venue.bgImage})` }}
      >
        <h1 className="text-4xl font-bold mb-4">{venue.name}</h1>
        <img
          src={venue.image}
          alt={venue.name}
          className="max-w-md rounded shadow-md mb-6"
        />
        <p className="text-lg text-gray-700">{venue.description}</p>
      </div>

      {/* Conditionally render custom content */}
      {venueId === "cocktail-bar" && venue.bgImage && (
        <CocktailBarContent bgImage={venue.bgImage} />
      )}
    </>
  );
}

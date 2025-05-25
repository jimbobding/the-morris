"use client";

import React from "react";
import { useParams } from "next/navigation";
import CocktailBarContent from "@/components/CocktailBarContent"; // adjust path as needed

import { venueData } from "@/data/VenueData";

export default function VenuePage() {
  const { venueId } = useParams();
  const venue = venueData[venueId as keyof typeof venueData];
  console.log("Background image URL:", venue?.bgImage);
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
        style={{ backgroundImage: `url("${venue.bgImage}")` }}
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
      {venueId === "cocktail-bar" && venue.cpImage && (
        <CocktailBarContent cpImage={venue.cpImage} />
      )}
    </>
  );
}

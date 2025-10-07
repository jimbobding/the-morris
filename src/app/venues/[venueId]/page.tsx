"use client";

import React from "react";
import { useParams } from "next/navigation";
import MenuSection from "@/components/MenuSection";
import OpeningHours from "@/components/OpeningHours";
import ContactInfoSection from "@/components/ContactInfo";
import VenueHeader from "@/components/VenueHeader";
import GallerySection from "@/components/GallerySection";
import { venueData } from "@/data/VenueData";

export default function VenuePage() {
  const { venueId } = useParams();
  const venue = venueData[venueId as keyof typeof venueData];

  if (!venue) {
    return (
      <div className="p-6 text-center text-red-600">
        <h1 className="text-2xl font-bold">Venue not found</h1>
      </div>
    );
  }

  // Safe fallbacks for images
  const image = venue.image ?? "/images/fallback.jpg";
  const bgImage = venue.bgImage ?? "/images/fallback-bg.jpg";
  const galleryBgImage = venue.galleryBgImage ?? "/images/fallback-bg.jpg";
  const menuBackground = venue.menuBackground ?? "/images/fallback.jpg";
  const menuGalleryBackground =
    venue.menuGalleryBackground ?? "/images/fallback.jpg";
  const openingHoursBgImage =
    venue.openingHoursBgImage ?? "/images/fallback.jpg";

  // Cast readonly arrays to mutable arrays where needed
  const gallery = [...venue.gallery];
  const menuGallery = [...venue.menuGallery];

  return (
    <>
      <VenueHeader
        name={venue.name}
        description={venue.description}
        image={image}
        bgImage={bgImage}
        icon={venue.icon}
      />

      <GallerySection
        title={`Morris: ${venue.name}`}
        blurb={venue.blurb}
        galleryBgImage={galleryBgImage}
        images={gallery}
        hours={venue.hours} // hours are already strings
        contact={venue.contact}
      />

      <MenuSection
        food={venue.menu.food}
        drinks={venue.menu.drinks}
        backgroundImage={menuBackground}
        menuDescription={venue.menuDescription}
        menuGallery={menuGallery}
        menuGalleryBackground={menuGalleryBackground}
        borderColor={venue.venueType === "cocktail-bar" ? "#90EE90" : "#FFFDD0"} // inline example
      />

      {(venue.venueType === "pub" || venue.venueType === "cocktail-bar") && (
        <OpeningHours
          venueType={venue.venueType}
          hours={venue.hours} // string now
          openingHoursBgImage={openingHoursBgImage}
        />
      )}

      {venue.contact && <ContactInfoSection contact={venue.contact} />}
    </>
  );
}

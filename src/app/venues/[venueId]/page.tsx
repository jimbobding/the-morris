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
  const venueKey = venueId as keyof typeof venueData;
  const venue = venueData[venueKey];

  if (!venue) {
    return (
      <div className="p-6 text-center text-red-600">
        <h1 className="text-2xl font-bold">Venue not found</h1>
      </div>
    );
  }

  // --- Safe images with fallbacks ---
  const safeImage =
    "image" in venue
      ? venue.image
      : "bgImage" in venue
        ? venue.bgImage
        : "/images/fallback.jpg";
  const bgImage =
    "bgImage" in venue ? venue.bgImage : "/images/fallback-bg.jpg";
  const galleryBgImage =
    "galleryBgImage" in venue
      ? venue.galleryBgImage
      : "/images/fallback-bg.jpg";
  const menuBackground =
    "menuBackground" in venue
      ? venue.menuBackground
      : "/images/fallback-bg.jpg";
  const menuGalleryBackground =
    "menuGalleryBackground" in venue
      ? venue.menuGalleryBackground
      : "/images/fallback-bg.jpg";

  // --- Mutable arrays for TS ---
  const menuGallery: string[] =
    "menuGallery" in venue && venue.menuGallery ? [...venue.menuGallery] : [];
  const hoursArray: string[] = Array.isArray(venue.hours)
    ? [...venue.hours]
    : [venue.hours];

  const openingHoursBgImage =
    "openingHoursBgImage" in venue
      ? venue.openingHoursBgImage
      : "/images/fallback-bg.jpg";

  return (
    <>
      <VenueHeader
        name={venue.name}
        description={venue.description}
        image={safeImage}
        bgImage={bgImage}
        icon={venue.icon}
      />

      <GallerySection
        title={`Morris: ${venue.name}`}
        blurb={venue.blurb}
        galleryBgImage={galleryBgImage}
        images={venue.gallery ?? []}
        hours={hoursArray.join(", ")} // or pass hoursArray if GallerySection accepts string[]
        contact={venue.contact}
      />

      <MenuSection
        food={venue.menu?.food}
        drinks={venue.menu?.drinks}
        backgroundImage={menuBackground}
        menuDescription={venue.menuDescription}
        menuGallery={menuGallery}
        menuGalleryBackground={menuGalleryBackground}
      />

      {(venue.venueType === "pub" || venue.venueType === "cocktail-bar") && (
        <OpeningHours
          venueType={venue.venueType}
          hours={hoursArray}
          openingHoursBgImage={openingHoursBgImage}
        />
      )}

      {venue.contact && <ContactInfoSection contact={venue.contact} />}
    </>
  );
}

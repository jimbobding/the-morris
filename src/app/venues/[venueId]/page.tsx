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

  const getVenueBorderColor = (type: string) => {
    switch (type) {
      case "cocktail-bar":
        return "#90EE90"; // Light green
      case "private-hire":
        return "#00CED1"; // Cyan
      case "pub":
      default:
        return "#FFFDD0"; // Cream
    }
  };

  const safeImage = venue.image ?? venue.bgImage ?? "/images/fallback.jpg";

  console.log("venue contact:", venue?.contact);

  return (
    <>
      <VenueHeader
        name={venue.name}
        description={venue.description}
        image={safeImage}
        bgImage={venue.bgImage}
        icon={venue.icon}
      />

      <GallerySection
        title={`Morris: ${venue.name}`}
        blurb={venue.blurb}
        galleryBgImage={venue.galleryBgImage}
        images={venue.gallery}
        hours={venue.hours}
        contact={venue.contact}
      />

      <MenuSection
        food={venue.menu?.food}
        drinks={venue.menu?.drinks}
        backgroundImage={venue.menuBackground}
        menuDescription={venue.menuDescription}
        menuGallery={venue.menuGallery}
        menuGalleryBackground={venue.menuGalleryBackground}
        venueData={{
          type: venue.venueType,
          borderColor: getVenueBorderColor(venue.venueType),
        }}
      />

      {(venue.venueType === "pub" || venue.venueType === "cocktail-bar") && (
        <OpeningHours
          venueType={venue.venueType}
          hours={venue.hours}
          openingHoursBgImage={venue.openingHoursBgImage}
        />
      )}

      {venue?.contact && <ContactInfoSection contact={venue.contact} />}
    </>
  );
}

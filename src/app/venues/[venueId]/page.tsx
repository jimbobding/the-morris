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

  // Dynamic colors by venue type
  const getVenueColors = (type: string) => {
    switch (type) {
      case "cocktail-bar":
        return {
          background: "linear-gradient(135deg, #72233f 0%, #ff9b7a 100%)",
          text: "#ffffff",
          border: "#ff9b7a",
        };
      case "pub":
        return {
          background: "#000000",
          text: "#ffffff",
          border: "#ffffff",
        };
      case "private-hire":
        return {
          background: "#f0f0f0",
          text: "#000000",
          border: "#000000",
        };
      default:
        return {
          background: "#ffffff",
          text: "#000000",
          border: "#000000",
        };
    }
  };

  const colors = getVenueColors(venue.venueType);

  return (
    <>
      {/* Header */}
      <VenueHeader
        name={venue.name}
        description={venue.description}
        image={venue.image}
        bgImage={venue.bgImage} // comment out if not needed
        icon={venue.icon}
        bgColor={colors.background}
        textColor={colors.text}
      />

      {/* Gallery Section */}
      <GallerySection
        title={venue.name}
        blurb={venue.blurb}
        images={venue.gallery}
        bgColor={venue.venueType === "cocktail-bar" ? "#72233f" : "#000"}
        textColor={venue.venueType === "cocktail-bar" ? "#ff9b7a" : "#fff"}
      />

      {/* Menu Section */}
      {venue.menu && (
        <MenuSection
          food={venue.menu?.food}
          drinks={venue.menu?.drinks}
          menuBackground={venue.menuBackground} // ✅ correct key
          menuDescription={venue.menuDescription}
          menuGallery={venue.menuGallery}
          menuGalleryBackground={venue.menuGalleryBackground}
          venueData={{
            venueType: venue.venueType,
            backgroundColor: colors.background,
            textColor: colors.text,
            borderColor: colors.border,
          }}
        />
      )}

      {/* Opening Hours */}
      {/* {(venue.venueType === "pub" || venue.venueType === "cocktail-bar") && (
        <OpeningHours
          venueType={venue.venueType}
          hours={venue.hours}
          // openingHoursBgImage={venue.openingHoursBgImage} // comment out if not needed
          bgColor={colors.background}
          textColor={colors.text}
        />
      )} */}

      {/* Contact Info */}
      {(venue.venueType === "pub" || venue.venueType === "cocktail-bar") &&
        venue.contact && (
          <ContactInfoSection
            contact={venue.contact}
            borderColor={colors.border}
            bgColor={colors.background}
            textColor={colors.text}
            venueType={venue.venueType}
            hours={venue.hours}
          />
        )}
    </>
  );
}

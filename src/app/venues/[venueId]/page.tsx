"use client";

import React from "react";
import { useParams } from "next/navigation";
import MenuSection from "@/components/MenuSection";
import OpeningHours from "@/components/OpeningHours";
import ContactInfo from "@/components/ContactInfo";
import VenueHeader from "@/components/VenueHeader";
import GallerySection from "@/components/GallerySection";
import { venueData } from "@/data/VenueData";
import Footer from "@/components/Footer";

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
      case "cocktail":
        return "#90EE90"; // Light green for cocktail bar
      case "private-hire":
        return "#00CED1";
      case "pub":
      default:
        return "#FFFDD0"; // Light cream for pub
    }
  };
  console.log("venue:", venue);
  return (
    <>
      <VenueHeader
        name={venue.name}
        description={venue.description}
        image={venue.image}
        bgImage={venue.bgImage}
        icon={venue.icon}
      />

      <GallerySection
        title={`Morris: ${venue.name}`}
        blurb={venue.blurb}
        bgImage={venue.bgImage}
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
          type: venue.venueType, // ✅ Corrected line
          borderColor: getVenueBorderColor(venue.venueType),
        }}
      />

      <OpeningHours hours={venue.hours} />

      <ContactInfo phone={venue.contact.phone} email={venue.contact.email} />
      <Footer />
    </>
  );
}

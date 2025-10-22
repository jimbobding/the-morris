"use client";

import React from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import MenuSection from "@/components/MenuSection";
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

  const colors = {
    background: venue.backgroundColor,
    text: venue.textColor,
    border: venue.borderColor || "#fff",
  };

  return (
    <>
      {/* Dynamic Navbar */}

      <Navbar
        bgColor={colors.text} // primary color → background
        textColor={venue.backgroundColor} // secondary color → text
        borderColor={colors.border}
        navbarBorderColor={venue.navbarBorderColor}
        hoverColor={venue.hoverColor}
      />

      {/* Header */}
      <VenueHeader
        name={venue.name}
        description={venue.description}
        image={venue.image}
        bgImage={venue.bgImage}
        icon={venue.icon}
        bgColor={colors.background}
        textColor={colors.text}
      />

      {/* Gallery Section */}
      <GallerySection
        title={venue.name}
        blurb={venue.blurb}
        images={venue.gallery}
        bgColor={colors.background}
        textColor={colors.text}
      />

      {/* Menu Section */}
      {venue.menu && (
        <MenuSection
          food={venue.menu.food}
          drinks={venue.menu.drinks}
          menuBackground={venue.menuBackground}
          menuDescription={venue.menuDescription}
          menuGallery={venue.menuGallery}
          venueData={{
            venueType: venue.venueType,
            backgroundColor: colors.background,
            textColor: colors.text,
            borderColor: colors.border,
          }}
        />
      )}

      {/* Contact Info */}
      {(venue.venueType === "pub" || venue.venueType === "cocktail-bar") &&
        venue.contact && (
          <ContactInfoSection
            venueSlug={venue.venueType} //
            venueType={venue.venueType}
            contact={venue.contact}
            hours={venue.hours}
            bgColor={venue.backgroundColor}
            textColor={venue.textColor}
            cardColor={venue.secondaryColor || venue.backgroundColor}
            hoverColor={venue.borderColor}
          />
        )}

      {/* Dynamic Footer */}
      <Footer
        bgColor={colors.border} // secondary colour
        textColor={colors.text}
      />
    </>
  );
}

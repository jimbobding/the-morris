"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type VenueHeaderProps = {
  name: string;
  description: string;
  image?: string;
  bgImage?: string;
  icon?: string;
  bgColor?: string; // new prop for solid background color
  textColor?: string; // new prop for text color
};

export default function VenueHeader({
  name,
  description,
  image,
  bgImage,
  icon,
  bgColor = "#72233F", // fallback primary color
  textColor = "#FF9B7A", // fallback text color
}: VenueHeaderProps) {
  return (
    <div
      className="p-8 flex flex-col items-center text-center"
      style={{
        backgroundColor: bgColor, // solid color
        backgroundImage: bgImage ? `url("${bgImage}")` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {image && (
        <Image
          src={image}
          alt={name}
          width={400}
          height={200}
          className="mb-6 "
        />
      )}

      <p className="max-w-xl mb-6" style={{ color: textColor }}>
        {description}
      </p>

      {icon && (
        <motion.div
          animate={{ y: [-10, 0, -10] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="text-6xl mt-6"
          style={{ color: textColor }}
        >
          {icon}
        </motion.div>
      )}
    </div>
  );
}

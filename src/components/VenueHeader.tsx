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
};

export default function VenueHeader({
  name,
  description,
  image,
  bgImage,
  icon,
}: VenueHeaderProps) {
  return (
    <div
      className="min-h-screen bg-cover bg-center p-8 flex flex-col items-center text-center"
      style={bgImage ? { backgroundImage: `url("${bgImage}")` } : undefined}
    >
      {image && (
        <Image
          src={image}
          alt={name}
          width={400}
          height={200}
          className="mb-6 rounded shadow-lg"
        />
      )}

      <p className="text-lg text-white max-w-xl mb-6">{description}</p>

      {icon && (
        <motion.div
          animate={{ y: [-10, 0, -10] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="text-6xl mt-6"
        >
          {icon}
        </motion.div>
      )}
    </div>
  );
}

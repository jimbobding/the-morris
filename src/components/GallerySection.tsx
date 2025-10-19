import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type GallerySectionProps = {
  title: string;
  blurb?: string;
  bgColor?: string; // NEW
  textColor?: string; // NEW
  galleryBgImage?: string;
  images: readonly string[];
  hours?: string;
  contact?: {
    phone?: string;
    email?: string;
  };
};

export default function GallerySection({
  title,
  blurb,
  galleryBgImage,
  bgColor = "#000", // fallback black
  textColor = "#fff", // fallback white
  images,
}: GallerySectionProps) {
  return (
    <section id="gallery">
      <div
        className="py-16 px-8"
        style={
          galleryBgImage
            ? {
                backgroundImage: `url("${galleryBgImage}")`, // commented out for now
                backgroundColor: bgColor,
                color: textColor,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : { backgroundColor: bgColor, color: textColor }
        }
      >
        <h2 className="text-3xl font-bold mb-10 text-center">{title}</h2>

        {blurb && (
          <p className="text-lg max-w-2xl mx-auto mb-12 text-center">{blurb}</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="overflow-hidden rounded-2xl shadow-xl border-4 aspect-[3/3] relative"
            >
              <Image
                src={src}
                alt={`Gallery image ${idx + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

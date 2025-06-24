import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type GallerySectionProps = {
  title: string;
  blurb?: string;
  bgImage?: string;
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
  bgImage,
  images,
}: GallerySectionProps) {
  return (
    <div
      className="py-16 px-8 text-white"
      style={
        bgImage
          ? {
              backgroundImage: `url("${bgImage}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
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
            className="rounded-2xl overflow-hidden shadow-lg transition-transform"
          >
            <Image
              src={src}
              alt={`Gallery image ${idx + 1}`}
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

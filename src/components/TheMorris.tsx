import React from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 py-24 bg-[#2B3036] text-[#F1E8E0]"
    >
      {/* Text Content */}
      <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
        <h2 className="text-4xl font-bold mb-6 text-center md:text-left">
          The Morris
        </h2>
        <p className="text-center md:text-left max-w-lg mb-4">
          Three floors of good taste. Downstairs we celebrate the comfort of a
          proper pub — local pints, easy conversation and timeless atmosphere.
          Upstairs we shake retro-spirited cocktails in a room full of
          character, music and charm. High above, The Loft transforms for the
          occasion — a versatile events space built for brands, parties and
          everything in between.
        </p>
        <p className="text-center md:text-left max-w-lg font-semibold">
          Distinct spaces, one shared soul — The Morris.
        </p>
      </div>

      {/* Video / Image */}
      <div className="md:w-1/2 flex justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="rounded-lg shadow-2xl w-full max-w-lg object-cover"
        >
          <source src="/images/LOOP_Exterior.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

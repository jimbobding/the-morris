"use client";

import Navbar from "@/components/Navbar/Navbar";
import HeroSection from "@/components/HeroSection";
import PubSection from "@/components/PubSection";
import CocktailSection from "@/components/CocktailSection";
import LoftSection from "@/components/LoftSection";
import Footer from "@/components/Footer";
import TheMorris from "@/components/TheMorris";
import MatesMorris from "@/components/MatesMorris";

export default function HomePage() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TheMorris />
      <PubSection />
      <CocktailSection />
      <LoftSection />
      <MatesMorris />
      <Footer />
    </main>
  );
}

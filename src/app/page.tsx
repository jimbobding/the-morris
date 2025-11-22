"use client";

import Navbar from "@/components/Navbar/Navbar";
import HeroSection from "@/components/HeroSection";
import TheMorris from "@/components/TheMorris";
import PubSection from "@/components/PubSection";
import CocktailSection from "@/components/CocktailSection";
import LoftSection from "@/components/LoftSection";
import MatesMorris from "@/components/MatesMorris";
import Footer from "@/components/Footer";
import { useHashScroll } from "@/components/hooks/useHashScroll";

export default function HomePage() {
  useHashScroll();
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

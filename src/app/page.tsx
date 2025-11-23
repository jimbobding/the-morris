"use client";

import Navbar from "@/components/Navbar/Navbar";
import HeroSection from "@/components/HeroSection";
import TheMorris from "@/components/TheMorris";
import PubSection from "@/components/PubSection";
import CocktailSection from "@/components/CocktailSection";
import LoftSection from "@/components/LoftSection";

import Footer from "@/components/Footer";
import { useHashScroll } from "@/components/hooks/useHashScroll";
import OuterFooter from "@/components/OuterFooter";

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

      <OuterFooter />
      <Footer />
    </main>
  );
}

"use client";

import { useRef } from "react";
import Navbar from "@/components/Navbar/Navbar";
import HeroSection from "@/components/HeroSection";
import PubSection from "@/components/PubSection";
import CocktailSection from "@/components/CocktailSection";
import LoftSection from "@/components/LoftSection";
import Footer from "@/components/Footer";
import TheMorris from "@/components/TheMorris";
import MatesMorris from "@/components/MatesMorris";
import OuterFooter from "@/components/OuterFooter";

export default function HomePage() {
  const morrisRef = useRef<HTMLElement>(null);
  const matesRef = useRef<HTMLElement>(null);

  return (
    <main className="w-full overflow-x-hidden">
      <Navbar morrisRef={morrisRef} matesRef={matesRef} />
      <HeroSection />
      <TheMorris ref={morrisRef} />
      <PubSection />
      <CocktailSection />
      <LoftSection />
      <MatesMorris ref={matesRef} />
      <OuterFooter />
      <Footer />
    </main>
  );
}

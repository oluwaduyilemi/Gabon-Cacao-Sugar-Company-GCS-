"use client";

import SustainabilityHero from "../../_components/SustainabilityHero";
import SustainabilityPillars from "../../_components/SustainabilityPillars";
import SustainabilityStats from "../../_components/SustainabilityStats";

export default function Sustainability() {
  return (
      <main className="bg-white pt-15 pb-10">
        <SustainabilityHero/> 
        <SustainabilityStats/>
        <SustainabilityPillars/>
      </main>
  );
}
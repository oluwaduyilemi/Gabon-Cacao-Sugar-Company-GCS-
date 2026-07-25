import ExecutiveQuote from "@/app/_components/ExecutiveQuote";
import AboutHero from "../../_components/AboutHero";
import AboutHistory from "../../_components/AboutHistory";
import FarmCocoa from "../../_components/FarmCocoa";
import GlobalPresence from "../../_components/GlobalPresence";

export default function About() {
  return (
      <main className="bg-white pt-15 pb-10">
        <AboutHero />
        <AboutHistory/>
        <ExecutiveQuote/>
        <FarmCocoa/>
        <GlobalPresence/>
      </main>
  );
}
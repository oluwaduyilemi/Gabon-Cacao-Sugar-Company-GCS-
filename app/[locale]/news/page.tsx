"use client";

import { useLocale } from "next-intl";
import NewsCard from "../../_components/NewsCard";
import NewsContent from "../../_components/NewsContent";
import NewsHero from "../../_components/NewsHero";
import NewsVideoFeature from "../../_components/NewsVideoFeature";

const ACFIF_ARTICLE = {
  en: {
    badge: "EXECUTIVE FORUM",
    headline: "ACFIF 2026: Executive Presentation on African Trade Finance",
    description: "Our Chief Executive Officer presented a comprehensive model for localized structured trade finance facilities at the Africa Cocoa Finance & Investment Forum (ACFIF) 2026. This strategic approach strengthens Central African trade desks and capital flows into regional agricultural transformation.",
    meta: "MAY 2026 • CONFERENCE REPORT",
    imageSrc: "/images/neww.jpeg",
  },
  fr: {
    badge: "FORUM EXÉCUTIF",
    headline: "ACFIF 2026 : Présentation Exécutive sur le Financement du Commerce Africain",
    description: "Notre Directeur Général a présenté un modèle complet de mécanismes de financement du commerce structuré et localisé lors de l'Africa Cocoa Finance & Investment Forum (ACFIF) 2026. Cette approche stratégique renforce les pôles commerciaux d'Afrique centrale et les flux de capitaux vers la transformation agricole régionale.",
    meta: "MAI 2026 • RAPPORT DE CONFÉRENCE",
    imageSrc: "/images/neww.jpeg",
  },
};

export default function News() {
  const locale = useLocale() as "en" | "fr";
  const article = ACFIF_ARTICLE[locale];

  return (
      <main className="bg-white pt-15 pb-10">
        <NewsHero/>
        <div className="container mx-auto max-w-6xl space-y-12">
          <NewsVideoFeature
            videoSrc="/images/reo-video.mp4"
            posterSrc="/images/presentent.jpeg"
            photoSrc="/images/reo-comm.jpeg"
          />
        <NewsCard {...article} />
        </div>
        <NewsContent/>
        
      </main>
  );
}

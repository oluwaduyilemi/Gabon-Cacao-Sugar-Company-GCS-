"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";
import { Play, Newspaper } from "lucide-react";

/**
 * A video-forward "media feature" card — for press/interview coverage that
 * has an actual video and a photo to show, as opposed to a plain
 * photo+text NewsCard.
 *
 * HOW TO WIRE UP THE REAL VIDEO:
 * Pass `videoSrc` pointing to a file in /public/videos/ (e.g. "/videos/fortune-interview.mp4").
 * Until that's provided, this renders a poster image with a play button that
 * reveals a "coming soon" message on click — safe to ship before the real
 * file exists.
 *
 * HOW TO ADD THE REAL PHOTO FROM THE SHOOT:
 * Pass `photoSrc` pointing to the image (e.g. "/images/fortune-shoot.jpg").
 */
interface NewsVideoFeatureProps {
  videoSrc?: string;
  posterSrc: string;
  photoSrc: string;
}

const content = {
  en: {
    eyebrow: "Fortune Magazine · 2026",
    badge: "FORTUNE · REO COMMUNICATIONS",
    comingSoon: "Full interview video coming soon",
    headline: "GCS Founder Featured by REO Communications for Fortune Magazine",
    paragraphs: [
      "Charles-Daniel Tchen, Founder & CEO of GCS, sat down with REO Communications for an upcoming feature in Fortune Magazine, sharing his journey building Gabon's first industrial cocoa transformation platform.",
      "The conversation touches on his vision for the company's future and reflects GCS's growing profile within the international business and investment community.",
    ],
    tags: ["EXECUTIVE INTERVIEW", "MEDIA FEATURE", "FORTUNE MAGAZINE"],
  },
  fr: {
    eyebrow: "Fortune Magazine · 2026",
    badge: "FORTUNE · REO COMMUNICATIONS",
    comingSoon: "La vidéo complète de l'interview arrive bientôt",
    headline: "Le Fondateur de GCS Interviewé par REO Communications pour Fortune Magazine",
    paragraphs: [
      "Charles-Daniel Tchen, Fondateur et PDG de GCS, s'est entretenu avec REO Communications pour un prochain article dans Fortune Magazine, partageant son parcours dans la construction de la première plateforme industrielle de transformation du cacao au Gabon.",
      "Cet échange aborde sa vision pour l'avenir de l'entreprise et reflète la visibilité croissante de GCS au sein de la communauté internationale des affaires et de l'investissement.",
    ],
    tags: ["INTERVIEW EXÉCUTIVE", "COUVERTURE MÉDIATIQUE", "FORTUNE MAGAZINE"],
  },
};

export default function NewsVideoFeature({ videoSrc, posterSrc, photoSrc }: NewsVideoFeatureProps) {
  const locale = useLocale() as "en" | "fr";
  const t = content[locale];
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-gray-50 border border-[#3C2A21]/10 rounded-3xl overflow-hidden p-6 md:p-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Media column: video + single photo, stacked */}
        <motion.div variants={fadeInUp} className="space-y-3">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-lg">
            <span className="absolute top-4 left-4 z-20 bg-black/70 backdrop-blur-sm text-white text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-full">
              [ {t.badge} ]
            </span>

            {videoSrc ? (
              <video
                src={videoSrc}
                poster={posterSrc}
                controls
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <>
                <Image src={posterSrc} alt={t.headline} fill className="object-cover opacity-70" />
                <button
                  onClick={() => setShowComingSoon(true)}
                  className="absolute inset-0 flex items-center justify-center group"
                >
                  <div className="w-16 h-16 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play size={24} className="text-black fill-current ml-1" />
                  </div>
                </button>
                {showComingSoon && (
                  <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm text-white text-xs font-medium px-4 py-2.5 rounded-lg text-center">
                    {t.comingSoon}
                  </div>
                )}
              </>
            )}
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden">
            <Image src={photoSrc} alt="" fill className="object-cover" />
          </div>
        </motion.div>

        {/* Text panel */}
        <div>
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 bg-white border border-[#3C2A21]/10 rounded-full px-4 py-1.5 text-xs font-semibold text-[#3C2A21] mb-6"
          >
            <Newspaper size={13} className="text-[#D4AF37]" />
            {t.eyebrow}
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-serif font-bold text-[#111111] leading-tight mb-6"
          >
            {t.headline}
          </motion.h2>

          <motion.div variants={fadeInUp} className="space-y-4 mb-8">
            {t.paragraphs.map((p, i) => (
              <p key={i} className="text-gray-600 leading-relaxed text-sm md:text-base">
                {p}
              </p>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-2">
            {t.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-bold tracking-widest text-[#3C2A21]/60 border border-[#3C2A21]/15 px-3 py-1.5 rounded-full"
              >
                [ {tag} ]
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";

const content = {
  en: {
    titlePart1: "Sustainability & ",
    titlePart2: "Responsibility",
    body: "Building a transparent, ethical, and environmentally responsible commodity supply chain for the future.",
  },
  fr: {
    titlePart1: "Durabilité & ",
    titlePart2: "Responsabilité",
    body: "Construire une chaîne d'approvisionnement en matières premières transparente, éthique et respectueuse de l'environnement pour l'avenir.",
  },
};

export default function SustainabilityHero() {
  const locale = useLocale() as "en" | "fr";
  const t = content[locale];

  return (
    <section className="relative pt-32 pb-24 bg-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl font-serif font-bold leading-tight mb-8"
          >
            <span className="text-slate-900">{t.titlePart1}</span>
            <span className="text-slate-900">{t.titlePart2}</span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium"
          >
            {t.body}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

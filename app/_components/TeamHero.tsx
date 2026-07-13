
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";

const content = {
  en: {
    metaTagLeft: "THE PEOPLE BEHIND GCS",
    mainHeading: "Our Team",
    bodyParagraph: "A seasoned collective of global trade experts, agricultural specialists, and logistics professionals united by a shared vision — to build Africa's most trusted commodities partnership.",
    subtleLabel: "[ Leadership in Cocoa // Global Desks ]",
  },
  fr: {
    metaTagLeft: "LES PERSONNES DERRIÈRE GCS",
    mainHeading: "Notre Équipe",
    bodyParagraph: "Un collectif expérimenté d'experts du commerce mondial, de spécialistes agricoles et de professionnels de la logistique, unis par une vision commune : bâtir le partenariat en matières premières le plus fiable d'Afrique.",
    subtleLabel: "[ Direction Cacao // Pôles Mondiaux ]",
  },
};

export default function TeamHero() {
  const locale = useLocale() as "en" | "fr";
  const t = content[locale];

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-32 px-6 bg-neutral-900">
      
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/together.jpeg" 
          alt="GCS Team Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 backdrop-blur-[1px] z-10" />

      <div className="container mx-auto max-w-5xl relative z-20 text-center">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.div 
            variants={fadeInUp} 
            className="flex items-center justify-center gap-4 text-[#D4AF37] text-xs font-mono tracking-[0.4em] uppercase"
          >
            <span>{t.metaTagLeft}</span>
            <span className="text-neutral-500 font-sans hidden md:inline"></span>
            <span className="text-neutral-400 font-sans hidden md:inline"></span>
          </motion.div>

          <motion.h1 
            variants={fadeInUp} 
            className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-[#F3E5D8] drop-shadow-md"
          >
            {t.mainHeading}
          </motion.h1>

          <motion.p 
            variants={fadeInUp} 
            className="text-neutral-300 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto font-sans"
          >
            {t.bodyParagraph}
          </motion.p>

          <motion.div 
            variants={fadeInUp}
            className="pt-4 text-[10px] font-mono text-neutral-500 tracking-[0.2em] uppercase"
          >
            {t.subtleLabel}
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-neutral-800/60 z-20" />
    </section>
  );
}

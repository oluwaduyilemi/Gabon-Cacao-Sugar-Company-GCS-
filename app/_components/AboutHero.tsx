"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";

const content = {
  en: {
    titleLine1: "Restoring Africa Agricultural",
    titleLine2Pre: "Legacy Through ",
    titleLine2Highlight: "Global Trade",
    body: "Founded to restore Africa historic reputation in cocoa and agricultural excellence, GCS operates as a vertically integrated soft-commodities brokerage bridging local farmers and global markets.",
  },
  fr: {
    titleLine1: "Restaurer l'Héritage Agricole",
    titleLine2Pre: "Africain par le ",
    titleLine2Highlight: "Commerce Mondial",
    body: "Fondée pour restaurer la réputation historique de l'Afrique dans le domaine du cacao et de l'excellence agricole, GCS opère comme un courtier en matières premières intégré verticalement, reliant les agriculteurs locaux aux marchés mondiaux.",
  },
};

export default function AboutHero() {
  const locale = useLocale() as "en" | "fr";
  const t = content[locale];

  return (
    <section className="relative pt-32 pb-20 bg-white ">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] max-w-[500px] h-[500px] rounded-full bg-[#D4A017] blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl font-bold text-slate-900 leading-[1.1] mb-8"
          >
            {t.titleLine1} <br />
            {t.titleLine2Pre}<span className="text-[#D4A017]">{t.titleLine2Highlight}</span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            {t.body}
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="mt-12 w-20 h-1 bg-[#D4A017] mx-auto rounded-full" 
          />
        </motion.div>
      </div>
    </section>
  );
}

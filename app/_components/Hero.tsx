
"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";

const content = {
  en: {
    titleLine1: "Premium Cocoa",
    titleLine2: "Structured for Global Trade",
    ctaPrimary: "Request Trade Inquiry",
    ctaSecondary: "Explore Our Commodities",
  },
  fr: {
    titleLine1: "Cacao Premium",
    titleLine2: "Structuré pour le Commerce Mondial",
    body: "Gabon Cacao & Sugar Company structure, sourcé et exécute des flux commerciaux de cacao conformes, reliant des producteurs ouest-africains vérifiés à des acheteurs internationaux qualifiés.",
    ctaPrimary: "Demander une Consultation Commerciale",
    ctaSecondary: "Découvrir Nos Matières Premières",
  },
};

export default function Hero() {
  const locale = useLocale() as "en" | "fr";
  const t = content[locale];

  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden bg-black">
      <motion.div 
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/hero-cocoa-D8nT2eaj.jpg" 
          alt="Cacao Plantation"
          fill
          priority
          className="object-cover opacity-60" 
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
      </motion.div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-6xl pt-15 font-serif font-bold text-white leading-tight"
          >
            {t.titleLine1} <br />
            <span className="text-[#D4A017]">
              {t.titleLine2}
            </span>
          </motion.h1>

          <motion.div 
            variants={fadeInUp} 
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link href="/contact">
              <button className="px-8 py-3 bg-[#D4A017] hover:bg-[#B8860B] text-black font-bold rounded-sm transition-all duration-300">
                {t.ctaPrimary}
              </button>
            </Link>

            <Link href="/commodities/cocoa">
              <button className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white font-semibold backdrop-blur-md border border-white/20 rounded-sm transition-all duration-300">
                {t.ctaSecondary}
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

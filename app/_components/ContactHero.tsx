"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";

const content = {
  en: {
    title: "Connect With GCS",
    body: "Reach out to discuss sourcing, pricing, logistics, or partnership opportunities.",
  },
  fr: {
    title: "Contactez GCS",
    body: "Contactez-nous pour discuter d'approvisionnement, de prix, de logistique ou d'opportunités de partenariat.",
  },
};

export default function ContactHero() {
  const locale = useLocale() as "en" | "fr";
  const t = content[locale];

  return (
    <section className="relative pt-40 pb-24 bg-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-8"
          >
            <span className="text-slate-900 ">{t.title}</span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium"
          >
            {t.body}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

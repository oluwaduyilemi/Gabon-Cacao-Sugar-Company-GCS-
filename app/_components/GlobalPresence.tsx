"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";

const content = {
  en: {
    eyebrow: "Global Presence",
    title: "Offices & Operations",
    body: "Strategic locations connecting African sourcing with international demand.",
    locations: [
      { city: "Libreville, Gabon", role: "Headquarters & Sourcing Hub" },
      { city: "London, UK", role: "European Commercial Operations" },
      { city: "Seychelles", role: "Trade & Financial Services" },
    ],
    footer: "Operational regions: Africa • Europe • Middle East • Asia",
  },
  fr: {
    eyebrow: "Présence Mondiale",
    title: "Bureaux & Opérations",
    body: "Des emplacements stratégiques reliant l'approvisionnement africain à la demande internationale.",
    locations: [
      { city: "Libreville, Gabon", role: "Siège Social & Pôle d'Approvisionnement" },
      { city: "Londres, Royaume-Uni", role: "Opérations Commerciales Européennes" },
      { city: "Seychelles", role: "Services Commerciaux et Financiers" },
    ],
    footer: "Régions opérationnelles : Afrique • Europe • Moyen-Orient • Asie",
  },
};

export default function GlobalPresence() {
  const locale = useLocale() as "en" | "fr";
  const t = content[locale];

  return (
    <section className="py-15 bg-slate-50/50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span variants={fadeInUp} className="text-[#D4A017] font-bold tracking-[0.2em] text-xs uppercase">
            {t.eyebrow}
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mt-4 mb-6">
            {t.title}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-500 text-lg">
            {t.body}
          </motion.p>
        </motion.div>

        {/* Office Cards */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16"
        >
          {t.locations.map((office, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white p-10 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.03)] flex flex-col items-center text-center border border-gray-100"
            >
              <div className="mb-6 p-4 bg-amber-50 rounded-full">
                <Globe className="text-[#D4A017] w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">
                {office.city}
              </h3>
              <p className="text-gray-500 font-medium">
                {office.role}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Operational Regions Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400 text-sm font-medium tracking-wide uppercase">
            {t.footer}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

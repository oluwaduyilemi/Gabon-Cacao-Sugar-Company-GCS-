"use client";

import { motion } from "framer-motion";
import { Users, Globe, ShieldCheck } from "lucide-react";
import { useLocale } from "next-intl";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";

const content = {
  en: {
    eyebrow: "What Drives Us",
    title: "Core Values",
    body: "The principles that guide every decision, partnership, and transaction.",
    values: [
      { title: "Expertise", description: "Decades of combined experience in global commodity trading, supply chain management, and market intelligence." },
      { title: "Local Presence", description: "Rooted in West Africa with direct relationships to farmers, cooperatives, and local governments across Gabon and beyond." },
      { title: "Integrity", description: "Unwavering commitment to transparent transactions, ethical sourcing, and full regulatory compliance in every market." },
    ],
  },
  fr: {
    eyebrow: "Ce Qui Nous Anime",
    title: "Nos Valeurs Fondamentales",
    body: "Les principes qui guident chaque décision, chaque partenariat et chaque transaction.",
    values: [
      { title: "Expertise", description: "Des décennies d'expérience combinée dans le négoce mondial de matières premières, la gestion de la chaîne d'approvisionnement et l'intelligence de marché." },
      { title: "Présence Locale", description: "Ancrés en Afrique de l'Ouest, avec des relations directes avec les agriculteurs, les coopératives et les gouvernements locaux au Gabon et au-delà." },
      { title: "Intégrité", description: "Un engagement inébranlable envers des transactions transparentes, un approvisionnement éthique et une conformité réglementaire totale sur chaque marché." },
    ],
  },
};

const icons = [
  <Users key="u" size={24} className="text-[#D4AF37]" />,
  <Globe key="g" size={24} className="text-[#D4AF37]" />,
  <ShieldCheck key="s" size={24} className="text-[#D4AF37]" />,
];

export default function CoreValues() {
  const locale = useLocale() as "en" | "fr";
  const t = content[locale];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span variants={fadeInUp} className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
            {t.eyebrow}
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
            {t.title}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-500 text-lg">
            {t.body}
          </motion.p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {t.values.map((value, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="bg-white p-10 rounded-2xl border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-[#FDFBF7] rounded-full flex items-center justify-center mb-8 border border-amber-50">
                {icons[idx]}
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#3C2A21] mb-4">
                {value.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

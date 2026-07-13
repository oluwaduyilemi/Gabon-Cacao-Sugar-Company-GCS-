"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";

const content = {
  en: {
    eyebrow: "Vision & Mission",
    title: "Building Sustainable Trade Bridges",
    cards: [
      { title: "Our Vision", description: "To become West Africa's most trusted soft-commodities partner, championing transparency, compliance, and sustainability in every transaction." },
      { title: "Our Mission", description: "To connect African producers with global buyers through a fair, transparent value chain that ensures sustainable sourcing, long-term partnerships, and adherence to international compliance standards." },
    ],
  },
  fr: {
    eyebrow: "Vision & Mission",
    title: "Bâtir des Ponts Commerciaux Durables",
    cards: [
      { title: "Notre Vision", description: "Devenir le partenaire de confiance le plus fiable d'Afrique de l'Ouest en matières premières, en défendant la transparence, la conformité et la durabilité dans chaque transaction." },
      { title: "Notre Mission", description: "Relier les producteurs africains aux acheteurs mondiaux à travers une chaîne de valeur juste et transparente, garantissant un approvisionnement durable, des partenariats à long terme et le respect des normes de conformité internationales." },
    ],
  },
};

export default function AboutVision() {
  const locale = useLocale() as "en" | "fr";
  const t = content[locale];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span 
            variants={fadeInUp}
            className="text-[#D4A017] font-bold tracking-[0.2em] text-xs uppercase"
          >
            {t.eyebrow}
          </motion.span>
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mt-4"
          >
            {t.title}
          </motion.h2>
        </motion.div>

        {/* Vision & Mission Cards */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {t.cards.map((card, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="p-10 md:p-14 bg-white rounded-3xl border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] transition-all duration-500"
            >
              <h3 className="text-[#D4A017] text-2xl font-serif font-bold mb-6">
                {card.title}
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed font-medium">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

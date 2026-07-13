"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";
import { ShieldCheck, Leaf, Heart, Trees, Users, BarChart3 } from "lucide-react";

const content = {
  en: {
    eyebrow: "Our Commitment",
    title: "Sustainability Pillars",
    body: "Six core pillars guide our approach to responsible commodity sourcing and trade.",
    pillars: [
      { title: "Traceable Supply Chain", description: "Full visibility from farm to final buyer, with documented provenance at every stage of the value chain." },
      { title: "EUDR Compliance", description: "Proactive alignment with EU Deforestation Regulation requirements across all commodity sourcing activities." },
      { title: "Farmer Support", description: "Direct initiatives including cocoa bag distribution, training programs, and fair pricing for local farming communities." },
      { title: "Environmental Stewardship", description: "Protecting biodiversity and implementing regenerative agricultural practices in all our sourcing regions." },
      { title: "Community Impact", description: "Investing in local infrastructure and educational programs to foster long-term regional development." },
      { title: "Measurable Outcomes", description: "Data-driven reporting on our ESG goals to ensure accountability and continuous improvement." },
    ],
  },
  fr: {
    eyebrow: "Notre Engagement",
    title: "Piliers de Durabilité",
    body: "Six piliers fondamentaux guident notre approche d'un approvisionnement et d'un commerce responsables.",
    pillars: [
      { title: "Chaîne d'Approvisionnement Traçable", description: "Visibilité totale de la ferme à l'acheteur final, avec une provenance documentée à chaque étape de la chaîne de valeur." },
      { title: "Conformité RDUE", description: "Alignement proactif sur les exigences du règlement européen sur la déforestation dans toutes nos activités d'approvisionnement." },
      { title: "Soutien aux Agriculteurs", description: "Initiatives directes incluant la distribution de sacs de cacao, des programmes de formation et une tarification équitable pour les communautés agricoles locales." },
      { title: "Gestion Environnementale", description: "Protection de la biodiversité et mise en œuvre de pratiques agricoles régénératrices dans toutes nos régions d'approvisionnement." },
      { title: "Impact Communautaire", description: "Investissement dans les infrastructures locales et les programmes éducatifs pour favoriser le développement régional à long terme." },
      { title: "Résultats Mesurables", description: "Rapports basés sur des données concernant nos objectifs ESG afin de garantir la responsabilité et l'amélioration continue." },
    ],
  },
};

const icons = [
  <ShieldCheck key="s" className="text-[#D4A017]" size={24} />,
  <Leaf key="l" className="text-[#D4A017]" size={24} />,
  <Heart key="h" className="text-[#D4A017]" size={24} />,
  <Trees key="t" className="text-[#D4A017]" size={24} />,
  <Users key="u" className="text-[#D4A017]" size={24} />,
  <BarChart3 key="b" className="text-[#D4A017]" size={24} />,
];

export default function SustainabilityPillars() {
  const locale = useLocale() as "en" | "fr";
  const t = content[locale];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span variants={fadeInUp} className="text-[#D4AF37] font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
            {t.eyebrow}
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold text-[#3C2A21] mb-6">
            {t.title}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-500 text-lg leading-relaxed">
            {t.body}
          </motion.p>
        </motion.div>

        {/* Pillars Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {t.pillars.map((pillar, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              className="group p-8 bg-slate-50/50 border border-gray-100 rounded-3xl hover:bg-white transition-all duration-500"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-emerald-50 transition-colors duration-500">
                {icons[index]}
              </div>
              <h3 className="text-xl font-serif font-bold text-[#3C2A21] mb-4 group-hover:text-[#D4AF37] transition-colors">
                {pillar.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

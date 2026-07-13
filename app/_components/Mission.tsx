"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";
import { Eye, ShieldCheck, Handshake, Globe } from "lucide-react";

const content = {
  en: {
    eyebrow: "Our Mission",
    title: "Sourcing Excellence With Transparency",
    body: "We bridge the gap between African agricultural producers and global markets through ethical sourcing, full traceability, and international compliance.",
    items: [
      { title: "Traceability", description: "Full supply chain visibility from farm to port." },
      { title: "Ethical Sourcing", description: "Fair practices supporting local communities." },
      { title: "Fair Value Flow", description: "Equitable returns for producers and buyers." },
      { title: "Global Standards", description: "Compliance with international trade regulations." },
    ],
  },
  fr: {
    eyebrow: "Notre Mission",
    title: "L'Excellence de l'Approvisionnement en Toute Transparence",
    body: "Nous comblons le fossé entre les producteurs agricoles africains et les marchés mondiaux grâce à un approvisionnement éthique, une traçabilité totale et une conformité internationale.",
    items: [
      { title: "Traçabilité", description: "Visibilité totale de la chaîne d'approvisionnement, de la ferme au port." },
      { title: "Approvisionnement Éthique", description: "Des pratiques équitables au service des communautés locales." },
      { title: "Flux de Valeur Équitable", description: "Des rendements équitables pour les producteurs et les acheteurs." },
      { title: "Normes Mondiales", description: "Conformité aux réglementations commerciales internationales." },
    ],
  },
};

const icons = [
  <Eye key="eye" className="w-6 h-6 text-[#D4A017]" />,
  <ShieldCheck key="shield" className="w-6 h-6 text-[#D4A017]" />,
  <Handshake key="handshake" className="w-6 h-6 text-[#D4A017]" />,
  <Globe key="globe" className="w-6 h-6 text-[#D4A017]" />,
];

export default function Mission() {
  const locale = useLocale() as "en" | "fr";
  const t = content[locale];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span 
            variants={fadeInUp}
            className="text-[#D4A017] font-bold tracking-[0.2em] text-sm uppercase"
          >
            {t.eyebrow}
          </motion.span>
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mt-4 mb-6"
          >
            {t.title}
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-gray-600 text-lg leading-relaxed"
          >
            {t.body}
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {t.items.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="p-8 bg-white border border-gray-100 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center mb-6">
                {icons[index]}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

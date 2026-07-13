"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";

const content = {
  en: {
    eyebrow: "On The Ground",
    title: "Our Field Operations",
    body: "A closer look at our sourcing, logistics, and quality control activities across West and Central Africa.",
    images: [
      { src: "/images/bag.jpeg", alt: "Agricultural Sourcing in West Africa", title: "Sourcing Excellence" },
      { src: "/images/show1.jpeg", alt: "Logistics and Transport Operations", title: "Global Logistics" },
      { src: "/images/show2.jpeg", alt: "Quality Control and Inspection", title: "Quality Assurance" },
      { src: "/images/show3.jpeg", alt: "Community and Field Processing", title: "Field Processing" },
    ],
  },
  fr: {
    eyebrow: "Sur le Terrain",
    title: "Nos Opérations sur le Terrain",
    body: "Un aperçu de nos activités d'approvisionnement, de logistique et de contrôle qualité en Afrique de l'Ouest et Centrale.",
    images: [
      { src: "/images/bag.jpeg", alt: "Approvisionnement agricole en Afrique de l'Ouest", title: "Excellence de l'Approvisionnement" },
      { src: "/images/show1.jpeg", alt: "Opérations de logistique et de transport", title: "Logistique Mondiale" },
      { src: "/images/show2.jpeg", alt: "Contrôle qualité et inspection", title: "Assurance Qualité" },
      { src: "/images/show3.jpeg", alt: "Transformation communautaire et sur le terrain", title: "Transformation sur le Terrain" },
    ],
  },
};

export default function FieldOperations() {
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
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.span variants={fadeInUp} className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
            {t.eyebrow}
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold text-[#3C2A21] mb-6">
            {t.title}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-500 text-lg leading-relaxed">
            {t.body}
          </motion.p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {t.images.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="relative group aspect-[14/10] overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 bg-gray-200">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              
              <div className="absolute bottom-8 left-8">
                <p className="text-white font-serif text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

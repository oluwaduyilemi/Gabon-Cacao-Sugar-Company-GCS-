"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";

const content = {
  en: {
    eyebrow: "Our Commodities",
    title: "Premium African Soft Commodities",
    body: "From cocoa to timber, we source and deliver the finest commodities from West and Central Africa.",
    items: [
      { name: "Cocoa", description: "Premium grade West African cocoa beans, ethically sourced and dried to perfection for global chocolate production.", image: "/images/coco1.jpeg" },
      { name: "Cashew", description: "High-yield raw cashew nuts sourced from verified farms, ensuring consistent size, quality, and moisture content.", image: "/images/cashew.jpg" },
      { name: "Timber", description: "Sustainably harvested tropical hardwood and timber, processed to meet rigorous international trade standards.", image: "/images/timber.jpg" },
    ],
  },
  fr: {
    eyebrow: "Nos Matières Premières",
    title: "Matières Premières Africaines de Qualité",
    body: "Du cacao au bois, nous sourçons et livrons les meilleures matières premières d'Afrique de l'Ouest et Centrale.",
    items: [
      { name: "Cacao", description: "Fèves de cacao ouest-africaines de qualité supérieure, sourcées de manière éthique et séchées à la perfection pour la production chocolatière mondiale.", image: "/images/coco1.jpeg" },
      { name: "Noix de Cajou", description: "Noix de cajou brutes à haut rendement, sourcées auprès de fermes vérifiées, garantissant une taille, une qualité et une humidité constantes.", image: "/images/cashew.jpg" },
      { name: "Bois", description: "Bois tropical dur récolté de manière durable, transformé selon des normes commerciales internationales rigoureuses.", image: "/images/timber.jpg" },
    ],
  },
};

export default function Commodities() {
  const locale = useLocale() as "en" | "fr";
  const t = content[locale];

  return (
    <section className="py-15 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span variants={fadeInUp} className="text-[#D4A017] font-bold tracking-widest text-sm uppercase">
            {t.eyebrow}
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mt-3 mb-6">
            {t.title}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-500 text-lg">
            {t.body}
          </motion.p>
        </motion.div>

        {/* Commodities Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {t.items.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                  className="h-full w-full"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3 group-hover:text-[#D4A017] transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>
                
                <div className="mt-6 w-10 h-1 bg-[#D4A017] rounded-full group-hover:w-full transition-all duration-500 opacity-30 group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

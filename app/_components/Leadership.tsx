"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";

const content = {
  en: {
    eyebrow: "Our Leaders",
    title: "Leadership Team",
    body: "The executive team driving GCS's mission to connect African producers with global markets.",
    leaders: [
      { name: "CEO & COO", src: "/images/together.jpeg" },
      { name: "Chief Executive Officer", src: "/images/standceo.jpeg" },
      { name: "Chief Operating Officer", src: "/images/standcoo.jpeg" },
    ],
  },
  fr: {
    eyebrow: "Nos Dirigeants",
    title: "Équipe de Direction",
    body: "L'équipe dirigeante qui porte la mission de GCS : relier les producteurs africains aux marchés mondiaux.",
    leaders: [
      { name: "PDG & DIRECTEUR DES OPÉRATIONS", src: "/images/together.jpeg" },
      { name: "PRÉSIDENT DIRECTEUR GÉNÉRAL", src: "/images/standceo.jpeg" },
      { name: "DIRECTEUR DES OPÉRATIONS", src: "/images/standcoo.jpeg" },
    ],
  },
};

export default function Leadership() {
  const locale = useLocale() as "en" | "fr";
  const t = content[locale];

  return (
    <section className="py-24 bg-[#F9F7F2]">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.span variants={fadeInUp} className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
            {t.eyebrow}
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-serif font-bold text-[#1A1A1A] mb-8">
            {t.title}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-600 text-lg md:text-xl leading-relaxed">
            {t.body}
          </motion.p>
        </motion.div>

        {/* Leadership Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {t.leaders.map((leader, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="group text-center">
              <div className="relative aspect-[4/5] mb-8 overflow-hidden rounded-[2rem] shadow-lg">
                <Image
                  src={leader.src}
                  alt={leader.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <h3 className="text-xl font-serif font-bold text-[#1A1A1A] uppercase tracking-wider">
                {leader.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";

const content = {
  en: {
    eyebrow: "Our Cocoa Farms",
    title: "Production Activities",
    body: "We work closely with cocoa farms to ensure quality sourcing and responsible production. These photos show part of our cocoa farming and harvesting activities.",
    alt: "Farm activity",
  },
  fr: {
    eyebrow: "Nos Plantations de Cacao",
    title: "Activités de Production",
    body: "Nous travaillons en étroite collaboration avec les plantations de cacao pour garantir un approvisionnement de qualité et une production responsable. Ces photos illustrent une partie de nos activités de culture et de récolte du cacao.",
    alt: "Activité de la ferme",
  },
};

export default function FarmCocoa() {
  const locale = useLocale() as "en" | "fr";
  const t = content[locale];

  const galleryImages = [
    "/images/farm1.jpeg", "/images/farm2.jpeg", "/images/farm3.jpeg",
    "/images/farm4.jpeg", "/images/farm5.jpeg", "/images/farm6.jpeg"
  ];

  return (
    <main className="bg-white">
          <section className="py-20 bg-[#FDFBF7]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#D4A017] uppercase tracking-widest text-xs font-bold">{t.eyebrow}</span>
            <h2 className="text-4xl font-serif font-bold text-[#3C2A21] mt-4 mb-6">{t.title}</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">{t.body}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((src, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative h-93 md:h-85 rounded-2xl overflow-hidden group shadow-lg"
              >
                <Image 
                  src={src} 
                  alt={`${t.alt} ${idx + 1}`} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

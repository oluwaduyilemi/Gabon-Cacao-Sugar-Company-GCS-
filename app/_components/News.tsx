
"use client";

import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";

const content = {
  en: {
    eyebrow: "News & Impact",
    title: "Latest From GCS",
    viewAll: "View All News",
    readMore: "Read more",
    items: [
      { date: "Feb 2025", title: "GCS at Chocoa 2025 & 2026", excerpt: "GCS participated in the world's leading cocoa conference, presenting sustainable sourcing initiatives." },
      { date: "Jan 2025", title: "Supporting Our Farmers", excerpt: "Our cocoa bag distribution initiative reached over 500 farming families across Gabon." },
      { date: "Dec 2024", title: "Sustainability Commitment", excerpt: "GCS announces compliance roadmap for EU Deforestation Regulation across all supply chains." },
    ],
  },
  fr: {
    eyebrow: "Actualités & Impact",
    title: "Dernières Nouvelles de GCS",
    viewAll: "Voir Toutes les Actualités",
    readMore: "Lire la suite",
    items: [
      { date: "Fév 2025", title: "GCS à Chocoa 2025 & 2026", excerpt: "GCS a participé à la principale conférence mondiale sur le cacao, présentant ses initiatives d'approvisionnement durable." },
      { date: "Jan 2025", title: "Soutenir Nos Agriculteurs", excerpt: "Notre initiative de distribution de sacs de cacao a touché plus de 500 familles agricoles à travers le Gabon." },
      { date: "Déc 2024", title: "Engagement pour la Durabilité", excerpt: "GCS annonce sa feuille de route de conformité au règlement européen sur la déforestation pour toutes ses chaînes d'approvisionnement." },
    ],
  },
};

export default function News() {
  const locale = useLocale() as "en" | "fr";
  const t = content[locale];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <motion.span variants={fadeInUp} className="text-[#D4A017] font-bold tracking-[0.2em] text-xs uppercase block mb-4">
              {t.eyebrow}
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold text-slate-900 tracking-tight">
              {t.title}
            </motion.h2>
          </div>
          
          <motion.div variants={fadeInUp}>
            <Link 
              href="/news" 
              className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-900 hover:text-[#D4A017] transition-colors"
            >
              {t.viewAll}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {t.items.map((article, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group p-10 bg-white border border-gray-100 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-500 flex flex-col h-full"
            >
              <span className="text-[#D4A017] font-semibold text-sm mb-4">
                {article.date}
              </span>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4 group-hover:text-[#D4A017] transition-colors leading-snug">
                {article.title}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-8 flex-grow text-sm">
                {article.excerpt}
              </p>
              
              <Link 
                href="/news" 
                className="inline-flex items-center text-[#D4A017] text-xs uppercase tracking-widest font-bold group/link"
              >
                {t.readMore}
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  <ArrowRight size={16} />
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";
import { CheckCircle2 } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";

const content = {
  en: {
    eyebrow: "Commodity",
    title: "Sugar",
    overview: "Overview",
    body: "Raw and refined sugar supplied to global food processors, distributors, and industrial buyers through competitive and compliance-driven trade execution.",
    sourcingRegionsLabel: "Sourcing Regions:",
    sourcingRegions: "Central & West Africa, Brazil (sourcing partnerships)",
    volumeLabel: "Volume Capabilities:",
    volume: "1,000 – 20,000+ metric tonnes per annum",
    buyersLabel: "Target Buyers:",
    buyers: "Food & beverage companies, confectionery producers, and wholesale distributors.",
    keyFeaturesTitle: "Key Features",
    keyFeatures: [
      "ICUMSA quality grading",
      "Large volume capacity",
      "Flexible delivery terms",
      "Trade finance available",
    ],
    cta: "Request Supply Quote",
  },
  fr: {
    eyebrow: "Matière Première",
    title: "Sucre",
    overview: "Aperçu",
    body: "Sucre brut et raffiné fourni aux transformateurs alimentaires, distributeurs et acheteurs industriels du monde entier grâce à une exécution commerciale compétitive et conforme.",
    sourcingRegionsLabel: "Régions d'Approvisionnement :",
    sourcingRegions: "Afrique Centrale et de l'Ouest, Brésil (partenariats d'approvisionnement)",
    volumeLabel: "Capacités de Volume :",
    volume: "1 000 à plus de 20 000 tonnes métriques par an",
    buyersLabel: "Acheteurs Cibles :",
    buyers: "Entreprises agroalimentaires, producteurs de confiserie et distributeurs en gros.",
    keyFeaturesTitle: "Caractéristiques Clés",
    keyFeatures: [
      "Classification qualité ICUMSA",
      "Grande capacité de volume",
      "Conditions de livraison flexibles",
      "Financement commercial disponible",
    ],
    cta: "Demander un Devis d'Approvisionnement",
  },
};

export default function SugarPage() {
  const locale = useLocale() as "en" | "fr";
  const t = content[locale];

  return (
    <section className="py-24 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl">
          <div className="container relative z-10 mx-auto pt-15 px-6 text-center pb-25">
                  <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="max-w-4xl mx-auto"
                  >
                    <motion.span 
                      variants={fadeInUp}
                      className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-bold mb-6 block"
                    >
                      {t.eyebrow}
                    </motion.span>
                    
                    <motion.h1 
                      variants={fadeInUp}
                      className="text-6xl md:text-8xl font-serif font-bold text-slate-900 leading-tight"
                    >
                      {t.title}
                    </motion.h1>
                  </motion.div>
        </div>
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={fadeInUp} className="relative aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl">
            <Image
              src="/images/sugar-CVNvfYL9.jpg" 
              alt="Raw and Refined Sugar Crystals"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1A1A1A] mb-6">
                {t.overview}
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {t.body}
              </p>
            </div>

            <div className="space-y-4 border-l-2 border-[#D4AF37] pl-6">
              <p className="text-gray-800 font-medium">
                <span className="font-bold">{t.sourcingRegionsLabel}</span> {t.sourcingRegions}
              </p>
              <p className="text-gray-800 font-medium">
                <span className="font-bold">{t.volumeLabel}</span> {t.volume}
              </p>
              <p className="text-gray-800 font-medium">
                <span className="font-bold">{t.buyersLabel}</span> {t.buyers}
              </p>
            </div>

            <div className="pt-4">
              <h3 className="text-2xl font-serif font-bold text-[#1A1A1A] mb-6">{t.keyFeaturesTitle}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {t.keyFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#D4AF37] w-5 h-5 shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
              <div className="pt-6">
                <Link href="/contact" className="inline-block">
                  <button className="bg-[#B8962F] hover:bg-[#3C2A21] text-white font-bold py-3 px-10 rounded-xl transition-all duration-300 shadow-lg shadow-amber-900/10">
                    {t.cta}
                  </button>
                </Link>
              </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";
import { MapPin } from "lucide-react";

const content = {
  en: {
    events: "Events",
    chocoaTitle: "GCS at Chocoa 2026 / 2025: Showcasing Sustainable Cocoa Sourcing",
    amsterdam2026: "Amsterdam 2026",
    amsterdam2025: "Amsterdam 2025",
    chocoaBody: "GCS participated in the world-leading cocoa conference in Amsterdam, presenting our sustainable sourcing model and connecting with international manufacturers and commodity traders. Our presence over the last two years underscores our commitment to transparent supply chains.",
    community: "Community",
    communityTitle: "Supporting Our Farmers: Cocoa Bag Distribution Initiative",
    communityBody: "In January 2025, GCS launched a regional initiative providing high-grade distribution materials to over 500 local farmers, ensuring the integrity and quality of the harvest during transport.",
    business: "Business",
    businessTitle: "Q3 2024: Record Export Volumes",
    businessBody: "Traceable, fine-flavor cocoa exports reached a record high in the third quarter of 2024. Our logistics optimization has resulted in a 15% increase in efficiency for premium-grade shipments to North American and European markets.",
    september2024: "September 2024",
    quarterlyReport: "Quarterly Report",
    corporate: "Corporate",
    corporateTitle: "New London Office Opens for European Operations",
    corporateBody: "To better serve our international partners, GCS has officially opened its European representative office in London. This move strengthens our trade desk capabilities and regional compliance monitoring, providing a direct bridge between Gabonese production and European markets.",
    november2024: "November 2024",
    regionalExpansion: "Regional Expansion",
  },
  fr: {
    events: "Événements",
    chocoaTitle: "GCS à Chocoa 2026 / 2025 : Un Approvisionnement en Cacao Durable Mis en Avant",
    amsterdam2026: "Amsterdam 2026",
    amsterdam2025: "Amsterdam 2025",
    chocoaBody: "GCS a participé à la principale conférence mondiale sur le cacao à Amsterdam, présentant notre modèle d'approvisionnement durable et échangeant avec des fabricants internationaux et des négociants en matières premières. Notre présence au cours des deux dernières années souligne notre engagement envers des chaînes d'approvisionnement transparentes.",
    community: "Communauté",
    communityTitle: "Soutenir Nos Agriculteurs : Initiative de Distribution de Sacs de Cacao",
    communityBody: "En janvier 2025, GCS a lancé une initiative régionale fournissant du matériel de distribution haut de gamme à plus de 500 agriculteurs locaux, garantissant l'intégrité et la qualité de la récolte pendant le transport.",
    business: "Affaires",
    businessTitle: "T3 2024 : Volumes d'Exportation Record",
    businessBody: "Les exportations de cacao traçable et fin ont atteint un niveau record au troisième trimestre 2024. Notre optimisation logistique a permis une augmentation de 15 % de l'efficacité des expéditions haut de gamme vers les marchés nord-américain et européen.",
    september2024: "Septembre 2024",
    quarterlyReport: "Rapport Trimestriel",
    corporate: "Entreprise",
    corporateTitle: "Ouverture d'un Nouveau Bureau à Londres pour les Opérations Européennes",
    corporateBody: "Afin de mieux servir nos partenaires internationaux, GCS a officiellement ouvert son bureau de représentation européen à Londres. Cette initiative renforce les capacités de notre pôle commercial et le suivi de la conformité régionale, offrant un lien direct entre la production gabonaise et les marchés européens.",
    november2024: "Novembre 2024",
    regionalExpansion: "Expansion Régionale",
  },
};

export default function NewsContent() {
  const locale = useLocale() as "en" | "fr";
  const t = content[locale];

  return (
    <section className="py-15 bg-white">
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <motion.div variants={fadeInUp} className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-[#D4AF37] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">{t.events}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#3C2A21] mb-6">{t.chocoaTitle}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden relative">
                <Image 
                  src="/images/amster26.jpeg" 
                  alt="Chocoa Amsterdam 2026" 
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#3C2A21]/10 flex items-end p-4">
                  <span className="text-white text-xs font-bold bg-[#3C2A21]/60 backdrop-blur-md px-3 py-1 rounded-lg z-10">{t.amsterdam2026}</span>
                </div>
              </div>
              
              <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden relative">
                <Image 
                  src="/images/amster20.jpg" 
                  alt="Chocoa Amsterdam 2025" 
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#3C2A21]/10 flex items-end p-4">
                  <span className="text-white text-xs font-bold bg-[#3C2A21]/60 backdrop-blur-md px-3 py-1 rounded-lg z-10">{t.amsterdam2025}</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 leading-relaxed text-lg">
              {t.chocoaBody}
            </p>
          </motion.div>

          {/* 2. COMMUNITY BLOCK */}
          <motion.div variants={fadeInUp} className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 aspect-video bg-gray-200 rounded-2xl overflow-hidden relative">
              <Image 
                src="/images/support.jpeg" 
                alt="Community Initiative" 
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <span className="bg-[#D4AF37] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">{t.community}</span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#3C2A21] mb-4">{t.communityTitle}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t.communityBody}
              </p>
            </div>
          </motion.div>

         {/* 3. BUSINESS BLOCK */}
          <motion.div variants={fadeInUp} className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="w-full md:w-1/2 aspect-video bg-gray-200 rounded-2xl overflow-hidden relative">
              <Image 
                src="/images/exxporttt.jpeg" 
                alt="Record Export Volumes" 
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="w-full md:w-1/2">
              <span className="bg-[#D4AF37] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">{t.business}</span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#3C2A21] mb-4">{t.businessTitle}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t.businessBody}
              </p>
              <div className="mt-6 flex gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                <span>{t.september2024}</span>
                <span>•</span>
                <span>{t.quarterlyReport}</span>
              </div>
            </div>
          </motion.div>

          {/* 4. CORPORATE BLOCK */}
          <motion.div variants={fadeInUp} className="bg-[#3C2A21] rounded-3xl p-8 md:p-12 shadow-xl text-white">
            <div className="flex justify-between items-start mb-6">
              <span className="bg-[#D4AF37] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">{t.corporate}</span>
              <MapPin className="text-[#D4AF37]" size={24} />
            </div>
            <h3 className="text-3xl font-serif font-bold mb-4">{t.corporateTitle}</h3>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
              {t.corporateBody}
            </p>
            <div className="mt-8 pt-8 border-t border-white/10 flex gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              <span>{t.november2024}</span>
              <span>•</span>
              <span>{t.regionalExpansion}</span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

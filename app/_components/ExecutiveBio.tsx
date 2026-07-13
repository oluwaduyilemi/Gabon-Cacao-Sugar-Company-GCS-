"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Landmark } from "lucide-react";
import { useLocale } from "next-intl";

const content = {
  en: {
    sectionTitle: "Executive Profile",
    name: "Charles-Daniel Tchen",
    role: "Chief Executive Officer",
    quote: "\"Driving the evolution of a modern, integrated, and competitive Central African commodities framework capable of local asset optimization and seamless global market alignment.\"",
    para1: <>Charles-Daniel Tchen is an agro-industrial developer specializing in international commerce, macro-logistics networks, and cross-border structural frameworks across Central Africa. Academic foundations in International Business from <strong>Brunel University London</strong> and training at <strong>Cheltenham College (UK)</strong> equip him to effectively bridge regional African production with international capital markets.</>,
    para2: <>Leveraging a deep operational understanding of Western corporate environments and trade syndicates, he concurrently serves as the <strong>Strategic Advisor for African Trade at S&D Capital Advisory</strong>, a specialized trade finance firm.</>,
    mentorshipLabel: "Trade Desk Advisory & Mentorship",
    mentorshipBody: <>His commercial strategy is backed by structured mentorship from prominent figures in global commodities and trade risk systems, including former executive operational heads of <strong>Trafigura</strong>, <strong>Natixis</strong>, <strong>Deutsche Bank</strong>, and the <strong>ICE Benchmark Administration</strong>, alongside institutional counsel from the former presidency of the CEMAC Commission.</>,
    pedigreeLabel: "Industrial Pedigree & Supply Networks",
    pedigreeBody: <>Raised within an established Gabonese enterprise ecosystem—with heritage extending across executive leadership at the <strong>Federation of Gabonese Enterprises (FEG)</strong> and <strong>Shell Gabon</strong>—Charles-Daniel combines high-level corporate strategy with local operational execution. His focus remains centered on raw material sourcing, local asset transformation, and securing long-term supply frameworks with tier-1 international commodity partners.</>,
    footerLeft: "EXECUTIVE DESK: LONDON // LIBREVILLE",
  },
  fr: {
    sectionTitle: "Profil Exécutif",
    name: "Charles-Daniel Tchen",
    role: "Directeur Général",
    quote: "« Porter l'évolution d'un cadre moderne, intégré et compétitif pour les matières premières d'Afrique centrale, capable d'optimiser les actifs locaux et de s'aligner harmonieusement sur les marchés mondiaux. »",
    para1: <>Charles-Daniel Tchen est un développeur agro-industriel spécialisé dans le commerce international, les réseaux macro-logistiques et les cadres structurels transfrontaliers en Afrique centrale. Sa formation académique en commerce international à <strong>Brunel University London</strong> et sa formation au <strong>Cheltenham College (Royaume-Uni)</strong> lui permettent de relier efficacement la production régionale africaine aux marchés de capitaux internationaux.</>,
    para2: <>Fort d'une compréhension opérationnelle approfondie des environnements corporatifs occidentaux et des syndicats commerciaux, il occupe simultanément le poste de <strong>Conseiller Stratégique pour le Commerce Africain chez S&D Capital Advisory</strong>, une société spécialisée en financement du commerce.</>,
    mentorshipLabel: "Conseil de Trading & Mentorat",
    mentorshipBody: <>Sa stratégie commerciale s'appuie sur un mentorat structuré par des figures éminentes des matières premières mondiales et des systèmes de risque commercial, incluant d'anciens dirigeants opérationnels de <strong>Trafigura</strong>, <strong>Natixis</strong>, <strong>Deutsche Bank</strong> et de l'<strong>ICE Benchmark Administration</strong>, ainsi que des conseils institutionnels de l'ancienne présidence de la Commission de la CEMAC.</>,
    pedigreeLabel: "Héritage Industriel & Réseaux d'Approvisionnement",
    pedigreeBody: <>Formé au sein d'un écosystème d'entreprises gabonaises établi — avec un héritage s'étendant à la direction exécutive de la <strong>Fédération des Entreprises Gabonaises (FEG)</strong> et de <strong>Shell Gabon</strong> — Charles-Daniel allie stratégie corporative de haut niveau et exécution opérationnelle locale. Son action reste centrée sur l'approvisionnement en matières premières, la transformation des actifs locaux et la sécurisation de cadres d'approvisionnement à long terme avec des partenaires internationaux de premier plan.</>,
    footerLeft: "BUREAU EXÉCUTIF : LONDRES // LIBREVILLE",
  },
};

export default function ExecutiveBio() {
  const locale = useLocale() as "en" | "fr";
  const t = content[locale];

  return (
    <section className="py-24 bg-[#F9F7F2] text-[#111111] px-6 border-t border-stone-200">
      <div className="container mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-16 border-b border-stone-200 pb-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight">
            {t.sectionTitle}
          </h2>
        </div>

        {/* Main Content Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Portrait Container */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-xl border border-stone-200/60 bg-stone-100 group">
              <Image 
                src="/images/neww.jpeg" 
                alt="Charles-Daniel Tchen — Chief Executive Officer"
                fill
                priority
                className="object-cover object-center transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white lg:hidden">
                <h3 className="text-2xl font-serif font-bold">{t.name}</h3>
                <p className="text-xs opacity-90 font-mono tracking-wider">{t.role}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Refined Strategic Narrative */}
          <div className="lg:col-span-7 space-y-8 font-sans text-gray-700 leading-relaxed text-base md:text-lg">
            
            <div className="space-y-1 hidden lg:block">
              <h3 className="text-3xl font-serif font-bold text-[#111111]">
                {t.name}
              </h3>
              <p className="text-[#D4AF37] font-mono text-xs uppercase tracking-[0.2em] font-semibold">
                {t.role}
              </p>
            </div>

            <p className="font-light text-neutral-900 text-lg md:text-xl italic font-serif border-l-2 border-[#D4AF37] pl-6 py-1">
              {t.quote}
            </p>

            <div className="space-y-5 font-light text-gray-600 text-sm md:text-base">
              <p>{t.para1}</p>
              <p>{t.para2}</p>
            </div>

            {/* Sub-block: Mentorship & Technical Depths */}
            <div className="border-t border-stone-200 pt-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#D4AF37] font-semibold uppercase">
                <Award className="w-4 h-4" /> {t.mentorshipLabel}
              </div>
              <p className="font-light text-xs md:text-sm text-gray-500">
                {t.mentorshipBody}
              </p>
            </div>

            {/* Sub-block: Structural Origins */}
            <div className="border-t border-stone-200 pt-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#D4AF37] font-semibold uppercase">
                <Landmark className="w-4 h-4" /> {t.pedigreeLabel}
              </div>
              <p className="font-light text-xs md:text-sm text-gray-500">
                {t.pedigreeBody}
              </p>
            </div>

            {/* Footer Institutional Monospace Label */}
            <div className="pt-4 flex items-center justify-between text-xs font-mono text-gray-400 border-t border-stone-200/60">
              <span>{t.footerLeft}</span>
              <span className="text-[#D4AF37]/80">GCS COMMODITIES</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

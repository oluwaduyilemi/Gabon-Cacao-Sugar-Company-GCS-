"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";
import TradeSpecification from "@/app/_components/TradeSpecification";

// Sourced from the June 2026 DFI investor dossier's Sources & Uses and
// Capital Structure tables. Counterparty-identifying details (specific
// bank names, exact title/deed numbers) are intentionally omitted here —
// available in the full presentation under Reports & Presentations.
const content = {
  en: {
    title: "Investment Structure",
    body: "GCS is privately held and structured to raise DFI-aligned debt financing rather than public equity. Below is a summary of the proposed financing structure.",
    summaryEyebrow: "Financing Summary",
    summaryNote: "Full detail, including sources and uses of capital, is available in the investor presentation under Reports & Presentations.",
    summaryRows: [
      { label: "Total Financing Required", value: "FCFA 1.0 billion (~USD 1.67 million)" },
      { label: "Proposed Structure", value: "FCFA 800M investment loan + FCFA 200M working-capital facility" },
      { label: "Collateral Coverage Ratio", value: "142% — secured against certified industrial land and equipment" },
      { label: "Complementary Trade Finance", value: "Up to USD 5M under discussion to support procurement cycles" },
    ],
    usesTitle: "Use of Proceeds",
    uses: [
      { label: "Processing line & industrial equipment", pct: "28.9%" },
      { label: "Building construction & assembly", pct: "18.0%" },
      { label: "Working capital — raw material sourcing", pct: "20.6%" },
      { label: "Logistics fleet & vehicles", pct: "17.0%" },
      { label: "Installation, commissioning & contingencies", pct: "9.3%" },
      { label: "Other (lab equipment, IT, gensets)", pct: "6.2%" },
    ],
  },
  fr: {
    title: "Structure de l'Investissement",
    body: "GCS est une société à capital privé, structurée pour lever un financement par dette aligné DFI plutôt que des capitaux propres publics. Voici un résumé de la structure de financement proposée.",
    summaryEyebrow: "Résumé du Financement",
    summaryNote: "Le détail complet, incluant les sources et emplois des capitaux, est disponible dans la présentation aux investisseurs sous Rapports et Présentations.",
    summaryRows: [
      { label: "Financement Total Requis", value: "FCFA 1,0 milliard (~1,67 million USD)" },
      { label: "Structure Proposée", value: "Prêt d'investissement de 800M FCFA + facilité de fonds de roulement de 200M FCFA" },
      { label: "Ratio de Couverture des Garanties", value: "142% — garanti par des terrains et équipements industriels certifiés" },
      { label: "Financement Commercial Complémentaire", value: "Jusqu'à 5M USD en discussion pour soutenir les cycles d'approvisionnement" },
    ],
    usesTitle: "Utilisation des Fonds",
    uses: [
      { label: "Ligne de transformation et équipement industriel", pct: "28,9%" },
      { label: "Construction et assemblage du bâtiment", pct: "18,0%" },
      { label: "Fonds de roulement — approvisionnement en matières premières", pct: "20,6%" },
      { label: "Flotte logistique et véhicules", pct: "17,0%" },
      { label: "Installation, mise en service et imprévus", pct: "9,3%" },
      { label: "Autres (laboratoire, informatique, groupes électrogènes)", pct: "6,2%" },
    ],
  },
};

export default function InvestmentStructure() {
  const locale = useLocale() as "en" | "fr";
  const t = content[locale];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-serif font-bold text-slate-900 mb-4"
          >
            {t.title}
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-gray-500 mb-12 max-w-2xl">
            {t.body}
          </motion.p>

          <motion.div variants={fadeInUp} className="mb-14">
            <TradeSpecification eyebrow={t.summaryEyebrow} note={t.summaryNote} rows={t.summaryRows} />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#3C2A21]/50 mb-4">
              {t.usesTitle}
            </h2>
            <div className="space-y-3">
              {t.uses.map((use) => (
                <div key={use.label} className="flex items-center gap-4">
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-medium text-slate-900">{use.label}</span>
                      <span className="text-sm font-mono text-[#D4AF37] font-semibold">{use.pct}</span>
                    </div>
                    <div className="h-1.5 bg-[#F9F7F2] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#D4AF37] rounded-full"
                        style={{ width: use.pct }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";

export interface SpecRow {
  label: string;
  value: string;
}

interface TradeSpecificationProps {
  eyebrow: string;
  note: string;
  rows: SpecRow[];
}


export default function TradeSpecification({ eyebrow, note, rows }: TradeSpecificationProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="border border-[#3C2A21]/15 bg-[#FDFBF7]"
    >
      <motion.div
        variants={fadeInUp}
        className="flex items-center justify-between px-6 md:px-8 py-4 border-b border-[#3C2A21]/15"
      >
        <span className="font-mono text-[11px] tracking-[0.2em] text-[#3C2A21] font-semibold uppercase">
          [ {eyebrow} ]
        </span>
        <span className="hidden sm:block w-2 h-2 rotate-45 border border-[#D4AF37]" />
      </motion.div>

      <div className="divide-y divide-[#3C2A21]/10">
        {rows.map((row) => (
          <motion.div
            key={row.label}
            variants={fadeInUp}
            className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 px-6 md:px-8 py-4"
          >
            <span className="font-mono text-[11px] tracking-widest text-gray-400 uppercase sm:w-52 shrink-0">
              {row.label}
            </span>
            <span className="font-mono text-sm text-[#3C2A21] font-medium">
              {row.value}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.p
        variants={fadeInUp}
        className="px-6 md:px-8 py-4 text-xs text-gray-400 border-t border-[#3C2A21]/15 leading-relaxed"
      >
        {note}
      </motion.p>
    </motion.div>
  );
}

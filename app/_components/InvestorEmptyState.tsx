"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/app/component/lib/animations";
import type { LucideIcon } from "lucide-react";

interface InvestorEmptyStateProps {
  icon: LucideIcon;
  title: string;
  body: string;
}

export default function InvestorEmptyState({ icon: Icon, title, body }: InvestorEmptyStateProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="border border-dashed border-[#3C2A21]/15 rounded-2xl px-8 py-10 text-center bg-[#FDFBF7]"
    >
      <div className="w-11 h-11 rounded-full bg-amber-50 flex items-center justify-center mx-auto mb-4">
        <Icon size={18} className="text-[#D4AF37]" />
      </div>
      <h3 className="font-serif font-semibold text-slate-900 mb-1.5">{title}</h3>
      <p className="text-gray-500 text-sm max-w-sm mx-auto leading-relaxed">{body}</p>
    </motion.div>
  );
}

"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(Math.round(latest));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-6xl font-serif font-bold text-[#111111]">
      {displayValue}{suffix}
    </span>
  );
}

const content = {
  en: [
    { label: "Farming families supported", value: 500, suffix: "+" },
    { label: "Supply chain traceability target", value: 100, suffix: "%" },
    { label: "Continents served", value: 4, suffix: "" },
    { label: "EUDR", value: "EUDR", isText: true, subLabel: "Compliance aligned" },
  ],
  fr: [
    { label: "Familles agricoles soutenues", value: 500, suffix: "+" },
    { label: "Objectif de traçabilité de la chaîne", value: 100, suffix: "%" },
    { label: "Continents desservis", value: 4, suffix: "" },
    { label: "RDUE", value: "RDUE", isText: true, subLabel: "Conformité alignée" },
  ],
};

export default function SustainabilityStats() {
  const locale = useLocale() as "en" | "fr";
  const stats = content[locale];

  return (
    <section className="bg-[#D4AF37] py-10 md:py-19">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              {typeof stat.value === "number" ? (
                <Counter value={stat.value} suffix={stat.suffix} />
              ) : (
                <span className="text-5xl  font-serif font-bold text-[#111111]">
                  {stat.value}
                </span>
              )}
              <p className="mt-4 text-[#111111]/80 font-medium text-sm md:text-base uppercase tracking-wider max-w-[180px] leading-tight">
                {stat.label}
              </p>
              {stat.subLabel && (
                <p className="text-[#111111]/70 text-sm mt-1 italic font-medium">
                  {stat.subLabel}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

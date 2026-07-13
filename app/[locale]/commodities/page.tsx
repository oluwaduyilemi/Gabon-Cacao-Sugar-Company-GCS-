"use client";

import { useLocale } from "next-intl";

export default function CommoditiesPage() {
  const locale = useLocale();
  return (
    <div className="pt-32 pb-20 text-center text-gray-500">
      {locale === "fr" ? "Page Matières Premières" : "Commodities Page"}
    </div>
  )
}

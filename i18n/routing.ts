import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "fr"],
  defaultLocale: "en",
  localePrefix: "always", // always show /en or /fr in the URL
});

export type Locale = (typeof routing.locales)[number];

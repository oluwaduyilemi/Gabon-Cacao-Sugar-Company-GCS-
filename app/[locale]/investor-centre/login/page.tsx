"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";
import { Lock } from "lucide-react";
import { Link } from "@/i18n/navigation";

const content = {
  en: {
    title: "Investor Centre",
    subtitle: "This area is restricted to authorised investors and analysts. Please enter the access password to continue.",
    passwordLabel: "Password",
    placeholder: "Enter password",
    verifying: "Verifying...",
    submit: "Enter Investor Centre",
    genericError: "Something went wrong. Please try again.",
    needAccess: "Need access?",
    contactUs: "Contact us",
  },
  fr: {
    title: "Espace Investisseurs",
    subtitle: "Cet espace est réservé aux investisseurs et analystes autorisés. Veuillez saisir le mot de passe d'accès pour continuer.",
    passwordLabel: "Mot de passe",
    placeholder: "Saisir le mot de passe",
    verifying: "Vérification...",
    submit: "Accéder à l'Espace Investisseurs",
    genericError: "Une erreur s'est produite. Veuillez réessayer.",
    needAccess: "Besoin d'un accès ?",
    contactUs: "Contactez-nous",
  },
};

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const locale = useLocale() as "en" | "fr";
  const t = content[locale];
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/investor-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, locale }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || t.genericError);
        setLoading(false);
        return;
      }

      const destination = searchParams.get("from") || `/${locale}/investor-centre`;
      router.push(destination);
      router.refresh();
    } catch {
      setError(t.genericError);
      setLoading(false);
    }
  }

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-white px-6 pt-15">
      <div className="w-full max-w-md">

        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-full bg-[#3C2A21] flex items-center justify-center">
            <Lock size={22} className="text-[#D4AF37]" />
          </div>
        </div>

        <h1 className="text-3xl font-serif font-bold text-center text-slate-900 mb-2">
          {t.title}
        </h1>
        <p className="text-gray-500 text-center mb-10">
          {t.subtitle}
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="password" className="sr-only">
              {t.passwordLabel}
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t.placeholder}
              className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all text-slate-900"
            />
          </div>

          {error && (
            <p className="text-red-600 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#3C2A21] text-white px-6 py-3.5 rounded-xl font-semibold uppercase tracking-widest text-xs hover:bg-[#D4AF37] hover:text-black transition-all duration-300 disabled:opacity-60"
          >
            {loading ? t.verifying : t.submit}
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-8">
          {t.needAccess}{" "}
          <Link href="/contact" className="text-[#D4AF37] hover:underline">
            {t.contactUs}
          </Link>
        </p>
      </div>
    </section>
  );
}

export default function InvestorLogin() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}

import { NextRequest, NextResponse } from "next/server";
import { COOKIE_NAME, MAX_AGE_SECONDS, createAuthToken } from "@/lib/investorAuth";

const errors = {
  en: {
    invalidRequest: "Invalid request.",
    notConfigured: "Investor Centre is not configured yet. Please contact the site administrator.",
    incorrectPassword: "Incorrect password.",
  },
  fr: {
    invalidRequest: "Requête invalide.",
    notConfigured: "L'Espace Investisseurs n'est pas encore configuré. Veuillez contacter l'administrateur du site.",
    incorrectPassword: "Mot de passe incorrect.",
  },
};

export async function POST(req: NextRequest) {
  let password: string | undefined;
  let locale: "en" | "fr" = "en";

  try {
    const body = await req.json();
    password = body?.password;
    if (body?.locale === "fr") locale = "fr";
  } catch {
    return NextResponse.json({ error: errors.en.invalidRequest }, { status: 400 });
  }

  const t = errors[locale];
  const correctPassword = process.env.INVESTOR_PASSWORD;

  if (!correctPassword) {
    return NextResponse.json(
      { error: t.notConfigured },
      { status: 500 }
    );
  }

  if (!password || password !== correctPassword) {
    return NextResponse.json({ error: t.incorrectPassword }, { status: 401 });
  }

  const token = await createAuthToken();
  const response = NextResponse.json({ success: true });

  response.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE_SECONDS,
  });

  return response;
}

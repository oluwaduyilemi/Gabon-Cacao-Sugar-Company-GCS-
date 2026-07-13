import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { COOKIE_NAME, isValidAuthToken } from "@/lib/investorAuth";

const handleI18nRouting = createMiddleware(routing);

export async function proxy(req: NextRequest) {
  // First, let next-intl resolve/redirect based on locale (/en/... or /fr/...).
  const intlResponse = handleI18nRouting(req);

  const { pathname } = req.nextUrl;
  const localeMatch = pathname.match(/^\/(en|fr)(\/|$)/);
  const locale = localeMatch ? localeMatch[1] : routing.defaultLocale;
  const pathWithoutLocale = pathname.replace(/^\/(en|fr)/, "") || "/";

  const isInvestorRoute = pathWithoutLocale.startsWith("/investor-centre");
  const isLoginRoute = pathWithoutLocale.startsWith("/investor-centre/login");

  // Gate everything under /investor-centre except the login page itself.
  if (isInvestorRoute && !isLoginRoute) {
    const token = req.cookies.get(COOKIE_NAME)?.value;
    const authorized = await isValidAuthToken(token);

    if (!authorized) {
      const loginUrl = new URL(`/${locale}/investor-centre/login`, req.url);
      loginUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return intlResponse;
}

export const config = {
  // Run on all paths except API routes, Next internals, and files with an extension.
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};

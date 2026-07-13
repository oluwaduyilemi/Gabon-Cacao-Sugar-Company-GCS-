import { NextRequest, NextResponse } from "next/server";
import { COOKIE_NAME } from "@/lib/investorAuth";

export async function POST(req: NextRequest) {
  const response = NextResponse.json({ success: true });
  response.cookies.set(COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
  return response;
}

// Lightweight signed-cookie auth for the password-protected Investor Centre.
// No external auth library needed — uses the Web Crypto API (works in both
// the Edge middleware runtime and Node.js API routes).

export const COOKIE_NAME = "investor_auth";
export const MAX_AGE_SECONDS = 60 * 60 * 24 * 30; // 30 days

async function getKey(secret: string) {
  const enc = new TextEncoder();
  return crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
}

function toHex(buffer: ArrayBuffer) {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function sign(payload: string, secret: string) {
  const key = await getKey(secret);
  const enc = new TextEncoder();
  const sigBuffer = await crypto.subtle.sign("HMAC", key, enc.encode(payload));
  return toHex(sigBuffer);
}

/** Creates a signed token of the form `<expiresAt>.<signature>`. */
export async function createAuthToken(): Promise<string> {
  const secret = process.env.INVESTOR_SECRET;
  if (!secret) throw new Error("INVESTOR_SECRET is not set");

  const expiresAt = Date.now() + MAX_AGE_SECONDS * 1000;
  const payload = String(expiresAt);
  const signature = await sign(payload, secret);
  return `${payload}.${signature}`;
}

/** Verifies a token's signature and expiry. */
export async function isValidAuthToken(token: string | undefined | null): Promise<boolean> {
  if (!token) return false;

  const secret = process.env.INVESTOR_SECRET;
  if (!secret) return false;

  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;

  const expiresAt = Number(payload);
  if (!expiresAt || Date.now() > expiresAt) return false;

  const expectedSignature = await sign(payload, secret);

  // Constant-time-ish comparison to avoid trivial timing attacks.
  if (expectedSignature.length !== signature.length) return false;
  let mismatch = 0;
  for (let i = 0; i < expectedSignature.length; i++) {
    mismatch |= expectedSignature.charCodeAt(i) ^ signature.charCodeAt(i);
  }
  return mismatch === 0;
}

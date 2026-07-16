import { NextResponse } from "next/server";

const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;

const VALID_INQUIRY_TYPES = new Set(["si", "sm", "solutions", "saas", "consulting", "general"]);

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

function sanitize(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, 5000);
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    const body = await request.json();
    const name = sanitize(body.name);
    const company = sanitize(body.company);
    const email = sanitize(body.email);
    const message = sanitize(body.message);
    const website = sanitize(body.website);
    const inquiryType = sanitize(body.inquiryType) || "general";

    if (website) {
      return NextResponse.json({ success: true });
    }

    if (!name || !company || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    if (!VALID_INQUIRY_TYPES.has(inquiryType)) {
      return NextResponse.json({ error: "Invalid inquiry type" }, { status: 400 });
    }

    console.info("[contact]", { name, company, email, inquiryType, message });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

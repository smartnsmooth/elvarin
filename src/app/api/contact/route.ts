import { NextResponse } from "next/server";
import { branding } from "@/lib/branding";

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

async function sendContactEmail(payload: {
  name: string;
  company: string;
  email: string;
  inquiryType: string;
  message: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL || branding.email;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !from) {
    return;
  }

  const subject = `Website inquiry from ${payload.name} (${payload.company})`;
  const text = [
    `Name: ${payload.name}`,
    `Company: ${payload.company}`,
    `Email: ${payload.email}`,
    `Inquiry type: ${payload.inquiryType}`,
    "",
    payload.message,
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: payload.email,
      subject,
      text,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("[contact] email delivery failed:", errorText);
    throw new Error("Email delivery failed");
  }
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

    await sendContactEmail({ name, company, email, inquiryType, message });

    console.info("[contact]", { name, company, email, inquiryType, message });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof Error && error.message === "Email delivery failed") {
      return NextResponse.json({ error: "Unable to send message" }, { status: 502 });
    }
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/components/Providers";
import { branding } from "@/lib/branding";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${branding.name} | Enterprise IT Services`,
    template: `%s | ${branding.name}`,
  },
  description: branding.description,
  openGraph: {
    title: `${branding.name} | Enterprise IT Services`,
    description: branding.description,
    url: branding.siteUrl,
    siteName: branding.name,
    type: "website",
  },
  icons: {
    icon: branding.logo.src,
    shortcut: branding.logo.src,
    apple: branding.logo.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth antialiased`}>
      <body className="flex min-h-full flex-col pb-16 md:pb-0">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

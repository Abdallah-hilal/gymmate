import type { Metadata } from "next";
import { Inter, Sora, Manrope } from "next/font/google";
import { LangProvider } from "@/lib/i18n";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GymMate — Automate. Retain. Grow.",
  description:
    "AI-powered customer support and retention systems built for fitness businesses. Automate operations, retain more members, and grow sustainably.",
  keywords: [
    "gym management software",
    "fitness business automation",
    "member retention",
    "gym CRM",
    "fitness studio software",
    "gym AI",
  ],
  openGraph: {
    title: "GymMate — Automate. Retain. Grow.",
    description:
      "AI-powered customer support and retention systems built for fitness businesses.",
    type: "website",
    siteName: "GymMate",
  },
  twitter: {
    card: "summary_large_image",
    title: "GymMate — Automate. Retain. Grow.",
    description:
      "AI-powered customer support and retention systems built for fitness businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} ${manrope.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}

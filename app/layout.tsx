import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AnimatedBackground } from "@/components/layout/AnimatedBackground";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StructuredData } from "./structured-data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rahul Kumar | Performance Marketing & Growth Analytics Specialist",
  description:
    "Scaling brands with data-driven performance marketing. Expert in Google Ads, Amazon PPC, GA4, AI automation, and analytics. 20-40% ROAS growth, CPA optimization, ACOS under 20%.",
  keywords: [
    "Performance Marketing",
    "Google Ads",
    "Amazon PPC",
    "GA4 Analytics",
    "Growth Marketing",
    "Rahul Kumar",
    "ROAS Optimization",
    "Amazon DSP",
    "AI Automation",
  ],
  authors: [{ name: "Rahul Kumar" }],
  openGraph: {
    title: "Rahul Kumar | Performance Marketing Specialist",
    description:
      "Scaling Brands with Data-Driven Performance Marketing — Google Ads, Amazon Ads, GA4, AI Automation.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Kumar | Performance Marketing Specialist",
    description:
      "Scaling Brands with Data-Driven Performance Marketing — Google Ads, Amazon Ads, GA4, AI Automation.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen antialiased bg-[#060b14] text-slate-100 overflow-x-hidden">
        <StructuredData />
        <AnimatedBackground />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

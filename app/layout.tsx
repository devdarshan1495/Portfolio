import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Devdarshan Saravanan — Developer Portfolio",
    template: "%s — Devdarshan Saravanan",
  },
  description:
    "Computer Science student building software, exploring AI/ML, and learning new technologies. Portfolio of projects, certifications, and more.",
  metadataBase: new URL("https://devdarshan.vercel.app"),
  openGraph: {
    title: "Devdarshan Saravanan — Developer Portfolio",
    description:
      "Computer Science student building software, exploring AI/ML, and learning new technologies.",
    type: "website",
    locale: "en_US",
    siteName: "Devdarshan Saravanan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devdarshan Saravanan — Developer Portfolio",
    description:
      "Computer Science student building software, exploring AI/ML, and learning new technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col font-sans antialiased bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-sky focus:text-white focus:px-4 focus:py-2 focus:text-sm"
        >
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

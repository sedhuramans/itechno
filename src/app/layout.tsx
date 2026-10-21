import ClientLayout from "@/components/ClientLayout";
import type { Metadata } from "next";
import localFont from "next/font/local";
import {Bruno_Ace, Orbitron, Space_Grotesk, Sora, Inter, Poppins } from "next/font/google";
import "./globals.css";

const digitalFont = localFont({
  src: "./fonts/DigitalNumbers.woff",
  variable: "--font-digital",
});


const brunoAceFont = Bruno_Ace({
  subsets: ["latin"],
  variable: "--font-bruno-ace",
  weight: "400",
  display: "swap",
});

const orbitronFont = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#030508",
};

export const metadata: Metadata = {
  title: {
    default: "ITECHNO 2026 | Official Memories & Highlights",
    template: "%s | ITECHNO 2026 Memories",
  },
  description:
    "Relive ITECHNO 2026 at Takshashila University through event photographs, competition highlights, memorable moments, and the people who made it special.",
  keywords: [
    "itechno",
    "itechno 2026",
    "itechno memories",
    "takshashila university",
    "takshashila symposium",
    "event photos",
    "aftermovie",
    "hackverse",
    "codeathon",
    "tech battle",
    "free fire squad battle",
    "college tech fest archive",
  ],
  metadataBase: new URL("https://itechno.takshashilauniv.ac.in/"),
  applicationName: "ITECHNO 2026 Memories",
  category: "technology",
  authors: [{ name: "ITECHNO 2026 Organizing Committee" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "ITECHNO 2026 | Official Memories & Highlights",
    type: "website",
    siteName: "ITECHNO 2026 Memories",
    url: "https://itechno.takshashilauniv.ac.in/",
    description:
      "Relive ITECHNO 2026 at Takshashila University through event photographs, competition highlights, memorable moments, and the people who made it special.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "ITECHNO 2026 | Official Memories & Highlights",
    description:
      "Relive ITECHNO 2026 at Takshashila University through event photographs, competition highlights, memorable moments, and the people who made it special.",
  },
  alternates: {
    canonical: "https://itechno.takshashilauniv.ac.in/"
  },
  icons: {
    icon: [
      { url: "/itechno-icon.png?v=2026", type: "image/png" },
      { url: "/favicon.ico?v=2026" },
    ],
    shortcut: "/itechno-icon.png?v=2026",
    apple: "/itechno-icon.png?v=2026",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/itechno-icon.png?v=2026" />
        <link rel="shortcut icon" type="image/png" href="/itechno-icon.png?v=2026" />
        <link rel="apple-touch-icon" href="/itechno-icon.png?v=2026" />
      </head>
      <body
        className={`${digitalFont.variable} ${brunoAceFont.variable} ${orbitronFont.variable} ${spaceGrotesk.variable} ${sora.variable} ${inter.variable} ${poppins.variable} antialiased w-full text-foreground bg-background font-inter`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

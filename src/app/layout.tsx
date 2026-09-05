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
})

const orbitronFont = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Itechno 2026 | Takshashila University",
    template: "%s | Itechno '26",
  },
  description:
    "Itechno 2026 is the official Inter-College Technical Festival of Takshashila University, featuring web development, debugging challenges, tech quizzes, visual puzzles, gaming squad matches, and creative reel competitions.",
  keywords: [
    "itechno",
    "itechno 2026",
    "takshashila university",
    "takshashila",
    "tech fest",
    "inter college tech fest",
    "coding competition",
    "hackathon",
    "robotics event",
    "esports tournament",
    "workshops",
    "innovation fest",
    "college fest india",
  ],
  metadataBase: new URL("https://itechno.takshashilauniv.ac.in/"),
  applicationName: "Itechno",
  category: "technology",
  authors: [{ name: "Itechno Team" }],
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
    title: "Itechno 2026 | Takshashila University",
    type: "website",
    siteName: "Itechno",
    url: "https://itechno.takshashilauniv.ac.in/",
    description:
      "Join Itechno 2026, the official inter-college tech fest of Takshashila University, for coding contests, esports, visual puzzles, and innovation-driven student events.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Itechno 2026 | Takshashila University",
    description:
      "Explore events, competitions, workshops, and updates from Itechno 2026 at Takshashila University.",
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

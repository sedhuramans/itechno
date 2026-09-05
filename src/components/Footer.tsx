import { MapPin, Sparkles, ExternalLink, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  const googleFormUrl = "https://forms.google.com";

  return (
    <footer className="w-full relative bg-[#020408] text-slate-200 py-16 md:py-20 border-t border-yellow-500/25 font-spaceGrotesk overflow-hidden">
      {/* Radiant Background Mesh Glow (Sapphire + Gold) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-yellow-400/60 via-blue-500/60 to-transparent shadow-[0_0_25px_rgba(212,175,55,0.7)]" />
      <div className="absolute bottom-0 left-0 w-full h-[320px] bg-gradient-to-t from-blue-900/10 via-yellow-600/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
          {/* Left: Branding & University */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3.5 mb-6">
              <div className="relative w-12 h-12 rounded-xl bg-black/80 border border-blue-500/40 flex items-center justify-center p-1 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                <Image
                  src="https://res.cloudinary.com/k78tbfel/image/upload/v1788616750/dckycpwsln5ds2dtoh9b.png"
                  alt="i-TECHNO Emblem"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xl font-black font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-blue-400">
                  ITECHNO &apos;26
                </span>
                <span className="text-xs font-kodeMono uppercase tracking-widest text-yellow-300">
                  TAKSHASHILA UNIVERSITY
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm mb-6">
              The premier Inter-College Technical Festival hosted at Takshashila University. Experience competitive web development, debugging, tech quizzes, visual puzzles, gaming squad matches, and VIRAL MINDS.
            </p>

            <div className="flex flex-col items-center md:items-start gap-2">
              <span className="text-[10px] font-kodeMono uppercase tracking-[0.2em] text-slate-400">
                In Collaboration With
              </span>
              <div className="relative inline-flex items-center p-2.5 sm:p-3 rounded-2xl bg-[#050814]/80 border border-yellow-500/25 backdrop-blur-md shadow-[0_4px_25px_rgba(0,0,0,0.5)] hover:border-yellow-400/50 transition-all group">
                <Image
                  src="https://res.cloudinary.com/k78tbfel/image/upload/v1788616757/tzbkazes1h0pbclvxcnm.png"
                  alt="Takshashila University X FACE Prep Campus"
                  width={340}
                  height={56}
                  className="h-10 sm:h-12 w-auto object-contain filter drop-shadow-[0_2px_10px_rgba(212,175,55,0.25)] group-hover:scale-[1.02] transition-transform"
                />
              </div>
            </div>
          </div>

          {/* Middle: Navigation & Registration */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-blue-400 font-orbitron tracking-widest text-lg font-bold mb-6">
              NAVIGATION
            </h3>
            <div className="flex flex-col space-y-3 text-sm font-kodeMono">
              <Link href="/#home" className="text-slate-300 hover:text-yellow-300 transition-colors">
                • Home
              </Link>
              <Link href="/events" className="text-slate-300 hover:text-yellow-300 transition-colors">
                • Events
              </Link>
              <Link href="/faq" className="text-slate-300 hover:text-yellow-300 transition-colors">
                • FAQ & Guidelines
              </Link>
              <Link href="/teams" className="text-slate-300 hover:text-yellow-300 transition-colors">
                • Event Crew
              </Link>
              <Link href="/gallery" className="text-slate-300 hover:text-yellow-300 transition-colors">
                • Event Gallery
              </Link>
              <Link href="/contact" className="text-slate-300 hover:text-yellow-300 transition-colors">
                • Contact Us
              </Link>
            </div>
          </div>

          {/* Right: Venue & Event Info */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-blue-400 font-orbitron tracking-widest text-lg font-bold mb-6">
              EVENT VENUE & DATE
            </h3>
            <div className="space-y-3 mb-6 text-sm text-slate-200 font-kodeMono">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-yellow-400" />
                <span>Date: September 29, 2026</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                <span>Takshashila University, Ongur, Tamil Nadu, India</span>
              </div>
            </div>

            <a
              href={googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-orbitron font-bold text-xs text-black bg-gradient-to-r from-yellow-400 via-yellow-500 to-blue-600 hover:from-yellow-300 hover:to-blue-500 transition-all shadow-[0_0_20px_rgba(212,175,55,0.5)] hover:scale-105"
            >
              <Sparkles className="w-4 h-4 text-black" />
              <span>REGISTER NOW</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-500/25 via-blue-500/25 to-transparent my-10" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-kodeMono text-slate-400 uppercase">
          <p className="text-center md:text-left tracking-wider">
            © 2026 ITECHNO • TAKSHASHILA UNIVERSITY. ALL RIGHTS RESERVED.
          </p>
          <p className="text-center md:text-right tracking-wider text-yellow-300/80">
            CHIEF DIRECTORS: SEDHURAMAN & GOKUL
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

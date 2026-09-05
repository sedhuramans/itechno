"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CountdownTimer from "../CountdownTimer";
import { Sparkles, ExternalLink, Calendar, MapPin } from "lucide-react";

const LandingSection = () => {
  const googleFormUrl = "https://forms.google.com";

  return (
    <div id="home" className="relative min-h-screen w-full flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden">
      {/* Luxury Corporate Ambient Glows: Tech Sapphire Blue + Imperial Gold */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-yellow-500/15 via-blue-600/20 to-blue-900/25 blur-[140px] rounded-full pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-10 left-1/4 w-[550px] h-[550px] bg-gradient-to-br from-blue-500/15 via-slate-900/40 to-yellow-600/15 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 flex flex-col items-center justify-center text-center">

        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6 flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-blue-500/40 bg-gradient-to-r from-slate-950/90 via-blue-950/60 to-slate-950/90 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.3)]"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
          </span>
          <span className="text-[10px] sm:text-xs font-kodeMono font-bold uppercase tracking-[0.25em] text-yellow-300">
            INTER-COLLEGE TECHNICAL EVENT
          </span>
        </motion.div>

        {/* MAIN TITLE: Official i-TECHNO 3D Insignia & Branding */}
        <div className="relative mb-6 sm:mb-8 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center"
          >
            <h1 className="sr-only">ITECHNO 2026</h1>
            {/* Ambient Behind-Logo Bloom */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/30 to-blue-700/20 blur-3xl -z-10 rounded-full scale-110 pointer-events-none" />
            <Image
              src="https://res.cloudinary.com/k78tbfel/image/upload/v1788616738/kuq5evfg1yugmzdbb6zz.png"
              alt="i-TECHNO 2026"
              width={1024}
              height={360}
              priority
              className="w-[85vw] max-w-[360px] sm:max-w-[580px] md:max-w-[780px] lg:max-w-[900px] h-auto object-contain filter drop-shadow-[0_12px_40px_rgba(59,130,246,0.4)] select-none hover:scale-[1.02] transition-transform duration-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-4 sm:mt-6 flex items-center justify-center"
          >
            <Image
              src="https://res.cloudinary.com/k78tbfel/image/upload/v1788616757/tzbkazes1h0pbclvxcnm.png"
              alt="Takshashila University X FACE Prep Campus"
              width={974}
              height={166}
              priority
              className="w-[85vw] max-w-[290px] sm:max-w-[440px] md:max-w-[560px] lg:max-w-[640px] h-auto object-contain filter drop-shadow-[0_4px_24px_rgba(234,83,42,0.3)] select-none hover:scale-[1.03] transition-transform duration-300"
            />
          </motion.div>
        </div>

        {/* Subtext Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mb-8 sm:mb-10 px-2"
        >
          <span className="text-xs sm:text-base md:text-lg font-spaceGrotesk text-slate-300 tracking-[0.16em] uppercase cursor-default max-w-2xl leading-relaxed">
            Unleash Innovation • Compete Across Technical & Gaming Arenas
          </span>
        </motion.div>

        {/* Explicit Date & Venue Pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-2.5 sm:gap-4 mb-8 sm:mb-10 text-[11px] sm:text-xs md:text-sm font-kodeMono font-bold w-full max-w-2xl px-2"
        >
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-yellow-500/40 bg-gradient-to-r from-yellow-950/40 to-slate-950/80 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <Calendar className="w-4 h-4 text-yellow-400 flex-shrink-0" />
            <span className="text-yellow-200 whitespace-nowrap">DATE: SEP 29, 2026</span>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-blue-500/40 bg-gradient-to-r from-blue-950/40 to-slate-950/80 shadow-[0_0_15px_rgba(59,130,246,0.2)] max-w-full text-center sm:text-left">
            <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
            <span className="text-blue-200 break-words leading-tight">
              VENUE: TAKSHASHILA UNIVERSITY, TAMIL NADU
            </span>
          </div>
        </motion.div>

        {/* Primary REGISTER NOW Call To Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mb-10 sm:mb-12"
        >
          <a
            href={googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2.5 sm:gap-3 px-6 sm:px-12 py-3.5 sm:py-4 rounded-xl font-orbitron font-bold text-sm sm:text-xl text-black bg-gradient-to-r from-yellow-400 via-yellow-500 to-blue-600 hover:from-yellow-300 hover:to-blue-500 transition-all duration-300 shadow-[0_0_40px_rgba(212,175,55,0.65)] hover:shadow-[0_0_60px_rgba(59,130,246,0.85)] hover:scale-105 active:scale-95 overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/25 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-black animate-spin" style={{ animationDuration: '4s' }} />
            <span>REGISTER NOW</span>
            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>

        {/* Timer Container with Gold & Sapphire Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-10 sm:mb-16 p-0.5 sm:p-1 rounded-2xl w-full max-w-4xl bg-gradient-to-r from-yellow-500/30 via-blue-500/35 to-yellow-500/30 shadow-[0_0_50px_rgba(0,0,0,0.9)]"
        >
          <div className="bg-[#05070e]/90 backdrop-blur-2xl rounded-xl p-3 sm:p-6 border border-white/5">
            <CountdownTimer />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default LandingSection;

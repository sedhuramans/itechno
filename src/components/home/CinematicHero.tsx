"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Play,
  ArrowDown,
  Calendar,
  MapPin,
  CheckCircle2,
  ChevronRight,
  Film
} from "lucide-react";

const HERO_SLIDES = [
  {
    src: "/memories/optimized/IMG_9287.webp",
    alt: "ITECHNO 2026 Grand Auditorium Stage",
    caption: "The Moment It All Began • Grand Auditorium Opening"
  },
  {
    src: "/memories/optimized/IMG_9290.webp",
    alt: "500+ Participants Packed Auditorium",
    caption: "500+ Brilliant Minds • 20+ Colleges Assembled"
  },
  {
    src: "/memories/optimized/IMG_9328.webp",
    alt: "Hackverse 24-Hour Web Innovation Sprint",
    caption: "Hackverse Arena • High-Octane Rapid Prototyping"
  },
  {
    src: "/memories/optimized/IMG_9331.webp",
    alt: "Tech Battle Quiz Arena",
    caption: "Tech Battle • Electric Buzzers & Deep Knowledge"
  },
  {
    src: "/memories/optimized/IMG_9341.webp",
    alt: "Championship Trophy Presentations",
    caption: "Excellence Rewarded • Valedictory Celebrations"
  },
  {
    src: "/memories/optimized/IMG_9343.webp",
    alt: "ITECHNO 2026 Organizing Committee",
    caption: "The Architects & Crew • Takshashila University"
  }
];

export const CinematicHero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center pt-28 pb-16 overflow-hidden select-none">
      {/* BACKGROUND SLIDESHOW WITH SMOOTH CROSSFADE & KEN BURNS EFFECT */}
      <div className="absolute inset-0 -z-30 overflow-hidden bg-black">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={HERO_SLIDES[currentSlide].src}
              alt={HERO_SLIDES[currentSlide].alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center filter brightness-[0.42] contrast-[1.08]"
            />
          </motion.div>
        </AnimatePresence>

        {/* MULTI-TIER LUXURY GRADIENT OVERLAYS */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020408]/90 via-[#020408]/60 to-[#020408] -z-20 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,4,8,0.85)_100%)] -z-20 pointer-events-none" />

        {/* SUBTLE GRID LINE OVERLAY FOR HIGH-TECH AESTHETIC */}
        <div
          className="absolute inset-0 opacity-[0.07] -z-10 pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"
        />

        {/* RADIANT AMBIENT GLOWS: SAPPHIRE BLUE & IMPERIAL GOLD */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-gradient-to-r from-blue-600/20 via-cyan-500/15 to-yellow-500/15 blur-[140px] rounded-full pointer-events-none -z-10" />
      </div>

      {/* HERO FOREGROUND CONTENT */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 flex flex-col items-center justify-center text-center">

        {/* 2026 EDITION STATUS PILL */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-5 sm:mb-6 inline-flex items-center gap-2.5 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-emerald-500/40 bg-gradient-to-r from-slate-950/90 via-emerald-950/40 to-slate-950/90 backdrop-blur-xl shadow-[0_0_25px_rgba(16,185,129,0.3)]"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] sm:text-xs font-kodeMono font-bold uppercase tracking-[0.2em] text-emerald-300">
            2026 EDITION — SUCCESSFULLY COMPLETED
          </span>
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
        </motion.div>

        {/* OFFICIAL ITECHNO 3D INSIGNIA BRANDING */}
        <div className="relative mb-4 sm:mb-6 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center"
          >
            <h1 className="sr-only">ITECHNO 2026</h1>
            {/* Ambient Bloom */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/25 via-blue-500/35 to-yellow-500/25 blur-3xl -z-10 rounded-full scale-110 pointer-events-none" />
            <Image
              src="https://res.cloudinary.com/k78tbfel/image/upload/f_auto,q_auto/v1788616738/kuq5evfg1yugmzdbb6zz.png"
              alt="i-TECHNO 2026 Official Insignia"
              width={1024}
              height={360}
              priority
              className="w-[85vw] max-w-[340px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[850px] h-auto object-contain filter drop-shadow-[0_15px_45px_rgba(59,130,246,0.45)] select-none hover:scale-[1.01] transition-transform duration-500"
            />
          </motion.div>

          {/* TAKSHASHILA X FACE PREP CAMPUS COLLABORATION */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-3 sm:mt-5 flex items-center justify-center"
          >
            <Image
              src="https://res.cloudinary.com/k78tbfel/image/upload/f_auto,q_auto/v1788616757/tzbkazes1h0pbclvxcnm.png"
              alt="Takshashila University X FACE Prep Collaboration"
              width={974}
              height={166}
              priority
              className="w-[85vw] max-w-[270px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[580px] h-auto object-contain filter drop-shadow-[0_4px_24px_rgba(234,83,42,0.3)] select-none hover:scale-[1.02] transition-transform duration-300"
            />
          </motion.div>
        </div>

        {/* HEADLINE: One Event. A Thousand Memories. */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-4 sm:mb-5 max-w-4xl"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-blue-400 tracking-tight leading-tight">
            &ldquo;One Event. A Thousand Memories.&rdquo;
          </h2>
        </motion.div>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="text-sm sm:text-lg md:text-xl font-spaceGrotesk text-slate-300 max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8"
        >
          Days of innovation, unforgettable competitions, incredible people, and moments that will stay with us forever.
        </motion.p>

        {/* BRAND PROMISE BADGE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mb-8 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-yellow-500/30 bg-black/60 text-yellow-300 font-kodeMono text-xs tracking-wider backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
          <span>ITECHNO 2026 — More Than an Event. A Memory That Stays.</span>
        </motion.div>

        {/* EVENT DATE & VENUE PILLS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-2.5 sm:gap-4 mb-10 text-xs sm:text-sm font-kodeMono font-bold w-full max-w-2xl px-2"
        >
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-yellow-500/40 bg-gradient-to-r from-yellow-950/40 to-slate-950/80 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <Calendar className="w-4 h-4 text-yellow-400 shrink-0" />
            <span className="text-yellow-200">OCTOBER 9, 2026 • OFFICIAL SYMPOSIUM</span>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-blue-500/40 bg-gradient-to-r from-blue-950/40 to-slate-950/80 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
            <span className="text-blue-200">TAKSHASHILA UNIVERSITY, TAMIL NADU</span>
          </div>
        </motion.div>

        {/* CALL TO ACTION BUTTONS: RELIVE THE MEMORIES & WATCH HIGHLIGHTS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full max-w-lg mb-12 sm:mb-16"
        >
          {/* PRIMARY CTA: Relive the Memories */}
          <a
            href="#memories"
            onClick={(e) => scrollToSection(e, "memories")}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-orbitron font-bold text-sm sm:text-base text-black bg-gradient-to-r from-yellow-400 via-yellow-500 to-blue-500 hover:from-yellow-300 hover:to-blue-400 transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:shadow-[0_0_50px_rgba(59,130,246,0.8)] hover:scale-105 active:scale-95 overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
            <Sparkles className="w-4 h-4 text-black shrink-0 animate-spin" style={{ animationDuration: "5s" }} />
            <span>Relive the Memories</span>
            <ChevronRight className="w-4 h-4 text-black shrink-0 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* SECONDARY CTA: Watch the Highlights */}
          <a
            href="#videos"
            onClick={(e) => scrollToSection(e, "videos")}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 sm:px-9 py-3.5 sm:py-4 rounded-xl font-orbitron font-bold text-sm sm:text-base text-white bg-slate-900/80 hover:bg-slate-800/90 border border-blue-500/40 hover:border-cyan-400/80 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.6)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:scale-105 active:scale-95 backdrop-blur-xl"
          >
            <Play className="w-4 h-4 text-cyan-400 shrink-0 fill-cyan-400 group-hover:scale-110 transition-transform" />
            <span>Watch the Highlights</span>
          </a>
        </motion.div>

        {/* REAL-TIME SLIDESHOW CAPTION & SLIDE DOTS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col items-center gap-2.5"
        >
          <div className="flex items-center gap-2 text-[11px] font-kodeMono text-slate-400 bg-black/60 px-3.5 py-1 rounded-full border border-white/10 backdrop-blur-md">
            <Film className="w-3 h-3 text-cyan-400" />
            <span>{HERO_SLIDES[currentSlide].caption}</span>
          </div>

          <div className="flex items-center gap-1.5">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Switch to hero background slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentSlide === idx
                    ? "w-7 bg-gradient-to-r from-yellow-400 to-cyan-400 shadow-[0_0_10px_rgba(212,175,55,0.8)]"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          {/* SCROLL DOWN INDICATOR */}
          <a
            href="#memories"
            onClick={(e) => scrollToSection(e, "memories")}
            aria-label="Scroll to official gallery memories"
            className="mt-6 flex flex-col items-center gap-1 text-slate-400 hover:text-cyan-300 transition-colors animate-bounce"
          >
            <span className="text-[10px] font-kodeMono uppercase tracking-widest">Explore Archive</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </div>
  );
};

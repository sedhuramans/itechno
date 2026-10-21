"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  Bell,
  CheckCircle2,
  Linkedin,
  MessageCircle,
  Globe
} from "lucide-react";

export const NextYearTeaser: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    try {
      const stored = localStorage.getItem("itechno_next_year_subscribers");
      const list = stored ? JSON.parse(stored) : [];
      list.push({ email, subscribedAt: new Date().toISOString() });
      localStorage.setItem("itechno_next_year_subscribers", JSON.stringify(list));
      setIsSubscribed(true);
    } catch {
      setIsSubscribed(true);
    }
  };

  const whatsappGroupUrl = "https://chat.whatsapp.com/BsU6V2xXilU1ymnB6csiVJ";

  return (
    <section id="next-edition" className="relative py-20 sm:py-28 text-slate-100 font-spaceGrotesk overflow-hidden select-none">
      {/* BACKGROUND IMAGE WITH CINEMATIC FADE */}
      <div className="absolute inset-0 -z-30 overflow-hidden bg-black">
        <Image
          src="/memories/optimized/IMG_9350.webp"
          alt="Farewell & Journey Continues"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.28] contrast-[1.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-[#020408]/80 to-[#020408]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-yellow-500/15 via-blue-600/20 to-purple-600/15 blur-[160px] rounded-full pointer-events-none -z-10" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* TOP STATUS BADGE */}
        <div className="mb-6 inline-flex items-center gap-2.5 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-yellow-500/40 bg-gradient-to-r from-slate-950/90 via-yellow-950/40 to-slate-950/90 backdrop-blur-xl shadow-[0_0_25px_rgba(212,175,55,0.3)]">
          <Sparkles className="w-4 h-4 text-yellow-400 animate-spin" style={{ animationDuration: "6s" }} />
          <span className="text-xs font-kodeMono font-bold uppercase tracking-[0.25em] text-yellow-300">
            THE NEXT CHAPTER
          </span>
        </div>

        {/* HEADLINE: The Memories Stay. The Journey Continues. */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-blue-400 tracking-tight leading-tight mb-6">
          &ldquo;The Memories Stay. The Journey Continues.&rdquo;
        </h2>

        {/* SUPPORTING TEXT */}
        <p className="text-sm sm:text-lg md:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed mb-8">
          ITECHNO 2026 may be over, but the energy, friendships, innovation, and memories will live on. Thank you for being part of our journey. Until we meet again, keep creating, keep innovating, and keep dreaming bigger.
        </p>

        {/* BIG STATEMENT DISPLAY */}
        <div className="my-10 py-5 sm:py-6 px-6 sm:px-10 rounded-3xl bg-gradient-to-r from-yellow-500/15 via-blue-500/15 to-yellow-500/15 border border-yellow-500/30 backdrop-blur-xl max-w-2xl mx-auto shadow-[0_0_40px_rgba(0,0,0,0.8)]">
          <span className="text-xs sm:text-sm font-kodeMono uppercase text-yellow-400 tracking-[0.3em] block mb-2">
            UNTIL WE MEET AGAIN
          </span>
          <h3 className="text-2xl sm:text-4xl md:text-5xl font-black font-orbitron tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-200 to-cyan-300">
            SEE YOU AT THE NEXT EDITION.
          </h3>
        </div>

        {/* NOTIFY ME / FUTURE ANNOUNCEMENT SUBSCRIPTION FORM */}
        <div className="max-w-md mx-auto mb-12">
          {isSubscribed ? (
            <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-kodeMono flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>You will be notified when the next edition is officially announced!</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email for future updates..."
                className="flex-1 px-4 py-3 rounded-xl bg-black/70 border border-white/20 focus:border-yellow-400 focus:outline-none text-xs text-white placeholder-slate-400 backdrop-blur-xl"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl font-orbitron font-bold text-xs text-black bg-gradient-to-r from-yellow-400 to-blue-500 hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)] shrink-0 inline-flex items-center justify-center gap-1.5"
              >
                <Bell className="w-3.5 h-3.5 text-black" />
                <span>Notify Me</span>
              </button>
            </form>
          )}
          <span className="text-[10px] font-kodeMono text-slate-400 mt-2 block">
            No spam. We will only contact you for official ITECHNO symposium announcements.
          </span>
        </div>

        {/* OFFICIAL SOCIAL MEDIA CHANNELS */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-orbitron">
          <a
            href={whatsappGroupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-900/40 hover:scale-105 transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Join WhatsApp Community</span>
          </a>

          <a
            href="https://www.linkedin.com/school/takshashila-university"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-950/40 border border-blue-500/30 text-blue-300 hover:bg-blue-900/40 hover:scale-105 transition-all"
          >
            <Linkedin className="w-4 h-4 text-blue-400" />
            <span>Takshashila LinkedIn</span>
          </a>

          <a
            href="https://takshashilauniv.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/20 text-slate-300 hover:text-white hover:scale-105 transition-all"
          >
            <Globe className="w-4 h-4 text-yellow-400" />
            <span>Official University Portal</span>
          </a>
        </div>
      </div>
    </section>
  );
};

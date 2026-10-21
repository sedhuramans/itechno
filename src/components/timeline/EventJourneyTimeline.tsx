"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TIMELINE_STAGES } from "@/data/memories-data";
import {
  Clock,
  CheckCircle,
  Milestone
} from "lucide-react";

export const EventJourneyTimeline: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);

  return (
    <section id="journey" className="relative scroll-mt-28 py-16 sm:py-24 text-slate-100 font-spaceGrotesk overflow-hidden">
      {/* Background Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-r from-blue-700/10 via-cyan-500/10 to-yellow-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/40 bg-gradient-to-r from-slate-950/90 via-blue-950/40 to-slate-950/90 text-blue-300 font-kodeMono text-xs uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(59,130,246,0.25)] backdrop-blur-md">
            <Milestone className="w-3.5 h-3.5 text-blue-400" />
            <span>OCTOBER 9, 2026 • CHRONOLOGICAL ARCHIVE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-blue-400 tracking-tight">
            The Journey of ITECHNO 2026
          </h2>

          <p className="mt-3 text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From the morning gates opening to the final cheer under auditorium lights — step through the moments that defined our symposium.
          </p>
        </div>

        {/* INTERACTIVE TIMELINE CONNECTOR BAR (Desktop & Tablet) */}
        <div className="hidden lg:flex items-center justify-between mb-16 relative">
          {/* Background Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400/40 via-blue-500/50 to-yellow-400/40 -translate-y-1/2 z-0" />

          {TIMELINE_STAGES.map((st, idx) => {
            const isActive = activeStage === idx;
            return (
              <button
                key={st.id}
                onClick={() => setActiveStage(idx)}
                className={`relative z-10 flex flex-col items-center group focus:outline-none transition-all duration-300 ${
                  isActive ? "scale-110" : "opacity-75 hover:opacity-100"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center font-orbitron font-bold text-xs transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-yellow-400 to-blue-500 text-black shadow-[0_0_25px_rgba(212,175,55,0.7)]"
                      : "bg-[#050814] border border-white/20 text-slate-300 group-hover:border-yellow-400"
                  }`}
                >
                  0{idx + 1}
                </div>
                <span className="mt-2 text-[11px] font-kodeMono font-bold text-yellow-300">
                  {st.time}
                </span>
                <span className="text-[10px] font-orbitron text-slate-400 max-w-[90px] text-center truncate">
                  {st.tag}
                </span>
              </button>
            );
          })}
        </div>

        {/* ACTIVE STAGE HIGHLIGHT SPOTLIGHT (Desktop Featured View) */}
        <div className="mb-16 rounded-3xl p-0.5 bg-gradient-to-r from-yellow-500/30 via-blue-500/40 to-yellow-500/30 shadow-[0_15px_50px_rgba(0,0,0,0.85)]">
          <div className="rounded-[22px] overflow-hidden bg-[#050814]/95 border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* PHOTO COLUMN */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[450px] overflow-hidden bg-black">
              <Image
                src={TIMELINE_STAGES[activeStage].image}
                alt={TIMELINE_STAGES[activeStage].title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 750px"
                className="object-cover object-center transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 rounded-full text-[10px] font-kodeMono uppercase font-bold tracking-wider bg-black/80 border border-yellow-400/50 text-yellow-300 backdrop-blur-md">
                  {TIMELINE_STAGES[activeStage].tag}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-kodeMono text-slate-300">
                <span className="flex items-center gap-1.5 bg-black/70 px-3 py-1 rounded-md border border-white/10">
                  <Clock className="w-3.5 h-3.5 text-yellow-400" />
                  {TIMELINE_STAGES[activeStage].time}
                </span>
                <span className="bg-black/70 px-3 py-1 rounded-md border border-white/10">
                  Stage 0{activeStage + 1} of 0{TIMELINE_STAGES.length}
                </span>
              </div>
            </div>

            {/* CONTENT COLUMN */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-kodeMono font-bold text-yellow-400 uppercase tracking-widest block mb-1">
                  {TIMELINE_STAGES[activeStage].stageName}
                </span>

                <h3 className="text-xl sm:text-2xl font-black font-orbitron text-white leading-tight">
                  {TIMELINE_STAGES[activeStage].title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed">
                  {TIMELINE_STAGES[activeStage].description}
                </p>

                {/* HIGHLIGHT BULLETS */}
                <div className="mt-6 space-y-2.5">
                  <span className="text-[10px] font-kodeMono uppercase tracking-[0.2em] text-slate-400 block mb-2">
                    Key Highlights:
                  </span>
                  {TIMELINE_STAGES[activeStage].highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* STAGE SWITCHER CONTROLS */}
              <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
                <button
                  onClick={() =>
                    setActiveStage((prev) =>
                      prev === 0 ? TIMELINE_STAGES.length - 1 : prev - 1
                    )
                  }
                  className="px-4 py-2 rounded-xl text-xs font-orbitron bg-white/10 hover:bg-white/20 text-slate-300 transition-all"
                >
                  ← Previous Stage
                </button>

                <button
                  onClick={() =>
                    setActiveStage((prev) => (prev + 1) % TIMELINE_STAGES.length)
                  }
                  className="px-4 py-2 rounded-xl text-xs font-orbitron bg-gradient-to-r from-yellow-400 to-blue-500 text-black font-bold hover:scale-105 transition-all"
                >
                  Next Stage →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE STEP-BY-STEP VERTICAL TIMELINE CARDS */}
        <div className="lg:hidden space-y-6">
          {TIMELINE_STAGES.map((st, idx) => (
            <div
              key={st.id}
              onClick={() => setActiveStage(idx)}
              className={`p-5 rounded-2xl border transition-all ${
                activeStage === idx
                  ? "bg-slate-900/90 border-yellow-400 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                  : "bg-[#050814]/80 border-white/10"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-kodeMono font-bold text-yellow-400">
                  {st.stageName} • {st.time}
                </span>
                <span className="text-[10px] font-kodeMono text-slate-400 bg-white/5 px-2 py-0.5 rounded">
                  {st.tag}
                </span>
              </div>
              <h4 className="text-base font-orbitron font-bold text-white mb-2">
                {st.title}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {st.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

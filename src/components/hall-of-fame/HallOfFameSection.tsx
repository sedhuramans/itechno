"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HALL_OF_FAME_DATA } from "@/data/memories-data";
import {
  Trophy,
  Medal,
  Award,
  School,
  ShieldCheck,
  ChevronRight
} from "lucide-react";

export const HallOfFameSection: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<string>("all");

  const eventsList = [
    { id: "all", name: "All Competitions" },
    { id: "hackverse", name: "Hackverse" },
    { id: "codeathon", name: "Codeathon" },
    { id: "tech-battle", name: "Tech Battle" },
    { id: "word-battle", name: "Word Battle" },
    { id: "pictionary", name: "Pictionary" },
    { id: "free-fire", name: "Free Fire" },
    { id: "reel-creation", name: "Viral Minds" }
  ];

  const filteredWinners =
    selectedEvent === "all"
      ? HALL_OF_FAME_DATA
      : HALL_OF_FAME_DATA.filter((w) => w.eventId === selectedEvent);

  return (
    <section id="hall-of-fame" className="relative scroll-mt-28 py-16 sm:py-24 text-slate-100 font-spaceGrotesk overflow-hidden">
      {/* Background Radiance */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-yellow-500/10 via-amber-600/10 to-blue-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/40 bg-gradient-to-r from-slate-950/90 via-yellow-950/40 to-slate-950/90 text-yellow-300 font-kodeMono text-xs uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(212,175,55,0.25)] backdrop-blur-md">
            <Trophy className="w-3.5 h-3.5 text-yellow-400" />
            <span>OFFICIAL HALL OF FAME</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-blue-400 tracking-tight">
            Excellence Deserves to Be Remembered.
          </h2>

          <p className="mt-3 text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Honoring the brilliant teams, coders, quizzers, esports squads, and creative visionaries who claimed the highest honors at ITECHNO 2026.
          </p>

          {/* Event Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {eventsList.map((ev) => (
              <button
                key={ev.id}
                onClick={() => setSelectedEvent(ev.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-orbitron transition-all ${
                  selectedEvent === ev.id
                    ? "bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-500 text-black font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)] scale-105"
                    : "bg-[#050814]/80 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                {ev.name}
              </button>
            ))}
          </div>
        </div>

        {/* WINNERS CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredWinners.map((record) => (
            <div
              key={record.id}
              className="group relative rounded-3xl p-0.5 bg-gradient-to-b from-yellow-500/30 via-white/5 to-blue-500/20 hover:from-yellow-400/80 hover:via-amber-400/50 hover:to-blue-400/70 transition-all duration-500 shadow-[0_12px_40px_rgba(0,0,0,0.7)] hover:shadow-[0_15px_50px_rgba(212,175,55,0.35)] hover:-translate-y-2 flex flex-col justify-between"
            >
              <div className="rounded-[22px] overflow-hidden bg-[#050814]/95 border border-white/10 h-full flex flex-col justify-between p-5 sm:p-6">
                <div>
                  {/* CARD HEADER */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div>
                      <span className="text-[10px] font-kodeMono uppercase font-bold text-yellow-400 tracking-wider">
                        {record.category}
                      </span>
                      <h3 className="text-xl font-black font-orbitron text-white mt-0.5 group-hover:text-yellow-200 transition-colors">
                        {record.eventTitle}
                      </h3>
                    </div>
                    <div className="p-2.5 rounded-xl bg-yellow-500/15 border border-yellow-500/30 text-yellow-300 shrink-0">
                      <Trophy className="w-5 h-5 text-yellow-400" />
                    </div>
                  </div>

                  {/* EVENT PHOTO PREVIEW */}
                  {record.firstPlace.photo && (
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-5 border border-white/10 bg-black">
                      <Image
                        src={record.firstPlace.photo}
                        alt={`${record.eventTitle} Champion`}
                        fill
                        sizes="(max-width: 768px) 100vw, 380px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050814] via-black/30 to-transparent" />
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between">
                        <span className="text-[10px] font-kodeMono bg-black/80 px-2 py-0.5 rounded text-yellow-300 border border-yellow-400/40">
                          {record.trophyHighlight}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* 1ST PLACE WINNER TIER */}
                  <div className="mb-4 p-3.5 rounded-xl bg-gradient-to-r from-yellow-950/30 to-slate-900/50 border border-yellow-500/30">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Medal className="w-4 h-4 text-yellow-400" />
                      <span className="text-xs font-orbitron font-bold text-yellow-300 uppercase tracking-wider">
                        1st Place Champion
                      </span>
                    </div>
                    <p className="text-sm font-orbitron font-bold text-white">
                      {record.firstPlace.teamName}
                    </p>
                    <div className="text-xs text-slate-300 mt-1 flex items-center gap-1.5">
                      <School className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="line-clamp-1">{record.firstPlace.college}</span>
                    </div>
                    <span className="inline-block mt-2 text-[10px] font-kodeMono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/30">
                      ★ {record.firstPlace.prize}
                    </span>
                  </div>

                  {/* 2ND PLACE RUNNER UP TIER */}
                  {record.secondPlace && (
                    <div className="p-3.5 rounded-xl bg-slate-900/40 border border-white/10">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Award className="w-4 h-4 text-slate-300" />
                        <span className="text-xs font-orbitron font-bold text-slate-300 uppercase tracking-wider">
                          2nd Place Runner-Up
                        </span>
                      </div>
                      <p className="text-sm font-orbitron font-bold text-slate-200">
                        {record.secondPlace.teamName}
                      </p>
                      <div className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                        <School className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        <span className="line-clamp-1">{record.secondPlace.college}</span>
                      </div>
                    </div>
                  )}

                  {/* NOTES */}
                  {record.notes && (
                    <p className="text-xs text-slate-400 mt-4 leading-relaxed line-clamp-2">
                      {record.notes}
                    </p>
                  )}
                </div>

                {/* CARD FOOTER */}
                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-kodeMono">
                  <span className="text-yellow-400/90 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified Official Record
                  </span>
                  <Link
                    href={`/events/${record.eventId}`}
                    className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-0.5"
                  >
                    <span>Event Details</span>
                    <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ADMIN EDIT NOTICE */}
        <div className="mt-12 text-center">
          <p className="text-xs font-kodeMono text-slate-400">
            Official records verified by the ITECHNO 2026 Executive Committee.{" "}
            <Link href="/admin" className="text-yellow-400 hover:underline">
              Organizer Login to Update Rosters
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { chiefDirectors, eventSections } from "@/data/team-data";
import {
  Users,
  Heart,
  Linkedin,
  Mail,
  ChevronRight,
  ShieldCheck
} from "lucide-react";

export const PeopleAppreciationSection: React.FC = () => {

  return (
    <section id="our-team" className="relative scroll-mt-28 py-16 sm:py-24 text-slate-100 font-spaceGrotesk overflow-hidden">
      {/* Background Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[750px] h-[400px] bg-gradient-to-r from-yellow-500/10 via-blue-600/15 to-purple-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/40 bg-gradient-to-r from-slate-950/90 via-yellow-950/40 to-slate-950/90 text-yellow-300 font-kodeMono text-xs uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(212,175,55,0.25)] backdrop-blur-md">
            <Users className="w-3.5 h-3.5 text-yellow-400" />
            <span>ORGANIZING COMMITTEE &amp; CREW</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-blue-400 tracking-tight">
            Great Memories Are Made by Great People.
          </h2>

          <p className="mt-3 text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            The visionary directors, dedicated event coordinators, and passionate student volunteers who worked day and night to bring ITECHNO 2026 to life.
          </p>
        </div>

        {/* CHIEF EVENT DIRECTORS SPOTLIGHT */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <span className="text-xs font-kodeMono uppercase font-bold text-yellow-400 tracking-[0.2em]">
              ★ EXECUTIVE LEADERSHIP
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-orbitron text-white mt-1">
              Chief Event Directors
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {chiefDirectors.map((director, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl p-0.5 bg-gradient-to-b from-yellow-500/40 via-blue-500/20 to-yellow-500/30 hover:from-yellow-400 hover:to-blue-400 transition-all duration-500 shadow-[0_12px_45px_rgba(0,0,0,0.8)] hover:-translate-y-2"
              >
                <div className="rounded-[22px] overflow-hidden bg-[#050814]/95 border border-white/10 p-6 sm:p-7 flex flex-col justify-between h-full">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                    {/* PHOTO AVATAR */}
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-yellow-500/50 shadow-[0_0_25px_rgba(212,175,55,0.4)] shrink-0 bg-black">
                      {director.image ? (
                        <Image
                          src={director.image}
                          alt={director.name}
                          fill
                          sizes="150px"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center font-orbitron font-bold text-2xl text-yellow-300 bg-slate-900">
                          {director.initials}
                        </div>
                      )}
                    </div>

                    {/* DETAILS */}
                    <div className="text-center sm:text-left flex-1">
                      <span className="px-2.5 py-0.5 rounded-full text-[9px] font-kodeMono uppercase font-bold bg-yellow-950/60 border border-yellow-500/40 text-yellow-300">
                        {director.badge}
                      </span>
                      <h4 className="text-xl sm:text-2xl font-black font-orbitron text-white mt-1 group-hover:text-yellow-300 transition-colors">
                        {director.name}
                      </h4>
                      <p className="text-xs font-kodeMono text-cyan-300 mt-0.5">
                        {director.department}
                      </p>
                      <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                        {director.bio}
                      </p>
                    </div>
                  </div>

                  {/* CONNECT LINKS */}
                  <div className="pt-4 border-t border-white/10 mt-5 flex items-center justify-between text-xs font-kodeMono">
                    <span className="text-slate-400">Takshashila University</span>
                    <div className="flex items-center gap-2">
                      {director.linkedin && (
                        <a
                          href={director.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-blue-400 hover:text-blue-300 transition-colors"
                          aria-label={`${director.name} LinkedIn Profile`}
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      {director.email && (
                        <a
                          href={`mailto:${director.email}`}
                          className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-yellow-400 hover:text-yellow-300 transition-colors"
                          aria-label={`Email ${director.name}`}
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* EVENT COORDINATORS SECTION */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <span className="text-xs font-kodeMono uppercase font-bold text-cyan-400 tracking-[0.2em]">
              ★ ARENA DIRECTORS &amp; LEADS
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-orbitron text-white mt-1">
              Event Coordinators &amp; Teams
            </h3>
          </div>

          {/* Coordinators Grid by Event Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventSections.map((sec) => (
              <div
                key={sec.id}
                className="rounded-2xl bg-[#050814]/90 border border-white/10 p-5 hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-kodeMono uppercase text-yellow-400 font-bold">
                      {sec.category} • Track {sec.number}
                    </span>
                    <span className="text-xs font-kodeMono text-slate-400">
                      {sec.coordinators.length} Coordinators
                    </span>
                  </div>

                  <h4 className="text-lg font-black font-orbitron text-white mb-2">
                    {sec.title}
                  </h4>
                  <p className="text-xs text-slate-300 mb-4 line-clamp-2">
                    {sec.description}
                  </p>

                  {/* COORDINATOR PILLS */}
                  <div className="space-y-2">
                    {sec.coordinators.map((c, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/5"
                      >
                        <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-slate-800 shrink-0 border border-white/10">
                          {c.image ? (
                            <Image
                              src={c.image}
                              alt={c.name}
                              fill
                              sizes="32px"
                              className="object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-[10px] font-orbitron font-bold text-yellow-300">
                              {c.initials || c.name.slice(0, 2).toUpperCase()}
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-orbitron font-bold text-white truncate">
                            {c.name}
                          </p>
                          <span className="text-[10px] font-kodeMono text-slate-400 truncate block">
                            {c.role}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-kodeMono">
                  <span className="text-cyan-400">Takshashila University</span>
                  <Link
                    href={`/events/${sec.id}`}
                    className="text-slate-400 hover:text-white flex items-center gap-1"
                  >
                    <span>Event Details</span>
                    <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* HEARTFELT MESSAGE CARD */}
        <div className="rounded-3xl p-0.5 bg-gradient-to-r from-yellow-500/40 via-pink-500/30 to-blue-600/40 shadow-[0_15px_50px_rgba(0,0,0,0.8)] max-w-4xl mx-auto">
          <div className="rounded-[22px] bg-[#050814]/95 p-8 sm:p-10 text-center border border-white/10">
            <Heart className="w-10 h-10 text-pink-500 fill-pink-500 mx-auto mb-4 animate-pulse" />
            <h4 className="text-xl sm:text-2xl md:text-3xl font-black font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-pink-300">
              A Heartfelt Message of Gratitude
            </h4>
            <p className="mt-4 text-base sm:text-lg text-slate-200 font-spaceGrotesk italic leading-relaxed max-w-2xl mx-auto">
              &ldquo;To every participant, coordinator, volunteer, faculty member, and supporter — thank you for making ITECHNO 2026 unforgettable.&rdquo;
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-kodeMono text-slate-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-yellow-400" />
                Takshashila University, Ongur
              </span>
              <span>•</span>
              <span className="text-yellow-300">
                Official Organizing Committee &amp; Crew
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

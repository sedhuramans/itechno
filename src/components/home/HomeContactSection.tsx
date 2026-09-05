"use client";

import React from "react";
import Link from "next/link";
import {
  Crown,
  Phone,
  Mail,
  Linkedin,
  MapPin,
  ExternalLink,
  ShieldCheck,
  ArrowRight,
  MessageSquare,
} from "lucide-react";
import { chiefDirectors } from "@/data/team-data";

export default function HomeContactSection() {
  return (
    <section id="contact-details" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 sm:pb-32">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] max-w-full h-[400px] bg-gradient-to-r from-amber-500/10 via-blue-600/15 to-amber-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/40 bg-amber-950/40 text-amber-300 font-kodeMono text-[10px] sm:text-xs uppercase tracking-widest mb-4 shadow-[0_0_15px_rgba(245,158,11,0.25)] backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span>DIRECT EVENT SUPPORT &amp; LEADERSHIP</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-white to-blue-400 tracking-tight">
          CONTACT &amp; DIRECTORS
        </h2>

        <p className="mt-3 text-xs sm:text-sm md:text-base font-spaceGrotesk text-slate-300 tracking-wide max-w-xl mx-auto leading-relaxed">
          Reach out directly to our Chief Event Directors and organizing board for participant assistance, registration inquiries, or institution queries.
        </p>
      </div>

      {/* 2-Column Grid: Chief Event Directors (Text/Badge-Only, NO IMAGES) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-5xl mx-auto mb-10 sm:mb-12">
        {chiefDirectors.map((director) => {
          const initials =
            director.initials ||
            director.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)
              .toUpperCase();

          return (
            <div
              key={director.name}
              className="relative rounded-2xl sm:rounded-3xl border border-amber-500/35 hover:border-amber-400/80 bg-gradient-to-b from-[#090e1a]/95 via-[#060a14]/95 to-[#03050a]/98 backdrop-blur-xl p-5 sm:p-7 md:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.85)] hover:shadow-[0_0_35px_rgba(212,175,55,0.3)] transition-all duration-400 group overflow-hidden flex flex-col justify-between"
            >
              {/* Corner Cyber HUD Accents */}
              <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-amber-400/60 group-hover:border-amber-300 transition-colors" />
              <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-amber-400/60 group-hover:border-amber-300 transition-colors" />
              <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-amber-400/60 group-hover:border-amber-300 transition-colors" />
              <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-amber-400/60 group-hover:border-amber-300 transition-colors" />

              {/* Ambient Top Glow */}
              <div className="absolute -top-12 -right-12 w-36 h-36 bg-amber-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-amber-500/20 transition-colors" />

              <div>
                {/* Top Role & Status Bar */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-400/60 text-amber-300 font-kodeMono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider shadow-[0_0_12px_rgba(212,175,55,0.25)]">
                    <Crown className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                    <span>CHIEF EVENT DIRECTOR</span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[10px] font-kodeMono text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-2.5 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="hidden xs:inline">ONLINE HOTLINE</span>
                    <span className="xs:hidden">ACTIVE</span>
                  </span>
                </div>

                {/* Director Header: Stylized Cyber Monogram Badge (NO IMAGE) + Title */}
                <div className="flex items-start gap-4 sm:gap-5 mb-5">
                  {/* High-Tech Initials Emblem (Image-Free Design) */}
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl p-0.5 bg-gradient-to-tr from-amber-500 via-yellow-300 to-cyan-400 shadow-[0_0_20px_rgba(212,175,55,0.35)] flex items-center justify-center">
                      <div className="w-full h-full rounded-[14px] bg-[#05070e] flex flex-col items-center justify-center border border-amber-500/30">
                        <span className="font-orbitron font-black text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-br from-amber-300 to-yellow-100 tracking-tight">
                          {initials}
                        </span>
                        <span className="text-[7px] font-kodeMono text-amber-400/80 uppercase tracking-widest -mt-0.5">
                          LEAD
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Name & Department */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black font-orbitron text-white tracking-wide group-hover:text-amber-200 transition-colors truncate">
                      {director.name}
                    </h3>
                    <p className="text-xs font-kodeMono text-amber-400/90 tracking-wider mt-0.5 uppercase flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                      <span className="truncate">{director.role}</span>
                    </p>
                    <p className="text-xs text-slate-300 font-inter mt-1.5 line-clamp-2 leading-relaxed">
                      {director.bio}
                    </p>
                  </div>
                </div>

                {/* Direct Action Contact Buttons (Mobile-first responsive) */}
                <div className="space-y-2.5 my-4">
                  {director.phone && (
                    <a
                      href={`tel:${director.phone.replace(/\s+/g, "")}`}
                      className="w-full flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl bg-amber-950/70 hover:bg-amber-400 border border-amber-400/50 hover:border-amber-300 text-amber-200 hover:text-black transition-all duration-200 shadow-[0_0_15px_rgba(212,175,55,0.15)] group/btn"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="p-1.5 rounded-lg bg-black/40 group-hover/btn:bg-black/10 transition-colors flex-shrink-0">
                          <Phone className="w-4 h-4 text-amber-300 group-hover/btn:text-black transition-colors" />
                        </div>
                        <div className="text-left min-w-0">
                          <div className="text-[9px] font-kodeMono uppercase tracking-wider text-amber-400/80 group-hover/btn:text-black/80">
                            DIRECT PHONE
                          </div>
                          <div className="text-xs sm:text-sm font-kodeMono font-bold truncate">
                            {director.phone}
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] font-kodeMono uppercase tracking-widest px-2 py-1 rounded bg-black/30 group-hover/btn:bg-black/20 font-semibold flex-shrink-0">
                        CALL NOW
                      </span>
                    </a>
                  )}

                  {director.email && (
                    <a
                      href={`mailto:${director.email}`}
                      className="w-full flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl bg-black/60 hover:bg-blue-950/60 border border-amber-500/25 hover:border-blue-400/70 text-slate-200 hover:text-blue-200 transition-all duration-200 group/btn"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="p-1.5 rounded-lg bg-white/5 group-hover/btn:bg-blue-900/40 transition-colors flex-shrink-0">
                          <Mail className="w-4 h-4 text-amber-400 group-hover/btn:text-blue-300 transition-colors" />
                        </div>
                        <div className="text-left min-w-0">
                          <div className="text-[9px] font-kodeMono uppercase tracking-wider text-slate-400 group-hover/btn:text-blue-300/80">
                            DIRECT EMAIL
                          </div>
                          <div className="text-xs sm:text-sm font-kodeMono truncate">
                            {director.email}
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] font-kodeMono uppercase tracking-widest px-2 py-1 rounded bg-white/5 group-hover/btn:bg-blue-900/30 text-slate-400 group-hover/btn:text-blue-200 font-semibold flex-shrink-0">
                        SEND MAIL
                      </span>
                    </a>
                  )}
                </div>
              </div>

              {/* Bottom Quick Links: LinkedIn & Full Directory */}
              <div className="pt-3 mt-2 border-t border-amber-500/20 flex items-center justify-between gap-2">
                {director.linkedin ? (
                  <a
                    href={director.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-kodeMono text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn Profile</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-[11px] font-kodeMono text-slate-400">
                    Takshashila University
                  </span>
                )}

                <Link
                  href="/teams#chief-directors"
                  className="inline-flex items-center gap-1 text-xs font-kodeMono text-amber-300 hover:text-amber-200 transition-colors"
                >
                  <span>View Dossier</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Central University & Festival Hotline Banner */}
      <div className="max-w-5xl mx-auto rounded-2xl border border-yellow-500/30 bg-[#05070e]/90 backdrop-blur-xl p-5 sm:p-7 shadow-[0_10px_35px_rgba(0,0,0,0.8)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-center">
          {/* Item 1: Official Email */}
          <div className="flex items-start gap-3.5">
            <div className="p-3 rounded-xl bg-yellow-950/50 border border-yellow-500/30 text-yellow-400 flex-shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] font-kodeMono uppercase tracking-wider text-yellow-300 font-bold block">
                OFFICIAL FESTIVAL EMAIL
              </span>
              <a
                href="mailto:itechno2k@gmail.com"
                className="text-sm font-inter text-slate-200 hover:text-white transition-colors font-medium break-all"
              >
                itechno2k@gmail.com
              </a>
            </div>
          </div>

          {/* Item 2: Venue */}
          <div className="flex items-start gap-3.5">
            <div className="p-3 rounded-xl bg-blue-950/50 border border-blue-500/30 text-blue-400 flex-shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] font-kodeMono uppercase tracking-wider text-blue-300 font-bold block">
                FESTIVAL CAMPUS VENUE
              </span>
              <p className="text-xs sm:text-sm font-inter text-slate-200 leading-snug">
                Takshashila University, Ongur, Tamil Nadu, India
              </p>
            </div>
          </div>

          {/* Item 3: Quick Navigation to Transmission Form */}
          <div className="flex items-center md:justify-end gap-3 pt-2 md:pt-0 border-t md:border-t-0 border-white/10">
            <Link
              href="/contact"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-orbitron font-bold text-xs text-black bg-gradient-to-r from-yellow-400 via-yellow-500 to-blue-600 hover:from-yellow-300 hover:to-blue-500 shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all hover:scale-105 active:scale-95"
            >
              <MessageSquare className="w-4 h-4 text-black" />
              <span>TRANSMIT MESSAGE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

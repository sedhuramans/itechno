"use client";

import React, { useState } from "react";
import Link from "next/link";
import { chiefDirectors, eventSections, TeamMember } from "@/data/team-data";
import { galleryImages } from "@/data/gallery";
import { CoordinatorCard } from "@/components/crew/CoordinatorCard";
import { CoordinatorProfileModal } from "@/components/crew/CoordinatorProfileModal";
import { CyberBackground } from "@/components/crew/CyberBackground";
import { EventGallery } from "@/components/gallery/EventGallery";
import {
  Crown,
  Users,
  Sparkles,
  ArrowRight,
  Code2,
  Terminal,
  Cpu,
  Palette,
  Gamepad2,
  Film,
  Video,
  UserCheck,
  ExternalLink,
  ChevronDown,
  Images,
} from "lucide-react";

const getSectionIcon = (iconName: string) => {
  switch (iconName) {
    case "Code2":
      return Code2;
    case "Terminal":
      return Terminal;
    case "Cpu":
      return Cpu;
    case "Sparkles":
      return Sparkles;
    case "Palette":
      return Palette;
    case "Gamepad2":
      return Gamepad2;
    case "Film":
      return Film;
    case "Video":
      return Video;
    case "UserCheck":
      return UserCheck;
    default:
      return Sparkles;
  }
};

const TeamsPage: React.FC = () => {
  const googleFormUrl = "https://forms.google.com";

  // Selected coordinator for full profile modal pop-up
  const [selectedMember, setSelectedMember] = useState<{
    member: TeamMember;
    isChief?: boolean;
    accentColor?: "cyan" | "blue" | "violet" | "emerald" | "amber";
  } | null>(null);

  // Total headcount calculations
  const totalCoordinators = eventSections.reduce(
    (acc, sec) => acc + sec.coordinators.length,
    0
  );
  const totalDirectors = chiefDirectors.length;
  const totalCrew = totalDirectors + totalCoordinators;

  return (
    <div className="relative min-h-screen text-slate-100 overflow-x-hidden pt-32 sm:pt-36 pb-24 font-spaceGrotesk">
      {/* Interactive Cyber Background */}
      <CyberBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* =========================================================================
            HERO SECTION
           ========================================================================= */}
        <section className="text-center max-w-4xl mx-auto mb-20 sm:mb-24">
          {/* Futuristic HUD Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-cyan-500/40 bg-cyan-950/40 text-cyan-300 font-kodeMono text-xs uppercase tracking-widest mb-6 shadow-[0_0_20px_rgba(6,182,212,0.25)] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>ITECHNO &apos;26 • OFFICIAL OPERATIONS COMMAND</span>
          </div>

          {/* Main Hero Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-blue-400 tracking-tight drop-shadow-[0_0_35px_rgba(6,182,212,0.35)]">
            EVENT CREW
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 tracking-wide">
            The People Behind the Experience
          </p>

          {/* Supporting Text */}
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto font-inter leading-relaxed">
            Meet the team behind every challenge, competition and experience. The official event coordinators and organizing team of Itechno &apos;26.
          </p>

          {/* Fest Telemetry / Headcount Stats */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 font-kodeMono text-xs text-slate-300">
            <div className="px-4 py-2 rounded-xl bg-[#070c18]/80 border border-cyan-500/30 backdrop-blur-md flex items-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="text-white font-bold">{totalDirectors}</span>
              <span className="text-slate-400">Chief Directors</span>
            </div>

            <div className="px-4 py-2 rounded-xl bg-[#070c18]/80 border border-blue-500/30 backdrop-blur-md flex items-center gap-2 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="text-white font-bold">{eventSections.length}</span>
              <span className="text-slate-400">Event Divisions</span>
            </div>

            <div className="px-4 py-2 rounded-xl bg-[#070c18]/80 border border-purple-500/30 backdrop-blur-md flex items-center gap-2 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span className="text-white font-bold">{totalCrew}</span>
              <span className="text-slate-400">Total Crew Members</span>
            </div>

            <a
              href="#gallery"
              className="px-4 py-2 rounded-xl bg-[#070c18]/80 border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 backdrop-blur-md flex items-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all hover:scale-105"
            >
              <Images className="w-3.5 h-3.5" />
              <span className="font-bold">{galleryImages.length}</span>
              <span>Event Gallery Photos</span>
            </a>
          </div>

          {/* Quick Jump Anchor Pill Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#chief-directors"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 hover:bg-cyan-950/60 border border-white/10 hover:border-cyan-400/50 text-xs font-kodeMono text-cyan-400 hover:text-cyan-300 transition-all"
            >
              <span>Explore Leadership &amp; Divisions</span>
              <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
            </a>

            <a
              href="#gallery"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 hover:bg-cyan-950/60 border border-white/10 hover:border-cyan-400/50 text-xs font-kodeMono text-cyan-400 hover:text-cyan-300 transition-all"
            >
              <Images className="w-3.5 h-3.5" />
              <span>Jump to Event Gallery</span>
            </a>
          </div>
        </section>

        {/* =========================================================================
            CHIEF EVENT DIRECTORS SECTION
           ========================================================================= */}
        <section id="chief-directors" className="mb-24 sm:mb-28 scroll-mt-36 sm:scroll-mt-44">
          {/* Section Heading Banner */}
          <div className="relative mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-amber-500/30 pb-5">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-950/60 border border-amber-400/50 shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                <Crown className="w-7 h-7 text-amber-300" />
              </div>
              <div>
                <span className="text-[11px] font-kodeMono uppercase tracking-[0.25em] text-amber-400 font-bold block">
                  EXECUTIVE LEADERSHIP
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-white to-amber-400 tracking-tight">
                  CHIEF EVENT DIRECTORS
                </h2>
              </div>
            </div>

            <p className="text-xs font-kodeMono text-slate-400 max-w-sm sm:text-right">
              General oversight, festival infrastructure &amp; operational command.
            </p>
          </div>

          {/* Featured Large Cards for the 2 Chief Directors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {chiefDirectors.map((director, idx) => (
              <CoordinatorCard
                key={director.name}
                member={director}
                isChief={true}
                index={idx}
                onSelect={(member) =>
                  setSelectedMember({
                    member,
                    isChief: true,
                    accentColor: "amber",
                  })
                }
              />
            ))}
          </div>
        </section>

        {/* =========================================================================
            EVENT COORDINATORS: 8 CATEGORIZED SECTIONS
           ========================================================================= */}
        <div className="relative mb-16 border-b border-cyan-500/30 pb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-400/50 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
              <Users className="w-7 h-7 text-cyan-300" />
            </div>
            <div>
              <span className="text-[11px] font-kodeMono uppercase tracking-[0.25em] text-cyan-400 font-bold block">
                COMPETITION DIVISIONS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-blue-400 tracking-tight">
                EVENT COORDINATORS
              </h2>
            </div>
          </div>
        </div>

        {/* Loop through each numbered event section */}
        <div className="space-y-20 sm:space-y-24">
          {eventSections.map((section) => {
            const SectionIcon = getSectionIcon(section.iconName);

            // Styling accents per section
            const colorMeta = {
              cyan: {
                badge: "border-cyan-500/40 bg-cyan-950/40 text-cyan-300",
                headingGlow: "from-cyan-300 via-white to-cyan-400",
                divider: "border-cyan-500/25",
              },
              blue: {
                badge: "border-blue-500/40 bg-blue-950/40 text-blue-300",
                headingGlow: "from-blue-300 via-white to-blue-400",
                divider: "border-blue-500/25",
              },
              violet: {
                badge: "border-purple-500/40 bg-purple-950/40 text-purple-300",
                headingGlow: "from-purple-300 via-white to-purple-400",
                divider: "border-purple-500/25",
              },
              emerald: {
                badge: "border-emerald-500/40 bg-emerald-950/40 text-emerald-300",
                headingGlow: "from-emerald-300 via-white to-emerald-400",
                divider: "border-emerald-500/25",
              },
              amber: {
                badge: "border-amber-500/40 bg-amber-950/40 text-amber-300",
                headingGlow: "from-amber-300 via-white to-amber-400",
                divider: "border-amber-500/25",
              },
            }[section.accentColor];

            return (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-36 sm:scroll-mt-44 relative group"
              >
                {/* Event Section Header Bar */}
                <div
                  className={`flex flex-col md:flex-row md:items-center justify-between gap-3 mb-8 pb-4 border-b ${colorMeta.divider}`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="font-orbitron font-black text-2xl sm:text-3xl text-slate-500 tracking-wider">
                      {section.number}
                    </span>
                    <span className="text-slate-600 font-light text-2xl">/</span>
                    <div className="flex items-center gap-2.5">
                      <SectionIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      <h3
                        className={`text-2xl sm:text-3xl font-black font-orbitron text-transparent bg-clip-text bg-gradient-to-r ${colorMeta.headingGlow} tracking-wide`}
                      >
                        {section.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span
                      className={`text-[10px] font-kodeMono uppercase font-bold px-3 py-1 rounded-full border ${colorMeta.badge}`}
                    >
                      {section.category}
                    </span>
                    <span className="text-xs font-kodeMono text-slate-400">
                      {section.coordinators.length} Coordinators
                    </span>
                  </div>
                </div>

                {/* Subtitle / Description */}
                <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mb-8 font-inter">
                  {section.description}
                </p>

                {/* Coordinators Grid: Responsive Desktop / Tablet / Mobile */}
                <div
                  className={`grid grid-cols-1 sm:grid-cols-2 ${
                    section.coordinators.length >= 4
                      ? "lg:grid-cols-4"
                      : "lg:grid-cols-3"
                  } gap-6`}
                >
                  {section.coordinators.map((coord, idx) => (
                    <CoordinatorCard
                      key={coord.name}
                      member={coord}
                      accentColor={section.accentColor}
                      index={idx}
                      onSelect={(member) =>
                        setSelectedMember({
                          member,
                          isChief: false,
                          accentColor: section.accentColor,
                        })
                      }
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* =========================================================================
            EVENT GALLERY SECTION (with 4 photos & full-screen lightbox)
           ========================================================================= */}
        <div className="mt-32 sm:mt-40">
          <EventGallery id="gallery" />
        </div>

        {/* =========================================================================
            FINAL CLOSING SECTION
           ========================================================================= */}
        <section className="mt-32 sm:mt-40 relative rounded-3xl overflow-hidden border border-cyan-500/30 bg-gradient-to-b from-[#060c1c]/90 via-[#030610]/95 to-[#010206] p-8 sm:p-14 md:p-16 text-center shadow-[0_0_60px_rgba(6,182,212,0.2)]">
          {/* Cyber Ambient Radiance */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-cyan-500/20 via-blue-600/10 to-transparent blur-[120px] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00f0ff05_1px,transparent_1px),linear-gradient(to_bottom,#00f0ff05_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />

          {/* Corner Cyber Brackets */}
          <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-cyan-400/60" />
          <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-cyan-400/60" />
          <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-cyan-400/60" />
          <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-cyan-400/60" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-amber-500/40 bg-amber-950/40 text-amber-300 font-kodeMono text-[11px] uppercase tracking-widest shadow-[0_0_15px_rgba(212,175,55,0.25)]">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>THE FORCES OF ITECHNO &apos;26</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-white to-cyan-300 tracking-tight">
              ONE CREW. ONE VISION. ONE EXPERIENCE.
            </h2>

            <p className="text-base sm:text-xl font-spaceGrotesk text-slate-300 max-w-xl mx-auto font-medium">
              Built by the people who make every moment happen.
            </p>

            <p className="text-xs sm:text-sm text-slate-400 font-inter max-w-lg mx-auto leading-relaxed">
              Have questions about an event or want to get in touch with our
              leads? Reach out to the desk or register directly for the
              competitions.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-orbitron font-bold text-xs sm:text-sm text-black bg-gradient-to-r from-yellow-400 via-yellow-500 to-cyan-400 hover:from-yellow-300 hover:to-cyan-300 shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transition-all hover:scale-105"
              >
                <span>REGISTER FOR EVENTS</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-orbitron font-bold text-xs sm:text-sm text-cyan-300 border border-cyan-500/40 bg-cyan-950/30 hover:bg-cyan-900/40 transition-all hover:border-cyan-400"
              >
                <span>CONTACT CREW DESK</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Global Coordinator Profile Pop-Up Modal */}
      <CoordinatorProfileModal
        member={selectedMember?.member || null}
        isOpen={Boolean(selectedMember)}
        onClose={() => setSelectedMember(null)}
        isChief={selectedMember?.isChief}
        accentColor={selectedMember?.accentColor}
      />
    </div>
  );
};

export default TeamsPage;
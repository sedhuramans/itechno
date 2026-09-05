"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TeamMember } from "@/data/team-data";
import { CoordinatorProfileModal } from "./CoordinatorProfileModal";
import {
  Code2,
  Terminal,
  Cpu,
  Sparkles,
  Palette,
  Gamepad2,
  Film,
  Video,
  UserCheck,
  Crown,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  User,
  Phone,
  Mail,
  Linkedin,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface CoordinatorCardProps {
  member: TeamMember;
  isChief?: boolean;
  accentColor?: "cyan" | "blue" | "violet" | "emerald" | "amber";
  index?: number;
  onSelect?: (member: TeamMember) => void;
}

const getEventIcon = (dept: string, isChief?: boolean) => {
  if (isChief) return Crown;
  const d = dept.toLowerCase();
  if (d.includes("hackverse")) return Code2;
  if (d.includes("codeathon")) return Terminal;
  if (d.includes("tech battle")) return Cpu;
  if (d.includes("word battle")) return Sparkles;
  if (d.includes("pictonary")) return Palette;
  if (d.includes("free fire")) return Gamepad2;
  if (d.includes("reel")) return Film;
  if (d.includes("media")) return Video;
  if (d.includes("registration")) return UserCheck;
  return Zap;
};

export const CoordinatorCard: React.FC<CoordinatorCardProps> = ({
  member,
  isChief = false,
  accentColor = "cyan",
  index = 0,
  onSelect,
}) => {
  const [imageError, setImageError] = useState(false);
  const [localModalOpen, setLocalModalOpen] = useState(false);

  const handleClick = () => {
    if (onSelect) {
      onSelect(member);
    } else {
      setLocalModalOpen(true);
    }
  };

  const actualIsChief =
    isChief ||
    member.badge === "CHIEF EVENT DIRECTOR" ||
    member.role.toLowerCase().includes("chief");
  const theme = actualIsChief ? "amber" : accentColor;
  const IconComponent = getEventIcon(member.department, actualIsChief);

  // Compute initials fallback
  const initials =
    member.initials ||
    member.name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  // Accent theme styles
  const accentStyles = {
    cyan: {
      border: "border-cyan-500/30 hover:border-cyan-400/90",
      glow: "shadow-[0_0_25px_rgba(6,182,212,0.15)] hover:shadow-[0_0_40px_rgba(6,182,212,0.4)]",
      badge: "bg-cyan-950/70 border-cyan-500/40 text-cyan-300",
      accentDot: "bg-cyan-400",
      gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
      avatarRing: "border-cyan-400/60 group-hover:border-cyan-300",
      avatarBg: "from-cyan-950 via-[#071322] to-[#030712]",
      avatarText: "text-cyan-300",
      pill: "border-cyan-500/40 bg-cyan-950/80 text-cyan-300 group-hover:border-cyan-400 group-hover:bg-cyan-900/60",
    },
    blue: {
      border: "border-blue-500/30 hover:border-blue-400/90",
      glow: "shadow-[0_0_25px_rgba(59,130,246,0.15)] hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]",
      badge: "bg-blue-950/70 border-blue-500/40 text-blue-300",
      accentDot: "bg-blue-400",
      gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
      avatarRing: "border-blue-400/60 group-hover:border-blue-300",
      avatarBg: "from-blue-950 via-[#0a1128] to-[#030712]",
      avatarText: "text-blue-300",
      pill: "border-blue-500/40 bg-blue-950/80 text-blue-300 group-hover:border-blue-400 group-hover:bg-blue-900/60",
    },
    violet: {
      border: "border-purple-500/30 hover:border-purple-400/90",
      glow: "shadow-[0_0_25px_rgba(168,85,247,0.15)] hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]",
      badge: "bg-purple-950/70 border-purple-500/40 text-purple-300",
      accentDot: "bg-purple-400",
      gradient: "from-purple-500/20 via-violet-500/10 to-transparent",
      avatarRing: "border-purple-400/60 group-hover:border-purple-300",
      avatarBg: "from-purple-950 via-[#140b27] to-[#030712]",
      avatarText: "text-purple-300",
      pill: "border-purple-500/40 bg-purple-950/80 text-purple-300 group-hover:border-purple-400 group-hover:bg-purple-900/60",
    },
    emerald: {
      border: "border-emerald-500/30 hover:border-emerald-400/90",
      glow: "shadow-[0_0_25px_rgba(16,185,129,0.15)] hover:shadow-[0_0_40px_rgba(16,185,129,0.4)]",
      badge: "bg-emerald-950/70 border-emerald-500/40 text-emerald-300",
      accentDot: "bg-emerald-400",
      gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
      avatarRing: "border-emerald-400/60 group-hover:border-emerald-300",
      avatarBg: "from-emerald-950 via-[#071d18] to-[#030712]",
      avatarText: "text-emerald-300",
      pill: "border-emerald-500/40 bg-emerald-950/80 text-emerald-300 group-hover:border-emerald-400 group-hover:bg-emerald-900/60",
    },
    amber: {
      border: "border-amber-500/40 hover:border-amber-400/95",
      glow: "shadow-[0_0_35px_rgba(245,158,11,0.22)] hover:shadow-[0_0_55px_rgba(245,158,11,0.5)]",
      badge: "bg-amber-950/80 border-amber-500/50 text-amber-300",
      accentDot: "bg-amber-400",
      gradient: "from-amber-500/25 via-yellow-500/15 to-transparent",
      avatarRing: "border-amber-400/80 group-hover:border-amber-300",
      avatarBg: "from-amber-950 via-[#211606] to-[#030712]",
      avatarText: "text-amber-300",
      pill: "border-amber-500/50 bg-amber-950/80 text-amber-300 group-hover:border-amber-400 group-hover:bg-amber-900/60",
    },
  }[theme];

  const hasImage = Boolean(member.image && !imageError);

  return (
    <>
      {actualIsChief ? (
        /* =========================================================================
            CHIEF EVENT DIRECTOR CARD (Interactive)
           ========================================================================= */
        <div
          onClick={handleClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleClick();
            }
          }}
          aria-label={`View profile for ${member.name}, Chief Event Director`}
          className={cn(
            "group relative rounded-3xl p-5 sm:p-7 md:p-9 transition-all duration-500 ease-out cursor-pointer select-none",
            "bg-gradient-to-b from-[#090e1a]/95 via-[#060a14]/95 to-[#03050a]/98",
            "border border-amber-500/40 hover:border-amber-300",
            "shadow-[0_0_35px_rgba(212,175,55,0.22)] hover:shadow-[0_0_60px_rgba(212,175,55,0.5)]",
            "hover:-translate-y-2.5 active:scale-[0.98] backdrop-blur-xl flex flex-col items-center text-center overflow-hidden"
          )}
        >
          {/* Animated Cyber Border Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/25 via-cyan-500/20 to-amber-500/25 blur-xl opacity-40 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* Tech Corner Accents */}
          <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-amber-400/70 group-hover:border-amber-300 transition-colors" />
          <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-amber-400/70 group-hover:border-amber-300 transition-colors" />
          <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-amber-400/70 group-hover:border-amber-300 transition-colors" />
          <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-amber-400/70 group-hover:border-amber-300 transition-colors" />

          {/* Top Role Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-950/80 via-amber-900/50 to-amber-950/80 border border-amber-400/60 text-amber-300 font-kodeMono text-[11px] uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
            <Crown className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span className="font-bold">CHIEF EVENT DIRECTOR</span>
          </div>

          {/* Profile Image Frame with Cyber Ring & Slight Zoom */}
          <div className="relative mb-6">
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-amber-500/30 via-cyan-500/20 to-amber-400/30 blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />

            <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-2xl p-1 bg-gradient-to-tr from-amber-500 via-yellow-300 to-cyan-400 shadow-[0_0_30px_rgba(212,175,55,0.4)] overflow-hidden">
              <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-[#05070e]">
                {hasImage ? (
                  <Image
                    src={member.image!}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 160px, 180px"
                    priority
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-amber-950 via-[#181105] to-[#05070e] text-amber-300">
                    <span className="font-orbitron font-black text-4xl sm:text-5xl tracking-tight">
                      {initials}
                    </span>
                    <span className="text-[10px] font-kodeMono text-amber-400/70 tracking-widest mt-1">
                      DIRECTOR
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Verification Badge */}
            <div className="absolute -bottom-2 right-1/2 translate-x-1/2 px-2.5 py-0.5 rounded-full bg-[#05070e] border border-amber-400/80 flex items-center gap-1 shadow-[0_0_10px_rgba(212,175,55,0.5)]">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-[9px] font-kodeMono font-bold text-amber-300 uppercase tracking-widest">
                LEAD
              </span>
            </div>
          </div>

          {/* Member Name */}
          <h3 className="text-2xl sm:text-3xl font-black font-orbitron text-white tracking-wide mb-2 group-hover:text-amber-200 transition-colors">
            {member.name}
          </h3>

          {/* Bio Preview */}
          <p className="text-xs sm:text-sm font-spaceGrotesk text-slate-300 max-w-xs mb-4 leading-relaxed line-clamp-2">
            {member.bio ||
              "Leading festival architecture, technical executions, and experience design."}
          </p>

          {/* Direct Visible Contacts for Participants */}
          <div className="w-full mb-4 flex flex-col gap-2 px-1 text-left min-w-0">
            {member.phone && (
              <a
                href={`tel:${member.phone.replace(/\s+/g, '')}`}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-950/60 border border-amber-400/40 text-amber-200 hover:bg-amber-400 hover:text-black transition-all text-xs font-kodeMono font-bold shadow-[0_0_10px_rgba(212,175,55,0.2)] min-w-0"
                title={`Call ${member.name}`}
              >
                <Phone className="w-3.5 h-3.5 text-amber-300 flex-shrink-0" />
                <span className="truncate">{member.phone}</span>
              </a>
            )}
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/60 border border-amber-500/25 text-slate-300 hover:border-amber-400 hover:text-amber-200 transition-all text-xs font-kodeMono min-w-0"
                title={`Email ${member.name}`}
              >
                <Mail className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span className="truncate">{member.email}</span>
              </a>
            )}
          </div>

          {/* Action Row: Direct LinkedIn + View Profile */}
          <div className="mb-4 flex items-center justify-center gap-2 w-full">
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-xl border border-blue-500/40 bg-blue-950/50 text-blue-300 hover:bg-blue-600 hover:text-white transition-all shadow-[0_0_10px_rgba(59,130,246,0.3)] flex items-center gap-1.5 text-xs font-kodeMono"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span className="text-[10px] uppercase font-bold">LinkedIn</span>
              </a>
            )}
            <button
              onClick={() => onSelect?.(member)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[11px] font-kodeMono uppercase font-bold tracking-widest border border-amber-400/50 bg-amber-950/70 text-amber-300 hover:bg-amber-400 hover:text-black hover:shadow-[0_0_20px_rgba(245,158,11,0.6)] transition-all duration-300"
            >
              <User className="w-3 h-3" />
              <span>PROFILE</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>

          {/* Meta Line */}
          <div className="mt-auto pt-4 w-full flex items-center justify-between border-t border-amber-500/20 text-[11px] font-kodeMono text-amber-300/80">
            <span className="uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              ACTIVE COMMAND
            </span>
            <span className="text-slate-400">ITECHNO &apos;26</span>
          </div>
        </div>
      ) : (
        /* =========================================================================
            EVENT COORDINATOR CARD (Interactive)
           ========================================================================= */
        <div
          onClick={handleClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleClick();
            }
          }}
          aria-label={`View profile for ${member.name}, Coordinator for ${member.department}`}
          className={cn(
            "group relative rounded-2xl p-5 sm:p-6 transition-all duration-400 ease-out cursor-pointer select-none",
            "bg-gradient-to-b from-[#080d1a]/90 via-[#050812]/92 to-[#020408]/96",
            "border backdrop-blur-md flex flex-col justify-between overflow-hidden",
            accentStyles.border,
            accentStyles.glow,
            "hover:-translate-y-2 active:scale-[0.98]"
          )}
        >
          {/* Background Glow */}
          <div
            className={cn(
              "absolute -inset-1 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl",
              accentStyles.gradient
            )}
          />

          {/* Corner Number */}
          <div className="absolute top-2 right-2 flex items-center gap-1 text-[9px] font-kodeMono text-slate-500 group-hover:text-slate-300 transition-colors">
            <span>#{String(index + 1).padStart(2, "0")}</span>
          </div>

          <div>
            {/* Department Badge Header */}
            <div className="flex items-center justify-between gap-2 mb-4">
              <div
                className={cn(
                  "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-kodeMono uppercase font-semibold border tracking-wider",
                  accentStyles.badge
                )}
              >
                <IconComponent className="w-3 h-3" />
                <span className="truncate max-w-[140px]">
                  {member.department}
                </span>
              </div>

              <span
                className={cn(
                  "w-2 h-2 rounded-full transition-transform duration-300 group-hover:scale-125",
                  accentStyles.accentDot
                )}
              />
            </div>

            {/* Profile Image & Name with Hover Zoom */}
            <div className="flex items-center gap-4 my-3">
              <div className="relative flex-shrink-0">
                <div
                  className={cn(
                    "relative w-16 h-16 sm:w-18 sm:h-18 rounded-xl overflow-hidden border p-0.5 transition-all duration-300",
                    accentStyles.avatarRing,
                    "shadow-[0_0_15px_rgba(0,0,0,0.6)]"
                  )}
                >
                  <div className="relative w-full h-full rounded-[10px] overflow-hidden bg-[#05070e]">
                    {hasImage ? (
                      <Image
                        src={member.image!}
                        alt={member.name}
                        fill
                        sizes="72px"
                        className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-115"
                        onError={() => setImageError(true)}
                      />
                    ) : (
                      <div
                        className={cn(
                          "w-full h-full flex flex-col items-center justify-center bg-gradient-to-br font-orbitron font-bold relative",
                          accentStyles.avatarBg,
                          accentStyles.avatarText
                        )}
                      >
                        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:6px_6px] pointer-events-none" />
                        <span className="text-lg sm:text-xl tracking-tight z-10 font-black">
                          {initials}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Name & Role Text */}
              <div className="min-w-0 flex-1">
                <h4 className="text-base sm:text-lg font-bold font-orbitron text-white tracking-wide group-hover:text-cyan-200 transition-colors truncate">
                  {member.name}
                </h4>
                <p className="text-[11px] font-kodeMono uppercase tracking-wider text-slate-400 mt-1 flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-slate-500" />
                  {member.role}
                </p>
              </div>
            </div>

            {/* Short Description */}
            <p className="text-xs font-spaceGrotesk text-slate-300 mt-1 mb-2 line-clamp-2 leading-relaxed">
              {member.bio ||
                `Coordinator responsible for supporting the ${member.department} event and participant experience.`}
            </p>
          </div>

          {/* VIEW PROFILE Indicator Button */}
          <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between">
            <span
              className={cn(
                "inline-flex items-center gap-1 text-[10px] font-kodeMono uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-md border transition-all duration-300",
                accentStyles.pill
              )}
            >
              <span>VIEW PROFILE</span>
              <ArrowUpRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>

            <span className="text-[10px] font-kodeMono text-slate-500 group-hover:text-slate-400 transition-colors">
              2026
            </span>
          </div>
        </div>
      )}

      {/* Standalone Fallback Modal (if no parent onSelect provided) */}
      {!onSelect && (
        <CoordinatorProfileModal
          member={member}
          isOpen={localModalOpen}
          onClose={() => setLocalModalOpen(false)}
          accentColor={accentColor}
          isChief={actualIsChief}
        />
      )}
    </>
  );
};

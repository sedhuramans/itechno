"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { TeamMember } from "@/data/team-data";
import {
  X,
  Crown,
  Sparkles,
  ShieldCheck,
  Code2,
  Terminal,
  Cpu,
  Palette,
  Gamepad2,
  Film,
  Video,
  UserCheck,
  Zap,
  Tag,
  Phone,
  Mail,
  Linkedin,
} from "lucide-react";

interface CoordinatorProfileModalProps {
  member: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
  accentColor?: "cyan" | "blue" | "violet" | "emerald" | "amber";
  isChief?: boolean;
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

export const CoordinatorProfileModal: React.FC<CoordinatorProfileModalProps> = ({
  member,
  isOpen,
  onClose,
  accentColor = "cyan",
  isChief = false,
}) => {
  const [imageError, setImageError] = useState(false);

  // Reset image error state when member changes
  useEffect(() => {
    setImageError(false);
  }, [member]);

  // Lock background scrolling and handle ESC key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!member) return null;

  const actualIsChief = isChief || member.badge === "CHIEF EVENT DIRECTOR" || member.role.toLowerCase().includes("chief");
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

  // Color schemes
  const colorMap = {
    amber: {
      gradientBorder: "from-amber-400 via-yellow-300 to-cyan-400",
      glow: "shadow-[0_0_50px_rgba(245,158,11,0.35)]",
      badge: "border-amber-400/60 bg-gradient-to-r from-amber-950/90 via-amber-900/60 to-amber-950/90 text-amber-300",
      tagBadge: "border-amber-500/40 bg-amber-950/40 text-amber-200",
      accentText: "text-amber-300",
      corner: "border-amber-400/80",
    },
    cyan: {
      gradientBorder: "from-cyan-400 via-blue-400 to-cyan-300",
      glow: "shadow-[0_0_50px_rgba(6,182,212,0.35)]",
      badge: "border-cyan-400/60 bg-gradient-to-r from-cyan-950/90 via-blue-950/60 to-cyan-950/90 text-cyan-300",
      tagBadge: "border-cyan-500/40 bg-cyan-950/40 text-cyan-200",
      accentText: "text-cyan-300",
      corner: "border-cyan-400/80",
    },
    blue: {
      gradientBorder: "from-blue-400 via-indigo-400 to-cyan-300",
      glow: "shadow-[0_0_50px_rgba(59,130,246,0.35)]",
      badge: "border-blue-400/60 bg-gradient-to-r from-blue-950/90 via-indigo-950/60 to-blue-950/90 text-blue-300",
      tagBadge: "border-blue-500/40 bg-blue-950/40 text-blue-200",
      accentText: "text-blue-300",
      corner: "border-blue-400/80",
    },
    violet: {
      gradientBorder: "from-purple-400 via-violet-400 to-cyan-300",
      glow: "shadow-[0_0_50px_rgba(168,85,247,0.35)]",
      badge: "border-purple-400/60 bg-gradient-to-r from-purple-950/90 via-violet-950/60 to-purple-950/90 text-purple-300",
      tagBadge: "border-purple-500/40 bg-purple-950/40 text-purple-200",
      accentText: "text-purple-300",
      corner: "border-purple-400/80",
    },
    emerald: {
      gradientBorder: "from-emerald-400 via-teal-400 to-cyan-300",
      glow: "shadow-[0_0_50px_rgba(16,185,129,0.35)]",
      badge: "border-emerald-400/60 bg-gradient-to-r from-emerald-950/90 via-teal-950/60 to-emerald-950/90 text-emerald-300",
      tagBadge: "border-emerald-500/40 bg-emerald-950/40 text-emerald-200",
      accentText: "text-emerald-300",
      corner: "border-emerald-400/80",
    },
  }[theme];

  // All departments/events this person coordinates
  const departmentsList =
    member.departments && member.departments.length > 0
      ? member.departments
      : [member.department];

  const hasImage = Boolean(member.image && !imageError);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Backdrop Blur Overlay with Click Outside */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-xl -z-10"
          />

          {/* Modal Container with Animated Gradient Border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", damping: 26, stiffness: 320 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg md:max-w-xl my-8 rounded-3xl p-1 bg-gradient-to-b from-white/15 via-white/5 to-transparent shadow-[0_20px_70px_rgba(0,0,0,0.8)]"
          >
            {/* Animated Outer Gradient Glow */}
            <div
              className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${colorMap.gradientBorder} opacity-50 blur-xl animate-pulse pointer-events-none`}
            />

            {/* Main Modal Card Surface with Mobile-Friendly Vertical Scroll */}
            <div
              className={`relative rounded-[22px] bg-[#050814]/95 backdrop-blur-2xl border border-white/10 p-5 sm:p-8 md:p-10 max-h-[88vh] overflow-y-auto ${colorMap.glow}`}
            >
              {/* Corner Cyber HUD Accents */}
              <div
                className={`absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 ${colorMap.corner}`}
              />
              <div
                className={`absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 ${colorMap.corner}`}
              />
              <div
                className={`absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 ${colorMap.corner}`}
              />
              <div
                className={`absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 ${colorMap.corner}`}
              />

              {/* Top Bar: Telemetry Label & Close Button */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-2 text-[10px] sm:text-xs font-kodeMono tracking-widest text-slate-400 uppercase">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>ITECHNO &apos;26 • PROFILE DOSSIER</span>
                </div>

                {/* Close (×) Button */}
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close profile modal"
                  className="group p-2 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-cyan-400/60 text-slate-300 hover:text-white transition-all shadow-lg active:scale-95"
                >
                  <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>

              {/* Large Profile Image Frame */}
              <div className="relative flex flex-col items-center text-center">
                <div className="relative mb-4 sm:mb-6">
                  {/* Glowing halo behind profile image */}
                  <div
                    className={`absolute -inset-3 sm:-inset-4 rounded-3xl bg-gradient-to-r ${colorMap.gradientBorder} opacity-60 blur-xl animate-pulse`}
                  />

                  <div
                    className={`relative w-28 h-28 xs:w-36 xs:h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-2xl p-1 bg-gradient-to-tr ${colorMap.gradientBorder} shadow-[0_0_35px_rgba(0,0,0,0.8)] overflow-hidden`}
                  >
                    <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-[#03050a]">
                      {hasImage ? (
                        <Image
                          src={member.image!}
                          alt={member.name}
                          fill
                          sizes="(max-width: 640px) 144px, 230px"
                          priority
                          className="object-cover object-top hover:scale-105 transition-transform duration-700"
                          onError={() => setImageError(true)}
                        />
                      ) : (
                        <div
                          className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-[#070e1c] to-[#020408] ${colorMap.accentText}`}
                        >
                          <span className="font-orbitron font-black text-3xl xs:text-4xl sm:text-6xl tracking-tight">
                            {initials}
                          </span>
                          <span className="text-[9px] sm:text-[10px] font-kodeMono text-slate-400 tracking-widest mt-1 sm:mt-2 uppercase">
                            OFFICIAL CREW
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Verification Lead Chip */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#05070e] border border-cyan-400/80 flex items-center gap-1.5 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-[10px] font-kodeMono font-bold text-cyan-300 uppercase tracking-widest whitespace-nowrap">
                      VERIFIED LEAD
                    </span>
                  </div>
                </div>

                {/* Coordinator Name */}
                <h3
                  id="modal-title"
                  className="text-2xl sm:text-3xl md:text-4xl font-black font-orbitron text-white tracking-wide mt-3 mb-2"
                >
                  {member.name}
                </h3>

                {/* Primary Badge: CHIEF EVENT DIRECTOR / EVENT COORDINATOR */}
                <div
                  className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border ${colorMap.badge} font-kodeMono text-xs font-bold uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(0,0,0,0.5)]`}
                >
                  <IconComponent className="w-4 h-4 animate-pulse" />
                  <span>
                    {actualIsChief
                      ? "CHIEF EVENT DIRECTOR"
                      : member.badge || "EVENT COORDINATOR"}
                  </span>
                </div>

                {/* Events / Departments Coordinated (supports multiple responsibilities) */}
                <div className="w-full my-3">
                  <div className="flex items-center justify-center gap-1.5 text-[11px] font-kodeMono uppercase tracking-wider text-slate-400 mb-2">
                    <Tag className="w-3.5 h-3.5" />
                    <span>
                      {departmentsList.length > 1
                        ? "COORDINATING DIVISIONS"
                        : "COORDINATING EVENT"}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    {departmentsList.map((dept, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-xl text-xs font-orbitron font-bold uppercase tracking-wider border ${colorMap.tagBadge} shadow-sm`}
                      >
                        {dept}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Role Description / Bio */}
                <div className="w-full mt-4 pt-4 border-t border-white/10">
                  <p className="text-xs font-kodeMono uppercase tracking-widest text-slate-500 mb-2">
                    ROLE & RESPONSIBILITY
                  </p>
                  <p className="text-sm sm:text-base font-spaceGrotesk text-slate-200 leading-relaxed max-w-md mx-auto italic">
                    &ldquo;
                    {member.bio ||
                      (actualIsChief
                        ? "Leading the event experience and coordinating the overall execution."
                        : `Coordinating the competition experience and operations for ${member.department}.`)}
                    &rdquo;
                  </p>
                </div>

                {/* Contact Information (if provided) */}
                {(member.phone || member.email || member.linkedin) && (
                  <div className="w-full mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs font-kodeMono">
                    {member.phone && (
                      <a
                        href={`tel:${member.phone.replace(/\s+/g, "")}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-yellow-300 transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-yellow-400" />
                        <span>{member.phone}</span>
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-blue-300 transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 text-blue-400" />
                        <span>{member.email}</span>
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-cyan-300 transition-colors"
                      >
                        <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
                        <span>LinkedIn</span>
                      </a>
                    )}
                  </div>
                )}

                {/* Footer Modal Action Bar */}
                <div className="w-full mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-kodeMono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Takshashila University
                  </span>
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 hover:text-white font-orbitron text-[11px] uppercase tracking-wider transition-colors"
                  >
                    Close ×
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

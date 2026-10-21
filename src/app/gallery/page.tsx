"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { EventMemoriesGallery } from "@/components/gallery/EventMemoriesGallery";
import { CyberBackground } from "@/components/crew/CyberBackground";
import { Sparkles, Users, Home } from "lucide-react";

function GalleryContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") || "all";

  return (
    <div className="relative min-h-screen text-slate-100 overflow-x-hidden pt-32 sm:pt-36 pb-24 font-spaceGrotesk">
      {/* Cyber Ambient Background */}
      <CyberBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Gallery Hero Banner */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/40 bg-yellow-950/40 text-yellow-300 font-kodeMono text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(212,175,55,0.25)]">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            TAKSHASHILA UNIVERSITY • ITECHNO &apos;26 MEMORIES
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-blue-400 tracking-tight">
            OFFICIAL EVENT GALLERY
          </h1>

          <p className="text-slate-300 font-spaceGrotesk text-base sm:text-lg max-w-2xl mx-auto">
            High-definition photographs from our auditorium inaugurations, coding hackathons, quiz battles, esports arenas, and prize ceremonies.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-orbitron text-cyan-400 hover:text-cyan-300 bg-cyan-950/30 px-4 py-2 rounded-xl border border-cyan-500/30 transition-all hover:scale-105"
            >
              <Home className="w-4 h-4" /> Back to Home Archive
            </Link>
            <Link
              href="/teams"
              className="inline-flex items-center gap-2 text-xs font-orbitron text-amber-300 hover:text-amber-200 bg-amber-950/30 px-4 py-2 rounded-xl border border-amber-500/30 transition-all hover:scale-105"
            >
              <Users className="w-4 h-4" /> Meet Event Crew
            </Link>
          </div>
        </div>

        {/* Complete 17-Category Memories Gallery */}
        <EventMemoriesGallery id="gallery-main" initialCategory={categoryParam} showHeading={false} />
      </div>
    </div>
  );
}

export default function GalleryPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#020408] text-center pt-40 font-orbitron text-yellow-300">Loading Memories Archive...</div>}>
      <GalleryContent />
    </Suspense>
  );
}

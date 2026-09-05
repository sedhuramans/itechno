"use client";

import React, { useState } from "react";
import Image from "next/image";
import { galleryImages } from "@/data/gallery";
import { GalleryLightbox } from "./GalleryLightbox";
import {
  Sparkles,
  Maximize2,
} from "lucide-react";

interface EventGalleryProps {
  id?: string;
  className?: string;
  showHeading?: boolean;
}

export const EventGallery: React.FC<EventGalleryProps> = ({
  id = "gallery",
  className = "",
  showHeading = true,
}) => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const handleOpen = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const handleClose = () => {
    setActiveLightboxIndex(null);
  };

  return (
    <section id={id} className={`relative scroll-mt-48 sm:scroll-mt-56 pt-8 sm:pt-14 ${className}`}>
      {/* Background Cyber Ambient Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-cyan-500/10 via-blue-600/15 to-purple-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      {showHeading && (
        <div className="relative mb-12 sm:mb-16 text-center max-w-3xl mx-auto">
          {/* HUD Small Label: CAPTURED MOMENTS */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/40 bg-cyan-950/40 text-cyan-300 font-kodeMono text-xs uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(6,182,212,0.25)] backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>CAPTURED MOMENTS</span>
          </div>

          {/* Heading: EVENT GALLERY */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-blue-400 tracking-tight">
            EVENT GALLERY
          </h2>

          {/* Subtitle */}
          <p className="mt-3 text-base sm:text-lg md:text-xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-blue-300 tracking-wide">
            Moments that made the experience unforgettable.
          </p>

          {/* Supporting Text */}
          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-300 font-spaceGrotesk max-w-xl mx-auto leading-relaxed">
            Behind every event is a collection of moments, teamwork, energy and memories.
          </p>
        </div>
      )}

      {/* Gallery Cards Grid: Artistic 7-Item Masonry Composition (2–3 cols on desktop, 2 on tablet, 1 on mobile) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 max-w-7xl mx-auto">
        {galleryImages.map((image, index) => {
          // Asymmetric editorial layout spans (alternating 2-col wide feature items)
          const isWide = index === 0 || index === 3 || index === 4 || index === 7;

          return (
            <div
              key={image.id}
              onClick={() => handleOpen(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleOpen(index);
                }
              }}
              aria-label={`View full photo: ${image.title}`}
              className={`group relative rounded-3xl p-1 bg-gradient-to-b from-cyan-500/30 via-white/5 to-cyan-500/10 hover:from-cyan-400/80 hover:via-blue-500/50 hover:to-cyan-300/70 transition-all duration-500 shadow-[0_10px_35px_rgba(0,0,0,0.6)] hover:shadow-[0_15px_50px_rgba(6,182,212,0.4)] hover:-translate-y-2 cursor-pointer select-none overflow-hidden ${
                isWide ? "sm:col-span-2 lg:col-span-2" : "col-span-1"
              }`}
            >
              {/* Inner Dark Glass Container */}
              <div className="relative rounded-[22px] overflow-hidden bg-[#050814]/90 backdrop-blur-xl border border-white/10 h-full flex flex-col justify-between">
                {/* Image Frame with Adaptive Height */}
                <div
                  className={`relative w-full overflow-hidden bg-[#03050a] ${
                    isWide
                      ? "h-72 sm:h-80 md:h-96"
                      : "h-64 sm:h-72 md:h-80"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    loading="lazy"
                    sizes={
                      isWide
                        ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 800px"
                        : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                    }
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 group-hover:brightness-105"
                  />

                  {/* Dark Gradient Overlay for Typography Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-black/40 to-transparent opacity-85 group-hover:opacity-65 transition-opacity duration-500" />

                  {/* Cyber Corner HUD Highlights */}
                  <div className="absolute top-3 left-3 w-3.5 h-3.5 border-t-2 border-l-2 border-cyan-400/70 group-hover:border-cyan-300 transition-colors pointer-events-none" />
                  <div className="absolute top-3 right-3 w-3.5 h-3.5 border-t-2 border-r-2 border-cyan-400/70 group-hover:border-cyan-300 transition-colors pointer-events-none" />

                  {/* Top Left Tag Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full text-[10px] font-kodeMono uppercase font-bold tracking-wider bg-[#050814]/85 border border-cyan-400/50 text-cyan-300 shadow-md backdrop-blur-md">
                      {image.tag}
                    </span>
                  </div>

                  {/* Top Right Photo Counter Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-orbitron font-bold text-slate-300 bg-black/60 border border-white/15 backdrop-blur-md">
                      0{image.id} / 0{galleryImages.length}
                    </span>
                  </div>

                  {/* Center Hover Action: “VIEW PHOTO” Overlay */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none bg-black/35 backdrop-blur-[2px]">
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-orbitron font-bold text-xs uppercase tracking-widest text-black bg-gradient-to-r from-cyan-300 via-white to-blue-400 shadow-[0_0_30px_rgba(6,182,212,0.8)] transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                      <Maximize2 className="w-4 h-4 text-black" />
                      <span>VIEW PHOTO</span>
                    </span>
                  </div>

                  {/* Bottom Caption Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10 flex flex-col justify-end">
                    <h3 className="text-lg sm:text-xl font-black font-orbitron text-white tracking-wide group-hover:text-cyan-200 transition-colors drop-shadow-md">
                      {image.title}
                    </h3>
                    <p className="text-xs font-spaceGrotesk text-slate-300 mt-1 line-clamp-1 group-hover:text-slate-200 transition-colors">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Full-Screen Lightbox Pop-Up */}
      <GalleryLightbox
        images={galleryImages}
        currentIndex={activeLightboxIndex ?? 0}
        isOpen={activeLightboxIndex !== null}
        onClose={handleClose}
        onNavigate={(newIdx) => setActiveLightboxIndex(newIdx)}
      />
    </section>
  );
};


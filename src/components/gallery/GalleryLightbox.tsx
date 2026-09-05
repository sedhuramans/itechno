"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GalleryImage } from "@/data/gallery";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";

interface GalleryLightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const total = images.length;
  const currentImage = images[currentIndex] || images[0];

  const handlePrev = useCallback(() => {
    onNavigate((currentIndex - 1 + total) % total);
  }, [currentIndex, total, onNavigate]);

  const handleNext = useCallback(() => {
    onNavigate((currentIndex + 1) % total);
  }, [currentIndex, total, onNavigate]);

  // Handle keyboard events: ESC, ArrowLeft, ArrowRight
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext(); // swipe left -> next
      } else {
        handlePrev(); // swipe right -> prev
      }
    }
    setTouchStartX(null);
  };

  if (!isOpen || !currentImage) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 select-none"
          role="dialog"
          aria-modal="true"
          aria-label="Event gallery photo lightbox"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Dark Blurred Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-2xl -z-10"
          />

          {/* Top Control Bar (Floating Glass HUD) */}
          <div className="fixed top-4 sm:top-6 left-4 right-4 sm:left-8 sm:right-8 z-50 flex items-center justify-between pointer-events-none">
            {/* Header Badge */}
            <div className="pointer-events-auto flex items-center gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full border border-cyan-500/40 bg-[#050814]/85 text-cyan-300 font-kodeMono text-[11px] sm:text-xs tracking-widest shadow-[0_0_20px_rgba(6,182,212,0.3)] backdrop-blur-xl">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: "6s" }} />
              <span className="hidden sm:inline">ITECHNO &apos;26 •</span>
              <span>EVENT GALLERY</span>
            </div>

            {/* Counter + Close Button */}
            <div className="pointer-events-auto flex items-center gap-3">
              {/* Counter Display (1 / 4) */}
              <div className="px-3.5 py-1.5 rounded-full border border-white/15 bg-[#050814]/85 text-slate-200 font-orbitron font-bold text-xs sm:text-sm tracking-wider shadow-md backdrop-blur-xl">
                <span className="text-cyan-400">{currentIndex + 1}</span>
                <span className="text-slate-500 mx-1.5">/</span>
                <span>{total}</span>
              </div>

              {/* Close Button (×) */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close lightbox"
                className="group flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-cyan-400/80 text-slate-200 hover:text-white transition-all shadow-lg backdrop-blur-xl active:scale-95"
              >
                <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
                <span className="hidden sm:inline text-xs font-orbitron uppercase tracking-wider font-semibold">
                  Close
                </span>
              </button>
            </div>
          </div>

          {/* Main Lightbox Frame */}
          <div
            className="relative w-full max-w-6xl max-h-[85vh] flex flex-col items-center justify-center pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient Behind-Photo Cyan/Blue Bloom */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/15 via-blue-500/20 to-purple-500/15 blur-3xl rounded-3xl pointer-events-none opacity-70 animate-pulse" />

            {/* Image Container with Cyber Glass Frame */}
            <motion.div
              key={currentImage.id}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-h-[72vh] rounded-2xl sm:rounded-3xl p-1 bg-gradient-to-b from-cyan-500/40 via-blue-500/20 to-cyan-500/30 shadow-[0_0_60px_rgba(0,0,0,0.95)] overflow-hidden"
            >
              <div className="relative w-full h-[55vh] sm:h-[65vh] md:h-[70vh] rounded-[14px] sm:rounded-[22px] overflow-hidden bg-[#03050a] flex items-center justify-center">
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  fill
                  priority
                  sizes="(max-width: 1280px) 95vw, 1200px"
                  className="object-contain select-none"
                />

                {/* Subtle corner tech brackets */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cyan-400/80 pointer-events-none" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-cyan-400/80 pointer-events-none" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-cyan-400/80 pointer-events-none" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-cyan-400/80 pointer-events-none" />
              </div>
            </motion.div>

            {/* Bottom Info HUD & Stepper */}
            <motion.div
              key={`caption-${currentImage.id}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 sm:mt-5 w-full max-w-2xl px-4 py-3 rounded-2xl bg-[#050814]/90 border border-white/10 backdrop-blur-xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left"
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded-md border border-cyan-500/40 bg-cyan-950/60 text-cyan-300 font-kodeMono text-[9px] uppercase tracking-wider font-bold">
                    {currentImage.tag}
                  </span>
                  <h4 className="text-sm sm:text-base font-orbitron font-bold text-white tracking-wide truncate">
                    {currentImage.title}
                  </h4>
                </div>
                <p className="text-xs font-spaceGrotesk text-slate-400 line-clamp-1">
                  {currentImage.description}
                </p>
              </div>

              {/* Bottom Quick Controls (‹ 1 / 4 ›) */}
              <div className="flex items-center gap-2 font-kodeMono text-xs text-slate-400">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous photo"
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-slate-200 hover:text-cyan-300 transition-colors active:scale-95"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <span className="font-orbitron font-bold text-slate-200 px-2">
                  {currentIndex + 1} / {total}
                </span>

                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next photo"
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-slate-200 hover:text-cyan-300 transition-colors active:scale-95"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Large Floating Previous Button (‹) - Visible on tablet/desktop, mobile uses touch swipe & bottom controls */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous image"
            className="hidden sm:flex fixed left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 sm:p-4 rounded-2xl bg-[#050814]/85 hover:bg-cyan-950/90 border border-white/15 hover:border-cyan-400/80 text-white hover:text-cyan-300 shadow-[0_0_30px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Large Floating Next Button (›) - Visible on tablet/desktop, mobile uses touch swipe & bottom controls */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next image"
            className="hidden sm:flex fixed right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 sm:p-4 rounded-2xl bg-[#050814]/85 hover:bg-cyan-950/90 border border-white/15 hover:border-cyan-400/80 text-white hover:text-cyan-300 shadow-[0_0_30px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </div>
      )}
    </AnimatePresence>
  );
};

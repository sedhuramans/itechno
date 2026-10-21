"use client";

import React, { useState, useMemo, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  MEMORY_CATEGORIES,
  OFFICIAL_MEMORIES,
  FEATURED_MOMENTS,
  MemoryItem
} from "@/data/memories-data";
import {
  Search,
  Sparkles,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Share2,
  Tag,
  Calendar,
  MapPin,
  FolderOpen,
  ZoomIn,
  ZoomOut
} from "lucide-react";

interface EventMemoriesGalleryProps {
  id?: string;
  initialCategory?: string;
  showHeading?: boolean;
}

export const EventMemoriesGallery: React.FC<EventMemoriesGalleryProps> = ({
  id = "memories",
  initialCategory = "all",
  showHeading = true,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Compute item count per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    MEMORY_CATEGORIES.forEach((cat) => {
      if (cat.id === "all") {
        counts[cat.id] = OFFICIAL_MEMORIES.length;
      } else {
        counts[cat.id] = OFFICIAL_MEMORIES.filter((m) => m.category.includes(cat.id)).length;
      }
    });
    return counts;
  }, []);

  // Filter memories by category and search
  const filteredMemories = useMemo(() => {
    return OFFICIAL_MEMORIES.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category.includes(selectedCategory);

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchCaption = item.caption.toLowerCase().includes(q);
      const matchEvent = item.event.toLowerCase().includes(q);
      const matchTags = item.tags.some((t) => t.toLowerCase().includes(q));

      return matchTitle || matchCaption || matchEvent || matchTags;
    });
  }, [selectedCategory, searchQuery]);

  const activePhoto: MemoryItem | null =
    activeLightboxIndex !== null ? filteredMemories[activeLightboxIndex] ?? null : null;

  const handleNextPhoto = useCallback(() => {
    if (activeLightboxIndex === null || filteredMemories.length === 0) return;
    setActiveLightboxIndex((prev) => (prev! + 1) % filteredMemories.length);
    setIsZoomed(false);
  }, [activeLightboxIndex, filteredMemories.length]);

  const handlePrevPhoto = useCallback(() => {
    if (activeLightboxIndex === null || filteredMemories.length === 0) return;
    setActiveLightboxIndex((prev) =>
      prev! === 0 ? filteredMemories.length - 1 : prev! - 1
    );
    setIsZoomed(false);
  }, [activeLightboxIndex, filteredMemories.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (activeLightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveLightboxIndex(null);
        setIsZoomed(false);
      } else if (e.key === "ArrowRight") {
        handleNextPhoto();
      } else if (e.key === "ArrowLeft") {
        handlePrevPhoto();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLightboxIndex, handleNextPhoto, handlePrevPhoto]);

  // Touch gesture handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 50) {
      handleNextPhoto();
    } else if (diff < -50) {
      handlePrevPhoto();
    }
    setTouchStart(null);
  };

  const copyShareLink = (photo: MemoryItem) => {
    if (typeof window !== "undefined") {
      const url = `${window.location.origin}/gallery?photo=${photo.id}`;
      navigator.clipboard.writeText(url);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <section id={id} className="relative scroll-mt-28 py-16 sm:py-24 text-slate-100 font-spaceGrotesk">
      {/* Background Radiance */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-600/10 via-yellow-500/10 to-purple-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* SECTION HEADER */}
      {showHeading && (
        <div className="relative mb-12 sm:mb-16 text-center max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/40 bg-gradient-to-r from-slate-950/90 via-yellow-950/30 to-slate-950/90 text-yellow-300 font-kodeMono text-xs uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(212,175,55,0.25)] backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
            <span>OFFICIAL ARCHIVE • 17 CATEGORIES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-blue-400 tracking-tight">
            EVENT MEMORIES GALLERY
          </h2>

          <p className="mt-3 text-base sm:text-lg md:text-xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-slate-200 to-blue-300">
            &ldquo;One Event. A Thousand Memories.&rdquo;
          </p>

          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            High-resolution digital archive capturing the triumphs, teamwork, laughter, and intellectual fire of ITECHNO 2026.
          </p>
        </div>
      )}

      {/* FEATURED COLLECTION: "Moments That Defined ITECHNO" */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="rounded-3xl p-0.5 bg-gradient-to-r from-yellow-500/30 via-blue-500/40 to-yellow-500/30 shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
          <div className="rounded-[22px] bg-[#050814]/90 p-5 sm:p-7 backdrop-blur-xl border border-white/5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
              <div>
                <span className="text-[10px] font-kodeMono uppercase tracking-[0.2em] text-yellow-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                  CURATED SPOTLIGHT
                </span>
                <h3 className="text-xl sm:text-2xl font-black font-orbitron text-white mt-1">
                  Moments That Defined ITECHNO
                </h3>
              </div>
              <span className="text-xs font-kodeMono text-slate-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                {FEATURED_MOMENTS.length} Selected Highlights
              </span>
            </div>

            {/* Horizontal Scroll / Grid of Featured Moments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {FEATURED_MOMENTS.slice(0, 4).map((item, idx) => (
                <div
                  key={`feat-${item.id}`}
                  onClick={() => {
                    const foundIndex = filteredMemories.findIndex((m) => m.id === item.id);
                    if (foundIndex !== -1) {
                      setActiveLightboxIndex(foundIndex);
                    } else {
                      setSelectedCategory("all");
                      setTimeout(() => {
                        const newIdx = OFFICIAL_MEMORIES.findIndex((m) => m.id === item.id);
                        setActiveLightboxIndex(newIdx !== -1 ? newIdx : 0);
                      }, 50);
                    }
                  }}
                  className="group relative rounded-2xl overflow-hidden bg-black/60 border border-yellow-500/20 hover:border-yellow-400/70 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  <div className="relative h-44 sm:h-52 w-full overflow-hidden">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 300px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                    <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md text-[9px] font-kodeMono font-bold uppercase tracking-wider bg-black/80 border border-yellow-400/50 text-yellow-300 backdrop-blur-md">
                      DEFINING MOMENT 0{idx + 1}
                    </span>
                    <div className="absolute bottom-2.5 left-2.5 right-2.5">
                      <p className="text-xs font-orbitron font-bold text-white line-clamp-1 group-hover:text-yellow-300 transition-colors">
                        {item.title}
                      </p>
                      <span className="text-[10px] font-kodeMono text-slate-300 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-2.5 h-2.5 text-yellow-400" />
                        {item.event}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SEARCH BAR & SUMMARY */}
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* SEARCH INPUT */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by caption, event, tags..."
              aria-label="Search event photographs"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#050814]/90 border border-slate-700/60 focus:border-yellow-400/80 focus:outline-none text-xs sm:text-sm text-slate-200 placeholder-slate-400 backdrop-blur-xl shadow-inner transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* ACTIVE FILTER SUMMARY */}
          <div className="text-xs font-kodeMono text-slate-300 flex items-center gap-2 self-start md:self-auto">
            <span>Showing:</span>
            <span className="px-2.5 py-1 rounded-lg bg-yellow-950/40 border border-yellow-500/30 text-yellow-300 font-bold">
              {filteredMemories.length} Photos
            </span>
            <span className="text-slate-400">in &ldquo;{MEMORY_CATEGORIES.find((c) => c.id === selectedCategory)?.name}&rdquo;</span>
          </div>
        </div>

        {/* 17 CATEGORY FILTER TABS */}
        <div className="mb-10 flex flex-wrap gap-2 sm:gap-2.5">
          {MEMORY_CATEGORIES.map((cat) => {
            const count = categoryCounts[cat.id] ?? 0;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`relative px-3.5 py-2 rounded-xl text-xs font-orbitron font-medium transition-all duration-300 flex items-center gap-2 select-none ${
                  isSelected
                    ? "bg-gradient-to-r from-yellow-400 via-yellow-500 to-blue-600 text-black font-bold shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105"
                    : "bg-[#050814]/90 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                <span>{cat.name}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-kodeMono ${
                    isSelected
                      ? "bg-black/30 text-black font-bold"
                      : "bg-white/10 text-slate-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* MASONRY / EDITORIAL CARDS GRID */}
        {filteredMemories.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
            {filteredMemories.map((photo, index) => {
              // Asymmetric spans for editorial feel
              const isFeatureCard = index % 7 === 0 || index % 7 === 4;

              return (
                <div
                  key={photo.id}
                  onClick={() => {
                    setActiveLightboxIndex(index);
                    setIsZoomed(false);
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveLightboxIndex(index);
                    }
                  }}
                  aria-label={`View photo: ${photo.title}`}
                  className={`group relative rounded-3xl p-1 bg-gradient-to-b from-yellow-500/20 via-white/5 to-blue-500/20 hover:from-yellow-400/80 hover:via-blue-400/60 hover:to-cyan-400/80 transition-all duration-500 shadow-[0_10px_35px_rgba(0,0,0,0.7)] hover:shadow-[0_15px_50px_rgba(212,175,55,0.35)] hover:-translate-y-2 cursor-pointer select-none overflow-hidden ${
                    isFeatureCard ? "sm:col-span-2 lg:col-span-2" : "col-span-1"
                  }`}
                >
                  <div className="relative rounded-[22px] overflow-hidden bg-[#050814]/95 border border-white/10 h-full flex flex-col justify-between">
                    <div
                      className={`relative w-full overflow-hidden bg-[#020408] ${
                        isFeatureCard
                          ? "h-72 sm:h-80 md:h-96"
                          : "h-64 sm:h-72 md:h-80"
                      }`}
                    >
                      <Image
                        src={photo.thumbnail}
                        alt={photo.title}
                        fill
                        loading="lazy"
                        sizes={
                          isFeatureCard
                            ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 850px"
                            : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                        }
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 group-hover:brightness-105"
                      />

                      {/* GRADIENT OVERLAY */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-black/40 to-transparent opacity-85 group-hover:opacity-65 transition-opacity duration-500" />

                      {/* HUD CORNER ACCENTS */}
                      <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-yellow-400/70 group-hover:border-yellow-300 pointer-events-none" />
                      <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-yellow-400/70 group-hover:border-yellow-300 pointer-events-none" />

                      {/* TOP EVENT BADGE */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1 rounded-full text-[10px] font-kodeMono uppercase font-bold tracking-wider bg-[#050814]/85 border border-yellow-400/50 text-yellow-300 shadow-md backdrop-blur-md">
                          {photo.event}
                        </span>
                      </div>

                      {/* PHOTO ID COUNTER */}
                      <div className="absolute top-4 right-4 z-10">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-orbitron font-bold text-slate-300 bg-black/70 border border-white/15 backdrop-blur-md">
                          0{index + 1} / {filteredMemories.length}
                        </span>
                      </div>

                      {/* HOVER ACTION OVERLAY */}
                      <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none bg-black/40 backdrop-blur-[2px]">
                        <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-orbitron font-bold text-xs uppercase tracking-widest text-black bg-gradient-to-r from-yellow-300 via-white to-blue-400 shadow-[0_0_30px_rgba(212,175,55,0.8)] transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                          <Maximize2 className="w-4 h-4 text-black" />
                          <span>EXPAND MEMORY</span>
                        </span>
                      </div>

                      {/* BOTTOM CAPTION */}
                      <div className="absolute bottom-0 left-0 right-0 p-5 z-10 flex flex-col justify-end">
                        <h3 className="text-base sm:text-lg font-black font-orbitron text-white tracking-wide group-hover:text-yellow-200 transition-colors drop-shadow-md">
                          {photo.title}
                        </h3>
                        <p className="text-xs font-spaceGrotesk text-slate-300 mt-1 line-clamp-1 group-hover:text-slate-100 transition-colors">
                          {photo.caption}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* EMPTY STATE */
          <div className="rounded-3xl border border-white/10 bg-[#050814]/80 p-12 text-center max-w-lg mx-auto">
            <FolderOpen className="w-12 h-12 text-yellow-400/60 mx-auto mb-4" />
            <h4 className="text-lg font-orbitron font-bold text-white mb-2">
              No Photos Found in this View
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              {searchQuery
                ? `No photographs matched your query "${searchQuery}". Try a different keyword or clear the search.`
                : "Photos for this category will be synchronized via our Admin Media Importer."}
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="px-5 py-2.5 rounded-xl font-orbitron font-bold text-xs text-black bg-gradient-to-r from-yellow-400 to-blue-500 shadow-md hover:scale-105 transition-all"
            >
              Reset to All Memories
            </button>
          </div>
        )}
      </div>

      {/* FULLSCREEN LIGHTBOX POPUP */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Expanded memory: ${activePhoto.title}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl overflow-hidden animate-fadeIn"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* TOP CONTROLS */}
          <div className="absolute top-4 left-4 right-4 z-50 flex items-center justify-between text-white">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-kodeMono bg-white/10 border border-white/20 text-yellow-300">
                0{activeLightboxIndex! + 1} / {filteredMemories.length}
              </span>
              <span className="hidden sm:inline-block text-xs font-orbitron text-slate-300">
                {activePhoto.event}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* ZOOM TOGGLE */}
              <button
                onClick={() => setIsZoomed(!isZoomed)}
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 transition-all text-slate-200"
                aria-label={isZoomed ? "Zoom out" : "Zoom in"}
              >
                {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
              </button>

              {/* SHARE LINK */}
              <button
                onClick={() => copyShareLink(activePhoto)}
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 transition-all text-slate-200"
                aria-label="Copy shareable link"
              >
                <Share2 className="w-4 h-4" />
              </button>

              {/* CLOSE BUTTON */}
              <button
                onClick={() => {
                  setActiveLightboxIndex(null);
                  setIsZoomed(false);
                }}
                className="p-2.5 rounded-xl bg-red-500/20 hover:bg-red-500/40 border border-red-500/40 transition-all text-red-200"
                aria-label="Close lightbox"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* PREVIOUS BUTTON */}
          <button
            onClick={handlePrevPhoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-black/60 hover:bg-white/20 border border-white/20 text-white transition-all hover:scale-110"
            aria-label="Previous photograph"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* NEXT BUTTON */}
          <button
            onClick={handleNextPhoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-black/60 hover:bg-white/20 border border-white/20 text-white transition-all hover:scale-110"
            aria-label="Next photograph"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* MAIN IMAGE DISPLAY */}
          <div className="relative w-full h-[75vh] sm:h-[82vh] max-w-6xl mx-auto px-6 flex items-center justify-center">
            <div
              className={`relative w-full h-full transition-transform duration-300 ${
                isZoomed ? "scale-150 cursor-zoom-out" : "cursor-zoom-in"
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <Image
                src={activePhoto.src}
                alt={activePhoto.title}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1400px"
                className="object-contain"
              />
            </div>
          </div>

          {/* BOTTOM CAPTION & METADATA OVERLAY */}
          <div className="absolute bottom-4 left-4 right-4 z-40 max-w-3xl mx-auto p-4 sm:p-5 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 text-center">
            <h3 className="text-base sm:text-xl font-orbitron font-black text-white">
              {activePhoto.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
              {activePhoto.caption}
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-3 text-[11px] font-kodeMono text-slate-400">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-yellow-400" />
                {activePhoto.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-blue-400" />
                {activePhoto.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-yellow-300">
                <Tag className="w-3 h-3" />
                {activePhoto.tags.join(", ")}
              </span>
            </div>

            {copiedLink && (
              <div className="mt-2 text-xs font-kodeMono text-emerald-400 animate-pulse">
                ✓ Shareable link copied to clipboard!
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

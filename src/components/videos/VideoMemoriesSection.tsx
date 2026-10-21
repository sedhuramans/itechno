"use client";

import React, { useState } from "react";
import Image from "next/image";
import { OFFICIAL_VIDEOS, VideoMemory } from "@/data/memories-data";
import {
  Play,
  Film,
  X,
  Clock,
  ExternalLink,
  ChevronRight
} from "lucide-react";

export const VideoMemoriesSection: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoMemory | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Official Aftermovie", "Inauguration", "Competitions", "Technical Stage", "Gaming Arena", "Closing Highlights"];

  const filteredVideos =
    activeCategory === "All"
      ? OFFICIAL_VIDEOS
      : OFFICIAL_VIDEOS.filter((v) => v.category === activeCategory);

  return (
    <section id="videos" className="relative scroll-mt-28 py-16 sm:py-24 text-slate-100 font-spaceGrotesk overflow-hidden">
      {/* Background Radiance */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[350px] bg-gradient-to-l from-blue-600/15 via-cyan-500/10 to-transparent blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/40 bg-gradient-to-r from-slate-950/90 via-cyan-950/40 to-slate-950/90 text-cyan-300 font-kodeMono text-xs uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(6,182,212,0.25)] backdrop-blur-md">
            <Film className="w-3.5 h-3.5 text-cyan-400" />
            <span>CINEMATIC ARCHIVE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-blue-400 tracking-tight">
            Press Play. Relive Everything.
          </h2>

          <p className="mt-3 text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From the keynote addresses in the grand auditorium to buzzer-beating quiz heats and esports clutches — witness ITECHNO in motion.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-orbitron transition-all ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)] scale-105"
                    : "bg-[#050814]/80 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FEATURED MAIN VIDEO SPOTLIGHT (Aftermovie) */}
        {OFFICIAL_VIDEOS.length > 0 && (
          <div className="mb-14 rounded-3xl p-0.5 bg-gradient-to-r from-cyan-500/40 via-yellow-500/30 to-blue-600/40 shadow-[0_15px_50px_rgba(0,0,0,0.85)]">
            <div className="rounded-[22px] overflow-hidden bg-[#050814]/95 border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* VIDEO THUMBNAIL & PLAY BUTTON */}
              <div
                onClick={() => setSelectedVideo(OFFICIAL_VIDEOS[0])}
                className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[460px] overflow-hidden group cursor-pointer"
              >
                <Image
                  src={OFFICIAL_VIDEOS[0].poster}
                  alt={OFFICIAL_VIDEOS[0].title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 750px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

                {/* BIG PLAY BUTTON */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-yellow-400 to-blue-500 p-0.5 shadow-[0_0_35px_rgba(212,175,55,0.7)] group-hover:scale-110 group-hover:shadow-[0_0_50px_rgba(59,130,246,0.9)] transition-all duration-300">
                    <div className="w-full h-full rounded-full bg-black/80 backdrop-blur-md flex items-center justify-center">
                      <Play className="w-7 h-7 sm:w-8 sm:h-8 text-yellow-300 fill-yellow-300 ml-1" />
                    </div>
                  </div>
                </div>

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-kodeMono uppercase font-bold bg-black/80 border border-yellow-400/50 text-yellow-300 backdrop-blur-md">
                    ★ FEATURED SHOWCASE
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 text-xs font-kodeMono text-white bg-black/80 px-2.5 py-1 rounded-md border border-white/20">
                  {OFFICIAL_VIDEOS[0].duration}
                </div>
              </div>

              {/* VIDEO DETAILS PANEL */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[11px] font-kodeMono uppercase text-cyan-300 bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-500/30">
                      {OFFICIAL_VIDEOS[0].category}
                    </span>
                    <span className="text-xs text-slate-400 font-kodeMono flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {OFFICIAL_VIDEOS[0].duration}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black font-orbitron text-white leading-tight">
                    {OFFICIAL_VIDEOS[0].title}
                  </h3>

                  <p className="text-xs sm:text-sm text-cyan-200/90 font-kodeMono mt-2">
                    {OFFICIAL_VIDEOS[0].subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed">
                    {OFFICIAL_VIDEOS[0].description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedVideo(OFFICIAL_VIDEOS[0])}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-orbitron font-bold text-xs text-black bg-gradient-to-r from-yellow-400 to-blue-500 shadow-md hover:scale-105 transition-all"
                  >
                    <Play className="w-3.5 h-3.5 fill-black" />
                    <span>Watch Aftermovie</span>
                  </button>

                  <span className="text-[11px] font-kodeMono text-slate-400">
                    Takshashila Official Footage
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIDEO CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedVideo(video);
                }
              }}
              aria-label={`Play video: ${video.title}`}
              className="group relative rounded-2xl overflow-hidden bg-[#050814]/90 border border-white/10 hover:border-cyan-400/60 transition-all duration-300 hover:-translate-y-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.6)] cursor-pointer"
            >
              <div className="relative h-52 w-full overflow-hidden bg-black">
                <Image
                  src={video.poster}
                  alt={video.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* PLAY ICON */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-black/70 border border-cyan-400/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                    <Play className="w-5 h-5 text-cyan-300 fill-cyan-300 group-hover:text-black group-hover:fill-black ml-0.5 transition-colors" />
                  </div>
                </div>

                <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-kodeMono font-bold uppercase bg-black/80 border border-white/15 text-slate-300">
                  {video.category}
                </span>

                <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded text-[10px] font-kodeMono bg-black/80 text-white border border-white/15">
                  {video.duration}
                </span>
              </div>

              <div className="p-4 sm:p-5">
                <h4 className="text-sm sm:text-base font-orbitron font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                  {video.title}
                </h4>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  {video.description}
                </p>
                <div className="mt-3 flex items-center justify-between text-[11px] font-kodeMono text-slate-400">
                  <span className="text-cyan-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Play Clip</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                  <span>Takshashila University</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* VIDEO PLAYBACK MODAL */}
      {selectedVideo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Playing video: ${selectedVideo.title}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-6"
        >
          <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden bg-[#050814] border border-cyan-500/40 shadow-[0_0_60px_rgba(6,182,212,0.4)]">
            {/* MODAL HEADER */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-black/60">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                <h3 className="text-sm sm:text-base font-orbitron font-bold text-white">
                  {selectedVideo.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all"
                aria-label="Close video player"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* VIDEO PLAYER FRAME */}
            <div className="relative w-full aspect-video bg-black flex items-center justify-center">
              {selectedVideo.driveId ? (
                <iframe
                  src={`https://drive.google.com/file/d/${selectedVideo.driveId}/preview`}
                  title={selectedVideo.title}
                  allow="autoplay; fullscreen"
                  className="w-full h-full border-0"
                />
              ) : (
                <video
                  src={selectedVideo.videoSrc}
                  poster={selectedVideo.poster}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              )}
            </div>

            {/* MODAL FOOTER */}
            <div className="p-4 sm:p-5 bg-black/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div>
                <p className="text-slate-300">{selectedVideo.description}</p>
                <span className="text-[10px] font-kodeMono text-slate-400 mt-1 block">
                  Category: {selectedVideo.category} • Duration: {selectedVideo.duration}
                </span>
              </div>
              {selectedVideo.driveId && (
                <a
                  href={`https://drive.google.com/file/d/${selectedVideo.driveId}/view?usp=sharing`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-cyan-300 font-kodeMono shrink-0"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open in Drive</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

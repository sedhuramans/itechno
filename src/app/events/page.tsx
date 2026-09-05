"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Calendar,
  MapPin,
  Clock,
  Trophy,
  Users,
  CheckCircle2,
  ExternalLink,
  X,
  Search,
  Filter,
  ArrowLeft,
  BookOpen,
  Award,
} from "lucide-react";
import { ItechnoEventsData, EventDataType } from "@/data/event-data";

const categories = [
  { id: "all", label: "All Events" },
  { id: "hackathon", label: "Hackathons & Coding" },
  { id: "quiz", label: "Quiz & Speaking" },
  { id: "puzzle", label: "Puzzles & Challenges" },
  { id: "gaming", label: "Gaming & Esports" },
  { id: "media", label: "Media & Creative" },
];

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalEvent, setActiveModalEvent] = useState<EventDataType | null>(null);

  useEffect(() => {
    if (!activeModalEvent) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalEvent(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [activeModalEvent]);

  const filteredEvents = ItechnoEventsData.filter((event) => {
    const matchesCategory =
      selectedCategory === "all" ||
      (selectedCategory === "hackathon" && (event.type === "hackathon" || event.type === "coding")) ||
      (selectedCategory === "quiz" && (event.type === "quiz" || event.type === "speaking")) ||
      (selectedCategory === "puzzle" && event.type === "puzzle") ||
      (selectedCategory === "gaming" && event.type === "gaming") ||
      (selectedCategory === "media" && event.type === "media");

    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen text-slate-100 py-16 px-4 sm:px-8 md:px-16 lg:px-24 pt-32 bg-[#030508] relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-yellow-500/10 via-blue-600/15 to-yellow-500/10 blur-[140px] pointer-events-none -z-10" />

      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto mb-12 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/40 bg-yellow-950/30 text-yellow-300 font-kodeMono text-xs uppercase tracking-widest">
          <Sparkles className="w-4 h-4 text-yellow-400" />
          Takshashila University • Itechno 2026 Arenas
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-blue-400 tracking-tight">
          OFFICIAL EVENTS
        </h1>

        <p className="text-slate-300 font-spaceGrotesk text-base sm:text-lg max-w-2xl mx-auto">
          Explore our flagship technical challenges, gaming tournaments, visual puzzles, and media competitions. Compete, innovate, and win exciting rewards!
        </p>

        <div className="pt-2 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-orbitron text-yellow-300 hover:text-yellow-100 transition-all bg-gradient-to-r from-yellow-950/40 to-blue-950/40 hover:from-yellow-500/20 hover:to-blue-500/20 px-4 py-2 rounded-xl border border-yellow-500/30 hover:border-blue-400/50 shadow-[0_0_15px_rgba(212,175,55,0.2)]"
          >
            <ArrowLeft className="w-4 h-4 text-yellow-400" /> Back to Home
          </Link>
        </div>
      </div>

      {/* Controls: Search & Category Tabs */}
      <div className="max-w-6xl mx-auto mb-12 space-y-6">
        {/* Search Bar */}
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-yellow-400/70" />
          <input
            type="text"
            placeholder="Search events by title or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-[#05070e]/90 border border-yellow-500/30 rounded-2xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 font-spaceGrotesk transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl font-orbitron text-xs font-semibold tracking-wider transition-all duration-300 ${
                selectedCategory === cat.id
                  ? "bg-gradient-to-r from-yellow-400 via-yellow-500 to-blue-600 text-black shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105"
                  : "bg-[#05070e]/80 text-slate-300 border border-yellow-500/20 hover:border-yellow-400/50 hover:text-yellow-300"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      {filteredEvents.length === 0 ? (
        <div className="text-center py-16 bg-[#05070e]/60 rounded-3xl border border-yellow-500/20 max-w-xl mx-auto">
          <Filter className="w-12 h-12 text-yellow-500/40 mx-auto mb-4" />
          <h3 className="text-xl font-orbitron font-bold text-slate-300">No Events Found</h3>
          <p className="text-slate-400 font-spaceGrotesk text-sm mt-2">
            No events match your current search or category filter. Try clearing your search.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="group relative rounded-3xl overflow-hidden border border-yellow-500/30 bg-[#05070e]/90 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.7)] hover:border-yellow-400/70 hover:shadow-[0_0_40px_rgba(212,175,55,0.3)] transition-all duration-500 hover:-translate-y-2"
            >
              {/* Event Header Image */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-950">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070e] via-transparent to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-kodeMono uppercase font-bold text-yellow-300 bg-black/75 backdrop-blur-md border border-yellow-500/40 shadow-lg">
                    {event.category}
                  </span>
                </div>

                {/* Date Pill */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-kodeMono font-semibold text-blue-300 bg-slate-950/80 backdrop-blur-md border border-blue-500/40">
                  <Calendar className="w-3 h-3 text-blue-400" />
                  <span>SEP 29</span>
                </div>
              </div>

              {/* Event Body Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-black font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-blue-300 mb-2">
                    {event.title}
                  </h3>

                  <p className="text-slate-300 font-spaceGrotesk text-xs line-clamp-3 leading-relaxed mb-6">
                    {event.description}
                  </p>

                  {/* Key Metadata */}
                  <div className="space-y-2.5 mb-6 text-xs font-kodeMono">
                    <div className="flex items-center gap-2 text-slate-300">
                      <Clock className="w-4 h-4 text-yellow-400 shrink-0" />
                      <span className="text-slate-400">Duration:</span>
                      <span className="text-white font-semibold">{event.time}</span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-300">
                      <Users className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span className="text-slate-400">Team Size:</span>
                      <span className="text-cyan-300 font-semibold">{event.teamSize}</span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-300">
                      <Trophy className="w-4 h-4 text-yellow-400 shrink-0" />
                      <span className="text-slate-400">Prize Pool:</span>
                      <span className="text-yellow-300 font-bold">{event.prizePool}</span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-300">
                      <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                      <span className="text-slate-400">Venue:</span>
                      <span className="text-slate-200 truncate">{event.location}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-yellow-500/20 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveModalEvent(event)}
                    className="flex-1 py-2.5 px-3 rounded-xl border-2 border-yellow-400/70 bg-gradient-to-r from-yellow-950/40 to-blue-950/40 hover:from-yellow-400/20 hover:to-blue-600/20 text-yellow-300 hover:text-yellow-200 text-xs font-orbitron font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 shadow-[0_0_12px_rgba(212,175,55,0.2)] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-105 active:scale-95"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>RULES & INFO</span>
                  </button>

                  <a
                    href={event.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-blue-600 hover:from-yellow-300 hover:to-blue-500 text-black text-xs font-orbitron font-bold shadow-[0_0_18px_rgba(212,175,55,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all duration-300 flex items-center justify-center gap-1.5 hover:scale-105 active:scale-95 overflow-hidden relative group"
                  >
                    <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-600 pointer-events-none" />
                    <span>REGISTER</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* EVENT MODAL POPUP */}
      {activeModalEvent && (
        <div
          onClick={() => setActiveModalEvent(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn cursor-pointer"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#05070e] border border-yellow-500/50 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(212,175,55,0.3)] text-slate-100 cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveModalEvent(null)}
              aria-label="Close rules and details modal"
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 border border-yellow-500/30 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-kodeMono uppercase font-bold text-yellow-300 bg-yellow-950/60 border border-yellow-500/40">
                {activeModalEvent.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-kodeMono font-bold text-blue-300 bg-blue-950/60 border border-blue-500/40">
                {activeModalEvent.eventDate}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-blue-400 mb-4">
              {activeModalEvent.title}
            </h2>

            <p className="text-slate-300 font-spaceGrotesk text-sm sm:text-base leading-relaxed mb-6">
              {activeModalEvent.description}
            </p>

            {/* Key Event Details Box */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-950/80 border border-yellow-500/20 mb-8 text-xs font-kodeMono">
              <div>
                <span className="text-slate-400 block mb-1">Time Limit:</span>
                <span className="text-yellow-300 font-bold text-sm">{activeModalEvent.time}</span>
              </div>
              <div>
                <span className="text-slate-400 block mb-1">Team Size:</span>
                <span className="text-cyan-300 font-bold text-sm">{activeModalEvent.teamSize}</span>
              </div>
              <div>
                <span className="text-slate-400 block mb-1">Prize Pool:</span>
                <span className="text-yellow-300 font-bold text-sm">{activeModalEvent.prizePool}</span>
              </div>
              <div>
                <span className="text-slate-400 block mb-1">Venue:</span>
                <span className="text-slate-200 font-medium text-sm">{activeModalEvent.location}</span>
              </div>
            </div>

            {/* Rules Section */}
            {activeModalEvent.rules && activeModalEvent.rules.length > 0 && (
              <div className="mb-8">
                <h4 className="text-lg font-bold font-orbitron text-yellow-400 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400" />
                  EVENT RULES & REGULATIONS
                </h4>
                <ul className="space-y-2 font-spaceGrotesk text-xs sm:text-sm text-slate-300 list-disc list-inside bg-slate-950/40 p-4 rounded-2xl border border-white/5">
                  {activeModalEvent.rules.map((rule, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Evaluation Criteria */}
            {activeModalEvent.evaluation && activeModalEvent.evaluation.length > 0 && (
              <div className="mb-8">
                <h4 className="text-lg font-bold font-orbitron text-blue-400 mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-400" />
                  EVALUATION CRITERIA
                </h4>
                <ul className="space-y-2 font-spaceGrotesk text-xs sm:text-sm text-slate-300 list-disc list-inside bg-slate-950/40 p-4 rounded-2xl border border-white/5">
                  {activeModalEvent.evaluation.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Event Coordinators */}
            {activeModalEvent.coordinators && activeModalEvent.coordinators.length > 0 && (
              <div className="mb-8">
                <h4 className="text-sm font-bold font-orbitron text-slate-300 mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4 text-yellow-400" />
                  EVENT COORDINATORS
                </h4>
                <div className="flex flex-wrap gap-2 font-kodeMono text-xs text-yellow-300">
                  {activeModalEvent.coordinators.map((coordinator, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-yellow-950/40 border border-yellow-500/30">
                      {coordinator}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Bottom CTA */}
            <div className="pt-4 border-t border-yellow-500/20 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-kodeMono text-slate-400">
                Status: <span className="text-emerald-400 font-bold">Registration Open</span>
              </span>
              <a
                href={activeModalEvent.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-blue-600 text-black text-sm font-orbitron font-bold shadow-[0_0_25px_rgba(212,175,55,0.5)] hover:scale-105 transition-all flex items-center gap-2"
              >
                <span>REGISTER FOR THIS EVENT</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

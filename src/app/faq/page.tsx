"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  HelpCircle,
  Search,
  ChevronDown,
  Sparkles,
  ArrowLeft,
  MessageSquare,
  ShieldAlert,
  ExternalLink,
  BookOpen,
} from "lucide-react";
import { faqData } from "@/data/faq";

const categories = [
  "All",
  "Participation Rules",
  "General Rules",
  "Overview",
  "Eligibility",
  "Registration",
  "Venue & Dates",
  "Certificates & Rewards",
  "Equipment",
];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>("g1"); // default first rule open

  const googleFormUrl = "https://forms.google.com";

  const filteredFaqs = faqData.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;

    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.category && item.category.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen text-slate-100 py-16 px-4 sm:px-8 md:px-16 lg:px-24 pt-32 bg-[#030508] relative overflow-hidden">
      {/* Radiant Background Mesh Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-yellow-500/10 via-blue-600/15 to-yellow-500/10 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600/10 blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-yellow-500/10 blur-[150px] pointer-events-none -z-10" />

      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto mb-12 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/40 bg-yellow-950/30 text-yellow-300 font-kodeMono text-xs uppercase tracking-widest">
          <Sparkles className="w-4 h-4 text-yellow-400" />
          Takshashila University • Itechno 2026
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-blue-400 tracking-tight">
          FAQ & GUIDELINES
        </h1>

        <p className="text-slate-300 font-spaceGrotesk text-base sm:text-lg max-w-2xl mx-auto">
          Everything you need to know about event registration, general code of conduct, venue guidelines, and competition rules for Itechno &apos;26.
        </p>

        <div className="pt-2 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-orbitron text-yellow-400 hover:text-yellow-300 transition-colors bg-yellow-950/20 px-4 py-2 rounded-xl border border-yellow-500/30"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </div>

      {/* Search & Filter Controls */}
      <div className="max-w-4xl mx-auto mb-12 space-y-6">
        {/* Search Input */}
        <div className="relative max-w-xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-yellow-400/70" />
          <input
            type="text"
            placeholder="Search questions, keywords, or rules..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 bg-[#05070e]/90 border border-yellow-500/30 rounded-2xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 font-spaceGrotesk transition-all shadow-[0_0_25px_rgba(0,0,0,0.6)]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-kodeMono text-slate-400 hover:text-yellow-300 px-2 py-1 rounded bg-slate-900"
            >
              CLEAR
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl font-orbitron text-xs font-semibold tracking-wider transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-black shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105"
                  : "bg-[#05070e]/80 text-slate-300 border border-yellow-500/20 hover:border-yellow-400/50 hover:text-yellow-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion Content Container */}
      <div className="max-w-4xl mx-auto space-y-4">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-16 bg-[#05070e]/70 rounded-3xl border border-yellow-500/20 max-w-md mx-auto">
            <HelpCircle className="w-12 h-12 text-yellow-500/40 mx-auto mb-4" />
            <h3 className="text-xl font-orbitron font-bold text-slate-300">
              No Matching Questions
            </h3>
            <p className="text-slate-400 font-spaceGrotesk text-sm mt-2">
              We couldn&apos;t find any questions matching &quot;{searchQuery}&quot;. Try searching for broader terms like &quot;registration&quot;, &quot;rules&quot;, or &quot;id&quot;.
            </p>
          </div>
        ) : (
          filteredFaqs.map((item) => {
            const isOpen = openId === item.id;
            const isGeneralRule = item.category === "General Rules";

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-yellow-400/80 bg-[#070b16] shadow-[0_0_30px_rgba(212,175,55,0.2)]"
                    : "border-yellow-500/20 bg-[#05070e]/80 hover:border-yellow-500/40 hover:bg-[#060912]"
                }`}
              >
                {/* Question Trigger Header */}
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 group"
                >
                  <div className="flex items-start sm:items-center gap-3.5 flex-1">
                    {isGeneralRule ? (
                      <ShieldAlert className={`w-5 h-5 mt-0.5 sm:mt-0 shrink-0 ${isOpen ? "text-yellow-400" : "text-slate-400 group-hover:text-yellow-400"} transition-colors`} />
                    ) : (
                      <HelpCircle className={`w-5 h-5 mt-0.5 sm:mt-0 shrink-0 ${isOpen ? "text-blue-400" : "text-slate-400 group-hover:text-blue-400"} transition-colors`} />
                    )}

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <span className="text-base sm:text-lg font-bold font-orbitron text-slate-100 group-hover:text-yellow-300 transition-colors">
                        {item.question}
                      </span>
                      {item.category && (
                        <span className="self-start sm:self-auto px-2.5 py-0.5 rounded-full text-[10px] font-kodeMono uppercase tracking-wider text-yellow-400 bg-yellow-950/60 border border-yellow-500/30">
                          {item.category}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className={`p-2 rounded-xl bg-slate-900 border border-yellow-500/20 transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180 bg-yellow-400/10 border-yellow-400/50 text-yellow-400" : "text-slate-400 group-hover:text-white"}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Collapsible Answer Content */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 text-slate-300 font-spaceGrotesk text-sm sm:text-base border-t border-yellow-500/15 leading-relaxed animate-fadeIn">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Still Have Questions CTA */}
      <div className="max-w-4xl mx-auto mt-16 p-8 rounded-3xl border border-yellow-500/30 bg-gradient-to-r from-[#05070e] via-[#080d1e] to-[#05070e] shadow-[0_0_40px_rgba(212,175,55,0.15)] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="space-y-2">
          <div className="flex items-center justify-center md:justify-start gap-2 text-yellow-400 font-orbitron font-bold text-lg">
            <MessageSquare className="w-5 h-5" />
            <span>STILL HAVE QUESTIONS?</span>
          </div>
          <p className="text-slate-300 font-spaceGrotesk text-xs sm:text-sm max-w-xl">
            Our event directors and student coordinators are available to help you with event clarifications, team registrations, and venue details.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
          <Link
            href="/contact"
            className="px-5 py-3 rounded-xl border border-yellow-500/40 bg-yellow-950/30 hover:bg-yellow-500/20 text-yellow-300 font-orbitron text-xs font-semibold tracking-wider transition-all flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            <span>CONTACT CREW</span>
          </Link>

          <a
            href={googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-blue-600 hover:from-yellow-300 hover:to-blue-500 text-black font-orbitron text-xs font-bold tracking-wider shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all hover:scale-105 flex items-center gap-2"
          >
            <span>REGISTER NOW</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { INITIAL_MEMORY_SUBMISSIONS, MemorySubmission } from "@/data/memories-data";
import {
  MessageSquareHeart,
  PlusCircle,
  X,
  Upload,
  CheckCircle2,
  AlertCircle,
  Quote,
  School
} from "lucide-react";

export const MemoryWallSection: React.FC = () => {
  const [submissions, setSubmissions] = useState<MemorySubmission[]>(INITIAL_MEMORY_SUBMISSIONS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const [eventAttended, setEventAttended] = useState("");
  const [quote, setQuote] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Load any stored approved / pending submissions from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("itechno_memory_submissions");
      if (stored) {
        const parsed: MemorySubmission[] = JSON.parse(stored);
        // Only show approved
        const approved = parsed.filter((m) => m.status === "approved");
        if (approved.length > 0) {
          setSubmissions((prev) => {
            const ids = new Set(prev.map((p) => p.id));
            const newOnes = approved.filter((a) => !ids.has(a.id));
            return [...prev, ...newOnes];
          });
        }
      }
    } catch {
      // localStorage fallback
    }
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setErrorMessage("Please upload an image file (JPEG, PNG, WebP).");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setErrorMessage("File size must be under 5MB.");
      return;
    }

    setErrorMessage("");
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !college.trim() || !quote.trim()) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    if (!consent) {
      setErrorMessage("Please check the consent box to publish your memory.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    const newSubmission: MemorySubmission = {
      id: `mem-${Date.now()}`,
      name: name.trim(),
      college: college.trim(),
      role: "Symposium Participant",
      eventAttended: eventAttended.trim() || "ITECHNO 2026",
      quote: quote.trim(),
      image: imagePreview || undefined,
      createdAt: new Date().toISOString().split("T")[0],
      status: "pending" // Stored as pending for admin review
    };

    try {
      const stored = localStorage.getItem("itechno_memory_submissions");
      const list: MemorySubmission[] = stored ? JSON.parse(stored) : [];
      list.push(newSubmission);
      localStorage.setItem("itechno_memory_submissions", JSON.stringify(list));

      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setTimeout(() => {
          setIsModalOpen(false);
          setSubmitSuccess(false);
          setName("");
          setCollege("");
          setEventAttended("");
          setQuote("");
          setImagePreview(null);
          setConsent(false);
        }, 2500);
      }, 800);
    } catch {
      setIsSubmitting(false);
      setErrorMessage("Submission failed. Please try again.");
    }
  };

  return (
    <section id="memory-wall" className="relative scroll-mt-28 py-16 sm:py-24 text-slate-100 font-spaceGrotesk overflow-hidden">
      {/* Background Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-r from-pink-600/10 via-purple-600/10 to-blue-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 sm:mb-16">
          <div className="text-center md:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-500/40 bg-gradient-to-r from-slate-950/90 via-pink-950/40 to-slate-950/90 text-pink-300 font-kodeMono text-xs uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(236,72,153,0.25)] backdrop-blur-md">
              <MessageSquareHeart className="w-3.5 h-3.5 text-pink-400" />
              <span>THE MEMORY WALL</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-white to-yellow-400 tracking-tight">
              Your Moment. Our Memories.
            </h2>

            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              Real reflections and heartfelt stories shared by participants, coordinators, and visitors who experienced ITECHNO 2026.
            </p>
          </div>

          {/* SUBMIT MEMORY BUTTON */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="group relative inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-xl font-orbitron font-bold text-xs sm:text-sm text-black bg-gradient-to-r from-pink-400 via-yellow-400 to-blue-500 hover:from-pink-300 hover:to-blue-400 shadow-[0_0_25px_rgba(236,72,153,0.5)] hover:scale-105 active:scale-95 transition-all shrink-0"
          >
            <PlusCircle className="w-4 h-4 text-black group-hover:rotate-90 transition-transform" />
            <span>Leave Your Memory</span>
          </button>
        </div>

        {/* MEMORY CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {submissions.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl p-0.5 bg-gradient-to-b from-white/10 via-white/5 to-white/10 hover:from-pink-500/40 hover:via-yellow-500/30 hover:to-blue-500/40 transition-all duration-500 shadow-[0_10px_35px_rgba(0,0,0,0.6)] hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div className="rounded-[22px] bg-[#050814]/95 border border-white/10 p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="w-7 h-7 text-pink-400/50 group-hover:text-pink-400 transition-colors" />
                    <span className="text-[10px] font-kodeMono uppercase text-yellow-300 bg-yellow-950/40 px-2 py-0.5 rounded border border-yellow-500/30">
                      {item.eventAttended}
                    </span>
                  </div>

                  <p className="text-sm text-slate-200 italic leading-relaxed mb-6 font-spaceGrotesk">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden bg-slate-800 border border-white/20 shrink-0">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-orbitron font-bold text-xs text-yellow-300">
                        {item.name.slice(0, 2).toUpperCase()}
                      </div>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs font-orbitron font-bold text-white truncate">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-slate-400 truncate flex items-center gap-1">
                      <School className="w-3 h-3 text-slate-500 shrink-0" />
                      <span>{item.college}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SUBMIT MEMORY MODAL */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Submit Your Event Memory"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 overflow-y-auto animate-fadeIn"
        >
          <div className="relative w-full max-w-xl rounded-3xl bg-[#050814] border border-pink-500/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(236,72,153,0.3)] my-8">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="mb-6">
              <span className="text-[10px] font-kodeMono uppercase font-bold text-pink-400 tracking-wider">
                COMMUNITY ARCHIVE
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-orbitron text-white mt-1">
                Share Your ITECHNO Memory
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Your submission will be reviewed and published in the official digital archive.
              </p>
            </div>

            {submitSuccess ? (
              <div className="p-8 text-center bg-emerald-950/40 rounded-2xl border border-emerald-500/40">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                <h4 className="text-base font-orbitron font-bold text-white">
                  Memory Submitted Successfully!
                </h4>
                <p className="text-xs text-slate-300 mt-2">
                  Thank you for contributing to the official ITECHNO 2026 archive. It will appear on the memory wall once approved.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-3 rounded-xl bg-red-950/60 border border-red-500/40 text-red-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-orbitron text-slate-300 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 focus:border-pink-400 focus:outline-none text-xs text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-orbitron text-slate-300 mb-1">
                      College / Institution *
                    </label>
                    <input
                      type="text"
                      required
                      value={college}
                      onChange={(e) => setCollege(e.target.value)}
                      placeholder="e.g. Takshashila University"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 focus:border-pink-400 focus:outline-none text-xs text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-orbitron text-slate-300 mb-1">
                    Event Attended or Track
                  </label>
                  <input
                    type="text"
                    value={eventAttended}
                    onChange={(e) => setEventAttended(e.target.value)}
                    placeholder="e.g. Hackverse, Codeathon, Free Fire, Volunteer"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 focus:border-pink-400 focus:outline-none text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-orbitron text-slate-300 mb-1">
                    Your Memory or Reflection *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={quote}
                    onChange={(e) => setQuote(e.target.value)}
                    placeholder="Tell us about your favorite moment, the competition, your team, or what made ITECHNO special for you..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 focus:border-pink-400 focus:outline-none text-xs text-white resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-orbitron text-slate-300 mb-1">
                    Upload a Photo (Optional, Max 5MB)
                  </label>
                  <div className="flex items-center gap-3">
                    <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-kodeMono text-slate-300">
                      <Upload className="w-3.5 h-3.5" />
                      <span>Choose Image</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </label>
                    {imagePreview && (
                      <span className="text-[11px] font-kodeMono text-emerald-400">
                        ✓ Photo attached
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-2">
                  <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-300">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-0.5 rounded border-white/20 text-pink-500 focus:ring-0"
                    />
                    <span>
                      I confirm this is my authentic memory from ITECHNO 2026 and give permission to publish it on the official symposium archive.
                    </span>
                  </label>
                </div>

                <div className="pt-4 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 rounded-xl text-xs font-orbitron text-slate-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 rounded-xl font-orbitron font-bold text-xs text-black bg-gradient-to-r from-pink-400 to-yellow-400 hover:scale-105 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : "Submit for Moderation"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

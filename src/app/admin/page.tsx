"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  OFFICIAL_MEMORIES,
  OFFICIAL_VIDEOS,
  INITIAL_MEMORY_SUBMISSIONS,
  MemoryItem,
  MemorySubmission
} from "@/data/memories-data";
import {
  Lock,
  Shield,
  Upload,
  FolderOpen,
  Film,
  CheckCircle2,
  ExternalLink,
  Search,
  ArrowLeft,
  AlertCircle
} from "lucide-react";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [activeTab, setActiveTab] = useState<"media" | "videos" | "moderation" | "import">("media");

  // State for editable data
  const [memories, setMemories] = useState<MemoryItem[]>(OFFICIAL_MEMORIES);
  const [submissions, setSubmissions] = useState<MemorySubmission[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [saveNotification, setSaveNotification] = useState("");

  // Check existing session
  useEffect(() => {
    const sessionAuth = sessionStorage.getItem("itechno_admin_session");
    if (sessionAuth === "authenticated_2026") {
      setIsAuthenticated(true);
    }

    // Load any user submissions from localStorage
    try {
      const stored = localStorage.getItem("itechno_memory_submissions");
      if (stored) {
        setSubmissions(JSON.parse(stored));
      } else {
        setSubmissions(INITIAL_MEMORY_SUBMISSIONS);
      }
    } catch {
      setSubmissions(INITIAL_MEMORY_SUBMISSIONS);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default executive passphrase for organizers
    if (password === "itechno2026admin" || password === "takshashila@2026") {
      setIsAuthenticated(true);
      sessionStorage.setItem("itechno_admin_session", "authenticated_2026");
      setAuthError("");
    } else {
      setAuthError("Invalid access passphrase. Please contact the Chief Event Directors.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("itechno_admin_session");
  };

  const toggleFeatured = (id: number) => {
    setMemories((prev) =>
      prev.map((m) => (m.id === id ? { ...m, featured: !m.featured } : m))
    );
    showNotice("Featured status updated!");
  };

  const moderateSubmission = (id: string, status: "approved" | "rejected") => {
    const updated = submissions
      .map((s) => (s.id === id ? { ...s, status } : s))
      .filter((s) => status === "approved" || s.id !== id);

    setSubmissions(updated);
    try {
      localStorage.setItem("itechno_memory_submissions", JSON.stringify(updated));
    } catch {}
    showNotice(`Submission ${status === "approved" ? "approved" : "removed"}!`);
  };

  const showNotice = (msg: string) => {
    setSaveNotification(msg);
    setTimeout(() => setSaveNotification(""), 3000);
  };

  // If not authenticated, show secure login gate
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#020408] text-slate-100 flex items-center justify-center p-4 pt-28 font-spaceGrotesk">
        <div className="w-full max-w-md p-8 rounded-3xl bg-[#050814]/90 border border-yellow-500/30 shadow-[0_0_50px_rgba(0,0,0,0.9)] text-center">
          <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center mx-auto mb-5 text-yellow-400">
            <Lock className="w-7 h-7" />
          </div>

          <h1 className="text-2xl font-black font-orbitron text-white">
            ITECHNO &apos;26 Admin Gate
          </h1>
          <p className="text-xs text-slate-400 mt-1 mb-6">
            Authorized Executive Access • Digital Memories &amp; Media Management
          </p>

          {authError && (
            <div className="mb-4 p-3 rounded-xl bg-red-950/60 border border-red-500/40 text-red-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{authError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Organizer Passphrase..."
              className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/20 focus:border-yellow-400 focus:outline-none text-xs text-white placeholder-slate-500"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-xl font-orbitron font-bold text-xs text-black bg-gradient-to-r from-yellow-400 via-amber-400 to-blue-500 hover:scale-105 transition-all shadow-md"
            >
              Unlock Administration Panel
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
            <Link href="/" className="hover:text-yellow-300 flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Archive</span>
            </Link>
            <span className="font-kodeMono text-[10px]">Takshashila University</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020408] text-slate-100 pt-28 pb-20 font-spaceGrotesk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ADMIN HEADER */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-kodeMono uppercase font-bold bg-emerald-950/60 border border-emerald-500/40 text-emerald-300">
                ACTIVE SESSION
              </span>
              <span className="text-xs text-slate-400 font-kodeMono">
                Executive Command
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-blue-400">
              ITECHNO 2026 — Digital Memories Console
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="px-4 py-2 rounded-xl text-xs font-orbitron bg-white/10 hover:bg-white/20 text-slate-300 transition-all flex items-center gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>View Live Website</span>
            </Link>

            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-xl text-xs font-orbitron bg-red-950/40 hover:bg-red-900/60 border border-red-500/40 text-red-300 transition-all"
            >
              Logout
            </button>
          </div>
        </div>

        {/* NOTIFICATION TOAST */}
        {saveNotification && (
          <div className="mb-6 p-3 rounded-xl bg-emerald-950/70 border border-emerald-500/50 text-emerald-300 text-xs font-kodeMono flex items-center gap-2 animate-fadeIn">
            <CheckCircle2 className="w-4 h-4" />
            <span>{saveNotification}</span>
          </div>
        )}

        {/* NAVIGATION TABS */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-white/10 pb-4">
          <button
            onClick={() => setActiveTab("media")}
            className={`px-4 py-2 rounded-xl text-xs font-orbitron flex items-center gap-2 transition-all ${
              activeTab === "media"
                ? "bg-yellow-400 text-black font-bold shadow-md"
                : "bg-white/5 text-slate-300 hover:bg-white/10"
            }`}
          >
            <FolderOpen className="w-3.5 h-3.5" />
            <span>Media Archive ({memories.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("videos")}
            className={`px-4 py-2 rounded-xl text-xs font-orbitron flex items-center gap-2 transition-all ${
              activeTab === "videos"
                ? "bg-yellow-400 text-black font-bold shadow-md"
                : "bg-white/5 text-slate-300 hover:bg-white/10"
            }`}
          >
            <Film className="w-3.5 h-3.5" />
            <span>Video Manager ({OFFICIAL_VIDEOS.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("moderation")}
            className={`px-4 py-2 rounded-xl text-xs font-orbitron flex items-center gap-2 transition-all ${
              activeTab === "moderation"
                ? "bg-yellow-400 text-black font-bold shadow-md"
                : "bg-white/5 text-slate-300 hover:bg-white/10"
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Memory Wall Moderation ({submissions.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("import")}
            className={`px-4 py-2 rounded-xl text-xs font-orbitron flex items-center gap-2 transition-all ${
              activeTab === "import"
                ? "bg-yellow-400 text-black font-bold shadow-md"
                : "bg-white/5 text-slate-300 hover:bg-white/10"
            }`}
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Google Drive Import</span>
          </button>
        </div>

        {/* TAB 1: MEDIA ARCHIVE */}
        {activeTab === "media" && (
          <div>
            <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full sm:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Filter media items..."
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-black/60 border border-white/15 text-xs text-white"
                />
              </div>
              <span className="text-xs font-kodeMono text-slate-400">
                Click ★ to toggle featured status on homepage carousel
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {memories
                .filter(
                  (m) =>
                    !searchTerm ||
                    m.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    m.event.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-2xl bg-[#050814] border border-white/10 flex items-center gap-3.5"
                  >
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-black shrink-0">
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-kodeMono uppercase text-yellow-400 font-bold">
                          {item.event}
                        </span>
                        <button
                          onClick={() => toggleFeatured(item.id)}
                          className={`text-xs px-2 py-0.5 rounded-md font-kodeMono ${
                            item.featured
                              ? "bg-yellow-400 text-black font-bold"
                              : "bg-white/10 text-slate-400 hover:text-white"
                          }`}
                        >
                          {item.featured ? "★ Featured" : "☆ Normal"}
                        </button>
                      </div>
                      <h4 className="text-xs font-orbitron font-bold text-white truncate mt-0.5">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 truncate mt-0.5">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* TAB 2: VIDEO MANAGER */}
        {activeTab === "videos" && (
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 text-xs text-cyan-200 font-kodeMono mb-6">
              ℹ Videos can be embedded directly via Google Drive preview links or uploaded to static storage.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {OFFICIAL_VIDEOS.map((v) => (
                <div
                  key={v.id}
                  className="p-5 rounded-2xl bg-[#050814] border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-kodeMono uppercase text-yellow-400 font-bold">
                        {v.category}
                      </span>
                      <span className="text-xs font-kodeMono text-slate-400">
                        {v.duration}
                      </span>
                    </div>
                    <h3 className="text-base font-orbitron font-bold text-white">
                      {v.title}
                    </h3>
                    <p className="text-xs text-slate-300 mt-2">{v.description}</p>
                    <div className="mt-3 p-2 rounded-lg bg-black/60 border border-white/10 text-[10px] font-kodeMono text-slate-400 break-all">
                      SRC: {v.videoSrc}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                    <a
                      href={v.videoSrc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-kodeMono text-cyan-400 hover:underline flex items-center gap-1"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Test Embed Link</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: MEMORY WALL MODERATION */}
        {activeTab === "moderation" && (
          <div className="space-y-4">
            <p className="text-xs font-kodeMono text-slate-400 mb-4">
              Review memory submissions from attendees. Approve legitimate quotes to display on the public Memory Wall.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {submissions.map((sub) => (
                <div
                  key={sub.id}
                  className="p-5 rounded-2xl bg-[#050814] border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-orbitron font-bold text-white">
                        {sub.name}
                      </span>
                      <span
                        className={`text-[10px] font-kodeMono px-2 py-0.5 rounded-full ${
                          sub.status === "approved"
                            ? "bg-emerald-950/60 border border-emerald-500/40 text-emerald-300"
                            : "bg-amber-950/60 border border-amber-500/40 text-amber-300"
                        }`}
                      >
                        {sub.status.toUpperCase()}
                      </span>
                    </div>

                    <p className="text-xs font-kodeMono text-slate-400 mb-3">
                      {sub.college} • {sub.eventAttended}
                    </p>

                    <p className="text-xs text-slate-200 italic leading-relaxed bg-black/40 p-3 rounded-xl border border-white/5">
                      &ldquo;{sub.quote}&rdquo;
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[10px] font-kodeMono text-slate-500">
                      Date: {sub.createdAt}
                    </span>

                    <div className="flex items-center gap-2">
                      {sub.status !== "approved" && (
                        <button
                          onClick={() => moderateSubmission(sub.id, "approved")}
                          className="px-3 py-1.5 rounded-lg text-xs font-orbitron bg-emerald-500 text-black font-bold hover:scale-105 transition-all"
                        >
                          Approve
                        </button>
                      )}
                      <button
                        onClick={() => moderateSubmission(sub.id, "rejected")}
                        className="px-3 py-1.5 rounded-lg text-xs font-orbitron bg-red-950/60 border border-red-500/40 text-red-300 hover:bg-red-900/60 transition-all"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: GOOGLE DRIVE IMPORT & INSTRUCTIONS */}
        {activeTab === "import" && (
          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-[#050814] border border-yellow-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-yellow-500/10 border border-yellow-500/30 text-yellow-400">
                  <Upload className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-orbitron font-bold text-white">
                    Official Google Drive Folder Sync
                  </h3>
                  <p className="text-xs font-kodeMono text-slate-400">
                    Source: https://drive.google.com/drive/folders/1ZcsMdolYQ-lAIw8qGSadevUhoVOAgeth
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-black/50 border border-white/10 mb-6 space-y-2 text-xs font-kodeMono">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Local Verified Photos:</span>
                  <span className="text-emerald-400 font-bold">45 High-Resolution DSLR Photos</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Optimized WebP Formats:</span>
                  <span className="text-emerald-400 font-bold">Generated in /public/memories/optimized</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Grid Display Thumbnails:</span>
                  <span className="text-emerald-400 font-bold">Generated in /public/memories/thumbnails</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Original Raw Media:</span>
                  <span className="text-yellow-400 font-bold">Preserved in /public/memories_raw</span>
                </div>
              </div>

              <h4 className="text-sm font-orbitron font-bold text-white mb-2">
                How to Import Additional Files or Future Batches:
              </h4>

              <ol className="list-decimal list-inside space-y-2 text-xs text-slate-300 leading-relaxed font-spaceGrotesk">
                <li>
                  Open the official Drive folder:{" "}
                  <a
                    href="https://drive.google.com/drive/folders/1ZcsMdolYQ-lAIw8qGSadevUhoVOAgeth?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:underline inline-flex items-center gap-1"
                  >
                    <span>Google Drive Folder</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>Download any additional photos or video files as a ZIP archive.</li>
                <li>Extract the media into <code className="text-yellow-300">public/memories_raw/</code>.</li>
                <li>
                  Run the automatic optimization script from your terminal:
                  <div className="mt-2 p-3 rounded-xl bg-black border border-white/20 font-kodeMono text-emerald-400 text-xs select-all">
                    python scripts/optimize_and_index.py
                  </div>
                </li>
                <li>The script automatically generates high-speed WebP images and thumbnails without modifying original files!</li>
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

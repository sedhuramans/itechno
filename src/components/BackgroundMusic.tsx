"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const wasPlayingBeforeHidden = useRef(false);
  const MUSIC_VOLUME = 0.35;

  const userInteractedRef = useRef(false);

  useEffect(() => {
    setIsMounted(true);

    if (audioRef.current) {
      audioRef.current.volume = MUSIC_VOLUME;
    }

    // Auto-start on first user interaction anywhere on the document (Chrome autoplay policy)
    const handleFirstInteraction = () => {
      if (userInteractedRef.current) return;
      userInteractedRef.current = true;

      // Decouple audio playback so the user's clicked button registers with 0ms latency
      setTimeout(() => {
        if (audioRef.current && !isPlaying) {
          audioRef.current.volume = MUSIC_VOLUME;
          audioRef.current
            .play()
            .then(() => {
              setIsPlaying(true);
            })
            .catch(() => {
              // Autoplay blocked by browser policy until button is clicked
            });
        }
      }, 0);

      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
    };

    window.addEventListener("click", handleFirstInteraction, { once: true, passive: true });
    window.addEventListener("touchstart", handleFirstInteraction, { once: true, passive: true });
    window.addEventListener("keydown", handleFirstInteraction, { once: true, passive: true });

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Pause only when tab is genuinely hidden/backgrounded, and resume when returning
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!audioRef.current) return;

      if (document.hidden) {
        if (isPlaying) {
          wasPlayingBeforeHidden.current = true;
          audioRef.current.pause();
          setIsPlaying(false);
        }
      } else {
        if (wasPlayingBeforeHidden.current) {
          audioRef.current
            .play()
            .then(() => setIsPlaying(true))
            .catch(() => {});
          wasPlayingBeforeHidden.current = false;
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isPlaying]);

  const toggleMusic = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!audioRef.current) return;

    audioRef.current.volume = MUSIC_VOLUME;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      wasPlayingBeforeHidden.current = false;
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((error) => {
          console.log("Audio playback failed:", error);
          setIsPlaying(false);
        });
    }
  };

  const isGitHubPages = process.env.GITHUB_ACTIONS === "true" || process.env.NEXT_PUBLIC_DEPLOY_TARGET === "gh-pages";
  const basePath = isGitHubPages ? "/itechno" : "";
  const audioSrc = `${basePath}/background-music.mp3`;

  if (!isMounted) return null;

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src={audioSrc}
      >
        <source src={audioSrc} type="audio/mpeg" />
        <source src="/background-music.mp3" type="audio/mpeg" />
      </audio>
      
      {/* Floating Floating Action Widgets (WhatsApp & Sound) */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2.5 sm:gap-3">
        {/* WhatsApp Group Join Button */}
        <a
          href="https://chat.whatsapp.com/BsU6V2xXilU1ymnB6csiVJ"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-emerald-500/40 bg-gradient-to-br from-[#061b14] via-[#0b2b1f] to-[#04120d] text-[#25D366] shadow-[0_8px_30px_rgba(0,0,0,0.85),0_0_20px_rgba(37,211,102,0.3)] transition-all duration-300 hover:scale-110 active:scale-95 hover:border-emerald-400 hover:text-emerald-300 hover:shadow-[0_0_25px_rgba(37,211,102,0.6)] focus:outline-none backdrop-blur-md touch-manipulation"
          aria-label="Join Official WhatsApp Group"
          title="Join Official WhatsApp Group"
        >
          {/* Ambient Glow */}
          <span className="pointer-events-none absolute inset-0 rounded-full bg-emerald-400/10 blur-md group-hover:bg-emerald-400/25 transition-colors" />

          {/* Tooltip on Desktop */}
          <span className="pointer-events-none absolute bottom-full mb-2 hidden sm:group-hover:flex items-center px-2.5 py-1 rounded-md text-[10px] font-kodeMono font-bold tracking-wider text-emerald-300 bg-[#061b14]/95 border border-emerald-500/40 whitespace-nowrap shadow-[0_4px_12px_rgba(0,0,0,0.7)] backdrop-blur-sm">
            JOIN WHATSAPP
          </span>

          {/* Active Ping Indicator */}
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
          </span>

          <div className="relative flex items-center justify-center">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 fill-current group-hover:scale-110 transition-transform"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.1-.476-.15-.677.15-.201.302-.777.98-.953 1.181-.176.201-.351.226-.652.076-.301-.15-1.272-.469-2.424-1.497-.895-.8-1.5-1.788-1.676-2.09-.176-.301-.019-.464.132-.614.135-.135.301-.351.451-.527.151-.176.201-.301.301-.502.101-.201.05-.376-.025-.526-.075-.15-.677-1.633-.928-2.238-.244-.589-.493-.509-.677-.518-.175-.008-.376-.01-.577-.01-.201 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.511 0 1.482 1.079 2.91 1.23 3.111.15.201 2.122 3.24 5.14 4.542.718.31 1.279.495 1.716.634.721.23 1.377.197 1.896.12.578-.087 1.78-.727 2.031-1.43.251-.703.251-1.306.176-1.43-.075-.125-.276-.2-.577-.35zM12.04 2C6.516 2 2.028 6.488 2.028 12.012c0 1.944.557 3.76 1.523 5.307L2 22l4.829-1.512c1.488.877 3.218 1.378 5.211 1.378 5.524 0 10.012-4.488 10.012-10.012 0-5.524-4.488-10.012-10.012-10.012zm0 18.232c-1.724 0-3.32-.516-4.665-1.402l-.334-.22-2.868.898.917-2.796-.239-.356c-.99-1.472-1.543-3.213-1.543-5.044 0-4.544 3.697-8.241 8.241-8.241 4.544 0 8.241 3.697 8.241 8.241 0 4.544-3.697 8.241-8.241 8.241z" />
            </svg>
          </div>
        </a>

        {/* Sound Control Widget */}
        <button
          onClick={toggleMusic}
          className="group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-yellow-500/40 bg-gradient-to-br from-[#0a0f1d] via-[#11192e] to-[#060a14] text-yellow-300 shadow-[0_8px_30px_rgba(0,0,0,0.85),0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300 hover:scale-110 active:scale-95 hover:border-yellow-400 hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] focus:outline-none backdrop-blur-md touch-manipulation"
          aria-label={isPlaying ? "Mute ambient music" : "Play ambient music"}
          title={isPlaying ? "Mute festival soundtrack" : "Play festival soundtrack"}
        >
          {/* Ambient Glow */}
          <span className="pointer-events-none absolute inset-0 rounded-full bg-yellow-400/10 blur-md group-hover:bg-yellow-400/25 transition-colors" />

          {/* Tooltip on Desktop */}
          <span className="pointer-events-none absolute bottom-full mb-2 hidden sm:group-hover:flex items-center px-2.5 py-1 rounded-md text-[10px] font-kodeMono font-bold tracking-wider text-yellow-300 bg-[#0a0f1d]/95 border border-yellow-500/40 whitespace-nowrap shadow-[0_4px_12px_rgba(0,0,0,0.7)] backdrop-blur-sm">
            {isPlaying ? "MUTE SOUND" : "PLAY SOUND"}
          </span>
          
          <div className="relative flex items-center justify-center">
            {isPlaying ? (
              <>
                <Volume2 className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300 group-hover:scale-110 transition-transform" />
                {/* Audio Waves Ping */}
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
                </span>
              </>
            ) : (
              <div className="relative">
                <VolumeX className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 group-hover:text-yellow-300 transition-colors" />
              </div>
            )}
          </div>
        </button>
      </div>
    </>
  );
}

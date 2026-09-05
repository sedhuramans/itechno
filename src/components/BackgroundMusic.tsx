"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const wasPlayingBeforeHidden = useRef(false);
  const MUSIC_VOLUME = 0.35;

  useEffect(() => {
    setIsMounted(true);

    if (audioRef.current) {
      audioRef.current.volume = MUSIC_VOLUME;
    }

    // Auto-start on first user interaction anywhere on the document (Chrome autoplay policy)
    const handleFirstInteraction = () => {
      if (userInteracted) return;
      setUserInteracted(true);

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

      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
    };

    window.addEventListener("click", handleFirstInteraction, { once: true });
    window.addEventListener("touchstart", handleFirstInteraction, { once: true });
    window.addEventListener("keydown", handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
    };
  }, [userInteracted, isPlaying]);

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

  if (!isMounted) return null;

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="/background-music.mp3"
      />
      
      {/* Floating Sound Control Widget */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2">
        <button
          onClick={toggleMusic}
          className="group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-yellow-500/40 bg-gradient-to-br from-[#0a0f1d] via-[#11192e] to-[#060a14] text-yellow-300 shadow-[0_8px_30px_rgba(0,0,0,0.85),0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300 hover:scale-110 active:scale-95 hover:border-yellow-400 hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] focus:outline-none backdrop-blur-md touch-manipulation"
          aria-label={isPlaying ? "Mute ambient music" : "Play ambient music"}
          title={isPlaying ? "Mute festival soundtrack" : "Play festival soundtrack"}
        >
          {/* Ambient Glow */}
          <span className="pointer-events-none absolute inset-0 rounded-full bg-yellow-400/10 blur-md group-hover:bg-yellow-400/25 transition-colors" />
          
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

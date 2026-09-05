"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface LoaderProps {
  finishLoading: () => void;
}

const OrbitalLoader = ({ finishLoading }: LoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Smooth 2-second progression
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsExiting(true), 400); // Slight pause at 100%
          setTimeout(finishLoading, 1200); // Wait for exit animation
          return 100;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(interval);
  }, [finishLoading]);

  // Prevent scrolling while loading
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          exit={{ opacity: 0, scale: 1.08, filter: "blur(20px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030508] overflow-hidden select-none font-sans"
        >
          {/* Luxury Ambient Radial Glow: Sapphire Blue + Imperial Gold */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,_rgba(37,99,235,0.18)_0%,_rgba(212,175,55,0.12)_35%,_rgba(3,5,8,0.95)_70%)]" />

          {/* Central Animated Mechanics */}
          <div className="relative flex items-center justify-center">
            
            {/* Outer Luxury Gold Ring (Slow, Clockwise) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute w-[330px] h-[330px] rounded-full border border-yellow-600/30 shadow-[0_0_30px_rgba(212,175,55,0.2)]"
              style={{ borderTopColor: "#D4AF37", borderRightColor: "transparent" }}
            />

            {/* Middle Electric Sapphire Blue Ring (Medium, Counter-Clockwise) */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute w-[260px] h-[260px] rounded-full border border-blue-600/30 shadow-[0_0_25px_rgba(59,130,246,0.3)]"
              style={{ borderBottomColor: "#3B82F6", borderLeftColor: "transparent" }}
            />

            {/* Inner Champagne Gold Dashed Ring (Pulsing) */}
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[200px] h-[200px] rounded-full border-[2px] border-dashed border-amber-300/40"
            />

            {/* Glowing Obsidian Core */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 25px rgba(212, 175, 55, 0.25), 0 0 40px rgba(59, 130, 246, 0.2)",
                  "0 0 60px rgba(212, 175, 55, 0.5), 0 0 70px rgba(59, 130, 246, 0.4)",
                  "0 0 25px rgba(212, 175, 55, 0.25), 0 0 40px rgba(59, 130, 246, 0.2)",
                ],
              }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-36 h-36 bg-[#070b16]/95 backdrop-blur-2xl rounded-full flex items-center justify-center border border-yellow-500/50"
            >
              {/* Inner Core Border Accent */}
              <div className="absolute inset-2 border border-blue-500/40 rounded-full" />
              
              {/* Percentage Text */}
              <div className="text-white text-4xl font-bold font-orbitron tracking-wider z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] flex items-baseline">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-white to-blue-300">
                  {progress}
                </span>
                <span className="text-blue-400 text-xl font-kodeMono ml-1">%</span>
              </div>
            </motion.div>
          </div>

          {/* Bottom Loading Bar and Status */}
          <div className="absolute bottom-20 flex flex-col items-center gap-3 w-full max-w-sm px-8">
            <div className="flex items-center gap-2.5">
              <Image
                src="https://res.cloudinary.com/k78tbfel/image/upload/v1788616750/dckycpwsln5ds2dtoh9b.png"
                alt="i-TECHNO"
                width={26}
                height={26}
                className="object-contain filter drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]"
              />
              <span className="text-sm font-black font-orbitron tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-blue-400">
                i-TECHNO &apos;26
              </span>
            </div>

            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-blue-400/90 text-xs uppercase tracking-[0.45em] font-kodeMono font-bold"
            >
              INITIALIZING TECH FEST EXPERIENCE
            </motion.div>
            
            {/* Progress Track */}
            <div className="w-full h-[3px] bg-slate-900 border border-white/5 relative overflow-hidden rounded-full shadow-inner">
              {/* Progress Fill (Gold -> White -> Sapphire Blue) */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-yellow-500 via-white to-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.9)]"
              />
            </div>
          </div>
          
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OrbitalLoader;
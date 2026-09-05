"use client";

import { useEffect, useState } from "react";
import { countdownTargetDate } from "@/data/countDown";
import { AnimatePresence, motion } from "framer-motion";

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const difference = countdownTargetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(intervalId);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex items-center justify-center gap-1.5 xs:gap-2.5 sm:gap-4 md:gap-8 px-1 sm:px-2 max-w-full">
      <TimeUnit
        label="DAYS"
        value={timeLeft.days}
        glowColor="shadow-[0_0_25px_rgba(212,175,55,0.3)]"
        borderColor="border-yellow-500/40"
        accentColor="text-yellow-400"
      />
      <TimeUnit
        label="HOURS"
        value={timeLeft.hours}
        glowColor="shadow-[0_0_25px_rgba(59,130,246,0.3)]"
        borderColor="border-blue-500/40"
        accentColor="text-blue-400"
      />
      <TimeUnit
        label="MINS"
        value={timeLeft.minutes}
        glowColor="shadow-[0_0_25px_rgba(212,175,55,0.3)]"
        borderColor="border-yellow-500/40"
        accentColor="text-yellow-400"
      />
      <TimeUnit
        label="SECS"
        value={timeLeft.seconds}
        glowColor="shadow-[0_0_25px_rgba(59,130,246,0.3)]"
        borderColor="border-blue-500/40"
        accentColor="text-blue-400"
      />
    </div>
  );
};

const TimeUnit = ({
  label,
  value,
  glowColor,
  borderColor,
  accentColor,
}: {
  label: string;
  value: number;
  glowColor: string;
  borderColor: string;
  accentColor: string;
}) => {
  return (
    <div className="flex flex-col items-center group flex-1 max-w-[80px] sm:max-w-[100px] md:max-w-[120px]">
      {/* Label with Luxury Tech feel */}
      <span className={`text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs font-bold tracking-[0.15em] sm:tracking-[0.25em] font-kodeMono ${accentColor} mb-1.5 sm:mb-2.5 md:mb-3 group-hover:text-white transition-colors`}>
        {label}
      </span>

      <div
        className={`relative w-full aspect-[4/5] max-h-16 sm:max-h-24 md:max-h-32 flex items-center justify-center bg-[#050811] border sm:border-2 ${borderColor} rounded-lg sm:rounded-xl overflow-hidden shadow-2xl ${glowColor}`}
      >
        {/* Decorative Luxury Lines */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

        {/* Subtle Scanline Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_4px]" />

        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.3, ease: "circOut" }}
            className="text-xl xs:text-2xl sm:text-4xl md:text-6xl font-orbitron font-black text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]"
          >
            {value.toString().padStart(2, "0")}
          </motion.span>
        </AnimatePresence>

        {/* Glossy Reflection */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default CountdownTimer;

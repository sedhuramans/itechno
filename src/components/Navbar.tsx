"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Home,
  Menu,
  Users,
  Film,
  Trophy,
  Milestone,
  MessageSquareHeart,
  Images,
  Sparkles,
  Lock
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { icon: <Home size={16} />, text: "Home", navigateTo: "/#home" },
    { icon: <Images size={16} />, text: "Memories", navigateTo: "/gallery" },
    { icon: <Film size={16} />, text: "Videos", navigateTo: "/#videos" },
    { icon: <Trophy size={16} />, text: "Hall of Fame", navigateTo: "/#hall-of-fame" },
    { icon: <Milestone size={16} />, text: "Journey", navigateTo: "/#journey" },
    { icon: <Users size={16} />, text: "Our Team", navigateTo: "/teams" },
    { icon: <MessageSquareHeart size={16} />, text: "Memory Wall", navigateTo: "/#memory-wall" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full transition-all duration-500 ease-in-out px-2 sm:px-4",
        isScrolled ? "max-w-7xl mt-1 sm:mt-2 py-2 sm:py-3" : "max-w-full mt-0 pt-3 sm:pt-4 pb-2 sm:pb-3"
      )}
    >
      {/* Luxury Bar Container */}
      <div
        className={cn(
          "relative flex items-center justify-between px-3 sm:px-6 md:px-7 transition-all duration-500",
          "bg-[#05070e]/90 backdrop-blur-2xl border border-yellow-500/30 shadow-[0_12px_45px_rgba(0,0,0,0.85)]",
          isScrolled
            ? "rounded-xl sm:rounded-2xl py-2 sm:py-2.5"
            : "rounded-none border-x-0 border-t-0 bg-[#030508]/80 shadow-none py-2.5 sm:py-3.5"
        )}
      >
        {/* Top Gold Hairline Highlight */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/40 via-blue-500/40 to-transparent pointer-events-none" />

        {/* BRANDING: Itechno Tech Insignia */}
        <Link href="/#home" className="flex items-center gap-2.5 sm:gap-3 group flex-shrink-0">
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-black/90 border border-blue-500/40 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.4)] group-hover:border-yellow-400 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] transition-all overflow-hidden p-1 flex-shrink-0">
            <Image
              src="https://res.cloudinary.com/k78tbfel/image/upload/v1788616750/dckycpwsln5ds2dtoh9b.png"
              alt="i-TECHNO Icon"
              width={32}
              height={32}
              className="object-contain filter drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] group-hover:scale-110 transition-transform"
            />
          </div>
          <div className="flex flex-col flex-shrink-0">
            <span className="text-sm sm:text-base md:text-lg font-black font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-blue-400 tracking-wider whitespace-nowrap inline-block">
              ITECHNO &apos;26
            </span>
            <span className="text-[7.5px] sm:text-[9px] font-kodeMono uppercase text-yellow-300/90 tracking-widest whitespace-nowrap inline-block">
              OFFICIAL MEMORIES ARCHIVE
            </span>
          </div>
        </Link>

        {/* NAVIGATION LINKS (Desktop) */}
        <div className="hidden xl:flex items-center space-x-1 flex-shrink-0">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.navigateTo}
              className="relative px-2.5 lg:px-3 py-1.5 flex items-center space-x-1.5 group hover-target whitespace-nowrap"
            >
              <span className="text-yellow-400 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300">
                {item.icon}
              </span>
              <span className="text-[11px] lg:text-xs font-orbitron font-medium tracking-[0.08em] uppercase text-slate-200 group-hover:text-yellow-300 transition-colors whitespace-nowrap">
                {item.text}
              </span>
            </Link>
          ))}

          {/* Admin Link */}
          <Link
            href="/admin"
            className="p-2 text-slate-400 hover:text-yellow-300 transition-colors rounded-lg hover:bg-white/5"
            title="Organizer Admin Portal"
            aria-label="Organizer Admin Portal"
          >
            <Lock size={15} />
          </Link>

          {/* PRIMARY CTA: Relive ITECHNO */}
          <Link
            href="/gallery"
            className="ml-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold font-orbitron bg-gradient-to-r from-yellow-400 via-amber-400 to-blue-500 text-black hover:from-yellow-300 hover:to-blue-400 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-all hover:scale-105 whitespace-nowrap flex-shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span>RELIVE ITECHNO</span>
          </Link>
        </div>

        {/* MOBILE TOGGLE & CTA */}
        <div className="flex items-center gap-2 sm:gap-3 xl:hidden">
          <Link
            href="/gallery"
            className="px-3 py-1 sm:py-1.5 rounded-lg text-[10px] sm:text-xs font-bold font-orbitron bg-gradient-to-r from-yellow-400 to-blue-500 text-black shadow-[0_0_12px_rgba(212,175,55,0.4)] whitespace-nowrap flex items-center gap-1"
          >
            <Sparkles className="w-3 h-3 text-black" />
            <span>RELIVE</span>
          </Link>

          <Sheet>
            <SheetTrigger
              className="p-1.5 sm:p-2 text-yellow-400 hover:bg-yellow-400/10 rounded-lg transition-colors focus:outline-none"
              aria-label="Open Navigation Menu"
            >
              <Menu size={22} className="sm:w-6 sm:h-6" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-[#05070e]/95 border-l border-yellow-500/30 backdrop-blur-2xl max-w-xs sm:max-w-sm overflow-y-auto"
            >
              <div className="flex flex-col space-y-4 mt-8 px-2">
                <div className="flex items-center gap-3 pb-5 border-b border-yellow-500/20">
                  <div className="relative w-8 h-8 rounded-lg bg-black/80 border border-blue-500/40 p-1">
                    <Image
                      src="https://res.cloudinary.com/k78tbfel/image/upload/v1788616750/dckycpwsln5ds2dtoh9b.png"
                      alt="i-TECHNO Icon"
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <span className="font-orbitron font-black text-sm text-yellow-300 block">
                      ITECHNO &apos;26
                    </span>
                    <span className="text-[8px] font-kodeMono uppercase text-slate-400">
                      Takshashila University
                    </span>
                  </div>
                </div>

                {navItems.map((item, index) => (
                  <SheetClose asChild key={index}>
                    <Link
                      href={item.navigateTo}
                      className="flex items-center space-x-3 p-2 rounded-xl text-sm font-orbitron text-slate-200 hover:text-yellow-400 hover:bg-white/5 transition-all"
                    >
                      <span className="text-yellow-400">{item.icon}</span>
                      <span className="tracking-wide uppercase font-medium">
                        {item.text}
                      </span>
                    </Link>
                  </SheetClose>
                ))}

                <SheetClose asChild>
                  <Link
                    href="/admin"
                    className="flex items-center space-x-3 p-2 rounded-xl text-sm font-orbitron text-slate-400 hover:text-yellow-300 hover:bg-white/5 transition-all"
                  >
                    <Lock size={16} />
                    <span className="tracking-wide uppercase font-medium">
                      Admin Portal
                    </span>
                  </Link>
                </SheetClose>

                <div className="pt-4 mt-2 border-t border-yellow-500/20">
                  <SheetClose asChild>
                    <Link
                      href="/gallery"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-orbitron font-bold text-xs bg-gradient-to-r from-yellow-400 to-blue-500 text-black shadow-lg"
                    >
                      <Sparkles className="w-4 h-4 text-black" />
                      <span>RELIVE ALL MEMORIES</span>
                    </Link>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

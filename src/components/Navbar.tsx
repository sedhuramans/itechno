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
  Mail,
  Sparkles,
  HelpCircle,
  Images,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const googleFormUrl = "https://forms.google.com";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { icon: <Home size={18} />, text: "Home", navigateTo: "/#home" },
    { icon: <Sparkles size={18} />, text: "Events", navigateTo: "/events" },
    { icon: <HelpCircle size={18} />, text: "FAQ", navigateTo: "/faq" },
    { icon: <Users size={18} />, text: "Crew", navigateTo: "/teams" },
    { icon: <Images size={18} />, text: "Gallery", navigateTo: "/gallery" },
    { icon: <Mail size={18} />, text: "Contact", navigateTo: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full transition-all duration-500 ease-in-out px-4",
        isScrolled ? "max-w-7xl mt-2 py-3" : "max-w-full mt-0 pt-5 pb-3",
      )}
    >
      {/* Main Luxury Bar Container */}
      <div
        className={cn(
          "relative flex items-center justify-between px-5 sm:px-7 transition-all duration-500",
          "bg-[#05070e]/85 backdrop-blur-2xl border border-yellow-500/30 shadow-[0_12px_45px_rgba(0,0,0,0.85)]",
          isScrolled
            ? "rounded-2xl py-2.5"
            : "rounded-none border-x-0 border-t-0 bg-[#030508]/60 shadow-none py-3.5",
        )}
      >
        {/* Top Gold Hairline Highlight */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/40 via-blue-500/40 to-transparent pointer-events-none" />

        {/* BRANDING: Itechno Tech Insignia */}
        <Link href="/#home" className="flex items-center gap-3 group flex-shrink-0 min-w-max">
          <div className="relative w-9 h-9 rounded-xl bg-black/90 border border-blue-500/40 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.4)] group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all overflow-hidden p-1 flex-shrink-0">
            <Image
              src="https://res.cloudinary.com/k78tbfel/image/upload/v1788616750/dckycpwsln5ds2dtoh9b.png"
              alt="i-TECHNO Icon"
              width={32}
              height={32}
              className="object-contain filter drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] group-hover:scale-110 transition-transform"
            />
          </div>
          <div className="flex flex-col flex-shrink-0 min-w-max">
            <span className="text-base sm:text-lg font-black font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-blue-400 tracking-wider whitespace-nowrap inline-block">
              ITECHNO &apos;26
            </span>
            <span className="text-[9px] font-kodeMono uppercase text-yellow-200/90 tracking-widest whitespace-nowrap inline-block">
              OFFICIAL CREW &amp; EVENTS
            </span>
          </div>
        </Link>

        {/* NAVIGATION LINKS */}
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
              <span className="text-[11px] lg:text-xs font-orbitron font-medium tracking-[0.1em] uppercase text-slate-200 group-hover:text-yellow-300 transition-colors whitespace-nowrap">
                {item.text}
              </span>
            </Link>
          ))}

          {/* Nav Register CTA */}
          <a
            href={googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold font-orbitron bg-gradient-to-r from-yellow-400 via-yellow-500 to-blue-600 text-black hover:from-yellow-300 hover:to-blue-500 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-all hover:scale-105 whitespace-nowrap flex-shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span>REGISTER</span>
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <div className="flex items-center gap-3 xl:hidden">
          <a
            href={googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-lg text-xs font-bold font-orbitron bg-gradient-to-r from-yellow-400 to-blue-600 text-black shadow-[0_0_12px_rgba(212,175,55,0.4)]"
          >
            REGISTER
          </a>

          <Sheet>
            <SheetTrigger
              className="p-2 text-yellow-400 hover:bg-yellow-400/10 rounded-lg transition-colors"
              aria-label="Open Navigation Menu"
            >
              <Menu size={26} />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-[#05070e]/95 border-l border-yellow-500/30 backdrop-blur-2xl"
            >
              <div className="flex flex-col space-y-6 mt-12 px-4">
                {navItems.map((item, index) => (
                  <SheetClose asChild key={index}>
                    <Link
                      href={item.navigateTo}
                      className="flex items-center space-x-4 text-lg font-orbitron text-slate-200 hover:text-yellow-400 transition-colors"
                    >
                      <span className="text-yellow-400">{item.icon}</span>
                      <span className="tracking-widest uppercase">
                        {item.text}
                      </span>
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

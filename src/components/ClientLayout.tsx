"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import SplashCursor from "@/components/SplashCursor";
import BackgroundMusic from "@/components/BackgroundMusic";
import Galaxy from "@/components/Galaxy";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // Default to lightweight mobile background during initial SSR/hydration
  const [lowPerformanceMode, setLowPerformanceMode] = useState(false);

  useEffect(() => {
    // Only trigger opening loader on the home page on initial visit
    const isHomePage = pathname === "/";
    const alreadyLoaded = sessionStorage.getItem("itechno_initial_loader");

    if (isHomePage && !alreadyLoaded) {
      setLoading(true);
    }
  }, [pathname]);

  const handleFinishLoading = () => {
    sessionStorage.setItem("itechno_initial_loader", "true");
    setLoading(false);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const checkPerformanceProfile = () => {
      const isTouch = window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768;
      setIsMobile(isTouch);

      const nav = navigator as Navigator & { deviceMemory?: number };
      const lowCpu = navigator.hardwareConcurrency > 0 && navigator.hardwareConcurrency <= 4;
      const lowMemory = typeof nav.deviceMemory === "number" && nav.deviceMemory <= 4;
      const reducedMotion = mediaQuery.matches;
      setLowPerformanceMode(lowCpu || lowMemory || reducedMotion || isTouch);
    };

    let resizeTimer: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(checkPerformanceProfile, 150);
    };

    checkPerformanceProfile();
    mediaQuery.addEventListener("change", checkPerformanceProfile);
    window.addEventListener("resize", debouncedResize, { passive: true });

    return () => {
      clearTimeout(resizeTimer);
      mediaQuery.removeEventListener("change", checkPerformanceProfile);
      window.removeEventListener("resize", debouncedResize);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0 -z-20 transform-gpu">
        <Galaxy
          mouseRepulsion={!isMobile && !lowPerformanceMode}
          mouseInteraction={!isMobile && !lowPerformanceMode}
          density={isMobile || lowPerformanceMode ? 0.45 : 0.75}
          glowIntensity={isMobile || lowPerformanceMode ? 0.12 : 0.22}
          saturation={0}
          hueShift={140}
          twinkleIntensity={isMobile || lowPerformanceMode ? 0.12 : 0.25}
          rotationSpeed={isMobile || lowPerformanceMode ? 0.02 : 0.05}
          repulsionStrength={isMobile || lowPerformanceMode ? 0.6 : 1.2}
          autoCenterRepulsion={0}
          starSpeed={isMobile || lowPerformanceMode ? 0.2 : 0.35}
          speed={isMobile || lowPerformanceMode ? 0.7 : 0.9}
          renderScale={isMobile || lowPerformanceMode ? 0.35 : 0.55}
          maxFPS={isMobile || lowPerformanceMode ? 35 : 50}
          numLayers={isMobile || lowPerformanceMode ? 1 : 2}
        />
      </div>
      <div className="pointer-events-none fixed inset-0 -z-10 bg-black/45" />

      {loading && <Loader finishLoading={handleFinishLoading} />}

      <div className="relative z-10">
        {!isMobile && <SplashCursor />}
        <Navbar />
        {children}
        <Footer />
        <BackgroundMusic />
      </div>
    </div>
  );
}

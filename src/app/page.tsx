import React from "react";
import { CinematicHero } from "@/components/home/CinematicHero";
import { EventMemoriesGallery } from "@/components/gallery/EventMemoriesGallery";
import { VideoMemoriesSection } from "@/components/videos/VideoMemoriesSection";
import { HallOfFameSection } from "@/components/hall-of-fame/HallOfFameSection";
import { EventJourneyTimeline } from "@/components/timeline/EventJourneyTimeline";
import { PeopleAppreciationSection } from "@/components/people/PeopleAppreciationSection";
import { MemoryWallSection } from "@/components/memory-wall/MemoryWallSection";
import { NextYearTeaser } from "@/components/next-year/NextYearTeaser";
import HomeContactSection from "@/components/home/HomeContactSection";

export const metadata = {
  title: "ITECHNO 2026 | Official Memories, Highlights & Hall of Fame",
  description:
    "Relive ITECHNO 2026 at Takshashila University through event photographs, competition highlights, memorable moments, and the people who made it special.",
};

const Home = () => {
  return (
    <main className="relative min-h-screen bg-[#020408] text-slate-100 overflow-x-hidden selection:bg-yellow-400 selection:text-black">
      {/* Background Cyber Ambient Atmosphere */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.15),rgba(255,255,255,0))]" />

      {/* 1. CINEMATIC HERO (ANTICIPATION) */}
      <section id="home">
        <CinematicHero />
      </section>

      {/* 2. EVENT MEMORIES GALLERY (MEMORIES) */}
      <section id="memories">
        <EventMemoriesGallery id="memories-section" />
      </section>

      {/* 3. VIDEO MEMORIES & AFTERMOVIE (EXCITEMENT) */}
      <section id="videos">
        <VideoMemoriesSection />
      </section>

      {/* 4. WINNERS & ACHIEVEMENTS (ACHIEVEMENTS) */}
      <section id="hall-of-fame">
        <HallOfFameSection />
      </section>

      {/* 5. EVENT JOURNEY TIMELINE (THE JOURNEY) */}
      <section id="journey">
        <EventJourneyTimeline />
      </section>

      {/* 6. THE PEOPLE BEHIND ITECHNO (GRATITUDE) */}
      <section id="our-team">
        <PeopleAppreciationSection />
      </section>

      {/* 7. THE MEMORY WALL (COMMUNITY STORIES) */}
      <section id="memory-wall">
        <MemoryWallSection />
      </section>

      {/* 8. NEXT YEAR TEASER (THE NEXT YEAR) */}
      <section id="next-edition">
        <NextYearTeaser />
      </section>

      {/* Direct Contact Details Section */}
      <section id="contact">
        <HomeContactSection />
      </section>
    </main>
  );
};

export default Home;
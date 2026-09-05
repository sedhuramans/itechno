import LandingSection from "@/components/home/LandingSection";
import { EventGallery } from "@/components/gallery/EventGallery";
import HomeContactSection from "@/components/home/HomeContactSection";

const Home = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 bg-black/60 pointer-events-none" />
      <div className="absolute inset-0 -z-10 bg-black/40 pointer-events-none" />
      <LandingSection />

      {/* Interactive Event Gallery on Home */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <EventGallery id="gallery" />
      </div>

      {/* Direct Contact Details Section (Without Images) */}
      <HomeContactSection />
    </div>
  );
};

export default Home;
import { Banner } from "@/components/Banner";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { TechStackMarquee } from "@/components/sections/TechStackMarquee";
import { AboutSection } from "@/components/sections/AboutSection";
import { AwardsSection } from "@/components/sections/AwardsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ScrollBehavior } from "@/layouts/ScrollBehavior";

export function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollBehavior />
      <header className="h-[var(--header-height)] flex flex-col">
        <Banner />
        <Nav />
      </header>
      <main id="main" className="flex-1">
        <Hero />
        <hr className="border-t border-gray-light mx-6 md:mx-10" />
        <AboutSection />
        <hr className="border-t border-gray-light mx-6 md:mx-10" />
        <AchievementsSection />
        <TechStackMarquee />
        <hr className="border-t border-gray-light mx-6 md:mx-10" />
        <AwardsSection />
        <hr className="border-t border-gray-light mx-6 md:mx-10" />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

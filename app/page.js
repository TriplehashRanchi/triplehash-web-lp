import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import PainPoints from "@/components/PainPoints";
import Solutions from "@/components/Solutions";
import FourLayers from "@/components/FourLayers";
import ProcessSection from "@/components/ProcessSection";
import BeforeAfter from "@/components/BeforeAfter";
import LifeAfter from "@/components/LifeAfter";
import FounderCapacity from "@/components/FounderCapacity";
import ApplicationSteps from "@/components/ApplicationSteps";
import FaqSection from "@/components/FaqSection";
import StickyMobileFooter from "@/components/StickyMobileFooter";
import MetaPixel from "@/components/MetaPixel";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#042717] text-white pb-20 md:pb-0">
      <MetaPixel eventName="PageView" scriptId="meta-pixel-landing" />
      <Hero />
      <LogoMarquee />
      <PainPoints />
      <Solutions />
      <FourLayers />
      <ProcessSection />
      <BeforeAfter />
      <LifeAfter />
      <FounderCapacity />
      <ApplicationSteps />
      <FaqSection />
      <StickyMobileFooter />
    </main>
  );
}


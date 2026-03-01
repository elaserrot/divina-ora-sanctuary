import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import ServicesSection from "@/components/ServicesSection";
import KitSection from "@/components/KitSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import VisualDivider from "@/components/VisualDivider";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import lightCurtains from "@/assets/light-curtains.png";
import natureLight from "@/assets/nature-light.png";

const Index = () => (
  <main className="bg-background">
    <Navbar />
    <HeroSection />
    <div className="h-screen" />
    <div className="relative z-10">
      <div className="h-40 bg-gradient-to-b from-transparent to-background -mt-40" />
      <div className="bg-background">
        <StorySection />
        <VisualDivider image={lightCurtains} alt="Luz suave entrando por ventanas" />
        <ServicesSection />
        <VisualDivider image={natureLight} alt="Naturaleza serena con luz dorada" />
        <KitSection />
        <TestimonialsSection />
        <CTASection />
        <FooterSection />
      </div>
    </div>
  </main>
);

export default Index;

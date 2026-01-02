import TerminalHeader from "@/components/TerminalHeader";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PassionsSection from "@/components/PassionsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TerminalHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <PassionsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

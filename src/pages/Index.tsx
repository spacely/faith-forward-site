import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import WhyHeritageSection from "@/components/WhyHeritageSection";
import CommitmentsSection from "@/components/CommitmentsSection";
import PastorSection from "@/components/PastorSection";
import VisitSection from "@/components/VisitSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <WelcomeSection />
        <WhyHeritageSection />
        <CommitmentsSection />
        <PastorSection />
        <VisitSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

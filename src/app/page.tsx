import Hero from "./components/home/Hero";
import ProblemSection from "./components/home/ProblemSection";
import ServicesGrid from "./components/home/ServicesGrid";
import WhyPinnacle from "./components/home/WhyPinnacle";
import ApproachSection from "./components/home/ApproachSection";
import FirewallSection from "./components/home/FirewallSection";
import ZeroTrustSection from "./components/home/ZeroTrustSection";
import IndustriesSection from "./components/home/IndustriesSection";
import CtaSection from "./components/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ServicesGrid />
      <WhyPinnacle />
      <ApproachSection />
      <FirewallSection />
      <ZeroTrustSection />
      <IndustriesSection />
      <CtaSection />
    </>
  );
}
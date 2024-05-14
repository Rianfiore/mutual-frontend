import { CoverageServicesSection } from "./models/CoverageServicesSection";
import { Footer } from "./models/Footer";
import { Header } from "./models/Header";
import { InsuranceCoverageSection } from "./models/InsuranceCoverageSection";
import { LocationSection } from "./models/LocationSection";
import { MainHero } from "./models/MainHero";

export function LandingPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center">
        <MainHero />
        <InsuranceCoverageSection />
        <CoverageServicesSection />
        <LocationSection />
      </main>
      <Footer />
    </>
  );
}

import { CarInsuranceSection } from "./models/CarInsuranceSection";
import { CoverageServicesSection } from "./models/CoverageServicesSection";
import { Footer } from "./models/Footer";
import { Header } from "./models/Header";
import { HealthInsuranceSection } from "./models/HealthInsuranceSection";
import { InsuranceCoverageSection } from "./models/InsuranceCoverageSection";
import { InsurancesSection } from "./models/InsurancesSection";
import { LocationSection } from "./models/LocationSection";
import { MainHero } from "./models/MainHero";
import { OtherInsuranceSection } from "./models/OtherInsuranceSection";
import { PartnershipSection } from "./models/PartnershipSection";

export function LandingPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center">
        <MainHero />
        <InsuranceCoverageSection />
        <CoverageServicesSection />
        <CarInsuranceSection />
        <InsurancesSection />
        <HealthInsuranceSection />
        <PartnershipSection />
        <OtherInsuranceSection />
        <LocationSection />
      </main>
      <Footer />
    </>
  );
}

import ContactPage from "../../sections/Contact";
import CTASection from "../../sections/CTASection";
import FAQSection from "../../sections/FAQSection";
import FootprintSection from "../../sections/FootprintSection";
import Hero from "../../sections/Hero";
import ImpactSection from "../../sections/ImpactSection";
import PartnersSection from "../../sections/PartnersSection";
import ReasonsSection from "../../sections/ReasonsSection";
import ServicesSection from "../../sections/ServicesSection";
import TestimonialSection from "../../sections/TestimonialSection";
import PartnerSections from "../../sections/PartnerSection";

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesSection />
      <ImpactSection />
      <ReasonsSection />
      <CTASection />
      <PartnersSection />
      <FootprintSection />
      <TestimonialSection />
      <ContactPage />
      <FAQSection />
      <PartnerSections/>
    </>
  );
};

export default Home;
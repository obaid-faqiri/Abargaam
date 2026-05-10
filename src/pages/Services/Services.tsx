import ServicesAdvantage from "../../sections/ServicesSections/ServicesAdvantage";
import ServicesGrid from "../../sections/ServicesSections/ServicesGrid";
import ServicesHero from "../../sections/ServicesSections/ServicesHero";
import PartnerSection from "../../sections/PartnerSection";

const ServicesSections = () => {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServicesAdvantage />
      <PartnerSection />
    </>
  );
};

export default ServicesSections;

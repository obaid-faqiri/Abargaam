import PartnerSection from "../PartnerSection";
import ContactFormSection from "./ContactFormSection";
import ContactHero from "./ContactHero";
import ContactInfoCards from "./ContactInfoCards";

const ContactSection = () => {
  return (
    <>
      <ContactHero />
      <ContactFormSection />
      <ContactInfoCards />
      <PartnerSection />
    </>
  );
};

export default ContactSection;
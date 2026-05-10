import PartnerSection from "../PartnerSection";
import AboutHero from "./AboutHero";
import ExperienceSection from "./ExperienceSection";
import TeamSection from "./TeamSection";
import VisionMission from "./VisionMission";

const AboutSection = () => {
  return (
    <>
      <AboutHero />
      <VisionMission />
      <TeamSection />
      <ExperienceSection />

      {/* repeated from Home */}
      <PartnerSection />
    </>
  );
};

export default AboutSection;
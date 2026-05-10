import PartnerSection from "../PartnerSection";
import BlogGrid from "./BlogGrid";
import BlogHero from "./BlogHero";
import FeaturedReads from "./FeaturedReads";

const BlogSection = () => {
  return (
    <>
      <BlogHero />
      <FeaturedReads />
      <BlogGrid />
      <PartnerSection />
    </>
  );
};

export default BlogSection;
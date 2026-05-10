import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Services } from "../pages/Services";
import { Blog } from "../pages/Blog";
import { Contact } from "../pages/Contact";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default RoutesConfig;c:\Users\delll\OneDrive\Desktop\WEB DESIGN PROJECTS\`Projects I Did\Faqiri37_Findit
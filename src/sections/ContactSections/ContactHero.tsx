import { motion } from "framer-motion";
import { contactHero } from "./contact.data";
import { Link } from "react-router-dom";

const ContactHero = () => {
  return (
    <section className="bg-[#DDE6EF] px-4 pt-8 sm:px-6 lg:px-10 xl:px-6">
      <div className="mx-auto max-w-[1760px]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[350px] sm:h-[450px] lg:h-[650px] overflow-hidden rounded-[8px] bg-black"
        >
          <img
            src={contactHero.image}
            alt={contactHero.title}
            className="object-cover w-full h-full opacity-65"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-black/10" />

          <div className="absolute left-6 top-8 sm:left-8 sm:top-12">
            <h1 className="max-w-[300px] text-[28px] font-medium leading-[1.05] text-white sm:text-[31px]">
              {contactHero.title}
            </h1>
          </div>

          <div className="absolute bottom-5 right-6 text-[12px] font-semibold text-white sm:right-8">
            <Link to="/" className="hover:text-[#F7931D]">
              Home
            </Link>{" "}
            /{" "}
            <Link to="/contact-us" className="hover:text-[#F7931D]">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
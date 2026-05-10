import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../../assets/images/Services/1.webp";

const ServicesHero = () => {
  return (
    <section className="bg-[#DDE6EF] px-4 pt-4 sm:px-6 lg:px-10 xl:px-6">
      <div className="mx-auto max-w-[1760px]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-auto sm:h-[560px] lg:h-[600px] overflow-hidden rounded-[8px] bg-black"
        >
          <img
            src={heroImage}
            alt="Advanced Logistics Services"
            className="object-cover w-full h-full opacity-60"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-black/10" />

          <div className="absolute left-6 top-8 sm:left-8 sm:top-12">
            <h1 className="max-w-[250px] text-[28px] font-medium leading-[1.05] text-white sm:text-[31px]">
              Advanced Logistics Services
            </h1>
          </div>

          <div className="absolute bottom-5 right-6 text-[15px] font-semibold text-white sm:right-8">
            {/* Use React Router's Link for routing */}
            <Link to="/" className="hover:text-[#F7931D]">
              Home
            </Link>{" "}
            /{" "}
            <Link to="/services" className="hover:text-[#F7931D]">
              Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;

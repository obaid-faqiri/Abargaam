import { motion, type Variants } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ctaData } from "./cta.data";

// ✅ FIX: properly typed Variants
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const CTASection = () => {
  return (
    <section className="bg-[#EEF2F3] px-4 py-4 sm:px-6 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-7xl border-t border-[#D9DEE4] pt-3">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative overflow-hidden rounded-[6px] shadow-sm"
        >
          <motion.div
            variants={fadeIn}
            className="relative h-[520px] sm:h-[650px] lg:h-[790px]"
          >
            <img
              src={ctaData.image}
              alt={ctaData.title}
              className="object-cover w-full h-full"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#04111F]/95 via-[#04111F]/35 to-[#04111F]/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#04111F]/60 via-transparent to-transparent" />

            <div className="absolute z-20 left-4 top-4 sm:left-6 sm:top-6">
              <h3 className="text-[22px] font-light tracking-wide text-white/90 sm:text-[28px]">
                Faqiri
              </h3>
            </div>

            <motion.div
              variants={fadeUp}
              className="absolute bottom-6 left-4 z-20 max-w-[330px] sm:bottom-8 sm:left-7 sm:max-w-[520px]"
            >
              <h2 className="text-[32px] font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-[42px] lg:text-[56px]">
                Need dependable support
                <br />
                across Afghanistan?
              </h2>

              <Link
                to="/contact"
                className="group relative mt-6 inline-flex h-[46px] min-w-[170px] items-center justify-center overflow-hidden rounded-[5px] bg-white px-5 text-[13px] font-semibold text-[#0E2341] shadow-sm sm:h-[52px] sm:min-w-[190px] sm:text-[14px]"
              >
                <span className="absolute bottom-0 left-0 h-0 w-full bg-[#F7931D] transition-all duration-500 ease-out group-hover:h-full" />

                <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
                  {ctaData.buttonText}
                  <FaArrowRight className="text-[11px] transition-transform duration-300 group-hover:-rotate-45" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

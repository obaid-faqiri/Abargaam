import { motion } from "framer-motion";
import oneImage from "../../assets/images/Home/20.png";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const PartnerSection = () => {
  return (
    <section className="bg-[#EEF2F3] px-4 py-8 lg:px-12 xl:px-20">
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center lg:items-start justify-between min-h-[250px] rounded-[6px] bg-[#F8FAFB] px-6 py-8 shadow-sm"
        >
          {/* LEFT */}
          <div className="text-center lg:text-left max-w-[480px]">
            <div className="flex items-center justify-center gap-1 mb-4 lg:justify-start">
              <span className="h-[6px] w-[6px] rounded-full bg-[#0EA5B7]" />
              <span className="h-[6px] w-[6px] rounded-full bg-[#F5A524]" />
              <span className="h-[6px] w-[6px] rounded-full bg-[#D9E4E8]" />
              <span className="h-[6px] w-[6px] rounded-full bg-[#0EA5B7]" />

              <span className="ml-2 text-[16px] sm:text-[18px] font-extrabold tracking-[-0.04em] text-[#0E2341]">
                Faqiri
              </span>

              <span className="ml-1 text-[#0EA5B7]">✣</span>
            </div>

            <h2 className="text-[22px] sm:text-[28px] lg:text-[30px] font-extrabold leading-[1.1] tracking-[-0.04em] text-[#020817]">
              Partnering In Your Global Journey
            </h2>

            <p className="mt-4 text-[12px] sm:text-[14px] leading-5 text-[#536579]">
              Faqiri delivers dependable logistics, supply chain, and advisory
              solutions tailored for complex environments, helping organizations
              move with confidence and clarity.
            </p>

            {/* Button with Hover Effect */}
            <a
              href="https://wa.me/93788653654?text=Hello%20I%20want%20to%20contact%20you"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button className="mt-6 h-[40px] sm:h-[44px] w-[160px] sm:w-[180px] rounded-[4px] bg-[#008DA3] text-[12px] sm:text-[14px] font-semibold text-white relative overflow-hidden group">
                <span className="absolute left-0 top-0 h-full w-0 bg-[#F7931D] transition-all duration-500 ease-out group-hover:w-full" />
                <span className="relative z-10">Contact Us</span>
              </motion.button>
            </a>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-center mt-8 lg:mt-0">
            <p className="mb-2 text-[10px] sm:text-[12px] font-bold uppercase tracking-[0.15em] text-[#0E2341]">
              Scan To Download
            </p>

            <div className="flex h-[120px] w-[120px] items-center justify-center bg-white p-2 shadow-sm">
              <img
                src={oneImage}
                alt="Reasons to work with us"
                className="object-cover w-full h-full"
              />
            </div>

            <button className="mt-2 rounded-full bg-[#00B884] px-4 py-[5px] text-[10px] sm:text-[12px] font-bold text-white">
              Download Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerSection;

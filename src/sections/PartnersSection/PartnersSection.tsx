import { motion } from "framer-motion";
import { partnersData } from "./partners.data";

const PartnersSection = () => {
  // Duplicate the partnersData array for continuous loop
  const duplicatedPartners = [...partnersData, ...partnersData];

  return (
    <section className="bg-[#EEF2F3] px-6 py-4 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 flex items-center justify-between rounded-[4px] border border-[#D9DEE4] bg-white px-4 py-3 shadow-sm">
          <h2 className="text-base font-medium text-[#0E2341] md:text-lg">
            Our Partners
          </h2>

          <p className="text-[10px] font-medium text-[#5D6778] md:text-xs">
            <span className="text-[#099E8D]">•</span> Trusted By{" "}
            <span className="text-[#099E8D]">•</span>
          </p>
        </div>

        {/* Infinite Scrolling - Logos */}
        <div className="overflow-hidden rounded-[4px] border border-[#D9DEE4] bg-white shadow-sm">
          <motion.div
            className="flex gap-10 px-6 py-6 w-max"
            animate={{ x: ["0%", "-50%"] }} // Make it scroll
            transition={{
              duration: 18, // Duration of the scroll animation
              ease: "linear", // Smooth linear scrolling
              repeat: Infinity, // Infinite loop
            }}
            whileHover={{
              animationPlayState: "paused", // Stop animation on hover
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex min-w-[150px] flex-col items-center justify-center text-center"
              >
                <div className="flex h-[70px] w-[70px] items-center justify-center group relative">
                  {/* Partner Logo */}
                  <motion.img
                    src={partner.logo}
                    alt={partner.name}
                    className="object-contain w-full h-full transition-transform duration-300"
                    whileHover={{ scale: 1.1 }} // Hover effect: scale up
                  />
                </div>
                <div className="mt-2 text-lg font-bold tracking-wide text-[#0E2341] group-hover:text-[#F7931D]">
                  {partner.name}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

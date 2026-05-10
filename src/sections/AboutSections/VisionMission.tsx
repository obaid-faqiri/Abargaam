import { motion } from "framer-motion";
import { visionMission } from "./about.data";

const VisionMission = () => {
  return (
    <section className="bg-[#EEF2F3] px-4 pt-8 sm:px-6 lg:px-10 xl:px-6">
      <div className="mx-auto max-w-[1760px]">
        {/* Title and Subtitle */}
        <div className="mb-8 flex items-center justify-between rounded-[3px] border border-[#D9DEE4] bg-white px-6 py-6 shadow-sm">
          <h2 className="text-[16px] font-semibold text-[#0E2341] sm:text-[18px]">
            Vision & Mission
          </h2>

          <p className="text-[10px] font-medium text-[#5D6778] sm:text-[12px]">
            <span className="text-[#099E8D]">•</span> Who We Are{" "}
            <span className="text-[#099E8D]">•</span>
          </p>
        </div>

        {/* Vision and Mission List */}
        <div className="space-y-6">
          {visionMission.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid overflow-hidden rounded-[8px] bg-white p-6 shadow-sm md:grid-cols-2 md:items-center md:gap-8"
            >
              <div className={index === 1 ? "md:order-2" : ""}>
                <span className="inline-flex rounded-[3px] bg-[#008D83] px-4 py-2 text-[14px] font-semibold text-white">
                  {item.label}
                </span>

                <p className="mt-6 max-w-[460px] text-[14px] leading-6 text-[#43536A]">
                  {item.description}
                </p>

                {/* Updated WhatsApp Button */}
                <a
                  href={`https://wa.me/93788653654?text=Hello%20I%20want%20to%20contact%20you%20about%20${item.label}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-block text-[14px] font-semibold text-[#008D83] border border-[#008D83] py-3 px-6 rounded-[4px] hover:bg-[#008D83] hover:text-white transition duration-300"
                >
                  {item.buttonText}
                </a>
              </div>

              <div
                className={
                  index === 1 ? "mt-6 md:order-1 md:mt-0" : "mt-6 md:mt-0"
                }
              >
                <img
                  src={item.image}
                  alt={item.label}
                  className="h-[250px] w-full rounded-[8px] object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
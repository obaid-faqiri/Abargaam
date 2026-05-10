import { motion } from "framer-motion";
import { serviceCards } from "./services.data";

const ServicesGrid = () => {
  return (
    <section className="bg-[#EEF2F3] px-4 py-6 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-6 flex h-[46px] items-center justify-between rounded-[3px] border border-[#D9DEE4] bg-white px-5 shadow-sm">
          <h2 className="text-[15px] font-medium text-[#0E2341]">
            Essential Freight Services
          </h2>

          <p className="text-[9px] font-medium text-[#5D6778]">
            <span className="text-[#099E8D]">•</span> View Services{" "}
            <span className="text-[#099E8D]">•</span>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-6">
          {serviceCards.map((service, index) => {
            const isLarge = service.size === "large";

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`rounded-[18px] border border-[#D8E1E8] bg-white p-3 shadow-[0_8px_22px_rgba(15,35,65,0.08)] ${
                  isLarge ? "md:col-span-3" : "md:col-span-2"
                }`}
              >
                <div
                  className={`overflow-hidden rounded-[12px] ${
                    isLarge ? "h-[220px]" : "h-[205px]"
                  }`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-full transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="px-5 pt-5 pb-6 text-center">
                  <h3 className="text-[20px] font-bold leading-tight text-[#0E2341]">
                    {service.title}
                  </h3>

                  <p className="mx-auto mt-5 max-w-[520px] text-[15px] leading-8 text-[#7B8AA0]">
                    {service.description}
                  </p>

                  <button className="mt-6 text-[15px] font-bold text-[#008D83]">
                    Read more
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
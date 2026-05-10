import { motion } from "framer-motion";
import { advantages } from "./services.data";
import image1 from "../../assets/images/Services/9.png";

const ServicesAdvantage = () => {
  return (
    <section className="bg-[#EEF2F3] px-4 py-12 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1760px]">
        {/* TOP TEXT */}
        <div className="mb-12 max-w-[680px]">
          <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-[#008DA3]">
            Why Choose Us
          </p>

          <h2 className="mt-3 text-[38px] font-medium leading-[1.1] tracking-[-0.03em] text-[#07152F]">
            The Faqiri Advantage
          </h2>

          <p className="mt-5 text-[18px] leading-[1.7] text-[#5B6B7F]">
            We are bringing essential support services under one roof, we
            simplify operations, strengthen coordination, and reduce operational
            risk. Our practical, context driven approach delivers compliant,
            efficient and results oriented solutions tailored to your needs.
          </p>
        </div>

        {/* CARDS + IMAGE */}
        <div className="grid items-start gap-[58px] lg:grid-cols-[0.98fr_1.02fr]">
          {/* LEFT CARDS */}
          <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2">
            {advantages.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="h-[180px] rounded-[8px] bg-white px-6 py-6 shadow-[0_6px_16px_rgba(15,35,65,0.08)]"
                >
                  <div className="mb-5 flex h-[42px] w-[42px] items-center justify-center rounded-[5px] bg-[#0EA58F] text-[16px] text-white">
                    <Icon />
                  </div>

                  <h3 className="text-[18px] font-semibold text-[#07152F]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[15px] leading-6 text-[#5B6B7F]">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-[14px] shadow-[0_18px_40px_rgba(15,35,65,0.14)]"
          >
            <img
              src={image1}
              alt="Faqiri Advantage"
              className="h-[390px] w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesAdvantage;

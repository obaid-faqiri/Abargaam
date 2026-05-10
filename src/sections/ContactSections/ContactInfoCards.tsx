import { motion } from "framer-motion";
import { contactInfo } from "./contact.data";

const ContactInfoCards = () => {
  return (
    <section className="bg-[#EEF2F3] px-4 py-8 sm:px-6 lg:px-10 xl:px-6">
      <div className="mx-auto grid max-w-[1760px] grid-cols-1 gap-6 md:grid-cols-3">
        {contactInfo.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex min-h-[250px] flex-col items-center justify-center rounded-[8px] bg-white px-5 py-7 text-center shadow-sm"
            >
              {/* SAFE ICON RENDER */}
              <div
                className="mb-4 flex h-[40px] w-[40px] items-center justify-center rounded-full text-[14px] text-white"
                style={{ backgroundColor: item.color }}
              >
                {Icon ? <Icon /> : null}
              </div>

              <h3 className="text-[14px] font-bold text-[#07152F]">
                {item.title}
              </h3>

              <div className="mt-3 space-y-2">
                {item.description.map((line) => (
                  <p
                    key={line}
                    className="text-[12px] leading-5 text-[#536579]"
                  >
                    {line}
                  </p>
                ))}
              </div>

              <a
                href="https://wa.me/0093788653654?text=Hello%20I%20want%20to%20learn%20more%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 text-[#F7931D] text-[12px] font-semibold hover:underline"
              >
                Learn More
              </a>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ContactInfoCards;
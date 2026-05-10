import { motion } from "framer-motion";
import { experiences } from "./about.data";

const cardColors = {
  white: "bg-white text-[#07152F]",
  green: "bg-[#06B69F] text-white",
  blue: "bg-[#008DA3] text-white",
  orange: "bg-[#F59E0B] text-white",
};

const ExperienceSection = () => {
  return (
    <section className="bg-[#EEF2F3] px-4 pt-8 sm:px-6 lg:px-10 xl:px-6">
      <div className="mx-auto max-w-[1760px]">
        {/* HEADER */}
        <div className="mb-6 flex h-[42px] items-center justify-between rounded-[3px] border border-[#D9DEE4] bg-white px-4 shadow-sm">
          <h2 className="text-[16px] font-medium text-[#0E2341] sm:text-[18px]">
            Our Experience
          </h2>

          <p className="text-[10px] font-medium text-[#5D6778] sm:text-[12px]">
            <span className="text-[#099E8D]">•</span> What We Do{" "}
            <span className="text-[#099E8D]">•</span>
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {experiences.map((item, index) => {
            const Icon = item.icon;
            const isWhite = item.color === "white";

            // layout logic
            let span = "";
            if (index === 0) span = "md:col-span-2"; // first big
            if (index === 5) span = "md:col-span-3"; // last full

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative overflow-hidden rounded-[6px] p-6 shadow-sm ${
                  cardColors[item.color]
                } ${span}`}
              >
                {/* TOP */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p
                      className={`text-[10px] font-bold ${
                        isWhite ? "text-[#008D83]" : "text-white"
                      }`}
                    >
                      {item.year}
                    </p>

                    <div
                      className={`mt-2 flex h-[22px] w-[22px] items-center justify-center rounded-full text-[10px] ${
                        isWhite
                          ? "bg-[#DFF4EF] text-[#008D83]"
                          : "bg-white/20 text-white"
                      }`}
                    >
                      <Icon />
                    </div>
                  </div>

                  <div
                    className={`text-right text-[14px] font-bold ${
                      isWhite ? "text-[#C62828]" : "text-white"
                    }`}
                  >
                    {item.organization}
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="text-[16px] font-semibold leading-tight">
                  {item.title} | {item.organization}
                </h3>

                {/* DESC */}
                <p
                  className={`mt-3 text-[12px] leading-5 ${
                    isWhite ? "text-[#536579]" : "text-white/90"
                  }`}
                >
                  {item.description}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full border px-3 py-[4px] text-[10px] font-semibold ${
                        isWhite
                          ? "border-[#0E2341] text-[#0E2341]"
                          : "border-white/50 text-white"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* DECOR */}
                <span
                  className={`absolute -bottom-7 -right-7 h-[64px] w-[64px] rounded-full border-[6px] ${
                    isWhite ? "border-[#DDE3E8]" : "border-white/25"
                  }`}
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

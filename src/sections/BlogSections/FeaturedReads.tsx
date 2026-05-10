import { motion } from "framer-motion";
import { featuredRead } from "./blog.data";

const FeaturedReads = () => {
  return (
    <section className="bg-[#EEF2F3] px-4 py-8 sm:px-6 lg:px-10 xl:px-6">
      <div className="mx-auto max-w-[1760px]">
        <div className="mb-8 flex items-center justify-between rounded-[3px] border border-[#D9DEE4] bg-white px-6 py-6 shadow-sm">
          <h2 className="text-[16px] font-medium text-[#0E2341] sm:text-[18px]">
            Featured Reads
          </h2>

          <p className="text-[10px] font-medium text-[#5D6778] sm:text-[12px]">
            <span className="text-[#099E8D]">•</span> Featured{" "}
            <span className="text-[#099E8D]">•</span>
          </p>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-[8px] border border-[#D9DEE4] bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300"
        >
          <img
            src={featuredRead.image}
            alt={featuredRead.title}
            className="h-[250px] w-full rounded-[4px] object-cover sm:h-[320px] lg:h-[360px]"
          />

          <h3 className="px-2 pb-2 pt-3 text-[14px] font-semibold text-[#0E2341]">
            {featuredRead.title}
          </h3>
        </motion.article>
      </div>
    </section>
  );
};

export default FeaturedReads;
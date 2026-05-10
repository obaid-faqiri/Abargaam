import { motion } from "framer-motion";
import { FaQuoteRight, FaStar, FaRegStar } from "react-icons/fa";
import { testimonialData } from "./testimonial.data";
import type { TestimonialItem } from "./testimonial.types";

const CARD_WIDTH = 340; // more responsive
const CARD_HEIGHT = 470;
const CARD_GAP = 24;
const STEP = CARD_WIDTH + CARD_GAP;

const duplicatedTestimonials = [...testimonialData, ...testimonialData];

// 🔥 smoother animation (NO repeated frames)
const trackAnimation = {
  x: [0, -STEP, -STEP * 2, -STEP * 3],
};

const trackTransition = {
  duration: 12,
  repeat: Infinity,
  ease: "linear",
};

const TestimonialCard = ({ item }: { item: TestimonialItem }) => {
  return (
    <article
      className="group relative flex flex-shrink-0 flex-col overflow-hidden rounded-[22px] border border-[#DCE5EB] bg-[#FBFCFD] p-6 shadow-[0_4px_14px_rgba(15,35,65,0.05)] transition-all duration-300 hover:shadow-[0_14px_35px_rgba(15,35,65,0.09)]"
      style={{
        width: `${CARD_WIDTH}px`,
        minHeight: `${CARD_HEIGHT}px`,
        height: `${CARD_HEIGHT}px`,
      }}
    >
      <span className="pointer-events-none absolute bottom-0 left-5 right-5 h-[4px] scale-x-0 rounded-full bg-[#06BFA6] transition-transform duration-300 group-hover:scale-x-100" />

      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="h-[58px] w-[58px] overflow-hidden rounded-full border border-[#E3EAF0] bg-[#F1F5F8]">
            <img
              src={item.image}
              alt={item.name}
              className="object-cover w-full h-full"
            />
          </div>

          <div>
            <h3 className="text-[16px] font-semibold text-[#374151]">
              {item.name}
            </h3>
            <p className="mt-1 text-[13px] text-[#718096]">{item.role}</p>
          </div>
        </div>

        <div className="flex flex-col items-end gap-2">
          <FaQuoteRight className="text-[44px] text-[#DFF1EE]" />

          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, index) =>
              index < item.rating ? (
                <FaStar key={index} className="text-[14px] text-[#F4B321]" />
              ) : (
                <FaRegStar key={index} className="text-[14px] text-[#E8D79A]" />
              ),
            )}
          </div>
        </div>
      </div>

      <div className="flex-1 mt-8">
        <h4 className="text-[18px] font-semibold text-[#2D3748]">
          {item.title}
        </h4>

        <p
          className="mt-4 overflow-hidden text-[15px] leading-9 text-[#5B677A]"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
          }}
        >
          "{item.quote}"
        </p>
      </div>

      <div className="pt-10 mt-auto">
        <div className="mb-6 h-px w-full bg-[#E6EDF2]" />

        <div className="flex items-center gap-4">
          <div className="flex h-[40px] w-[40px] items-center justify-center overflow-hidden rounded-full border border-[#E1E8EF] bg-white">
            <img
              src={item.icon}
              alt={item.company}
              className="h-[22px] w-[22px] object-contain"
            />
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#A0AEC0]">
              Company
            </p>
            <p className="mt-1 text-[16px] font-semibold text-[#4A5568]">
              {item.company}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

const TestimonialSection = () => {
  return (
    <section className="bg-[#EEF2F3] px-4 py-8 sm:px-6 lg:px-12 xl:px-20">
      <div className="mx-auto overflow-hidden max-w-7xl">
        <motion.div
          className="hidden lg:flex"
          style={{ gap: `${CARD_GAP}px` }}
          animate={trackAnimation}
          transition={trackTransition}
        >
          {duplicatedTestimonials.map((item, index) => (
            <TestimonialCard key={`${item.id}-${index}`} item={item} />
          ))}
        </motion.div>

        {/* Mobile */}
        <div className="grid gap-6 sm:grid-cols-2 lg:hidden">
          {testimonialData.map((item) => (
            <div key={item.id} className="flex justify-center">
              <TestimonialCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

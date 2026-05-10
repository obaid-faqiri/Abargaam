import { AnimatePresence, motion } from "framer-motion";
import { FiMinus, FiPlus } from "react-icons/fi";
import { faqData } from "./faq.data";
import { useAccordion } from "../../hooks/useAccordion";

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const answerVariants = {
  hidden: {
    height: 0,
    opacity: 0,
  },
  show: {
    height: "auto",
    opacity: 1,
    transition: {
      height: {
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      },
      opacity: {
        duration: 0.25,
        delay: 0.08,
      },
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.25,
    },
  },
};

const FAQSection = () => {
  const { toggle, isOpen } = useAccordion(null);

  return (
    <section className="bg-[#EEF2F3] px-4 py-8 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between rounded-[6px] border border-[#D9DEE4] bg-white px-6 py-4 shadow-sm">
          <h2 className="text-xl font-semibold text-[#0E2341] md:text-2xl">
            Frequently Asked Questions
          </h2>

          <p className="text-sm font-medium text-[#5D6778] md:text-base">
            <span className="text-[#099E8D]">•</span> FAQs{" "}
            <span className="text-[#099E8D]">•</span>
          </p>
        </div>

        {/* Content */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          className="flex min-h-[430px] items-center justify-center rounded-[6px] bg-[#F8FAFB] px-6 py-12 shadow-sm"
        >
          <motion.div
            variants={listVariants}
            className="w-full max-w-[700px] space-y-[16px]"
          >
            {faqData.map((item) => {
              const opened = isOpen(item.id);

              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="overflow-hidden border border-[#E5E9ED] bg-white shadow-sm rounded-lg"
                >
                  {/* Question */}
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    className="flex h-[60px] w-full items-center justify-between gap-4 px-6 text-left transition-colors duration-300 hover:bg-[#FBFDFD]"
                  >
                    <span className="text-sm font-semibold leading-5 text-[#0E2341] md:text-base">
                      {item.question}
                    </span>

                    <motion.span
                      animate={{
                        rotate: opened ? 180 : 0,
                        backgroundColor: opened ? "#E0F5F1" : "#FFFFFF",
                        borderColor: opened ? "#BFE9E1" : "#DCE3EA",
                      }}
                      transition={{ duration: 0.25 }}
                      className="flex h-8 w-8 items-center justify-center rounded-full border text-[#0E2341]"
                    >
                      {opened ? (
                        <FiMinus className="text-[14px]" />
                      ) : (
                        <FiPlus className="text-[14px]" />
                      )}
                    </motion.span>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {opened && (
                      <motion.div
                        variants={answerVariants}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        className="overflow-hidden"
                      >
                        <div className="border-t border-[#EDF1F4] px-6 pb-4 pt-3">
                          <p className="text-sm leading-6 text-[#68798A] md:text-base">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;

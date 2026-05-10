import { motion, type Variants } from "framer-motion";
import { reasonsData } from "./reasons.data";
import oneImage from "../../assets/images/Home/8.png";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const ReasonsSection = () => {
  const featuredCard = reasonsData.find((item) => item.featured);
  const normalCards = reasonsData.filter((item) => !item.featured);

  return (
    <section className="bg-[#EEF2F3] px-6 py-10 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-7xl rounded-b-xl border-t border-[#D9DEE4] bg-[#EEF2F3] pt-6">

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="grid gap-5 lg:grid-cols-[1.05fr_0.9fr]"
        >

          {/* LEFT SIDE */}
          <div>

            <motion.div variants={fadeUp} className="mb-4">
              <h2 className="max-w-[260px] text-[26px] font-semibold leading-[1.05] text-[#0E2341] md:text-[34px]">
                Reasons to
                <br />
                Work With Us
              </h2>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">

              {/* FEATURED CARD */}
              {featuredCard && (
                <motion.article
                  variants={fadeUp}
                  className="rounded-2xl bg-[#11B8A5] p-5 text-white shadow-sm sm:col-span-2"
                >
                  <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-white/15">
                    <featuredCard.icon size={18} />
                  </div>

                  <h3 className="text-[38px] font-bold leading-none">
                    7+
                  </h3>

                  <p className="mt-2 text-lg font-semibold">
                    {featuredCard.title}
                  </p>

                  <p className="mt-3 max-w-[520px] text-sm leading-6 text-white/90">
                    {featuredCard.description}
                  </p>
                </motion.article>
              )}

              {/* NORMAL CARDS */}
              {normalCards.map((item) => (
                <motion.article
                  key={item.id}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className={`rounded-2xl border border-[#D7DDE4] bg-white p-4 shadow-sm ${
                    item.fullWidth ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#0E89A6] text-white">
                    <item.icon size={16} />
                  </div>

                  <h3 className="text-[18px] font-semibold leading-snug text-[#0E2341]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#5D6778]">
                    {item.description}
                  </p>
                </motion.article>
              ))}

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            variants={fadeLeft}
            className="overflow-hidden rounded-2xl"
          >
            <div className="h-full min-h-[420px] overflow-hidden rounded-2xl border border-[#D7DDE4] bg-white shadow-sm md:min-h-[520px]">
              <img
                src={oneImage}
                alt="Reasons to work with us"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default ReasonsSection;
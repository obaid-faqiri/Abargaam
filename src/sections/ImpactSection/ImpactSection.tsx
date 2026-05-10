import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaMapMarkerAlt, FaRegCalendarAlt } from "react-icons/fa";
import { impactProjects } from "./impact.data";

const sectionVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
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

const rightCardVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const featuredProject = impactProjects.find((item) => item.featured);
const sideProjects = impactProjects.filter((item) => !item.featured);

const ImpactSection = () => {
  if (!featuredProject) return null;

  return (
    <section className="bg-[#EEF2F3] px-6 py-10 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mb-4 flex items-center justify-between rounded-2xl border border-[#D9DEE4] bg-white px-5 py-4 shadow-sm"
        >
          <h3 className="text-lg font-medium text-[#0E2341]">
            Faqiri Logistics & Consulting
          </h3>

          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#0E2341]">
            <span className="text-[#099E8D]">•</span> Who We Are{" "}
            <span className="text-[#099E8D]">•</span>
          </p>
        </motion.div>

        <motion.div
          className="rounded-[24px] border border-[#D9DEE4] bg-white p-5 shadow-sm lg:p-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={sectionVariants}
        >
          {/* TITLE */}
          <motion.div variants={fadeUp} className="max-w-xl mb-8">
            <h2 className="text-3xl font-semibold leading-tight text-[#0E2341] md:text-4xl">
              Our Recent
              <br />
              Projects & Impact
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#5D6778] md:text-base">
              Delivering exceptional logistics, advisory, and development
              support across Afghanistan.
            </p>
          </motion.div>

          <div className="grid gap-5 lg:grid-cols-[1.35fr_0.95fr]">
            {/* FEATURED */}
            <motion.article
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="group overflow-hidden rounded-[18px] bg-[#1A2B68] shadow-md"
            >
              <div className="relative h-[250px] overflow-hidden md:h-[290px]">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.06]"
                />

                <div className="absolute inset-0 transition duration-500 bg-black/0 group-hover:bg-black/15" />

                <div className="absolute left-4 top-4 rounded-full bg-[#18C7A5] px-3 py-1 text-[11px] font-semibold text-white shadow">
                  {featuredProject.category}
                </div>

                <Link
                  to="/about"
                  className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 translate-y-8 items-center justify-center rounded-full bg-[#F7931D] text-white opacity-0 shadow transition-all duration-500 group-hover:-translate-y-1/2 group-hover:opacity-100"
                >
                  <FaArrowRight className="-rotate-45 text-[18px]" />
                </Link>
              </div>

              <div className="p-5 text-white">
                <h3 className="text-xl font-semibold">
                  {featuredProject.title}
                </h3>

                <div className="flex gap-4 mt-3 text-xs text-white/75">
                  <span className="flex items-center gap-1.5">
                    <FaMapMarkerAlt size={12} />
                    {featuredProject.location}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <FaRegCalendarAlt size={12} />
                    {featuredProject.year}
                  </span>
                </div>

                <p className="mt-4 text-sm text-white/80">
                  {featuredProject.summary}
                </p>
              </div>
            </motion.article>

            {/* SIDE PROJECTS */}
            <motion.div
              variants={sectionVariants}
              className="flex flex-col gap-4"
            >
              {sideProjects.map((project) => (
                <motion.article
                  key={project.id}
                  variants={rightCardVariants}
                  whileHover={{ x: 4 }}
                  className="group flex gap-4 rounded-[16px] border border-[#D9DEE4] bg-[#F9FBFC] p-3 shadow-sm"
                >
                  <div className="h-[82px] w-[82px] overflow-hidden rounded-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transition group-hover:scale-110"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold truncate">
                      {project.title}
                    </h4>

                    <p className="text-xs text-[#5D6778] mt-2 line-clamp-2">
                      {project.summary}
                    </p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { servicesData } from "./services.data";

const CARD_W = 260;
const GAP = 24;

type Service = {
  id: string | number;
  title: string;
  description: string;
  image: string;
  path?: string;
};

type CardProps = {
  service: Service;
  index: number;
  progress: MotionValue<number>;
  isLarge: boolean;
};

const ServiceCard = ({ service, index, progress, isLarge }: CardProps) => {
  const finalX = (index - 1.5) * (CARD_W + GAP);

  const x = useTransform(progress, [0, 0.45], [0, finalX]);
  const y = useTransform(progress, [0, 0.45], [index * 10, 0]);
  const scale = useTransform(progress, [0, 0.45], [0.86, 1]);
  const opacity = useTransform(progress, [0, 0.25], [0.82, 1]);
  const rotate = useTransform(
    progress,
    [0, 0.45],
    [index % 2 === 0 ? -3 : 3, 0]
  );

  const clipPath = useTransform(
    progress,
    [0, 0.45],
    [
      "inset(10% 0% 10% 0% round 22px)",
      "inset(0% 0% 0% 0% round 22px)",
    ]
  );

  const serviceLink = service.path || `/services/${service.id}`;

  return (
    <motion.div
      style={{
        x,
        y,
        scale,
        opacity,
        rotate,
        clipPath,
        width: isLarge ? CARD_W : "100%",
        left: isLarge ? "50%" : undefined,
        marginLeft: isLarge ? -(CARD_W / 2) : undefined,
      }}
      className={`
        group bg-white shadow-md rounded-2xl p-4 transition-all duration-500
        hover:-translate-y-2 hover:shadow-[0_18px_35px_rgba(15,35,65,0.14)]
        ${isLarge ? "absolute top-0" : "relative w-full"}
      `}
    >
      <div className="relative h-40 overflow-hidden rounded-lg">
        <img
          src={service.image}
          alt={service.title}
          className="object-cover object-top w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
        />

        <div className="absolute inset-0 transition duration-500 bg-black/0 group-hover:bg-black/15" />

        <Link
          to={serviceLink}
          aria-label={`Open ${service.title}`}
          className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 translate-y-6 items-center justify-center rounded-full bg-[#F7931D] text-white opacity-0 shadow-[0_10px_24px_rgba(247,147,29,0.35)] transition-all duration-500 group-hover:-translate-y-1/2 group-hover:opacity-100"
        >
          <FiArrowUpRight className="text-[22px]" />
        </Link>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-[#078FA3]">
        {service.title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-gray-600">
        {service.description}
      </p>
    </motion.div>
  );
};

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 35%"],
  });

  return (
    <section
      ref={sectionRef}
      className="bg-[#EEF2F3] px-6 py-16 lg:px-12 xl:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-4 px-6 py-4 mb-10 text-left bg-white shadow-sm rounded-xl md:flex-row md:items-center">
          <h2 className="text-2xl font-semibold text-gray-900">
            Core Services We Deliver
          </h2>

          <div className="text-sm text-gray-600">
            <span className="text-teal-600">•</span> Home Services{" "}
            <span className="text-teal-600">•</span>
          </div>
        </div>

        {/* Mobile */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:hidden">
          {servicesData.slice(0, 4).map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              progress={scrollYProgress}
              isLarge={false}
            />
          ))}
        </div>

        {/* Desktop */}
        <div className="relative mx-auto hidden h-[380px] xl:block">
          {servicesData.slice(0, 4).map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              progress={scrollYProgress}
              isLarge={true}
            />
          ))}
        </div>

        <div className="flex justify-center mt-12 xl:mt-1">
          <motion.button
            type="button"
            whileTap={{ scale: 0.97 }}
            className="group relative h-[48px] w-[180px] overflow-hidden rounded-lg bg-[#F7931D] text-sm font-bold text-white shadow-sm"
          >
            <span className="absolute bottom-0 left-0 h-0 w-full bg-[#078FA3] transition-all duration-500 ease-out group-hover:h-full" />

            <span className="relative z-10 transition-all duration-300 group-hover:tracking-[0.04em]">
              See All Services
            </span>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
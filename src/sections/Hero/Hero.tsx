import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaPlay, FaTimes } from "react-icons/fa";
import { heroData } from "./hero.data";

const Hero = () => {
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <>
      <section className="px-4 pt-6 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[6px] bg-[#F7FAFC] lg:grid-cols-[1.08fr_0.92fr]">
          <div className="py-10 px-7 sm:px-10 lg:px-12 lg:py-12">
            <div className="mb-10 inline-flex items-center gap-2 rounded-full bg-[#E5E7EB] px-7 py-3 text-[15px] font-semibold text-[#0E2341]">
              <span className="h-2 w-2 rounded-full bg-[#0E8A8F]" />
              {heroData.badge}
            </div>

            <h1 className="max-w-[650px] text-[34px] font-normal leading-[1.12] tracking-[-0.035em] text-black sm:text-[42px] lg:text-[42px]">
              {heroData.title}
            </h1>

            <div className="flex items-center gap-4 mt-8">
              <div className="h-[130px] w-[1px] bg-red-500" />

              <button
                type="button"
                onClick={() => setOpenVideo(true)}
                className="group relative h-[108px] w-[205px] overflow-hidden rounded-[4px]"
              >
                <video
                  src={heroData.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="object-cover w-full h-full"
                />

                <span className="absolute inset-0 transition bg-black/10 group-hover:bg-black/20" />

                <span className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#008DA3] shadow-md">
                  <FaPlay className="ml-0.5 text-[13px]" />
                </span>
              </button>
            </div>

            <p className="mt-8 max-w-[540px] text-[17px] leading-8 text-[#07152F]">
              {heroData.description}
            </p>

            <motion.a
              href="https://wa.me/93788653654?text=Hello%20I%20want%20to%20contact%20you"
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.97 }}
              className="group relative mt-8 inline-flex h-[56px] w-[250px] items-center justify-center overflow-hidden rounded-[8px] bg-[#078FA3] text-[16px] font-bold tracking-[0.08em] text-white shadow-sm"
            >
              {/* BOTTOM → TOP FILL */}
              <span className="absolute bottom-0 left-0 h-0 w-full bg-[#F7931D] transition-all duration-500 ease-out group-hover:h-full" />

              {/* SHINE EFFECT (optional, still left→right for realism) */}
              <span className="absolute left-[-40%] top-0 h-full w-[35%] skew-x-[-20deg] bg-white/25 transition-all duration-700 ease-out group-hover:left-[120%]" />

              {/* TEXT */}
              <span className="relative z-10">{heroData.buttonText}</span>
            </motion.a>
          </div>

          <div className="relative h-[420px] overflow-hidden sm:h-[520px] lg:h-[720px]">
            <img
              src={heroData.image}
              alt="hero"
              className="object-cover object-center w-full h-full"
            />
          </div>
        </div>
      </section>

      <AnimatePresence>
        {openVideo && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenVideo(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 30 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[720px] overflow-hidden rounded-xl bg-black shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setOpenVideo(false)}
                className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[12px] text-[#07152F]"
              >
                <FaTimes />
              </button>

              <video
                src={heroData.video}
                controls
                autoPlay
                className="max-h-[420px] w-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;

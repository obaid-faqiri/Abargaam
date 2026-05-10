import { useMemo, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { FaCircle } from "react-icons/fa";
import { footprintData } from "./footprint.data";
import type { ProvinceItem } from "./footprint.types";

const panelVariants: Variants = {
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

const listVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 18 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const FootprintSection = () => {
  const provinces: ProvinceItem[] = footprintData;

  const sectionTitle = "Our Footprint in Afghanistan";
  const sectionSubtitle = "Active Provinces";
  const noteTitle = "Operational Note";

  const noteText =
    "This version is focused only on Afghanistan and highlights the five active provinces requested by the client.";

  // ✅ SAFE INITIAL VALUE
  const initialProvinceId = useMemo(() => {
    return (
      provinces.find((p) => p.name === "Kabul")?.id ??
      provinces[0]?.id ??
      0
    );
  }, [provinces]);

  const [activeProvinceId, setActiveProvinceId] =
    useState<number>(initialProvinceId);

  const activeProvince = useMemo(() => {
    return provinces.find((p) => p.id === activeProvinceId) ?? provinces[0];
  }, [activeProvinceId, provinces]);

  if (!activeProvince) return null;

  return (
    <section className="bg-[#EEF2F3] px-6 py-4 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-3 flex items-center justify-between rounded-[4px] border border-[#D9DEE4] bg-white px-4 py-3 shadow-sm">
          <h2 className="text-base font-medium text-[#0E2341] md:text-lg">
            {sectionTitle}
          </h2>

          <p className="text-[10px] font-medium text-[#5D6778] md:text-xs">
            <span className="text-[#099E8D]">•</span> {sectionSubtitle}{" "}
            <span className="text-[#099E8D]">•</span>
          </p>
        </div>

        <motion.div
          variants={panelVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-4 lg:grid-cols-[1.45fr_0.9fr]"
        >

          {/* MAP */}
          <div className="rounded-[18px] border border-[#DCE5EB] bg-[#F9FCFD] p-4 shadow-sm">
            <div className="flex min-h-[560px] flex-col rounded-[16px] bg-white p-4">

              <svg viewBox="0 0 820 520" className="w-full h-full">
                {provinces.map((province) => {
                  const isActive = province.id === activeProvinceId;

                  return (
                    <circle
                      key={province.id}
                      cx={province.x * 10}
                      cy={province.y * 10}
                      r="10"
                      fill={isActive ? "#F7931D" : province.color}
                      stroke="#fff"
                      strokeWidth="3"
                      onMouseEnter={() => setActiveProvinceId(province.id)}
                      onClick={() => setActiveProvinceId(province.id)}
                    />
                  );
                })}
              </svg>

              {/* INFO BOX */}
              <motion.div
                key={activeProvince.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-4 mt-4 bg-white rounded-lg shadow"
              >
                <h4 className="font-semibold">
                  {activeProvince.name}
                </h4>
                <p className="text-sm text-gray-600">
                  {activeProvince.description}
                </p>
              </motion.div>

            </div>
          </div>

          {/* SIDE LIST */}
          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            className="space-y-3"
          >
            {provinces.map((province) => {
              const isActive = province.id === activeProvince.id;

              return (
                <motion.button
                  key={province.id}
                  variants={itemVariants}
                  onClick={() => setActiveProvinceId(province.id)}
                  className="w-full p-3 text-left transition border rounded-lg"
                  style={{
                    background: isActive ? "#F5EBDD" : "#F8FBFD",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span>{province.name}</span>
                    <FaCircle
                      className={
                        isActive ? "text-green-500" : "text-gray-300"
                      }
                    />
                  </div>
                </motion.button>
              );
            })}
          </motion.div>

          {/* NOTE */}
          <div className="mt-4 rounded bg-[#F8FBFD] p-3 text-sm">
            <strong>{noteTitle}</strong>
            <p>{noteText}</p>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default FootprintSection;
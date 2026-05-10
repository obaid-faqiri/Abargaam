import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaCircle } from "react-icons/fa";
import { footprintData } from "./footprint.data";

const panelVariants = {
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
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
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

const baseProvinceFill = "#9CB4C9";
const lightProvinceFill = "#AEC6D8";
const activeProvinceFill = "#DDF4EF";
const kabulFill = "#FDE7C8";

const mapShapes = [
  {
    key: "shape-1",
    d: "M52 390 L78 338 L66 298 L86 252 L118 212 L152 184 L176 196 L178 234 L168 272 L162 312 L170 354 L154 392 L108 398 Z",
    province: "Herat",
    baseFill: lightProvinceFill,
  },
  {
    key: "shape-2",
    d: "M154 392 L170 354 L162 312 L168 272 L178 234 L212 222 L242 248 L236 286 L222 326 L224 372 L194 398 Z",
    province: null,
    baseFill: baseProvinceFill,
  },
  {
    key: "shape-3",
    d: "M52 390 L108 398 L154 392 L194 398 L242 418 L236 456 L172 478 L110 474 L72 442 Z",
    province: null,
    baseFill: baseProvinceFill,
  },
  {
    key: "shape-4",
    d: "M212 222 L250 188 L300 174 L328 200 L320 238 L286 264 L242 248 Z",
    province: null,
    baseFill: baseProvinceFill,
  },
  {
    key: "shape-5",
    d: "M118 212 L150 166 L204 144 L250 188 L212 222 L178 234 L176 196 L152 184 Z",
    province: null,
    baseFill: baseProvinceFill,
  },
  {
    key: "shape-6",
    d: "M150 166 L170 126 L224 108 L274 120 L250 188 L204 144 Z",
    province: null,
    baseFill: baseProvinceFill,
  },
  {
    key: "shape-7",
    d: "M224 108 L274 120 L316 112 L314 150 L300 174 L250 188 Z",
    province: null,
    baseFill: baseProvinceFill,
  },
  {
    key: "shape-8",
    d: "M250 188 L300 174 L314 150 L346 162 L350 204 L328 200 Z",
    province: null,
    baseFill: baseProvinceFill,
  },
  {
    key: "shape-9",
    d: "M316 112 L362 100 L410 112 L408 146 L372 164 L346 162 L314 150 Z",
    province: "Balkh",
    baseFill: lightProvinceFill,
  },
  {
    key: "shape-10",
    d: "M346 162 L372 164 L408 146 L432 166 L424 202 L386 212 L350 204 Z",
    province: null,
    baseFill: baseProvinceFill,
  },
  {
    key: "shape-11",
    d: "M432 166 L462 148 L498 156 L508 192 L476 216 L424 202 Z",
    province: null,
    baseFill: baseProvinceFill,
  },
  {
    key: "shape-12",
    d: "M462 148 L494 122 L542 124 L546 152 L498 156 Z",
    province: null,
    baseFill: baseProvinceFill,
  },
  {
    key: "shape-13",
    d: "M542 124 L582 102 L626 108 L620 148 L576 156 L546 152 Z",
    province: null,
    baseFill: baseProvinceFill,
  },
  {
    key: "shape-14",
    d: "M626 108 L650 54 L690 40 L708 54 L702 82 L724 96 L756 100 L782 112 L764 126 L728 124 L700 132 L670 150 L620 148 Z",
    province: "Badakhshan",
    baseFill: lightProvinceFill,
  },
  {
    key: "shape-15",
    d: "M320 238 L350 204 L386 212 L398 242 L382 276 L344 282 L314 258 Z",
    province: null,
    baseFill: baseProvinceFill,
  },
  {
    key: "shape-16",
    d: "M286 264 L314 258 L344 282 L336 320 L300 334 L268 306 Z",
    province: null,
    baseFill: baseProvinceFill,
  },
  {
    key: "shape-17",
    d: "M236 286 L242 248 L286 264 L268 306 L244 340 L222 326 Z",
    province: null,
    baseFill: baseProvinceFill,
  },
  {
    key: "shape-18",
    d: "M224 372 L222 326 L244 340 L268 306 L300 334 L290 392 L236 456 L242 418 Z",
    province: null,
    baseFill: baseProvinceFill,
  },
  {
    key: "shape-19",
    d: "M382 276 L398 242 L440 244 L452 276 L424 300 L392 298 Z",
    province: null,
    baseFill: baseProvinceFill,
  },
  {
    key: "shape-20",
    d: "M398 242 L424 202 L476 216 L470 244 L440 244 Z",
    province: null,
    baseFill: baseProvinceFill,
  },
  {
    key: "shape-21",
    d: "M470 244 L476 216 L504 220 L514 244 L494 258 Z",
    province: null,
    baseFill: baseProvinceFill,
  },
  {
    key: "shape-22",
    d: "M452 276 L470 244 L494 258 L496 284 L474 296 Z",
    province: "Kabul",
    baseFill: kabulFill,
  },
  {
    key: "shape-23",
    d: "M474 296 L496 284 L514 302 L500 324 L474 320 Z",
    province: null,
    baseFill: baseProvinceFill,
  },
  {
    key: "shape-24",
    d: "M392 298 L424 300 L474 320 L458 352 L410 354 L376 330 Z",
    province: null,
    baseFill: baseProvinceFill,
  },
  {
    key: "shape-25",
    d: "M458 352 L474 320 L500 324 L540 350 L534 394 L488 402 L454 382 Z",
    province: null,
    baseFill: baseProvinceFill,
  },
  {
    key: "shape-26",
    d: "M500 324 L514 302 L542 308 L540 350 Z",
    province: null,
    baseFill: baseProvinceFill,
  },
  {
    key: "shape-27",
    d: "M540 350 L542 308 L570 320 L576 348 L558 374 L534 394 Z",
    province: null,
    baseFill: baseProvinceFill,
  },
  {
    key: "shape-28",
    d: "M504 220 L534 206 L540 232 L514 244 Z",
    province: null,
    baseFill: baseProvinceFill,
  },
  {
    key: "shape-29",
    d: "M514 244 L540 232 L568 246 L556 276 L528 278 Z",
    province: null,
    baseFill: baseProvinceFill,
  },
  {
    key: "shape-30",
    d: "M540 232 L560 196 L596 198 L606 230 L568 246 Z",
    province: null,
    baseFill: baseProvinceFill,
  },
  {
    key: "shape-31",
    d: "M606 230 L636 224 L648 256 L628 296 L596 286 L556 276 L568 246 Z",
    province: null,
    baseFill: baseProvinceFill,
  },
  {
    key: "shape-32",
    d: "M528 278 L556 276 L596 286 L590 316 L542 308 L514 302 Z",
    province: "Nangarhar",
    baseFill: lightProvinceFill,
  },
];

const provinceMapMeta: Record<
  string,
  {
    cx: number;
    cy: number;
    labelX: number;
    labelY: number;
    color: string;
    lineFrom?: { x: number; y: number };
  }
> = {
  Kabul: {
    cx: 508,
    cy: 282,
    labelX: 508,
    labelY: 260,
    color: "#F7931D",
  },
  Balkh: {
    cx: 365,
    cy: 145,
    labelX: 365,
    labelY: 127,
    color: "#008BA6",
    lineFrom: { x: 508, y: 282 },
  },
  Herat: {
    cx: 132,
    cy: 265,
    labelX: 132,
    labelY: 247,
    color: "#008BA6",
    lineFrom: { x: 508, y: 282 },
  },
  Nangarhar: {
    cx: 610,
    cy: 318,
    labelX: 610,
    labelY: 300,
    color: "#008BA6",
    lineFrom: { x: 508, y: 282 },
  },
  Badakhshan: {
    cx: 654,
    cy: 92,
    labelX: 654,
    labelY: 74,
    color: "#00B496",
    lineFrom: { x: 508, y: 282 },
  },
};

const FootprintSection = () => {
  const provinces = Array.isArray(footprintData)
    ? footprintData
    : footprintData?.provinces || [];

  const sectionTitle = Array.isArray(footprintData)
    ? "Our Footprint in Afghanistan"
    : footprintData?.title || "Our Footprint in Afghanistan";

  const sectionSubtitle = Array.isArray(footprintData)
    ? "Active Provinces"
    : footprintData?.subtitle || "Active Provinces";

  const noteTitle = Array.isArray(footprintData)
    ? "Operational Note"
    : footprintData?.noteTitle || "Operational Note";

  const noteText = Array.isArray(footprintData)
    ? "This version is focused only on Afghanistan and highlights the five active provinces requested by the client."
    : footprintData?.noteText ||
      "This version is focused only on Afghanistan and highlights the five active provinces requested by the client.";

  const initialProvinceId =
    provinces.find((item: any) => item.name === "Kabul")?.id ||
    provinces[0]?.id ||
    1;

  const [activeProvinceId, setActiveProvinceId] = useState(initialProvinceId);

  const activeProvince = useMemo(() => {
    if (!provinces.length) return null;
    return (
      provinces.find((item: any) => item.id === activeProvinceId) ||
      provinces[0]
    );
  }, [activeProvinceId, provinces]);

  const activeProvinceName = activeProvince?.name || "Kabul";

  if (!provinces.length || !activeProvince) {
    return null;
  }

  return (
    <section className="bg-[#EEF2F3] px-6 py-4 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-7xl">
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
          <div className="rounded-[18px] border border-[#DCE5EB] bg-[#F9FCFD] p-4 shadow-sm">
            <div className="mb-4">
              <span className="rounded-full bg-white px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-[#7E8A99] shadow-sm">
                Afghanistan Operations
              </span>
            </div>

            <div className="flex min-h-[560px] flex-col rounded-[16px] bg-[radial-gradient(circle_at_100%_100%,rgba(203,233,233,0.55),rgba(249,252,253,0)_34%),linear-gradient(0deg,rgba(184,201,214,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(184,201,214,0.18)_1px,transparent_1px)] [background-size:auto,24px_24px,24px_24px]">
              <div className="relative flex-1 overflow-hidden rounded-[16px] p-4 md:p-6">
                <div className="relative w-full h-full">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 820 520"
                    role="img"
                    aria-label="Afghanistan active locations map"
                  >
                    <defs>
                      <linearGradient
                        id="lineGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#008BA6" />
                        <stop offset="100%" stopColor="#00B496" />
                      </linearGradient>

                      <filter
                        id="softShadow"
                        x="-50%"
                        y="-50%"
                        width="200%"
                        height="200%"
                      >
                        <feDropShadow
                          dx="0"
                          dy="8"
                          stdDeviation="10"
                          floodOpacity="0.16"
                        />
                      </filter>

                      <filter
                        id="glow"
                        x="-100%"
                        y="-100%"
                        width="300%"
                        height="300%"
                      >
                        <feGaussianBlur stdDeviation="7" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    <g filter="url(#softShadow)">
                      {mapShapes.map((shape) => {
                        const isActiveShape =
                          shape.province === activeProvinceName;

                        return (
                          <motion.path
                            key={shape.key}
                            d={shape.d}
                            fill={
                              isActiveShape
                                ? activeProvinceFill
                                : shape.baseFill
                            }
                            stroke="#FFFFFF"
                            strokeWidth="1.8"
                            initial={false}
                            animate={{
                              fill: isActiveShape
                                ? activeProvinceFill
                                : shape.baseFill,
                            }}
                            transition={{ duration: 0.25 }}
                          />
                        );
                      })}
                    </g>

                    {Object.entries(provinceMapMeta).map(([name, meta]) => {
                      if (name === "Kabul") return null;

                      const provinceItem = provinces.find(
                        (item: any) => item.name === name,
                      );
                      const isActive = activeProvinceName === name;

                      return (
                        <g key={name} style={{ cursor: "pointer" }}>
                          <path
                            d={
                              name === "Balkh"
                                ? "M508 282 Q436.5 171.5 365 145"
                                : name === "Herat"
                                  ? "M508 282 Q320 231.5 132 265"
                                  : name === "Nangarhar"
                                    ? "M508 282 Q559 258 610 318"
                                    : "M508 282 Q581 145 654 92"
                            }
                            fill="none"
                            stroke="url(#lineGradient)"
                            strokeWidth={isActive ? "3.2" : "2.8"}
                            strokeDasharray="8 10"
                            strokeLinecap="round"
                            opacity={isActive ? 1 : 0.75}
                          >
                            <animate
                              attributeName="stroke-dashoffset"
                              from="0"
                              to="-36"
                              dur="2.4s"
                              repeatCount="indefinite"
                            />
                          </path>

                          {isActive && (
                            <circle
                              cx={meta.cx}
                              cy={meta.cy}
                              r="18"
                              fill={meta.color}
                              opacity="0.12"
                              filter="url(#glow)"
                            >
                              <animate
                                attributeName="r"
                                values="14;21;14"
                                dur="1.8s"
                                repeatCount="indefinite"
                              />
                              <animate
                                attributeName="opacity"
                                values="0.18;0.08;0.18"
                                dur="1.8s"
                                repeatCount="indefinite"
                              />
                            </circle>
                          )}

                          <circle
                            cx={meta.cx}
                            cy={meta.cy}
                            r="8.5"
                            fill={meta.color}
                            stroke="#ffffff"
                            strokeWidth="4"
                            filter="url(#softShadow)"
                            onMouseEnter={() =>
                              provinceItem &&
                              setActiveProvinceId(provinceItem.id)
                            }
                            onClick={() =>
                              provinceItem &&
                              setActiveProvinceId(provinceItem.id)
                            }
                          />

                          <text
                            x={meta.labelX}
                            y={meta.labelY}
                            textAnchor="middle"
                            fill="#0F172A"
                            fontSize="16"
                            fontWeight="700"
                          >
                            {name}
                          </text>
                        </g>
                      );
                    })}

                    <g style={{ cursor: "pointer" }}>
                      <circle
                        cx="508"
                        cy="282"
                        r="26"
                        fill="#F7931D"
                        opacity="0.18"
                        filter="url(#glow)"
                      >
                        <animate
                          attributeName="r"
                          values={
                            activeProvinceName === "Kabul"
                              ? "22;30;22"
                              : "22;26;22"
                          }
                          dur="2.2s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values={
                            activeProvinceName === "Kabul"
                              ? "0.22;0.10;0.22"
                              : "0.14;0.08;0.14"
                          }
                          dur="2.2s"
                          repeatCount="indefinite"
                        />
                      </circle>

                      <circle
                        cx="508"
                        cy="282"
                        r="18"
                        fill="#F7931D"
                        opacity="0.14"
                      />

                      <circle
                        cx="508"
                        cy="282"
                        r="12"
                        fill="#F7931D"
                        stroke="#ffffff"
                        strokeWidth="4"
                        filter="url(#softShadow)"
                        onMouseEnter={() => {
                          const kabul = provinces.find(
                            (item: any) => item.name === "Kabul",
                          );
                          if (kabul) setActiveProvinceId(kabul.id);
                        }}
                        onClick={() => {
                          const kabul = provinces.find(
                            (item: any) => item.name === "Kabul",
                          );
                          if (kabul) setActiveProvinceId(kabul.id);
                        }}
                      />

                      <text
                        x="508"
                        y="260"
                        textAnchor="middle"
                        fill="#0F172A"
                        fontSize="20"
                        fontWeight="700"
                      >
                        Kabul
                      </text>
                    </g>
                  </svg>
                </div>
              </div>

              <div className="px-4 pb-4 md:px-6 md:pb-6">
                <motion.div
                  key={activeProvince.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="w-full max-w-[310px] rounded-[18px] border border-[#E6EDF2] bg-white px-4 py-4 shadow-[0_12px_24px_rgba(15,35,65,0.08)]"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-[12px] text-[15px] font-bold text-white shadow-sm"
                      style={{
                        backgroundColor:
                          provinceMapMeta[activeProvince.name]?.color ||
                          activeProvince.color,
                      }}
                    >
                      {activeProvince.code}
                    </div>

                    <div>
                      <h4 className="text-[14px] font-semibold text-[#0E2341]">
                        {activeProvince.name}
                      </h4>
                      <p className="mt-1 text-[12px] text-[#5E7A97]">
                        {activeProvince.region}
                      </p>
                      <p className="mt-3 max-w-[230px] text-[12px] leading-5 text-[#8A97A6]">
                        {activeProvince.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="rounded-[18px] border border-[#DCE5EB] bg-white p-4 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3 mb-5">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#7E8A99]">
                  Active Coverage
                </p>
                <h3 className="mt-1 text-[28px] font-semibold leading-[1.05] text-[#0E2341]">
                  Where we are active in Afghanistan
                </h3>
                <p className="mt-3 text-[12px] leading-5 text-[#6C7B8C]">
                  Our operations are focused across key provinces in
                  Afghanistan, with Kabul serving as the central operational hub
                  and regional activity extending to Balkh, Herat, Nangarhar,
                  and Badakhshan.
                </p>
              </div>

              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#DFF4EF]">
                <FaCircle className="text-[10px] text-[#0EA5B7]" />
              </div>
            </div>

            <div className="space-y-3">
              {provinces.map((province: any) => {
                const isActive = province.id === activeProvince.id;
                const provinceColor =
                  provinceMapMeta[province.name]?.color ||
                  province.color ||
                  "#008BA6";

                return (
                  <motion.button
                    key={province.id}
                    variants={itemVariants}
                    type="button"
                    onMouseEnter={() => setActiveProvinceId(province.id)}
                    onFocus={() => setActiveProvinceId(province.id)}
                    onClick={() => setActiveProvinceId(province.id)}
                    className="flex min-h-[64px] w-full items-center justify-between rounded-[12px] border px-3 py-3 text-left transition-all duration-300"
                    style={{
                      backgroundColor: isActive ? "#F5EBDD" : "#F8FBFD",
                      borderColor: isActive ? "#E7D4B2" : "#DCE5EB",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-md text-[10px] font-bold text-white"
                        style={{ backgroundColor: provinceColor }}
                      >
                        {province.code}
                      </div>

                      <div>
                        <h4 className="text-[13px] font-semibold text-[#0E2341]">
                          {province.name}
                        </h4>
                        <p className="mt-0.5 text-[10px] text-[#758292]">
                          {province.region}
                        </p>
                      </div>
                    </div>

                    <motion.span
                      animate={{
                        scale: isActive ? [1, 1.2, 1] : 1,
                        opacity: isActive ? 1 : 0.7,
                      }}
                      transition={{
                        duration: isActive ? 1.3 : 0.2,
                        repeat: isActive ? Infinity : 0,
                        ease: "easeInOut",
                      }}
                      className="block h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: provinceColor }}
                    />
                  </motion.button>
                );
              })}
            </div>

            <div className="mt-4 rounded-[12px] border border-[#E2E8EE] bg-[#F8FBFD] px-3 py-3">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#7E8A99]">
                {noteTitle}
              </p>
              <p className="mt-2 text-[11px] leading-5 text-[#7B8896]">
                {noteText}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FootprintSection;

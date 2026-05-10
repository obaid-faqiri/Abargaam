import { FaLayerGroup, FaChartLine, FaTools, FaBriefcase, FaLeaf } from "react-icons/fa";
import type { ReasonItem } from "./reasons.types";

export const reasonsData: ReasonItem[] = [
  {
    id: 1,
    title: "7+ Years of Trusted Experience",
    description:
      "With over 7 years of experience delivering projects and services, we have built a strong track record in supporting development, humanitarian, and private sector initiatives in Afghanistan.",
    icon: FaLayerGroup,
    featured: true,
  },
  {
    id: 2,
    title: "Integrated, End-to-End Services",
    description:
      "From market studies and project design to implementation, monitoring, logistics, and reporting, we provide complete solutions under one trusted partner.",
    icon: FaLayerGroup,
  },
  {
    id: 3,
    title: "Results-Driven Project Management and Independent Oversight",
    description:
      "We ensure accountability and impact through strong project management, monitoring and evaluation, post distribution monitoring, and third party monitoring.",
    icon: FaChartLine,
  },
  {
    id: 4,
    title: "Specific and Practical Solutions",
    description:
      "Our services are tailored to local realities, whether in energy, agriculture, logistics, or communications, to ensure sustainability, scalability, and real world impact.",
    icon: FaTools,
  },
  {
    id: 5,
    title: "Technical Expertise Combined with Field Experience",
    description:
      "Our teams combine technical knowledge with on the ground implementation experience to deliver solutions that work beyond paper plans.",
    icon: FaBriefcase,
  },
  {
    id: 6,
    title: "Commitment to Sustainability and Resilience",
    description:
      "We prioritize climate smart, resource efficient, and resilient approaches that support long term development outcomes.",
    icon: FaLeaf,
    fullWidth: true,
  },
];
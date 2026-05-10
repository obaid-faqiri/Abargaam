import { FaBox, FaChartLine, FaLeaf, FaShieldAlt } from "react-icons/fa";
import image1 from "../../assets/images/About/1.webp";
import image2 from "../../assets/images/About/2.jpg";
import image3 from "../../assets/images/About/3.jpg";
import image4 from "../../assets/images/About/4.jpeg";
import image5 from "../../assets/images/About/5.jpeg";
import image6 from "../../assets/images/About/6.jpeg";
import image7 from "../../assets/images/About/7.jpeg";

import type {
  ExperienceItem,
  TeamMember,
  VisionMissionItem,
} from "./about.types";

export const aboutHero = {
  title: "Your Trusted Logistics Partner",
  breadcrumb: "/ Home / About Us /",
  image: image1,
};

export const visionMission: VisionMissionItem[] = [
  {
    id: 1,
    label: "Our Vision",
    image: image2,
    buttonText: "Contact Us ->",
    description:
      "To be the most trusted regional partner for supply chain management and strategic monitoring, recognized for our ability to navigate complex environments with transparency.",
  },
  {
    id: 2,
    label: "Our Mission",
    image: image3,
    buttonText: "Our Services ->",
    description:
      "To provide seamless logistics and consultancy solutions that bridge the gap between international standards and local realities, ensuring every project is delivered with integrity and precision.",
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Francesca Borri",
    role: "Communication and Media",
    image: image4,
    description:
      "Francesca Borri is a war reporter specializing in the Middle East. After working in Ramallah as a human rights activist, she moved to Afghanistan.",
  },
  {
    id: 2,
    name: "Abdul Kabir Ehsas",
    role: "General Logistics & Supply Chain",
    image: image5,
    description:
      "Abdul Kabir Ehsas is a senior logistics and operational specialist with years of hands-on experience supporting complex supply chain operations.",
  },
  {
    id: 3,
    name: "Najeebullah Mir",
    role: "Project Management Support",
    image: image6,
    description:
      "Najeebullah Mir is a humanitarian leader with over 17 years of experience in program management and emergency response across complex environments.",
  },
  {
    id: 4,
    name: "David Voja",
    role: "Business Development Advisor",
    image: image7,
    description:
      "David Voja brings over 15 years of experience in business development advisory services, supporting client needs across the Middle East and Europe.",
  },
];

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    year: "2019 - 2021",
    title: "Fuel Management Systems",
    organization: "SESTICA - USAID",
    color: "white",
    icon: FaShieldAlt,
    wide: true,
    tags: ["GPS Devices", "Tracking Systems", "Security Tools"],
    description:
      "Engineered and deployed a strategic fuel management project for the Ministry of Interior to combat waste and corruption.",
  },
  {
    id: 2,
    year: "2021 - 2022",
    title: "Post-Distribution Monitoring",
    organization: "People In Need",
    color: "blue",
    icon: FaBox,
    tags: ["Research", "Survey", "Analysis"],
    description:
      "Conducted large-scale post-distribution monitoring and evaluation across Samangan, Jawzjan, and Sar-e Pul Provinces.",
  },
  {
    id: 3,
    year: "2019 - 2020",
    title: "Policy Research & Governance",
    organization: "Research",
    color: "green",
    icon: FaChartLine,
    tags: ["Governance", "Research"],
    description:
      "Conducted research on issues of national security, including political reforms and decentralization.",
  },
  {
    id: 4,
    year: "2019 - 2022",
    title: "Exclusive Regional Partnership",
    organization: "DOT Classes",
    color: "blue",
    icon: FaShieldAlt,
    tags: ["AFC", "TK", "LZB"],
    description:
      "Served as the trusted Afghan partner for DOT Classes in Afghanistan and Tajikistan.",
  },
  {
    id: 5,
    year: "2021 - 2022",
    title: "Agricultural Infrastructure Facility",
    organization: "EPDOR",
    color: "orange",
    icon: FaLeaf,
    tags: ["Infrastructure", "Agriculture"],
    description:
      "Tested and managed construction materials for cold storage facilities.",
  },
  {
    id: 6,
    year: "2021",
    title: "External Evaluation",
    organization: "BBC Media Action",
    color: "white",
    icon: FaChartLine,
    wide: true,
    tags: ["FGD", "Field Research", "Monitoring"],
    description:
      "Implemented a large-scale evaluation for a media action project across multiple provinces.",
  },
];
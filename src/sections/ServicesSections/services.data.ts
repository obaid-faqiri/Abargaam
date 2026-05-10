import {
  FaBoxesStacked,
  FaChartLine,
  FaClock,
  FaHelmetSafety,
} from "react-icons/fa6";

import image1 from "../../assets/images/Services/2.jpeg";
import image2 from "../../assets/images/Services/3.jpeg";
import image3 from "../../assets/images/Services/4.jpeg";
import image4 from "../../assets/images/Services/5.jpeg";
import image5 from "../../assets/images/Services/6.jpeg";
import image6 from "../../assets/images/Services/7.jpg";
import image7 from "../../assets/images/Services/8.jpeg";
import type { AdvantageItem, ServiceCardItem } from "./services.types";

export const serviceCards: ServiceCardItem[] = [
  {
    id: 1,
    title: "General Logistics and Supply",
    image: image1,
    size: "large",
    description:
      "We provide end-to-end procurement, transportation, and delivery solutions across Afghanistan, supporting domestic distribution and project supply needs.",
  },
  {
    id: 2,
    title: "Innovative Agriculture Solutions",
    image: image2,
    size: "large",
    description:
      "Innovative agriculture solutions promote food security and resilient livelihoods through modern climate-smart technologies.",
  },
  {
    id: 3,
    title: "Renewable Energy Solutions",
    image: image3,
    size: "small",
    description:
      "Reliable and sustainable energy solutions for communities, businesses, and development programs.",
  },
  {
    id: 4,
    title: "Business Development and Market Study",
    image: image4,
    size: "small",
    description:
      "Market research and business development support for informed and data-driven decisions.",
  },
  {
    id: 5,
    title: "Strategic Communication and Media",
    image: image5,
    size: "small",
    description:
      "Communication and media services for outreach, visibility, branding, and public engagement.",
  },
  {
    id: 6,
    title: "Project Management",
    image: image6,
    size: "large",
    description:
      "Project planning, implementation, monitoring, reporting, and delivery support for effective results.",
  },
  {
    id: 7,
    title: "Human Resources & Compliance Advisory",
    image: image7,
    size: "large",
    description:
      "HR consultation, recruitment, compliance systems, policies, and organizational support services.",
  },
];

export const advantages: AdvantageItem[] = [
  {
    id: 1,
    title: "Site Planning",
    description: "Strategic analysis and infrastructure planning.",
    icon: FaHelmetSafety,
  },
  {
    id: 2,
    title: "Quality Assurance",
    description: "Rigorous quality standards and material testing.",
    icon: FaBoxesStacked,
  },
  {
    id: 3,
    title: "Material Supply",
    description: "Just-in-time logistics for construction projects.",
    icon: FaChartLine,
  },
  {
    id: 4,
    title: "Real-Time Tracking",
    description: "Live visibility for every fleet and supply movement.",
    icon: FaClock,
  },
];

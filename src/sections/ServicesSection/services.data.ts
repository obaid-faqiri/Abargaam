import oneImage from "../../assets/images/Home/2.png";
import twoImage from "../../assets/images/Home/3.jpeg";
import three from "../../assets/images/Home/4.webp";
import four from "../../assets/images/Home/5.jpeg";
import type { ServiceItem } from "./services.types";

export const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: "General Logistics & Supply Chain",
    description:
      "End-to-end logistics planning, coordination, and delivery support for complex operations.",
    image: oneImage,
    path: "/services/logistics",
  },
  {
    id: 2,
    title: "Business Development Services",
    description:
      "Market-focused advisory and growth strategy support aligned with local realities.",
    image: twoImage,
    path: "/services/business",
  },
  {
    id: 3,
    title: "Strategic Communication and Media",
    description:
      "Communication, media, and reporting services that strengthen visibility and impact.",
    image: three,
    path: "/services/media",
  },
  {
    id: 4,
    title: "Project Management Support",
    description:
      "Structured planning and execution support to keep projects on track in dynamic environments.",
    image: four,
    path: "/services/project",
  },
];

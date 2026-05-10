import type { ImpactProject } from "./impact.types";
import oneImage from "../../assets/images/Home/2.png";
import second from "../../assets/images/Home/4.webp";
import thrid from "../../assets/images/Home/6.png";
import fourth from "../../assets/images/Home/7.jpeg";

export const impactProjects: ImpactProject[] = [
  {
    id: 1,
    title: "Humanitarian Supply Chain Deployment",
    location: "Kabul, Afghanistan",
    year: "2024",
    category: "Featured Project",
    summary:
      "Delivered end-to-end logistics support for humanitarian aid distribution across remote regions, including procurement coordination, secure transport planning, and last mile delivery tracking to ensure timely assistance.",
    image: oneImage,
    tags: ["Logistics", "Field Operations"],
    featured: true,
  },
  {
    id: 2,
    title: "Monitoring & Evaluation",
    location: "Balkh, Afghanistan",
    year: "2023",
    category: "M&E",
    summary:
      "Implemented monitoring and evaluation support for public sector reporting programs.",
    image: second,
    tags: ["M&E", "Data Analytics"],
  },
  {
    id: 3,
    title: "Strategic Advisory Program",
    location: "Afghanistan",
    year: "2023",
    category: "Advisory",
    summary:
      "Provided advisory services for supply chain optimization and operational planning.",
    image: thrid,
    tags: ["Policy Development", "Advisory"],
  },
  {
    id: 4,
    title: "HR & Compliance Advisory",
    location: "Kabul, Afghanistan",
    year: "2024",
    category: "HR Advisory",
    summary:
      "Guided HR structure and compliance advisory, including policy and SOP refinement.",
    image: fourth,
    tags: ["HR Advisory", "Compliance"],
  },
];
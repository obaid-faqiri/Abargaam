// partners.data.ts
import type { PartnerItem } from "./partners.types";

// Import images for the logos (replace with correct paths)
import usaIdLogo from "../../assets/images/Home/10.png";
import altronLogo from "../../assets/images/Home/11.png";
import heartOfAsiaLogo from "../../assets/images/Home/12.jpeg";
import peopleInNeedLogo from "../../assets/images/Home/13.png";
import dotGlassesLogo from "../../assets/images/Home/14.png";
import bbcLogo from "../../assets/images/Home/15.png";

export const partnersData: PartnerItem[] = [
  {
    id: 1,
    name: "USAID",
    subtitle: "USAID",
    logo: usaIdLogo,
  },
  {
    id: 2,
    name: "ALTRON",
    subtitle: "ALTRON 35",
    logo: altronLogo,
  },
  {
    id: 3,
    name: "Heart of Asia",
    subtitle: "Heart of Asia Society",
    logo: heartOfAsiaLogo,
  },
  {
    id: 4,
    name: "People in Need",
    subtitle: "People in Need",
    logo: peopleInNeedLogo,
  },
  {
    id: 5,
    name: "DOT",
    subtitle: "DOT Glasses",
    logo: dotGlassesLogo,
  },
  {
    id: 6,
    name: "BBC",
    subtitle: "BBC Media Action",
    logo: bbcLogo,
  },
];
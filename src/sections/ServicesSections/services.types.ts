import type { IconType } from "react-icons";

export interface ServiceCardItem {
  id: number;
  title: string;
  description: string;
  image: string;
  size: "large" | "small";
}

export interface AdvantageItem {
  id: number;
  title: string;
  description: string;
  icon: IconType;
}
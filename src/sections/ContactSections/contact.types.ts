import type { IconType } from "react-icons";

export interface ContactInfoItem {
  id: number;
  title: string;
  description: string[];
  icon: IconType;
  color: string;
}
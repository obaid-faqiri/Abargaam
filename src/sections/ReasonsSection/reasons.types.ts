import type { IconType } from "react-icons";

export interface ReasonItem {
  id: number;
  title: string;
  description: string;
  icon: IconType;
  featured?: boolean;
  fullWidth?: boolean;
}
import type { IconType } from "react-icons";

export interface VisionMissionItem {
  id: number;
  label: string;
  description: string;
  image: string;
  buttonText: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface ExperienceItem {
  id: number;
  year: string;
  title: string;
  organization: string;
  description: string;
  color: "white" | "green" | "blue" | "orange";
  tags: string[];
  icon: IconType;
  wide?: boolean;
}
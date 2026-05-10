export interface ImpactProject {
  id: number;
  title: string;
  location: string;
  year: string;
  category: string;
  summary: string;
  image: string;
  tags: string[];
  featured?: boolean;
}
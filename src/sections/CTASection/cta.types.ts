export interface CtaDot {
  id: number;
  color: string;
  outlined?: boolean;
}

export interface CtaContent {
  title: string;
  buttonText: string;
  image: string;
  dots: CtaDot[];
}
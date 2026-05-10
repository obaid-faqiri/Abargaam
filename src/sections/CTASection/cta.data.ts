import oneImage from "../../assets/images/Home/9.png";
import type { CtaContent } from "./cta.types";

export const ctaData: CtaContent = {
  title: "Need dependable support across Afghanistan?",
  buttonText: "Contact us",
  image: oneImage,

  // (optional) you can delete this completely if not used
  dots: [
    { id: 1, color: "#ffffff" },
    { id: 2, color: "#F7931D", outlined: true },
    { id: 3, color: "#14A695" },
  ],
};
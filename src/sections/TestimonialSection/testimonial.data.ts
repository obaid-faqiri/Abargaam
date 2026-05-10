import oneImage from "../../assets/images/Home/16.jpg";
import second from "../../assets/images/Home/17.jpeg";
import third from "../../assets/images/Home/18.jpeg";
import icon1 from "../../assets/images/Home/19.svg";
import icon2 from "../../assets/images/Home/21.png";

export const testimonialData = [
  {
    id: 1,
    name: "Jessica Mathew",
    role: "Logistics Coordinator",
    title: "Exceptional Service",
    quote:
      "Abargaam exceeded our expectations with clear communication, transparent coordination, and on-time support in challenging conditions.",
    company: "Flectra",
    rating: 5,
    image: oneImage,
    icon: icon1, // 👈 first icon
  },
  {
    id: 2,
    name: "Ahmed Khan",
    role: "Business Owner",
    title: "Dependable Logistics",
    quote:
      "Since choosing Abargaam as our logistics partner, we have seen major improvement in reliability, visibility, and client satisfaction.",
    company: "Flectra",
    rating: 5,
    image: second,
    icon: icon1, // 👈 same company → same icon
  },
  {
    id: 3,
    name: "David Thomas",
    role: "Supply Chain Manager",
    title: "Seamless Experience",
    quote:
      "We've partnered with many logistics companies, but Abargaam stands out for reliability and practical execution. Their responsive team has improved our delivery flow significantly.",
    company: "Brandalix",
    rating: 4,
    image: third,
    icon: icon2, // 👈 different icon
  },
];

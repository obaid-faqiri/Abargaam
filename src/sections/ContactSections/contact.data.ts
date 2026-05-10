import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import image1 from "../../assets/images/Contact/1.webp";
import type { ContactInfoItem } from "./contact.types";

export const contactHero = {
  title: "Your Trusted Logistics Partner",
  breadcrumb: "/ Home / Contact Us /",
  image: image1,
};

export const contactInfo: ContactInfoItem[] = [
  {
    id: 1,
    title: "Office Address",
    icon: FaLocationDot,
    color: "#00B496",
    description: [
      "Office: Karte Charahi, Street 1, House 5, Kabul, Afghanistan",
      "Postal: P.O. Box 100613 - 19 - 79",
      "City: Darul Aman Post Office, Kabul City Afghanistan",
    ],
  },
  {
    id: 2,
    title: "Phone Number",
    icon: FaPhone,
    color: "#008DA3",
    description: ["+93 789174000", "WhatsApp Business"],
  },
  {
    id: 3,
    title: "Email Address",
    icon: FaEnvelope,
    color: "#F7931D",
    description: ["sales@faqiri.com"],
  },
];
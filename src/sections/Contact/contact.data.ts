import type { ContactInfoItem, ContactFormValues } from "./contact.types";

export const contactInitialValues: ContactFormValues = {
  fullName: "",
  email: "",
  phone: "",
  sector: "",
  organization: "",
  country: "",
  message: "",
};

export const countryOptions = [
  "Afghanistan",
  "Pakistan",
  "India",
  "United Arab Emirates",
  "Turkey",
  "Germany",
  "United Kingdom",
  "United States",
  "Other",
];

export const sectorOptions = [
  "Logistics",
  "Supply Chain",
  "Business Advisory",
  "Media & Communication",
  "Project Management",
  "Humanitarian Services",
  "Private Sector",
  "Other",
];

export const contactInfo: ContactInfoItem[] = [
  {
    id: 1,
    title: "WhatsApp Business",
    value: "+93 789 174 600",
    type: "whatsapp",
  },
  {
    id: 2,
    title: "Direct Number",
    value: "+93 789 174 600",
    type: "phone",
  },
  {
    id: 3,
    title: "Email Address",
    value: "sales@abargaam.com",
    type: "email",
  },
  {
    id: 4,
    title: "Office Address",
    value: "Office Kote Char, Street 1, House 5, Kabul, Afghanistan",
    type: "address",
  },
  {
    id: 5,
    title: "Postal Address",
    value: "Postal P.O. Box 100012 - 19 - 19",
    type: "postal",
  },
  {
    id: 6,
    title: "Postal City",
    value: "City Grand Ayaan Post Office, Kabul City",
    type: "city",
  },
  {
    id: 7,
    title: "Country",
    value: "Afghanistan",
    type: "country",
  },
];
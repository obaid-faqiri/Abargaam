export interface ContactFormValues {
  fullName: string;
  email: string;
  phone: string;
  sector: string;
  organization: string;
  country: string;
  message: string;
}

export interface ContactFormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  sector?: string;
  organization?: string;
  country?: string;
  message?: string;
}

export interface ContactInfoItem {
  id: number;
  title: string;
  value: string;
  type: string;
}
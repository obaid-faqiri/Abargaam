import { useMemo, useState } from "react";
import { contactInitialValues } from "../sections/Contact/contact.data";
import type {
  ContactFormErrors,
  ContactFormValues,
} from "../sections/Contact/contact.types";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[+0-9\s\-()]{7,20}$/;

const validateForm = (values: ContactFormValues) => {
  const errors: ContactFormErrors = {};

  if (!values.fullName.trim()) {
    errors.fullName = "Full name is required.";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!emailRegex.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!phoneRegex.test(values.phone.trim())) {
    errors.phone = "Enter a valid phone number.";
  }

  if (!values.sector.trim()) {
    errors.sector = "Please select a business sector.";
  }

  if (!values.organization.trim()) {
    errors.organization = "Organization is required.";
  }

  if (!values.country.trim()) {
    errors.country = "Please select a country.";
  }

  if (!values.message.trim()) {
    errors.message = "Project details are required.";
  } else if (values.message.trim().length < 20) {
    errors.message = "Please provide a little more detail.";
  }

  return errors;
};

export default function useContactForm() {
  const [values, setValues] = useState<ContactFormValues>(contactInitialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isValid = useMemo(() => {
    return Object.keys(validateForm(values)).length === 0;
  }, [values]);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (touched[name]) {
      const nextValues = {
        ...values,
        [name]: value,
      };
      setErrors(validateForm(nextValues));
    }
  };

  const handleBlur = (
    event: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name } = event.target;

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    setErrors(validateForm(values));
  };

  const resetForm = () => {
    setValues(contactInitialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
    setIsSubmitted(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validateForm(values);
    setErrors(nextErrors);

    setTouched({
      fullName: true,
      email: true,
      phone: true,
      sector: true,
      organization: true,
      country: true,
      message: true,
    });

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    try {
      setIsSubmitting(true);
      setIsSubmitted(false);

      await new Promise((resolve) => setTimeout(resolve, 1200));

      console.log("Submitted contact form:", values);

      setIsSubmitted(true);
      setValues(contactInitialValues);
      setTouched({});
      setErrors({});
    } catch (error) {
      console.error("Contact form submission failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    values,
    errors,
    touched,
    isSubmitting,
    isSubmitted,
    isValid,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  };
};
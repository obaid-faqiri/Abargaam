import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBoxOpen,
  FaCity,
  FaGlobeAsia,
} from "react-icons/fa";
import { contactInfo, countryOptions, sectorOptions } from "./contact.data";
import { useContactForm } from "../../hooks/useContactForm";

const headerVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const getIcon = (type: string) => {
  switch (type) {
    case "whatsapp":
      return <FaWhatsapp className="text-[14px]" />;
    case "phone":
      return <FaPhoneAlt className="text-[13px]" />;
    case "email":
      return <FaEnvelope className="text-[13px]" />;
    case "address":
      return <FaMapMarkerAlt className="text-[13px]" />;
    case "postal":
      return <FaBoxOpen className="text-[13px]" />;
    case "city":
      return <FaCity className="text-[13px]" />;
    case "country":
      return <FaGlobeAsia className="text-[13px]" />;
    default:
      return <FaEnvelope className="text-[13px]" />;
  }
};

const inputBaseClass =
  "w-full rounded-[10px] border bg-white px-4 py-3 text-[13px] text-[#23364D] outline-none transition placeholder:text-[#A0AEC0] focus:border-[#14A695] focus:ring-2 focus:ring-[#14A695]/15";

const ContactPage = () => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    isSubmitted,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useContactForm();

  return (
    <section className="bg-[#EEF2F3] px-6 py-5 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate="show"
          className="mb-4 flex items-center justify-between rounded-[6px] border border-[#D9DEE4] bg-white px-4 py-3 shadow-sm"
        >
          <h1 className="text-[18px] font-medium text-[#0E2341] py-3 ">
            Contact Us
          </h1>

          <p className="text-[10px] font-medium text-[#5D6778] md:text-xs">
            <span className="text-[#099E8D]">•</span> Start Conversation{" "}
            <span className="text-[#099E8D]">•</span>
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="rounded-[6px] border border-[#D9DEE4] bg-white p-4 shadow-sm md:p-6"
        >
          <div className="grid gap-4 lg:grid-cols-[1fr_1.05fr]">
            <motion.div
              variants={cardVariants}
              className="rounded-[18px] border border-[#D9DEE4] bg-[#FBFCFD] p-5"
            >
              <span className="inline-flex rounded-full bg-[#DDF6F1] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#14A695]">
                Let&apos;s Talk
              </span>

              <h2 className="mt-4 text-[30px] font-semibold leading-[1.05] text-[#0E2341]">
                Send us your requirement
              </h2>

              <p className="mt-3 max-w-[500px] text-[13px] leading-6 text-[#6C7B8C]">
                Tell us about your business need and our team will get back to
                you with a practical response.
              </p>

              {isSubmitted && (
                <div className="mt-4 rounded-[12px] border border-[#CFF3EA] bg-[#ECFDF8] px-4 py-3 text-[13px] text-[#0C7C6E]">
                  Your message has been sent successfully.
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Your Name"
                      value={values.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${inputBaseClass} ${
                        touched.fullName && errors.fullName
                          ? "border-[#F87171]"
                          : "border-[#D9DEE4]"
                      }`}
                    />
                    {touched.fullName && errors.fullName && (
                      <p className="mt-2 text-[12px] text-[#DC2626]">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${inputBaseClass} ${
                        touched.email && errors.email
                          ? "border-[#F87171]"
                          : "border-[#D9DEE4]"
                      }`}
                    />
                    {touched.email && errors.email && (
                      <p className="mt-2 text-[12px] text-[#DC2626]">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${inputBaseClass} ${
                        touched.phone && errors.phone
                          ? "border-[#F87171]"
                          : "border-[#D9DEE4]"
                      }`}
                    />
                    {touched.phone && errors.phone && (
                      <p className="mt-2 text-[12px] text-[#DC2626]">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <select
                      name="sector"
                      value={values.sector}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${inputBaseClass} ${
                        touched.sector && errors.sector
                          ? "border-[#F87171]"
                          : "border-[#D9DEE4]"
                      }`}
                    >
                      <option value="">Business Sector</option>
                      {sectorOptions.map((sector) => (
                        <option key={sector} value={sector}>
                          {sector}
                        </option>
                      ))}
                    </select>
                    {touched.sector && errors.sector && (
                      <p className="mt-2 text-[12px] text-[#DC2626]">
                        {errors.sector}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="text"
                      name="organization"
                      placeholder="Organization"
                      value={values.organization}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${inputBaseClass} ${
                        touched.organization && errors.organization
                          ? "border-[#F87171]"
                          : "border-[#D9DEE4]"
                      }`}
                    />
                    {touched.organization && errors.organization && (
                      <p className="mt-2 text-[12px] text-[#DC2626]">
                        {errors.organization}
                      </p>
                    )}
                  </div>

                  <div>
                    <select
                      name="country"
                      value={values.country}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${inputBaseClass} ${
                        touched.country && errors.country
                          ? "border-[#F87171]"
                          : "border-[#D9DEE4]"
                      }`}
                    >
                      <option value="">Select Country</option>
                      {countryOptions.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                    {touched.country && errors.country && (
                      <p className="mt-2 text-[12px] text-[#DC2626]">
                        {errors.country}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-4">
                  <textarea
                    name="message"
                    placeholder="Tell us about your project or requirement"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={5}
                    className={`${inputBaseClass} resize-none ${
                      touched.message && errors.message
                        ? "border-[#F87171]"
                        : "border-[#D9DEE4]"
                    }`}
                  />
                  {touched.message && errors.message && (
                    <p className="mt-2 text-[12px] text-[#DC2626]">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-5 inline-flex w-full items-center justify-center rounded-[10px] bg-[#FF7A14] px-5 py-3 text-[12px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#f06d08] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Submitting..." : "Submit Now"}
                </button>
              </form>
            </motion.div>

            <motion.div
              variants={cardVariants}
              className="rounded-[18px] bg-gradient-to-br from-[#0FAE9D] via-[#179F8F] to-[#0A8A7D] p-5 text-white shadow-[0_18px_45px_rgba(15,166,149,0.22)]"
            >
              <span className="inline-flex rounded-full bg-white/14 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/90">
                Contact Details
              </span>

              <h2 className="mt-4 text-[30px] font-semibold leading-[1.05]">
                Get in touch with ABARGAAM
              </h2>

              <p className="mt-3 max-w-[520px] text-[13px] leading-6 text-white/85">
                We provide logistics, advisory, and project support services
                across Afghanistan. Share your scope and our team will respond
                with a practical plan.
              </p>

              <div className="mt-6 space-y-3">
                {contactInfo.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start gap-3 rounded-[12px] border border-white/20 bg-white/8 px-4 py-4 backdrop-blur-[2px]"
                  >
                    <div className="mt-0.5 flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center rounded-full bg-white text-[#119E8F]">
                      {getIcon(item.type)}
                    </div>

                    <div>
                      <p className="text-[11px] font-semibold text-white/95">
                        {item.title}
                      </p>
                      <p className="mt-1 text-[12px] leading-5 text-white/85">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-[12px] border border-white/20 bg-white/8 px-4 py-4 text-[12px] leading-6 text-white/85">
                Need quick support? Contact us by WhatsApp, phone, or email and
                our team will assist you promptly.
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;

import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa6"; // Play icon
import { useState } from "react";
import video from "../../assets/videos/1.mp4";

const inputClass =
  "h-[34px] w-full rounded-[6px] border border-[#D6E0E7] bg-white px-3 text-[12px] text-[#0E2341] outline-none placeholder:text-[#9AA8B5] focus:border-[#008DA3]";

const ContactFormSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section className="bg-[#EEF2F3] px-4 py-8 sm:px-6 lg:px-10 xl:px-6">
      <div className="mx-auto max-w-[1760px]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid overflow-hidden rounded-[8px] bg-white shadow-sm lg:grid-cols-2"
        >
          <div className="p-8">
            <span className="inline-flex rounded-full bg-[#E0F7F3] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#008D83]">
              Contact Us
            </span>

            <h2 className="mt-4 text-[28px] font-bold leading-tight text-[#07152F]">
              Fill the form below
            </h2>

            <p className="mt-2 max-w-[370px] text-[12px] leading-5 text-[#536579]">
              Share your details and requirements with us. Our team will get
              back to you as soon as possible.
            </p>

            <form className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input className={inputClass} placeholder="Your Name" />
                <input className={inputClass} placeholder="Your Email" />
                <input className={inputClass} placeholder="Phone Number" />
                <input className={inputClass} placeholder="Business Type" />
                <input className={inputClass} placeholder="Company Name" />

                <select className={inputClass} defaultValue="">
                  <option value="" disabled>
                    Select Country
                  </option>
                  <option>Afghanistan</option>
                  <option>Pakistan</option>
                  <option>United Arab Emirates</option>
                  <option>Turkey</option>
                </select>
              </div>

              <textarea
                className="h-[120px] w-full resize-none rounded-[6px] border border-[#D6E0E7] bg-white px-3 py-3 text-[12px] text-[#0E2341] outline-none placeholder:text-[#9AA8B5] focus:border-[#008DA3]"
                placeholder="Tell us about your project or inquiry"
              />

              <label className="flex items-start gap-2 rounded-[6px] border border-[#D6E0E7] px-3 py-3 text-[12px] leading-4 text-[#536579]">
                <input type="checkbox" className="mt-0.5" />
                <span>
                  I agree to the privacy policy and consent to being contacted
                  regarding my inquiry.
                </span>
              </label>

              <button
                type="button"
                className="h-[44px] w-full rounded-[6px] bg-[#F7931D] text-[12px] font-bold uppercase tracking-[0.22em] text-white shadow-sm transition hover:bg-[#e67f0c]"
              >
                Submit Now
              </button>
            </form>
          </div>

          <div className="relative min-h-[420px] overflow-hidden bg-black">
            {isVideoPlaying ? (
              <video
                src={video}
                className="object-cover w-full h-full"
                controls
                autoPlay
              />
            ) : (
              <div>
                <video
                  src={video}
                  className="object-cover w-full h-full opacity-75"
                  muted
                  loop
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <button
                  type="button"
                  onClick={handlePlayClick}
                  className="absolute left-8 top-1/2 flex h-[48px] w-[48px] -translate-y-1/2 items-center justify-center rounded-full border-[5px] border-white/60 bg-white text-[#008D83] shadow-lg"
                >
                  <FaPlay className="ml-1 text-[14px]" />
                </button>
              </div>
            )}

            <div className="absolute bottom-8 left-8 max-w-[280px]">
              <span className="rounded-full bg-white/20 px-3 py-1 text-[8px] font-bold uppercase tracking-[0.16em] text-white">
                Watch Overview
              </span>

              <h3 className="mt-4 text-[28px] font-black leading-[1] text-white">
                Get in touch with Faqiri
              </h3>

              <p className="mt-3 text-[12px] leading-5 text-white/80">
                Have questions or need support for your next project? Reach out
                to our team and let’s discuss how we can help.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactFormSection;

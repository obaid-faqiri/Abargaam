import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { teamMembers } from "./about.data";

const TeamSection = () => {
  const whatsappLink =
    "https://wa.me/93788653654?text=Hello%20I%20want%20to%20contact%20you";

  return (
    <section className="bg-[#EEF2F3] px-4 pt-8 sm:px-6 lg:px-10 xl:px-6">
      <div className="mx-auto max-w-[1760px]">
        <div className="mb-6 flex h-[42px] items-center justify-between rounded-[3px] border border-[#D9DEE4] bg-white px-4 shadow-sm">
          <h2 className="text-[16px] font-medium text-[#0E2341] sm:text-[18px]">
            The People Behind Faqiri
          </h2>

          <p className="text-[10px] font-medium text-[#5D6778] sm:text-[12px]">
            <span className="text-[#099E8D]">•</span> Our Team{" "}
            <span className="text-[#099E8D]">•</span>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.article
              key={member.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="overflow-hidden rounded-[5px] bg-white shadow-sm min-h-[350px] p-5"
            >
              <img
                src={member.image}
                alt={member.name}
                className="h-[205px] w-full object-cover rounded-t-[5px]"
              />

              <div className="p-3">
                <h3 className="text-[16px] font-bold text-[#07152F]">
                  {member.name}
                </h3>

                <p className="mt-2 text-[12px] font-medium text-[#008D83]">
                  {member.role}
                </p>

                <p className="mt-2 text-[12px] leading-5 text-[#536579]">
                  {member.description}
                </p>

                <button className="mt-4 text-[12px] font-semibold text-[#008D83]">
                  Show more
                </button>

                {/* Social Media Links as WhatsApp links */}
                <div className="flex gap-2 mt-4">
                  {[FaTwitter, FaFacebookF, FaLinkedinIn].map((Icon, i) => (
                    <a
                      key={i}
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-[24px] w-[24px] items-center justify-center rounded-full border border-[#DCE5EB] text-[12px] text-[#0E2341] hover:bg-[#008DA3] hover:text-white transition duration-300"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

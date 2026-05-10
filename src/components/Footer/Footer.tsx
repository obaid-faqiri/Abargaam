import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#EEF2F3] px-6 py-4 sm:px-10 lg:px-12 xl:px-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-[6px] bg-white px-5 py-4 text-[14px] text-[#0E2341] shadow-sm">
        {/* Left Side Navigation */}
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-[#008DA3] text-base">
            Home
          </a>
          <span className="h-[4px] w-[4px] rounded-full bg-[#008DA3]" />
          <a href="#" className="hover:text-[#008DA3] text-base">
            Services
          </a>
          <span className="h-[4px] w-[4px] rounded-full bg-[#008DA3]" />
          <a href="#" className="hover:text-[#008DA3] text-base">
            About
          </a>
        </div>

        {/* Email Link */}
        <a
          href="mailto:sales@faqiri.com"
          className="hover:text-[#008DA3] text-base"
        >
          sales@faqiri.com
        </a>

        {/* Right Side Navigation */}
        <div className="flex items-center gap-6">
          {/* Blogs Link */}
          <a href="#" className="hover:text-[#008DA3] text-base">
            Blogs
          </a>
          <span className="h-[4px] w-[4px] rounded-full bg-[#008DA3]" />

          {/* Contact Us (WhatsApp link) */}
          <a
            href="https://wa.me/93788653654?text=Hello%20I%20want%20to%20contact%20you"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#008DA3] text-base"
          >
            Contact Us
          </a>

          {/* Social Media Icons */}
          <div className="flex items-center gap-3 ml-6">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="https://www.facebook.com/profile.php?id=61560030804428"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-[#DCE5EB] bg-white text-[16px] text-[#8AA0B3] transition-all duration-300 hover:border-[#0EA5B7] hover:text-[#0EA5B7]"
                >
                  <Icon />
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

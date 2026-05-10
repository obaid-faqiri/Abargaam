import { navLinks } from "./navbar.data";
import { motion } from "framer-motion";
import { FiPhone } from "react-icons/fi";
import { NavLink as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center w-full px-6 pt-6">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-7xl bg-[#0E8A8F] text-white rounded-xl shadow-md px-6 py-4 flex items-center justify-between"
      >
        {/* LOGO */}
        <div className="font-serif text-2xl font-extrabold tracking-widest text-white">
          Faqiri
        </div>

        {/* NAV LINKS */}
        <div className="items-center hidden md:flex">
          {navLinks.map((link, index) => (
            <div key={link.id} className="flex items-center">
              <RouterLink
                to={link.path}
                className={({ isActive }) =>
                  `
                  relative text-sm font-medium transition duration-300
                  ${
                    isActive
                      ? "text-yellow-300"
                      : "text-white/90 hover:text-white"
                  }

                  after:content-['']
                  after:absolute
                  after:left-0
                  after:-top-3
                  after:h-[2px]
                  after:bg-yellow-300
                  after:transition-all
                  after:duration-300

                  ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
                  `
                }
              >
                {link.title}
              </RouterLink>

              {index !== navLinks.length - 1 && (
                <span className="mx-3 text-xs text-white/60">•</span>
              )}
            </div>
          ))}
        </div>

        {/* WHATSAPP BUTTON */}
        <motion.a
          href="https://wa.me/93788653654?text=Hello%20I%20want%20to%20contact%20you"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          animate={{ y: [0, -2, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 3,
            ease: "easeInOut",
          }}
          className="flex items-center gap-3 bg-[#0A6F73] px-4 py-2 rounded-full cursor-pointer shadow-md"
        >
          {/* ICON */}
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
            className="p-2 bg-green-500 rounded-full"
          >
            <FiPhone className="text-sm text-white" />
          </motion.div>

          <div className="hidden text-xs leading-tight sm:block">
            <p className="opacity-80">WhatsApp</p>
            <p className="font-semibold">0788653654</p>
          </div>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Navbar;

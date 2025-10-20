import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  {
    Icon: FaLinkedin,
    url: "https://www.linkedin.com/in/amrutha-reddy-karumuru",
    label: "LinkedIn",
    hoverClass: "hover:text-blue-600",
  },
  {
    Icon: FaGithub,
    url: "https://github.com/amrutha-reddy",
    label: "GitHub",
    hoverClass: "hover:text-purple-600",
  },
  {
    Icon: FaEnvelope,
    url: "mailto:karumuruamruthareddy@gmail.com",
    label: "Email",
    hoverClass: "hover:text-red-500",
  },
];

const Navbar = () => {

  return (
    <nav className="flex items-center justify-between py-3 px-4 sm:py-4 md:py-6 sm:px-6 md:px-8 fixed top-0 left-0 right-0 z-50 bg-[#2a2a2a]/95 backdrop-blur-sm">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex items-center gap-3 group touch-manipulation"
        aria-label="Scroll to top"
      >
        <div className="w-10 h-10 sm:w-8 sm:h-8 bg-white flex items-center justify-center">
          <span className="text-black font-bold text-sm">AR</span>
        </div>
      </button>

      <div className="flex items-center gap-5 sm:gap-6 md:gap-8">
        {socialLinks.map(({ Icon, url, label }) => (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-neutral-500 hover:text-white transition-colors duration-300 touch-manipulation p-2 -m-2"
          >
            <Icon className="w-5 h-5 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5" />
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

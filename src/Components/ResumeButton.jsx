import resume from "../assets/Amrutha_Reddy_Resume.pdf";
import { FiDownload } from "react-icons/fi";

const Resume = () => {
  return (
    <a
      href={resume}
      download="Amrutha_Reddy_Karumuru_Resume.pdf"
      className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium hover:bg-white/20 hover:scale-105 transition-all duration-300 touch-manipulation"
    >
      <FiDownload className="text-base sm:text-base" />
      Download Resume
    </a>
  );
};

export default Resume;

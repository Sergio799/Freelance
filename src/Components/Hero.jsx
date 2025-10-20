import { motion } from "framer-motion";
import profileImage from "../assets/Profile.jpg";

const Hero = () => {

  return (
    <div className="min-h-screen bg-[#2a2a2a] text-white pt-24 sm:pt-32 pb-16 sm:pb-20 flex items-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full">
        <div className="text-center space-y-6 sm:space-y-8">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-neutral-400 uppercase"
          >
            WELCOME TO
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-none px-2 sm:px-4"
          >
            AMRUTHA REDDY
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] text-neutral-400 uppercase font-light px-2 sm:px-4"
          >
            Software Engineer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-[11px] sm:text-xs md:text-sm text-neutral-500 tracking-wider px-2 sm:px-4"
          >
            Charlotte, NC | AWS Certified
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="pt-6 sm:pt-8"
          >
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-800 opacity-50 blur-2xl" />
              <div className="relative w-full h-full rounded-full overflow-hidden border border-neutral-700 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Amrutha Reddy Karumuru"
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center text-4xl sm:text-6xl text-white">AR</div>';
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator - hidden on mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="hidden sm:flex absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-neutral-500 tracking-widest">SCROLL</span>
            <div className="w-px h-12 bg-gradient-to-b from-neutral-500 to-transparent" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../constants";

import { motion } from "framer-motion";

const ProjectCard = ({ title, description, githubUrl, number, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative border border-neutral-800 hover:border-white transition-all duration-300 p-5 sm:p-6 md:p-8 lg:p-12"
  >
    {/* Project Number */}
    <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-6">
      <span className="text-[10px] sm:text-xs text-neutral-600 font-mono tracking-wider">
        PROJECT {number.toString().padStart(2, '0')}
      </span>
      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-700 group-hover:text-white transition-colors" />
    </div>

    {/* Content */}
    <div className="space-y-2.5 sm:space-y-3 md:space-y-4">
      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white tracking-tight group-hover:text-neutral-300 transition-colors">
        {title}
      </h3>
      {description && (
        <p className="text-neutral-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-3xl">
          {description}
        </p>
      )}
    </div>

    {/* View Project Button */}
    <div className="mt-5 sm:mt-6 md:mt-8">
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-5 py-2.5 sm:px-6 sm:py-2.5 md:px-8 md:py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium hover:bg-white/20 hover:scale-105 transition-all duration-300 touch-manipulation"
      >
        View Project
      </a>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <div id="projects" className="min-h-screen bg-[#2a2a2a] py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="mb-10 sm:mb-12 md:mb-16 lg:mb-20 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
            MY WORK
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm md:text-base lg:text-lg">
            Selected projects showcasing enterprise applications and technical solutions
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} {...project} number={index + 1} index={index} />
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 sm:mt-16 md:mt-20 grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6"
        >
          <div className="border border-neutral-800 p-6 sm:p-7 md:p-8 hover:border-white hover:scale-105 transition-all duration-300">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
              Open Source Contributions
            </h3>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              Active contributor to open-source projects. Check out my GitHub for more work.
            </p>
            <a
              href="https://github.com/amrutha-reddy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 sm:mt-6 px-5 sm:px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium hover:bg-white/20 transition-all duration-300 touch-manipulation"
            >
              View GitHub
            </a>
          </div>

          <div className="border border-neutral-800 p-6 sm:p-7 md:p-8 hover:border-white hover:scale-105 transition-all duration-300">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
              Let's Collaborate
            </h3>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              Interested in working together? I'm always open to discussing new projects and opportunities.
            </p>
            <a
              href="#contact"
              className="inline-block mt-5 sm:mt-6 px-5 sm:px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium hover:bg-white/20 transition-all duration-300 touch-manipulation"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;

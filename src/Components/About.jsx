import { motion } from "framer-motion";
import ResumeButton from "./ResumeButton";
import { EXPERIENCES } from "../constants";

const About = () => {
  return (
    <div className="min-h-screen bg-[#2a2a2a] py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 tracking-tight px-2">
            ABOUT ME
          </h2>
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-5 md:space-y-6 px-2">
            <p className="text-neutral-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-light">
              Software Engineer with <span className="text-white font-medium">3+ years</span> building 
              scalable enterprise applications for financial services and insurance sectors.
            </p>
            <p className="text-neutral-400 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
              <span className="text-white">AWS Certified Solutions Architect</span> specializing in 
              .NET, Node.js, and cloud-native architectures. Expert in designing RESTful and GraphQL 
              APIs, microservices, and high-performance backend systems serving thousands of concurrent users.
            </p>
            <p className="text-neutral-400 text-xs sm:text-sm md:text-base leading-relaxed">
              Proven track record: <span className="text-white">99.9% uptime</span>, 
              <span className="text-white"> 30% reduction in defects</span>, and consistent 
              delivery ahead of schedule in Agile environments.
            </p>
          </div>
        </motion.div>

        {/* Resume Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-12 sm:mb-16 md:mb-20"
        >
          <ResumeButton />
        </motion.div>

        {/* Experience & Education Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-10 sm:space-y-12 md:space-y-16"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white tracking-tight text-center px-2">
            EXPERIENCE & EDUCATION
          </h3>

          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative border-l-2 border-neutral-800 pl-6 sm:pl-8 py-4 sm:py-6 hover:border-white transition-colors duration-300"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-6 sm:top-8 w-4 h-4 rounded-full bg-neutral-800 group-hover:bg-white transition-colors duration-300" />

                {/* Content */}
                <div className="space-y-3 sm:space-y-4">
                  {/* Title and Location */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-white pr-2">
                      {exp.title}
                    </h4>
                    {exp.location && (
                      <span className="text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] text-neutral-500 uppercase">
                        {exp.location}
                      </span>
                    )}
                  </div>

                  {/* Type Badge */}
                  <div className="inline-block">
                    <span className={`text-[10px] sm:text-xs tracking-wider px-2.5 sm:px-3 py-1 border ${
                      exp.type === "education" 
                        ? "border-green-500/50 text-green-400" 
                        : "border-blue-500/50 text-blue-400"
                    }`}>
                      {exp.type === "education" ? "EDUCATION" : "WORK EXPERIENCE"}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-400 text-xs sm:text-sm md:text-base leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 sm:mt-16 md:mt-20 pt-12 sm:pt-16 md:pt-20 border-t border-neutral-800"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-tight text-center mb-8 sm:mb-10 md:mb-12 px-2">
            CERTIFICATIONS
          </h3>
          
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <div className="border border-neutral-800 p-5 sm:p-6 hover:border-white transition-colors duration-300">
              <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                AWS Certified Solutions Architect Associate
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Validated expertise in designing scalable, secure distributed systems
              </p>
            </div>
            
            <div className="border border-neutral-800 p-5 sm:p-6 hover:border-white transition-colors duration-300">
              <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                AWS Academy Data Engineering
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Proficiency in data engineering principles and AWS technologies
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 sm:mt-16 md:mt-20 text-center"
        >
          <div className="border border-neutral-800 p-8 sm:p-10 md:p-12 hover:border-white transition-colors duration-300">
            <p className="text-neutral-300 text-lg sm:text-xl font-light mb-2">
              Ready to build something amazing?
            </p>
            <p className="text-neutral-500 text-xs sm:text-sm mb-6 sm:mb-8">
              Let's discuss your next project
            </p>
            <a
              href="#contact"
              className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium hover:bg-white/20 transition-all duration-300 touch-manipulation"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

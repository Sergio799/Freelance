import { motion } from "framer-motion";

const Technologies = () => {
  const technologies = [
    // Programming Languages
    "C#",
    "JavaScript",
    "TypeScript",
    "SQL",
    "Java",
    "Python",
    
    // Frontend Development
    "React",
    "HTML5",
    "CSS3",
    "AngularJS",
    "jQuery",
    "AJAX",
    "Tailwind CSS",
    "Razor Pages",
    "Razor Views",
    
    // Backend Development
    ".NET Framework",
    ".NET Core",
    "ASP.NET",
    "ASP.NET MVC",
    "ASP.NET Web API",
    "Node.js",
    "Entity Framework",
    "RESTful APIs",
    "GraphQL",
    "Microservices",
    "MVC Architecture",
    "WCF Services",
    
    // API Development
    "Swagger/OpenAPI",
    "Third-party APIs",
    "JSON/XML",
    
    // Cloud & Infrastructure
    "AWS EC2",
    "AWS S3",
    "AWS Lambda",
    "AWS RDS",
    "CloudFormation",
    "Azure DevOps",
    "Terraform",
    "IIS Server",
    
    // Databases
    "SQL Server",
    "MongoDB",
    "MySQL",
    "Stored Procedures",
    
    // DevOps & CI/CD
    "Jenkins",
    "Git",
    "GitLab",
    "SVN",
    "GitHub Actions",
    "CI/CD Pipelines",
    
    // Security
    "OAuth",
    "JWT",
    
    // Methodologies
    "Agile/Scrum",
    "TDD",
    "Security",
    "Sprint Planning",
    
    // Testing
    "NUnit",
    "Jest",
    "Code Reviews",
    
    // Tools
    "Visual Studio",
    "VS Code",
    "Postman",
  ];

  return (
    <div className="min-h-screen bg-[#1a1a1a] py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 md:mb-8 tracking-tight">
            TECHNOLOGIES
          </h2>
          <p className="text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] text-neutral-500 uppercase">
            {technologies.length} Skills and tools
          </p>
        </div>

        {/* Grid with Text Only */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 sm:gap-3 md:gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="border border-neutral-800 p-3 sm:p-3.5 md:p-4 hover:border-white transition-all duration-300 text-center cursor-pointer touch-manipulation"
            >
              <span className="text-[11px] sm:text-xs md:text-sm text-neutral-400 hover:text-white transition-colors duration-300 leading-tight">
                {tech}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;

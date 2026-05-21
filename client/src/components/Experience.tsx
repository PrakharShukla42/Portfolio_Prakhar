import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaAws, FaUsers } from 'react-icons/fa';

const experiences = [
  {
    id: 1,
    role: "AWS Cloud & DevOps Journey",
    company: "Cloud Architecture Learning & Deployment",
    duration: "Jul 2024 - Present",
    icon: <FaAws className="text-xl text-orange-500" />,
    description: "Designed scalable, multi-website production environments hosted on a single AWS EC2 instance. Integrated Amazon RDS instances for data management, Amazon S3 for file storage, and implemented AWS CloudFront CDN for global routing and fast content delivery.",
    tech: ["AWS EC2", "AWS S3", "AWS RDS", "CloudFront", "Linux", "Apache Server"]
  },
  {
    id: 2,
    role: "Backend & Systems Lead",
    company: "GLA University IoT Projects",
    duration: "Jan 2023 - Jun 2024",
    icon: <FaUsers className="text-xl text-primary" />,
    description: "Led development of backend systems for IoT hardware projects. Guided team members on integrating RFID tag scanners with Node MCU modules, designed Express database architectures, and built real-time WebSocket dashboard visualizers.",
    tech: ["Node.js", "Express.js", "MongoDB", "IoT Modules", "WebSockets"]
  },
  {
    id: 3,
    role: "Core Technical Journey",
    company: "Data Structures, Algorithms & OOPS",
    duration: "Oct 2022 - Dec 2023",
    icon: <FaCode className="text-xl text-secondary" />,
    description: "Built strong structural reasoning and software engineering fundamentals. Solved various algorithmic challenges in Java and Python. Experienced in Object-Oriented Design patterns, MVC backend architecture, and RESTful API structures.",
    tech: ["Java", "Python", "Data Structures", "Algorithms", "OOPS", "MVC"]
  },
  {
    id: 4,
    role: "Bachelor of Technology in CS (IoT)",
    company: "GLA University, Mathura",
    duration: "2022 - 2026",
    icon: <FaGraduationCap className="text-xl text-teal-400" />,
    description: "Pursuing specialized degree in Computer Science Engineering focusing on Internet of Things (IoT). Acquired a GPA of 7.54. Actively participated in cloud infrastructure labs, network administration, and hardware-software collaborative hackathons.",
    tech: ["Computer Science", "IoT Hardware", "Cloud Computing", "Computer Networks"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-4xl relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-cardBorder ml-3 md:ml-6 space-y-12 pb-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute w-10 h-10 bg-surface border border-cardBorder rounded-full -left-[20px] top-1 flex items-center justify-center shadow-lg text-foreground relative z-20">
                {exp.icon}
              </div>
              
              {/* Glassmorphic card */}
              <motion.div 
                whileHover={{ y: -4 }}
                className="glass-card p-6 md:p-8 hover:border-primary/20 hover:shadow-neon-primary transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{exp.role}</h3>
                    <h4 className="text-base text-textMuted font-medium">{exp.company}</h4>
                  </div>
                  <span className="px-4 py-1.5 bg-white/5 rounded-full text-xs font-mono text-secondary border border-white/10 w-fit">
                    {exp.duration}
                  </span>
                </div>
                
                <p className="text-textMuted mb-6 leading-relaxed font-sans text-sm md:text-base">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((item, i) => (
                    <span key={i} className="text-[10px] md:text-xs px-3 py-1 bg-primary/10 text-primary rounded-md border border-primary/20 font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

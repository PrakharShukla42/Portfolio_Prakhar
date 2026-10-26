import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  duration: string;
  image: string;
  description: string;
  fullDescription: string;
  features: string[];
  tech: string[];
  github: string;
  live: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Multi-Server Web Hosting Infrastructure",
    category: "Cloud & DevOps",
    duration: "July 2024 – Aug 2024",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    description: "Architected a highly available, multi-tier cloud infrastructure on AWS leveraging EC2, Auto Scaling Groups, and Linux servers.",
    fullDescription: "Architected a highly available, multi-tier cloud infrastructure on AWS leveraging EC2, Auto Scaling Groups, and Linux servers to efficiently manage fluctuating web traffic.",
    features: [
      "Architected highly available multi-tier cloud infrastructure on AWS",
      "Leveraged EC2 and Auto Scaling Groups to manage fluctuating traffic",
      "Secured network architecture with precise VPC subnets, Security Groups, and IAM roles",
      "Integrated Amazon RDS for relational data persistence",
      "Combined S3 and CloudFront CDN to accelerate global content delivery"
    ],
    tech: ["AWS EC2", "AWS S3", "AWS RDS", "CloudFront CDN", "VPC", "IAM", "Linux"],
    github: "https://github.com/PrakharShukla42",
    live: "https://github.com/PrakharShukla42"
  },
  {
    id: 2,
    title: "AI Agent Workflow Automation Platform",
    category: "AI & ML Development",
    duration: "Jan 2025 – Apr 2025",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    description: "Designed a scalable workflow builder empowering users to visually map and connect multi-agent AI execution pipelines.",
    fullDescription: "Designed and developed a scalable workflow builder empowering users to visually map and connect multi-agent AI execution pipelines. Integrated LangChain and advanced LLM reasoning capabilities to automate complex, multi-step tasks natively.",
    features: [
      "Visually mapped multi-agent AI execution pipelines",
      "Integrated LangChain and advanced LLM reasoning capabilities",
      "Automated complex, multi-step tasks natively within the platform",
      "Engineered robust state management using Redis",
      "Implemented real-time execution tracking architectures with MongoDB"
    ],
    tech: ["LangChain", "LLMs", "Redis", "MongoDB", "Python", "Node.js"],
    github: "https://github.com/PrakharShukla42",
    live: "https://github.com/PrakharShukla42"
  },
  {
    id: 3,
    title: "Full-Stack Task Management System",
    category: "Full Stack Development",
    duration: "May 2025 – Present",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=800&auto=format&fit=crop",
    description: "Engineered a scalable RESTful API backend using Node.js and Express, facilitating comprehensive task operations.",
    fullDescription: "Engineered a scalable RESTful API backend using Node.js and Express, facilitating comprehensive task operations and user management. Deployed the full-stack containerized application to AWS.",
    features: [
      "Engineered scalable RESTful API backend for task operations",
      "Implemented secure, role-based access control (RBAC) mechanisms",
      "Integrated robust JWT authentication to isolate environments",
      "Containerized full-stack application for reliable deployments",
      "Established automated CI/CD pipelines and rigorous security on AWS"
    ],
    tech: ["Node.js", "Express.js", "AWS", "JWT", "Docker", "CI/CD"],
    github: "https://github.com/PrakharShukla42",
    live: "https://github.com/PrakharShukla42"
  },
  {
    id: 4,
    title: "POSCO E-Commerce Food Delivery Platform",
    category: "Full Stack Development",
    duration: "Nov 2023 – Dec 2023",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop",
    description: "Built a responsive, dynamic front-end interface optimized for seamless menu navigation and cart state management.",
    fullDescription: "Built a responsive, dynamic front-end interface optimized for seamless menu navigation, cart state management, and mobile accessibility. Architected a NoSQL database schema using MongoDB.",
    features: [
      "Responsive, dynamic front-end for seamless menu navigation",
      "Optimized cart state management and mobile accessibility",
      "Architected NoSQL database schema to handle dynamic restaurant data",
      "Managed complex orders and user transactional history efficiently",
      "Engineered rapid REST API endpoints for secure checkout flows"
    ],
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "REST APIs"],
    github: "https://github.com/PrakharShukla42",
    live: "https://github.com/PrakharShukla42"
  },
  {
    id: 5,
    title: "Smart Shopping Cart",
    category: "IoT Development",
    duration: "Dec 2022 – Feb 2023",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    description: "Built an intelligent automated shopping cart that tracks product additions in real-time, instantly updating bill registers.",
    fullDescription: "Developed a prototype smart shopping basket utilizing microcontrollers and scanning modules to eliminate long queue checkout registers. When items are scanned via RFID tags, they are logged in real-time, dynamically updating a custom web dashboard via WebSockets.",
    features: [
      "RFID-based instantaneous product identification",
      "Dynamic cost tallying directly on high-contrast OLED display",
      "ESP8266 Wi-Fi sync for remote inventory coordination",
      "Real-time database updating via custom REST APIs",
      "Responsive, clean administrative checkout panel"
    ],
    tech: ["Arduino Uno", "Node MCU", "ESP8266", "OLED Display", "RFID Scanner", "HTML", "CSS"],
    github: "https://github.com/PrakharShukla42",
    live: "https://github.com/PrakharShukla42"
  },
  {
    id: 6,
    title: "CRM Ticket System",
    category: "Full Stack Development",
    duration: "Jan 2025 – Apr 2025",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    description: "Designed scalable service ticketing backends enabling role-based issue resolution, built with strict MVC architectures.",
    fullDescription: "Created a modern corporate ticket management system to help teams create, track, assign, and close service tickets. Implemented strong password hashing, role-based authorization levels, and decoupled models, views, and controllers for robust code organization.",
    features: [
      "Secure JWT token authentication and cookie-stored authorizations",
      "Role-Based Access Controls (RBAC) separating Admin, Agent, and User rights",
      "Decoupled MVC architecture supporting fast scaling pipelines",
      "Complex MongoDB query aggregations for ticket analytical metrics",
      "Fully responsive, clean dashboard UI with dynamic status triggers"
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "JWT Auth", "REST APIs", "MVC Paradigm"],
    github: "https://github.com/PrakharShukla42",
    live: "https://github.com/PrakharShukla42"
  }
];

const categories = ["All", "Full Stack Development", "Cloud & DevOps", "AI & ML Development", "IoT Development"];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(project => 
    filter === "All" ? true : project.category === filter
  );

  return (
    <section id="projects" className="py-24 px-6 bg-surface/30 relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Futuristic Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-cyan-400/30 text-xs font-mono text-cyan-400 mb-3 backdrop-blur-md">
            <span>REGISTRY // SECTION_05</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 font-mono tracking-tight text-white">
            ENGINEERING <span className="gradient-text">SHOWCASE</span>
          </h2>
          <p className="text-gray-400 font-mono text-xs sm:text-sm max-w-xl mx-auto mb-4">
            // High-throughput distributed systems, AI agent workflow builders, and cloud infrastructure
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-primary to-secondary mx-auto rounded-full shadow-neon-primary"></div>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-14 font-mono">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider transition-all duration-300 ${
                filter === cat 
                  ? 'bg-gradient-to-r from-cyan-500 to-primary text-white shadow-neon-secondary border border-cyan-400/40' 
                  : 'bg-white/5 text-gray-400 border border-white/5 hover:border-cyan-400/30 hover:text-white'
              }`}
            >
              [ {cat.toUpperCase()} ]
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedProject(project)}
                className="glass-card overflow-hidden group cursor-pointer border border-white/10 hover:border-cyan-400/50 hover:shadow-neon-secondary relative hud-corner"
              >
                {/* Image Container with Scanline */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 z-20 flex items-center gap-2">
                    <span className="text-[10px] uppercase font-mono tracking-widest px-2.5 py-1 bg-black/80 backdrop-blur-md text-cyan-400 border border-cyan-400/30 rounded-md font-bold">
                      MOD://0{project.id}
                    </span>
                    <span className="text-[10px] uppercase font-mono text-gray-400 px-2 py-0.5 bg-black/60 rounded">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                {/* Project Details */}
                <div className="p-6 relative">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200 font-mono">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-5 font-sans line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Skill indicators */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.slice(0, 4).map((tech, i) => (
                      <span key={i} className="text-[9px] font-bold text-cyan-300 bg-white/5 border border-white/10 px-2 py-0.5 rounded font-mono">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="text-[9px] font-bold text-primary/90 bg-primary/10 px-2 py-0.5 rounded font-mono">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-cyan-400 font-mono tracking-wider font-bold border-t border-white/10 pt-3">
                    <span>INSPECT MODULE SPECS</span>
                    <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Overlay Popup */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="glass-card max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-white/10 shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedProject(null)} 
                  className="absolute top-4 right-4 z-30 p-2 bg-black/50 text-foreground hover:text-white rounded-full transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>

                {/* Banner Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c14] to-transparent z-10"></div>
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-6 left-6 z-20">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-secondary px-3 py-1 bg-black/60 rounded-md border border-secondary/20 block w-fit mb-2">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-3xl font-extrabold text-white tracking-tight">{selectedProject.title}</h3>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-8 space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-primary font-mono tracking-wider uppercase mb-2">Duration: {selectedProject.duration}</h4>
                    <p className="text-textMuted text-sm leading-relaxed font-sans">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wide">Key Features</h4>
                    <ul className="space-y-2.5">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex gap-2 text-xs md:text-sm text-textMuted font-sans align-top">
                          <span className="text-secondary font-bold font-mono">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wide">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((item, i) => (
                        <span key={i} className="text-xs px-3 py-1 bg-white/5 border border-white/5 text-gray-300 rounded font-mono font-medium">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4 pt-4 border-t border-cardBorder">
                    <a 
                      href={selectedProject.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors py-2 px-4 rounded bg-white/5 font-semibold"
                    >
                      <FaGithub className="text-lg" /> View Code
                    </a>
                    <a 
                      href={selectedProject.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 text-sm text-foreground hover:text-secondary transition-colors py-2 px-4 rounded bg-white/5 font-semibold"
                    >
                      <FaExternalLinkAlt className="text-sm" /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;

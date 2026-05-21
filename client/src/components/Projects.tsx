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
    id: 2,
    title: "Multi Website Hosting on AWS",
    category: "Cloud & DevOps",
    duration: "July 2024 – Aug 2024",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    description: "Configured resilient Apache environments hosting several production websites on a single scalable EC2 cloud instance.",
    fullDescription: "Engineered scalable cloud web hosting systems on AWS. Used Apache Virtual Hosts to cleanly run multiple independent domains on a single Linux instance, managing secure configurations and global routing to minimize infrastructure costs.",
    features: [
      "Apache Virtual Host configuration for multi-site routing",
      "Secure global database storage utilizing Amazon RDS MySQL nodes",
      "Static assets and file caching optimization in Amazon S3 storage",
      "Enhanced response latency with AWS CloudFront CDN distribution",
      "Configured Auto Scaling policies and Elastic Load Balancing pipelines"
    ],
    tech: ["AWS EC2", "Amazon S3", "Amazon RDS", "CloudFront CDN", "Linux", "Apache Server"],
    github: "https://github.com/PrakharShukla42",
    live: "https://github.com/PrakharShukla42"
  },
  {
    id: 3,
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
  },
  {
    id: 4,
    title: "Collaborative Task Manager",
    category: "Full Stack Development",
    duration: "May 2025 – Present",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=800&auto=format&fit=crop",
    description: "Developed a premium, real-time collaborative task manager supporting agile boards, detailed subtasks, and analytics.",
    fullDescription: "Built a robust project and task management dashboard designed to boost team efficiency. Implemented drag-and-drop kanban boards, real-time WebSocket collaborations, and detailed visual burn-down charts to manage tasks, schedules, and resource workloads securely.",
    features: [
      "Dynamic interactive Kanban board with clean drag-and-drop controls",
      "Real-time team collaboration updates using WebSocket integrations",
      "Detailed visual analytical graphs with clean burn-down charts",
      "Secured custom API endpoints with JWT cookies and MVC standards",
      "Comprehensive task priority tracking with customized tag labels"
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "WebSockets", "Tailwind CSS"],
    github: "https://github.com/PrakharShukla42",
    live: "https://github.com/PrakharShukla42"
  }
];

const categories = ["All", "Full Stack Development", "Cloud & DevOps", "IoT Development"];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(project => 
    filter === "All" ? true : project.category === filter
  );

  return (
    <section id="projects" className="py-24 px-6 bg-surface/30 relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                filter === cat 
                  ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                  : 'bg-white/5 text-textMuted border border-white/5 hover:bg-white/10 hover:text-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedProject(project)}
                className="glass-card overflow-hidden group cursor-pointer border border-white/5 hover:shadow-neon-primary-bright relative"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 z-20 text-[10px] uppercase font-mono tracking-widest px-3 py-1 bg-black/60 backdrop-blur-md text-secondary border border-secondary/20 rounded-md">
                    {project.category}
                  </span>
                </div>
                
                {/* Project Details */}
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-textMuted text-xs leading-relaxed mb-6 font-sans line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Skill indicators */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.slice(0, 4).map((tech, i) => (
                      <span key={i} className="text-[9px] font-semibold text-foreground/80 bg-white/5 border border-white/5 px-2 py-0.5 rounded font-mono">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="text-[9px] font-semibold text-primary/70 bg-primary/5 px-2 py-0.5 rounded font-mono">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-secondary font-mono tracking-wider font-bold border-t border-cardBorder pt-4">
                    <span>EXPLORE DETAILS</span>
                    <span>&rarr;</span>
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

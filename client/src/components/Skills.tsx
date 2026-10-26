import { motion } from 'framer-motion';
import { FaJava, FaPython, FaJs, FaNodeJs, FaReact, FaAws, FaLinux, FaGithub, FaHtml5, FaCss3Alt, FaCode } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiArduino } from 'react-icons/si';
import { Terminal, Cpu } from 'lucide-react';

const skillCategories = [
  {
    code: "SYS-01",
    title: "AWS & Cloud Infrastructure",
    skills: [
      { name: "Lambda & EC2 Compute", level: 92, icon: <FaAws className="text-orange-500 text-lg" /> },
      { name: "ECS, EKS, S3 Buckets", level: 88, icon: <FaAws className="text-orange-400 text-lg" /> },
      { name: "IAM, RDS MySQL, VPC Network", level: 90, icon: <FaAws className="text-orange-600 text-lg" /> },
      { name: "CloudFormation, CloudFront CDN", level: 85, icon: <FaAws className="text-amber-500 text-lg" /> }
    ]
  },
  {
    code: "SYS-02",
    title: "AI Workflows & LLM Integration",
    skills: [
      { name: "LangChain & Multi-Agent Flows", level: 92, icon: <FaPython className="text-green-500 text-lg" /> },
      { name: "OpenAI & Gemini APIs", level: 95, icon: <FaNodeJs className="text-teal-400 text-lg" /> },
      { name: "Vector Databases & RAG", level: 88, icon: <SiMongodb className="text-green-600 text-lg" /> },
      { name: "Prompt Engineering & Evaluation", level: 95, icon: <FaCode className="text-cyan-400 text-lg" /> }
    ]
  },
  {
    code: "SYS-03",
    title: "DevOps & CI/CD Pipelines",
    skills: [
      { name: "Docker Containerization", level: 90, icon: <FaLinux className="text-blue-400 text-lg" /> },
      { name: "Kubernetes Orchestration", level: 82, icon: <FaLinux className="text-purple-500 text-lg" /> },
      { name: "Terraform & IaC", level: 80, icon: <FaLinux className="text-indigo-400 text-lg" /> },
      { name: "GitHub Actions & Automated Deploy", level: 92, icon: <FaGithub className="text-gray-200 text-lg" /> }
    ]
  },
  {
    code: "SYS-04",
    title: "Backend & Systems Architecture",
    skills: [
      { name: "Node.js & Express.js", level: 95, icon: <FaNodeJs className="text-green-500 text-lg" /> },
      { name: "FastAPI & Microservices", level: 88, icon: <FaReact className="text-cyan-400 text-lg" /> },
      { name: "JWT Auth & RBAC Security", level: 94, icon: <FaNodeJs className="text-emerald-400 text-lg" /> },
      { name: "Redis Caching & Kafka Queues", level: 82, icon: <FaLinux className="text-red-500 text-lg" /> }
    ]
  },
  {
    code: "SYS-05",
    title: "Programming Languages",
    skills: [
      { name: "Java (Enterprise OOP)", level: 88, icon: <FaJava className="text-red-500 text-lg" /> },
      { name: "Python (AI/ML & Automation)", level: 92, icon: <FaPython className="text-yellow-500 text-lg" /> },
      { name: "JavaScript / TypeScript", level: 94, icon: <FaJs className="text-amber-400 text-lg" /> },
      { name: "C++ (Algorithmic Logic)", level: 82, icon: <FaCode className="text-blue-500 text-lg" /> }
    ]
  },
  {
    code: "SYS-06",
    title: "Databases & OS",
    skills: [
      { name: "MongoDB NoSQL Aggregations", level: 92, icon: <SiMongodb className="text-green-500 text-lg" /> },
      { name: "MySQL & PostgreSQL Relational", level: 88, icon: <SiMysql className="text-blue-500 text-lg" /> },
      { name: "Linux / Ubuntu Administration", level: 88, icon: <FaLinux className="text-yellow-600 text-lg" /> },
      { name: "Git, AWS Console & Postman", level: 95, icon: <FaGithub className="text-gray-200 text-lg" /> }
    ]
  },
  {
    code: "SYS-07",
    title: "Frontend Engineering",
    skills: [
      { name: "React.js & Vite", level: 88, icon: <FaReact className="text-cyan-400 text-lg" /> },
      { name: "Tailwind CSS & Framer Motion", level: 92, icon: <div className="flex gap-1"><FaHtml5 className="text-orange-500" /><FaCss3Alt className="text-blue-500" /></div> }
    ]
  },
  {
    code: "SYS-08",
    title: "IoT & Hardware Prototyping",
    skills: [
      { name: "Arduino Uno & NodeMCU", level: 85, icon: <SiArduino className="text-teal-500 text-lg" /> },
      { name: "ESP8266 & RFID Sensor Modules", level: 82, icon: <SiArduino className="text-teal-400 text-lg" /> }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 relative cyber-grid">
      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Futuristic Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-cyan-400/30 text-xs font-mono text-cyan-400 mb-3 backdrop-blur-md">
            <Terminal size={13} />
            <span>TECH_MATRIX // SECTION_03</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 font-mono tracking-tight text-white">
            TECHNICAL <span className="gradient-text">CAPABILITIES</span>
          </h2>
          <p className="text-gray-400 font-mono text-xs sm:text-sm max-w-xl mx-auto mb-4">
            // Full-stack engineering matrix comprising cloud architecture, AI workflows, and distributed backends
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-primary to-secondary mx-auto rounded-full shadow-neon-primary"></div>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              whileHover={{ y: -5, borderColor: 'rgba(6,182,212,0.4)' }}
              className="glass-card p-6 border border-white/10 shadow-xl group relative overflow-hidden hud-corner hover:shadow-neon-secondary transition-all"
            >
              {/* Card Sub-system Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5 font-mono">
                <span className="text-xs text-cyan-400 font-bold tracking-wider flex items-center gap-1.5">
                  <Cpu size={14} className="text-primary" />
                  {category.code} //
                </span>
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest px-2 py-0.5 rounded bg-white/5 border border-white/5">
                  ACTIVE
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold mb-5 text-white font-mono flex items-center justify-between">
                <span>{category.title}</span>
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-1.5 text-xs font-mono">
                      <div className="flex items-center gap-2 text-gray-200">
                        {skill.icon}
                        <span className="font-sans font-medium text-xs sm:text-sm">{skill.name}</span>
                      </div>
                      <span className="text-cyan-400 font-bold font-mono text-[11px]">
                        [{skill.level}%]
                      </span>
                    </div>
                    
                    {/* Glowing Cyber Meter */}
                    <div className="h-1.5 w-full bg-black/60 rounded-full overflow-hidden border border-white/10 p-[1px]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.1 }}
                        className="h-full bg-gradient-to-r from-cyan-400 via-primary to-secondary rounded-full shadow-[0_0_8px_#06b6d4]"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

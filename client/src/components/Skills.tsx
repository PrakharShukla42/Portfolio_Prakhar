import { motion } from 'framer-motion';
import { FaJava, FaPython, FaJs, FaNodeJs, FaReact, FaAws, FaLinux, FaGithub, FaHtml5, FaCss3Alt, FaCode } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiArduino } from 'react-icons/si';

const skillCategories = [
  {
    title: "AWS & Cloud",
    skills: [
      { name: "Lambda & EC2", level: 90, icon: <FaAws className="text-orange-500 text-lg" /> },
      { name: "ECS, EKS, S3", level: 85, icon: <FaAws className="text-orange-400 text-lg" /> },
      { name: "IAM, RDS, VPC", level: 90, icon: <FaAws className="text-orange-600 text-lg" /> },
      { name: "CloudFormation, GCP", level: 80, icon: <FaAws className="text-amber-500 text-lg" /> }
    ]
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", level: 85, icon: <FaJava className="text-red-500 text-lg" /> },
      { name: "Python", level: 90, icon: <FaPython className="text-yellow-500 text-lg" /> },
      { name: "JavaScript / TypeScript", level: 95, icon: <FaJs className="text-amber-400 text-lg" /> },
      { name: "C++", level: 80, icon: <FaNodeJs className="text-blue-500 text-lg" /> }
    ]
  },
  {
    title: "DevOps & CI/CD",
    skills: [
      { name: "Docker & Kubernetes", level: 85, icon: <FaLinux className="text-blue-400 text-lg" /> },
      { name: "Terraform", level: 80, icon: <FaLinux className="text-purple-500 text-lg" /> },
      { name: "Jenkins", level: 85, icon: <FaNodeJs className="text-gray-300 text-lg" /> },
      { name: "GitHub Actions", level: 90, icon: <FaGithub className="text-gray-200 text-lg" /> }
    ]
  },
  {
    title: "AI & ML Integration",
    skills: [
      { name: "LangChain", level: 90, icon: <FaPython className="text-green-500 text-lg" /> },
      { name: "OpenAI APIs", level: 95, icon: <FaNodeJs className="text-teal-400 text-lg" /> },
      { name: "Vector Databases", level: 85, icon: <SiMongodb className="text-green-600 text-lg" /> },
      { name: "Prompt Engineering", level: 95, icon: <FaCode className="text-gray-300 text-lg" /> }
    ]
  },
  {
    title: "Web & Design Architecture",
    skills: [
      { name: "Node.js & Express.js", level: 95, icon: <FaNodeJs className="text-green-500 text-lg" /> },
      { name: "React.js & FastAPI", level: 90, icon: <FaReact className="text-cyan-400 text-lg" /> },
      { name: "Microservices & REST APIs", level: 95, icon: <FaNodeJs className="text-emerald-400 text-lg" /> },
      { name: "Redis, Nginx, Kafka", level: 80, icon: <FaLinux className="text-red-500 text-lg" /> }
    ]
  },
  {
    title: "Databases & OS",
    skills: [
      { name: "MySQL & PostgreSQL", level: 85, icon: <SiMysql className="text-blue-500 text-lg" /> },
      { name: "MongoDB & DynamoDB", level: 90, icon: <SiMongodb className="text-green-500 text-lg" /> },
      { name: "Linux & Ubuntu", level: 85, icon: <FaLinux className="text-yellow-600 text-lg" /> },
      { name: "Git & Windows Server", level: 90, icon: <FaGithub className="text-gray-200 text-lg" /> }
    ]
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", level: 80, icon: <FaReact className="text-cyan-400 text-lg" /> },
      { name: "HTML & CSS", level: 90, icon: <div className="flex gap-1"><FaHtml5 className="text-orange-500" /><FaCss3Alt className="text-blue-500" /></div> }
    ]
  },
  {
    title: "IoT Development",
    skills: [
      { name: "Arduino Uno", level: 80, icon: <SiArduino className="text-teal-500 text-lg" /> },
      { name: "Node MCU / ESP8266", level: 75, icon: <SiArduino className="text-teal-400 text-lg" /> }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-surface/30">
      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass-card p-8 border border-white/5 shadow-lg group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <h3 className="text-xl font-bold mb-6 text-foreground border-b border-cardBorder pb-3 flex justify-between items-center relative z-10">
                <span>{category.title}</span>
                <span className="text-xs text-primary/50 font-mono tracking-widest uppercase">Stack</span>
              </h3>
              
              <div className="space-y-6 relative z-10">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2 font-medium text-foreground/90">
                        {skill.icon}
                        <span>{skill.name}</span>
                      </div>
                      <span className="text-textMuted text-xs font-mono">{skill.level}%</span>
                    </div>
                    
                    <div className="h-1.5 w-full bg-black/40 rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.1 }}
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full shadow-neon-primary-bright"
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

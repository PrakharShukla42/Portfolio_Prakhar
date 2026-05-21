import { motion } from 'framer-motion';
import { FaJava, FaPython, FaJs, FaNodeJs, FaReact, FaAws, FaLinux, FaGithub, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiExpress, SiJsonwebtokens, SiArduino } from 'react-icons/si';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", level: 85, icon: <FaJava className="text-red-500 text-lg" /> },
      { name: "Python", level: 80, icon: <FaPython className="text-yellow-500 text-lg" /> },
      { name: "JavaScript", level: 90, icon: <FaJs className="text-amber-400 text-lg" /> }
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 90, icon: <FaNodeJs className="text-green-500 text-lg" /> },
      { name: "Express.js", level: 88, icon: <SiExpress className="text-gray-400 text-lg" /> },
      { name: "REST APIs", level: 90, icon: <FaNodeJs className="text-emerald-400 text-lg" /> },
      { name: "JWT Auth", level: 85, icon: <SiJsonwebtokens className="text-pink-500 text-lg" /> },
      { name: "MVC Architecture", level: 85, icon: <FaNodeJs className="text-blue-400 text-lg" /> }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", level: 85, icon: <SiMongodb className="text-green-500 text-lg" /> },
      { name: "MySQL", level: 80, icon: <SiMysql className="text-blue-500 text-lg" /> }
    ]
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS EC2 / S3", level: 85, icon: <FaAws className="text-orange-500 text-lg" /> },
      { name: "AWS RDS / CDN", level: 80, icon: <FaAws className="text-orange-400 text-lg" /> },
      { name: "Linux Administration", level: 78, icon: <FaLinux className="text-yellow-600 text-lg" /> },
      { name: "Git & GitHub", level: 88, icon: <FaGithub className="text-gray-200 text-lg" /> }
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

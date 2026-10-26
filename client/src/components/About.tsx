import { motion } from 'framer-motion';
import { Terminal, Shield, Award, Cpu, BookOpen, Layers } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Engineering Projects', value: '6+ Major', icon: <Layers size={18} className="text-cyan-400" /> },
    { label: 'Tech Stack Matrix', value: '25+ Tools', icon: <Cpu size={18} className="text-primary" /> },
    { label: 'Global Credentials', value: '6+ Certs', icon: <Award size={18} className="text-secondary" /> },
    { label: 'Academic Standing', value: '7.65 CGPA', icon: <BookOpen size={18} className="text-green-400" /> },
  ];

  return (
    <section id="about" className="py-24 px-6 relative cyber-grid">
      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* Futuristic Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-primary/20 text-xs font-mono text-cyan-400 mb-3">
            <Terminal size={13} />
            <span>DOSSIER // SECTION_02</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 font-mono tracking-tight">
            ABOUT <span className="gradient-text">PRAKHAR</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-primary to-secondary mx-auto rounded-full shadow-neon-primary"></div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-12 gap-10 items-center">
          
          {/* Bio HUD Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 glass-card p-8 border border-cyan-500/20 shadow-xl hud-corner relative space-y-5 text-gray-300 leading-relaxed font-sans text-sm sm:text-base"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono text-gray-400">
              <span className="flex items-center gap-1.5 text-cyan-400 font-bold">
                <Shield size={14} />
                IDENTITY_PROFILE
              </span>
              <span className="text-green-400 font-bold uppercase tracking-wider">VERIFIED CANDIDATE</span>
            </div>

            <p className="text-base sm:text-lg text-white font-medium">
              Hello! I'm <span className="text-cyan-400 font-bold">Prakhar Shukla</span>, a Solutions-oriented Software Engineer and Cloud Specialist passionate about driving technical excellence, optimizing system performance, and delivering robust software solutions.
            </p>
            <p>
              I am currently pursuing my <span className="text-secondary font-semibold">Bachelor of Technology in Computer Science & Engineering</span> at <strong className="text-white">GLA University, Mathura</strong> (graduating in 2026, CGPA: 7.65). I also proudly served as the <span className="text-primary font-semibold">General Secretary for the CSE Club</span>.
            </p>
            <p>
              My expertise centers on engineering high-throughput backend microservices (Node.js, Express, Java, Python), architecting highly available AWS infrastructure (EC2, ECS, ASG, RDS, CloudFront), and designing context-aware <strong className="text-cyan-400">Large Language Model (LLM) pipelines</strong> as demonstrated during my internship at <strong className="text-primary font-bold">Ethara AI</strong>.
            </p>
          </motion.div>

          {/* Stats Telemetry Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                whileHover={{ scale: 1.04, y: -4 }}
                className="glass-card p-5 text-left border border-white/10 shadow-lg relative overflow-hidden group cursor-default hover:border-cyan-400/40 hover:shadow-neon-secondary transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/5 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <span className="text-[9px] font-mono text-gray-500 uppercase font-bold tracking-widest">
                    METRIC_{index + 1}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black gradient-text tracking-tight mb-1 font-mono">
                  {stat.value}
                </h3>
                <p className="text-[11px] font-mono text-gray-400 font-bold uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;

import { motion } from 'framer-motion';
import { FaGraduationCap, FaAws, FaUsers } from 'react-icons/fa';
import { Sparkles, Terminal, Cpu, CheckCircle2 } from 'lucide-react';

const missions = [
  {
    id: 1,
    code: "OP-01 // LLM_EVALUATION_PIPELINE",
    status: "MISSION ACCOMPLISHED",
    statusColor: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10",
    role: "LLM Post Training Intern",
    company: "Ethara AI",
    duration: "MAR 2026 – MAY 2026",
    metricBadge: "+15% MODEL INSTRUCTION ADHERENCE",
    icon: <Sparkles className="text-xl text-cyan-400 animate-pulse" />,
    summary: "Engineered LLM post-training evaluation pipelines, optimizing prompt structures to drastically improve user interaction and instruction adherence.",
    impacts: [
      "Conducted rigorous data analysis on AI outputs, identifying edge cases and contributing to a 15% increase in model performance.",
      "Spearheaded the integration of systematic feedback loops and advanced prompt engineering for context-aware, hallucination-resistant AI responses."
    ],
    tech: ["Large Language Models", "Prompt Engineering", "Data Analysis", "Evaluation Pipelines", "Python"]
  },
  {
    id: 2,
    code: "OP-02 // MULTI_TIER_CLOUD_INFRA",
    status: "OPERATIONAL // LIVE",
    statusColor: "text-orange-400 border-orange-400/30 bg-orange-400/10",
    role: "AWS Cloud & DevOps Architect",
    company: "Cloud Architecture Learning & Deployment",
    duration: "JUL 2024 – PRESENT",
    metricBadge: "99.9% UPTIME MULTI-SITE DEPLOYMENT",
    icon: <FaAws className="text-xl text-orange-500" />,
    summary: "Architected scalable, multi-website production environments hosted on AWS with zero single points of failure.",
    impacts: [
      "Integrated Amazon RDS MySQL instances for high-throughput relational data persistence.",
      "Combined Amazon S3 and CloudFront CDN for global routing, asset caching, and ultra-low latency delivery."
    ],
    tech: ["AWS EC2", "AWS S3", "Amazon RDS", "CloudFront CDN", "Linux Server", "Apache Virtual Hosts"]
  },
  {
    id: 3,
    code: "OP-03 // IOT_SYSTEMS_COMMAND",
    status: "MISSION ACCOMPLISHED",
    statusColor: "text-purple-400 border-purple-400/30 bg-purple-400/10",
    role: "Backend & Systems Lead",
    company: "GLA University IoT Projects",
    duration: "JAN 2023 – JUN 2024",
    metricBadge: "HARDWARE-CLOUD TELEMETRY",
    icon: <FaUsers className="text-xl text-primary" />,
    summary: "Led technical development of hardware-software collaborative ecosystems and real-time sensor pipelines.",
    impacts: [
      "Guided engineers on integrating RFID tag scanners with NodeMCU & ESP8266 Wi-Fi modules.",
      "Designed Express & MongoDB schema architectures and built real-time WebSocket dashboard visualizers."
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "ESP8266", "RFID Scanners", "WebSockets"]
  },
  {
    id: 4,
    code: "OP-04 // ALGORITHMIC_FOUNDATION",
    status: "CORE PROFICIENCY",
    statusColor: "text-secondary border-secondary/30 bg-secondary/10",
    role: "Data Structures & Systems Core",
    company: "Software Architecture Journey",
    duration: "OCT 2022 – DEC 2023",
    metricBadge: "DSA & ENTERPRISE OOP RIGOR",
    icon: <Cpu className="text-xl text-secondary" />,
    summary: "Mastered algorithmic reasoning, memory-efficient data structures, and production-grade Object-Oriented design patterns.",
    impacts: [
      "Solved hundreds of complex algorithmic challenges in Java, Python, and C++.",
      "Architected clean MVC paradigms, modular database models, and resilient RESTful API specifications."
    ],
    tech: ["Java", "Python", "C++", "Data Structures", "Algorithms", "OOP Architecture", "MVC"]
  },
  {
    id: 5,
    code: "OP-05 // ACADEMIC_COMMAND_LEADERSHIP",
    status: "IN PROGRESS // 2026 GRAD",
    statusColor: "text-teal-400 border-teal-400/30 bg-teal-400/10",
    role: "B.Tech in Computer Science & Eng",
    company: "GLA University, Mathura",
    duration: "2022 – 2026",
    metricBadge: "7.65 CGPA • GENERAL SECRETARY",
    icon: <FaGraduationCap className="text-xl text-teal-400" />,
    summary: "Pursuing specialized Computer Science & Engineering degree while leading student technical culture across the university.",
    impacts: [
      "Served as General Secretary for the CSE Club (2023–2025), orchestrating hackathons, mentoring juniors, and hosting engineering workshops.",
      "Completed rigorous coursework across AI/ML, Cloud Computing, Data Science, and Computer Networks with a 7.65 CGPA."
    ],
    tech: ["Computer Science", "Artificial Intelligence", "Machine Learning", "Cloud Labs", "Technical Leadership"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 relative cyber-grid overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-[-100px] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-[-100px] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* Futuristic Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-cyan-400/30 text-xs font-mono text-cyan-400 mb-3 backdrop-blur-md">
            <Terminal size={13} />
            <span>FLIGHT_LOG // SECTION_04</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 font-mono tracking-tight text-white">
            ENGINEERING <span className="gradient-text">CHRONOMETER</span>
          </h2>
          <p className="text-gray-400 font-mono text-xs sm:text-sm max-w-xl mx-auto mb-4">
            // Mission telemetry tracking professional milestones, AI optimization, and cloud architecture deployments
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-primary to-secondary mx-auto rounded-full shadow-neon-primary"></div>
        </motion.div>

        {/* Futuristic Cyber Conduit Timeline */}
        <div className="relative pl-6 md:pl-10">
          
          {/* Energized vertical data rail */}
          <div className="absolute left-[11px] md:left-[19px] top-4 bottom-4 w-[3px] bg-gradient-to-b from-cyan-400 via-primary to-secondary opacity-40 shadow-[0_0_12px_#06b6d4]"></div>

          <div className="space-y-12">
            {missions.map((mission, index) => (
              <motion.div
                key={mission.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Glowing Sci-Fi Junction Node */}
                <div className="absolute -left-[30px] md:-left-[30px] top-1.5 w-10 h-10 rounded-xl bg-black border-2 border-cyan-400/60 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.4)] z-20 group">
                  <div className="absolute inset-0 rounded-xl bg-cyan-400/10 animate-ping opacity-30"></div>
                  {mission.icon}
                </div>

                {/* Holographic Cyber Card */}
                <motion.div 
                  whileHover={{ y: -4, borderColor: 'rgba(6,182,212,0.5)' }}
                  className="glass-card p-6 md:p-8 border border-white/10 hover:border-cyan-400/50 hover:shadow-neon-secondary transition-all duration-300 relative overflow-hidden hud-corner group"
                >
                  {/* Laser Scanline on hover */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent absolute top-0 animate-laser"></div>
                  </div>

                  {/* Top Mission Metadata Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 mb-4 font-mono">
                    <div className="flex items-center gap-2">
                      <span className="text-cyan-400 text-xs font-bold tracking-wider">
                        {mission.code}
                      </span>
                      <span className="hidden sm:inline text-gray-600">|</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full border font-bold ${mission.statusColor}`}>
                        {mission.status}
                      </span>
                    </div>
                    <span className="px-3 py-1 bg-white/5 rounded-lg text-xs text-gray-300 border border-white/5 font-semibold">
                      {mission.duration}
                    </span>
                  </div>

                  {/* Role & Company Header */}
                  <div className="mb-4">
                    <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-cyan-400 transition-colors font-mono tracking-tight">
                      {mission.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-gray-400">
                      <span className="text-primary font-bold font-mono">{mission.company}</span>
                      <span className="text-gray-600">•</span>
                      <span className="text-xs font-mono text-green-400 bg-green-500/10 px-2 py-0.5 rounded border border-green-500/20 font-bold">
                        {mission.metricBadge}
                      </span>
                    </div>
                  </div>
                  
                  {/* Summary & Impact Points */}
                  <p className="text-gray-300 mb-4 leading-relaxed font-sans text-sm md:text-base">
                    {mission.summary}
                  </p>

                  <div className="space-y-2 mb-6 text-xs sm:text-sm text-gray-400 font-sans">
                    {mission.impacts.map((impact, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 size={15} className="text-cyan-400 mt-0.5 shrink-0" />
                        <span>{impact}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                    {mission.tech.map((item, i) => (
                      <span 
                        key={i} 
                        className="text-[10px] sm:text-xs font-mono px-2.5 py-1 bg-white/5 text-gray-300 rounded-md border border-white/10 hover:border-cyan-400/40 hover:text-cyan-300 transition-colors"
                      >
                        [ {item} ]
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;

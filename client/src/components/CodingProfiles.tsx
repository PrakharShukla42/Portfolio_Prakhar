import { motion } from 'framer-motion';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import { Terminal, ExternalLink, Activity } from 'lucide-react';

const profiles = [
  {
    tag: "NODE_01",
    platform: "GitHub Repository Core",
    icon: <FaGithub className="text-4xl text-white" />,
    stats: [
      { label: "Repositories Tracked", value: "25+ Public" },
      { label: "Primary Stacks", value: "JavaScript / Java / Python" },
      { label: "CI/CD Automations", value: "GitHub Actions" }
    ],
    link: "https://github.com/PrakharShukla42"
  },
  {
    tag: "NODE_02",
    platform: "LeetCode Algorithmic Rank",
    icon: <SiLeetcode className="text-4xl text-yellow-500" />,
    stats: [
      { label: "Algorithms Solved", value: "150+ Problems" },
      { label: "Specialization", value: "Dynamic Prog & Trees" },
      { label: "Target Language", value: "Java & Python" }
    ],
    link: "https://github.com/PrakharShukla42"
  },
  {
    tag: "NODE_03",
    platform: "HackerRank Skill Hub",
    icon: <SiHackerrank className="text-4xl text-green-500" />,
    stats: [
      { label: "Problem Solving", value: "Gold Level" },
      { label: "Language Proficiency", value: "5 Star Java" },
      { label: "Architecture Core", value: "OOP Mastery" }
    ],
    link: "https://github.com/PrakharShukla42"
  }
];

const CodingProfiles = () => {
  return (
    <section id="profiles" className="py-24 px-6 relative cyber-grid">
      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* Futuristic Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-cyan-400/30 text-xs font-mono text-cyan-400 mb-3 backdrop-blur-md">
            <Terminal size={13} />
            <span>METRICS // SECTION_07</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 font-mono tracking-tight text-white">
            ALGORITHMIC <span className="gradient-text">TELEMETRY</span>
          </h2>
          <p className="text-gray-400 font-mono text-xs sm:text-sm max-w-xl mx-auto mb-4">
            // Competitive programming achievements, continuous integration repositories, and algorithmic rankings
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-primary to-secondary mx-auto rounded-full shadow-neon-primary"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {profiles.map((profile, index) => (
            <motion.a
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6, borderColor: 'rgba(6,182,212,0.5)' }}
              className="glass-card p-6 border border-white/10 hover:border-cyan-400/50 hover:shadow-neon-secondary transition-all block group relative hud-corner"
            >
              {/* Card Header */}
              <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-5 font-mono">
                <span className="text-xs text-cyan-400 font-bold tracking-wider">
                  [{profile.tag}]
                </span>
                <span className="text-[10px] text-green-400 flex items-center gap-1 font-bold">
                  <Activity size={12} className="animate-pulse" /> LIVE SYNC
                </span>
              </div>

              {/* Icon & Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform">
                  {profile.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors font-mono">
                    {profile.platform}
                  </h3>
                  <span className="text-[11px] font-mono text-gray-500">VERIFIED PROFILE</span>
                </div>
              </div>

              {/* Telemetry rows */}
              <div className="space-y-3 font-mono text-xs border-t border-white/5 pt-4">
                {profile.stats.map((stat, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-gray-400 text-[11px]">{stat.label}</span>
                    <span className="font-bold text-white text-[11px]">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-cyan-400 font-bold">
                <span>OPEN REPOSITORY</span>
                <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;

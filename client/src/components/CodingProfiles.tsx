import { motion } from 'framer-motion';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';

const profiles = [
  {
    platform: "GitHub Developer Code base",
    icon: <FaGithub className="text-5xl text-foreground" />,
    stats: [
      { label: "Public Repositories", value: "25+" },
      { label: "Primary Language", value: "JavaScript / Java" },
      { label: "Activity Rating", value: "Daily commits" }
    ],
    link: "https://github.com/PrakharShukla42"
  },
  {
    platform: "LeetCode Algorithms",
    icon: <SiLeetcode className="text-5xl text-yellow-500" />,
    stats: [
      { label: "Algorithms Solved", value: "150+" },
      { label: "Data Structures", value: "Trees & Lists" },
      { label: "Primary Language", value: "Java / Python" }
    ],
    link: "https://github.com/PrakharShukla42"
  },
  {
    platform: "HackerRank Problem Solving",
    icon: <SiHackerrank className="text-5xl text-green-500" />,
    stats: [
      { label: "Gold Badges", value: "Problem Solving" },
      { label: "Star rating", value: "5 Star Java" },
      { label: "Certifications", value: "Java Core" }
    ],
    link: "https://github.com/PrakharShukla42"
  }
];

const CodingProfiles = () => {
  return (
    <section id="profiles" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Coding & <span className="gradient-text">Platforms</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <motion.a
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="glass-card p-8 flex flex-col items-center text-center border border-white/5 hover:border-secondary/20 hover:shadow-neon-secondary hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {profile.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-6 tracking-tight">{profile.platform}</h3>
              
              <div className="w-full space-y-3">
                {profile.stats.map((stat, i) => (
                  <div key={i} className="flex justify-between items-center text-xs border-b border-cardBorder pb-2">
                    <span className="text-textMuted font-sans">{stat.label}</span>
                    <span className="text-foreground font-mono font-bold">{stat.value}</span>
                  </div>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;

import { motion } from 'framer-motion';
import { Terminal, ShieldCheck, ExternalLink } from 'lucide-react';

const certifications = [
  {
    id: "CERT-01",
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services (AWS)",
    date: "AUG 2024",
    hash: "AWS-VERIFIED-AUTH",
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=400&auto=format&fit=crop",
    link: "https://github.com/PrakharShukla42"
  },
  {
    id: "CERT-02",
    title: "AWS Foundations of Prompt Engineering",
    issuer: "AWS & DeepLearning.AI",
    date: "DEC 2024",
    hash: "AI-PROMPT-SPECIALIST",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=400&auto=format&fit=crop",
    link: "https://github.com/PrakharShukla42"
  },
  {
    id: "CERT-03",
    title: "AWS Getting Started With IoT",
    issuer: "Amazon Web Services (AWS)",
    date: "JAN 2025",
    hash: "AWS-IOT-CLOUD-FLOW",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&auto=format&fit=crop",
    link: "https://github.com/PrakharShukla42"
  },
  {
    id: "CERT-04",
    title: "Cisco – Switching, Routing & Wireless",
    issuer: "Cisco Networking Academy",
    date: "2025",
    hash: "CISCO-CCNA-ROUTING",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=400&auto=format&fit=crop",
    link: "https://github.com/PrakharShukla42"
  },
  {
    id: "CERT-05",
    title: "Cisco - Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "2025",
    hash: "CISCO-NET-INFRA",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=400&auto=format&fit=crop",
    link: "https://github.com/PrakharShukla42"
  },
  {
    id: "CERT-06",
    title: "MongoDB Developer Associate",
    issuer: "MongoDB Inc.",
    date: "FEB 2025",
    hash: "MDB-NOSQL-ARCH",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=400&auto=format&fit=crop",
    link: "https://github.com/PrakharShukla42"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-6 relative cyber-grid">
      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Futuristic Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-cyan-400/30 text-xs font-mono text-cyan-400 mb-3 backdrop-blur-md">
            <Terminal size={13} />
            <span>CREDENTIALS // SECTION_06</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 font-mono tracking-tight text-white">
            VERIFIED <span className="gradient-text">CREDENTIALS</span>
          </h2>
          <p className="text-gray-400 font-mono text-xs sm:text-sm max-w-xl mx-auto mb-4">
            // Industry verified certifications across AWS cloud architecture, prompt engineering, networking, and NoSQL databases
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-primary to-secondary mx-auto rounded-full shadow-neon-primary"></div>
        </motion.div>

        {/* Responsive Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6, borderColor: 'rgba(6,182,212,0.5)' }}
              className="glass-card overflow-hidden border border-white/10 shadow-xl group relative cursor-default hud-corner hover:shadow-neon-secondary transition-all"
            >
              {/* Image Preview with Scanline */}
              <div className="h-40 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-3 left-3 z-20 flex items-center gap-2 font-mono">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-black/80 text-cyan-400 border border-cyan-400/30 font-bold">
                    {cert.id}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-black/60 text-green-400 flex items-center gap-1">
                    <ShieldCheck size={11} /> VERIFIED
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 relative z-20">
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors font-mono line-clamp-1">
                  {cert.title}
                </h3>
                
                <div className="flex justify-between items-center text-xs text-gray-400 font-mono mb-4">
                  <span className="text-primary font-semibold">{cert.issuer}</span>
                  <span className="text-gray-500">[{cert.date}]</span>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <span className="text-[10px] font-mono text-gray-500 uppercase">
                    ID: {cert.hash}
                  </span>
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-white font-mono transition-colors"
                  >
                    <span>VIEW AUTH</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

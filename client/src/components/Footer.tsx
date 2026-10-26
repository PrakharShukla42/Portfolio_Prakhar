import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Cpu, Terminal, Shield, Activity } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { num: '01', name: 'Home', href: '#home' },
    { num: '02', name: 'About', href: '#about' },
    { num: '03', name: 'Skills', href: '#skills' },
    { num: '04', name: 'Journey', href: '#experience' },
    { num: '05', name: 'Projects', href: '#projects' },
    { num: '06', name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-black/95 border-t border-cyan-500/20 pt-16 pb-8 relative z-10 font-mono text-xs cyber-grid">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          
          {/* Logo & Telemetry */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-secondary p-0.5 flex items-center justify-center shadow-neon-secondary">
                <div className="w-full h-full bg-black rounded-[5px] flex items-center justify-center">
                  <Cpu size={14} className="text-cyan-400" />
                </div>
              </div>
              <span className="text-lg font-extrabold text-white tracking-wider">
                PRAKHAR<span className="text-cyan-400">.SHUKLA</span>
              </span>
            </div>
            <p className="text-gray-400 text-xs font-sans max-w-xs leading-relaxed">
              Architecting scalable backend systems, cloud infrastructures, and generative AI evaluation pipelines.
            </p>
            <div className="flex items-center gap-2 text-[10px] text-green-400 font-bold">
              <Activity size={12} className="animate-pulse" />
              <span>CORE STATUS: READY FOR OPPORTUNITIES</span>
            </div>
          </div>

          {/* Quick Nav links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
              <Terminal size={12} />
              SYSTEM_INDEX
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5 group py-1"
                >
                  <span className="text-[10px] text-gray-600 group-hover:text-cyan-400 transition-colors">{link.num} //</span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Socials & Connect */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1.5">
              <Shield size={12} />
              UPLINK_CHANNELS
            </h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/PrakharShukla42"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white rounded-xl border border-white/10 hover:border-cyan-400/40 hover:shadow-neon-secondary transition-all"
                title="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/prakhar-shukla-b2362a252/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-primary rounded-xl border border-white/10 hover:border-primary/40 hover:shadow-neon-primary transition-all"
                title="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="mailto:therockstarop9956@gmail.com"
                className="p-3 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-secondary rounded-xl border border-white/10 hover:border-secondary/40 hover:shadow-neon-secondary transition-all"
                title="Email"
              >
                <FaEnvelope size={18} />
              </a>
            </div>
            <p className="text-[11px] text-gray-500">GEO: 27.3989° N, 80.1311° E // Hardoi, India</p>
          </div>
          
        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-500 border-t border-white/10 pt-8">
          <p>&copy; {currentYear} Prakhar Shukla. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="text-cyan-400/70">REACT 19</span>
            <span>•</span>
            <span className="text-primary/70">TAILWIND CSS</span>
            <span>•</span>
            <span className="text-secondary/70">VERCEL & RENDER</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-background border-t border-white/5 pt-16 pb-8 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <div className="text-2xl font-bold tracking-tighter">
              <span className="gradient-text">Prakhar</span> Shukla
            </div>
            <p className="text-textMuted text-sm font-sans max-w-xs leading-relaxed">
              Building scalable backend systems, cloud-powered applications, and intelligent solution infrastructures.
            </p>
          </div>

          {/* Quick Nav links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-textMuted hover:text-primary transition-colors text-sm font-sans"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Socials & Connect */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/PrakharShukla42"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-xl border border-white/5 transition-all active:scale-95"
                title="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/prakhar-shukla-b2362a252/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-primary rounded-xl border border-white/5 transition-all active:scale-95"
                title="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="mailto:therockstarop9956@gmail.com"
                className="p-3 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-secondary rounded-xl border border-white/5 transition-all active:scale-95"
                title="Email"
              >
                <FaEnvelope size={18} />
              </a>
            </div>
            <p className="text-xs text-textMuted font-mono">Hardoi, Uttar Pradesh, India</p>
          </div>
          
        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-textMuted border-t border-white/5 pt-8 font-sans">
          <p>&copy; {currentYear} Prakhar Shukla. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Handcrafted with <FaHeart className="text-red-500 animate-pulse" /> using React, Tailwind & Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

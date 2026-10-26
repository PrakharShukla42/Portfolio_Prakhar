import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Terminal, Cpu } from 'lucide-react';

const navLinks = [
  { num: '01', name: 'Home', href: '#home' },
  { num: '02', name: 'About', href: '#about' },
  { num: '03', name: 'Skills', href: '#skills' },
  { num: '04', name: 'Journey', href: '#experience' },
  { num: '05', name: 'Projects', href: '#projects' },
  { num: '06', name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/85 backdrop-blur-xl border-b border-cyan-500/20 py-2.5 shadow-[0_4px_30px_rgba(6,182,212,0.15)]' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Futuristic Cyber Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 font-mono"
        >
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary p-0.5 shadow-neon-secondary flex items-center justify-center group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-black rounded-[6px] flex items-center justify-center">
                <Cpu size={16} className="text-cyan-400 group-hover:rotate-45 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-extrabold tracking-wider text-white">
                PRAKHAR<span className="text-cyan-400">.SHUKLA</span>
              </span>
              <span className="text-[9px] text-gray-500 font-bold tracking-widest uppercase -mt-1 hidden sm:block">
                SYS_ARCHITECT // v2.6
              </span>
            </div>
          </a>
        </motion.div>

        {/* Live HUD Status Telemetry (Center on Desktop) */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono backdrop-blur-md">
          <span className="flex h-1.5 w-1.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
          </span>
          <span className="text-gray-400">UPLINK:</span>
          <span className="text-green-400 font-bold">ONLINE</span>
          <span className="text-gray-600">|</span>
          <span className="text-cyan-400 font-medium">AWS & AI STACK</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-mono text-xs">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="text-gray-400 hover:text-white transition-colors relative py-1 group font-medium tracking-wide flex items-center gap-1"
            >
              <span className="text-[10px] text-cyan-400/60 group-hover:text-cyan-400 transition-colors">{link.num}.</span>
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-primary transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
          
          {/* Futuristic Theme Toggle Button */}
          <motion.button
            onClick={toggleTheme}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-foreground hover:border-cyan-400/40 hover:text-cyan-400 hover:shadow-neon-secondary transition-all cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <FaSun className="text-yellow-400 text-sm" /> : <FaMoon className="text-indigo-400 text-sm" />}
          </motion.button>
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-foreground"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <FaSun className="text-yellow-400 text-sm" /> : <FaMoon className="text-indigo-400 text-sm" />}
          </button>
          
          <button
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-cyan-400 hover:border-cyan-400/40 text-xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-b border-cyan-500/20 backdrop-blur-2xl absolute top-full left-0 w-full overflow-hidden shadow-2xl font-mono text-sm"
          >
            <div className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-white/5 flex items-center justify-between text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <Terminal size={12} className="text-cyan-400" />
                NAVIGATION_SYS
              </span>
              <span className="text-[10px] text-green-400 font-bold">STATUS: READY</span>
            </div>
            <nav className="flex flex-col py-4 px-6 gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-cyan-400 transition-colors font-medium flex items-center justify-between border-b border-white/5 pb-2.5"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-xs text-primary font-bold">{link.num} //</span>
                    {link.name}
                  </span>
                  <span className="text-xs text-gray-600">&gt;&gt;</span>
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

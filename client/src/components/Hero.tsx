import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaAws, FaNodeJs } from 'react-icons/fa';
import { SiDocker } from 'react-icons/si';
import { Sparkles, Terminal, Activity, ShieldCheck } from 'lucide-react';

const Hero = () => {
  const words = [
    "Software Engineer",
    "Cloud Specialist",
    "Backend Developer",
    "AI & ML Integrator",
    "DevOps Engineer",
    "Full Stack Developer"
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Permanent profile photo from public directory (fallback to cyber avatar if not yet added)
  const profilePhoto = '/profile.jpg';
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    let timer: number;
    const currentWord = words[currentWordIndex];
    
    if (isDeleting) {
      timer = window.setTimeout(() => {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
      }, 30);
    } else {
      timer = window.setTimeout(() => {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      }, 80);
    }

    if (!isDeleting && currentText === currentWord) {
      timer = window.setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-28 pb-16 px-6 relative overflow-hidden cyber-grid">
      {/* Ambient Sci-Fi Glow Background Lights */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-primary/10 rounded-full blur-[140px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[140px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left: Text & Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 text-left space-y-6"
        >
          {/* Cyberpunk HUD Telemetry Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-primary/30 backdrop-blur-md shadow-neon-primary text-xs font-mono"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-secondary font-semibold tracking-wider uppercase">SYS://OPERATIONAL</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-300 font-medium">B.Tech CSE '26 • Ethara AI Alum</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight text-foreground"
          >
            Hi, I'm <br className="hidden sm:inline" />
            <span className="gradient-text drop-shadow-[0_0_25px_rgba(139,92,246,0.3)]">
              Prakhar Shukla
            </span>
          </motion.h1>
          
          {/* Typing Effect Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="h-12 md:h-14 flex items-center"
          >
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-foreground/90 flex items-center">
              <span className="font-mono text-gray-400 mr-2">&gt;</span>
              <span className="text-secondary font-mono border-b-2 border-primary pb-0.5">
                {currentText}
              </span>
              <span className="w-1.5 h-7 sm:h-9 ml-1.5 bg-primary inline-block animate-ping"></span>
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-base sm:text-lg text-textMuted max-w-xl leading-relaxed font-sans"
          >
            Solutions-oriented <strong className="text-white font-semibold">Software Engineer</strong> and <strong className="text-cyan-400 font-semibold">Cloud Specialist</strong> architecting highly resilient AWS infrastructures, enterprise backend systems, and production-ready AI workflows.
          </motion.p>
          
          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <a href="#projects" className="btn-gradient shadow-neon-primary-bright group relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-2 font-semibold">
                Explore Projects <Terminal size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a href="#contact" className="btn-outline hover:border-primary/50 hover:shadow-neon-primary">
              Contact Me
            </a>

            {/* Direct Resume Download */}
            <a 
              href="/Prakhar_Shukla_Resume.pdf" 
              download="Prakhar_Shukla_Resume.pdf"
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-outline flex items-center gap-2 cursor-pointer hover:border-secondary/50 hover:text-cyan-400 hover:shadow-neon-secondary"
            >
              <FaDownload size={14} className="text-cyan-400" /> Download Resume
            </a>
          </motion.div>

          {/* Telemetry quick stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-3 gap-3 pt-4 max-w-lg"
          >
            <div className="p-3 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
              <p className="font-mono text-xs text-secondary uppercase tracking-wider">Academics</p>
              <p className="text-base sm:text-lg font-bold text-white">7.65 CGPA</p>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
              <p className="font-mono text-xs text-primary uppercase tracking-wider">Experience</p>
              <p className="text-base sm:text-lg font-bold text-white">Ethara AI</p>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
              <p className="font-mono text-xs text-green-400 uppercase tracking-wider">Projects</p>
              <p className="text-base sm:text-lg font-bold text-white">6+ Systems</p>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-5 pt-2"
          >
            <span className="text-xs font-mono uppercase text-gray-500 font-bold tracking-widest">Connect:</span>
            <a 
              href="https://github.com/PrakharShukla42" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:border-white/20 hover:scale-110 transition-all duration-200"
              title="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/prakhar-shukla-b2362a252/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-primary hover:border-primary/30 hover:scale-110 transition-all duration-200"
              title="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a 
              href="mailto:therockstarop9956@gmail.com" 
              className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-secondary hover:border-secondary/30 hover:scale-110 transition-all duration-200"
              title="Email"
            >
              <FaEnvelope size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Crazy Futuristic Holographic Photo Portal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex justify-center items-center relative py-6"
        >
          <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px] flex items-center justify-center">
            
            {/* Outer Rotating HUD Ring 1 (Clockwise) */}
            <div className="absolute inset-0 pointer-events-none animate-spin-slow">
              <svg className="w-full h-full" viewBox="0 0 400 400">
                <circle
                  cx="200"
                  cy="200"
                  r="190"
                  fill="none"
                  stroke="rgba(6, 182, 212, 0.25)"
                  strokeWidth="1.5"
                  strokeDasharray="8 12 24 12"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="178"
                  fill="none"
                  stroke="rgba(139, 92, 246, 0.2)"
                  strokeWidth="1"
                  strokeDasharray="4 8"
                />
                {/* Tech coordinates */}
                <text x="200" y="16" fill="rgba(6, 182, 212, 0.6)" fontSize="9" fontFamily="monospace" textAnchor="middle">000° // NORTH</text>
                <text x="390" y="204" fill="rgba(6, 182, 212, 0.6)" fontSize="9" fontFamily="monospace" textAnchor="end">090°</text>
                <text x="200" y="394" fill="rgba(6, 182, 212, 0.6)" fontSize="9" fontFamily="monospace" textAnchor="middle">180°</text>
                <text x="10" y="204" fill="rgba(6, 182, 212, 0.6)" fontSize="9" fontFamily="monospace" textAnchor="start">270°</text>
              </svg>
            </div>

            {/* Inner Rotating HUD Ring 2 (Counter-Clockwise) */}
            <div className="absolute inset-4 pointer-events-none" style={{ animation: 'spin 20s linear infinite reverse' }}>
              <svg className="w-full h-full" viewBox="0 0 360 360">
                <circle
                  cx="180"
                  cy="180"
                  r="165"
                  fill="none"
                  stroke="rgba(139, 92, 246, 0.35)"
                  strokeWidth="2"
                  strokeDasharray="16 28 60 20"
                />
                <circle
                  cx="180"
                  cy="180"
                  r="152"
                  fill="none"
                  stroke="rgba(6, 182, 212, 0.15)"
                  strokeWidth="1"
                />
              </svg>
            </div>

            {/* Glowing Radial Core Aura */}
            <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-primary/30 via-secondary/20 to-transparent blur-[70px] animate-pulse"></div>

            {/* Floating Tech Badges around the portal */}
            {/* Top Left: AWS Cloud */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-3 -left-3 sm:-left-6 z-30 p-2.5 sm:p-3 rounded-2xl bg-surface/90 border border-orange-500/40 shadow-lg backdrop-blur-xl flex items-center gap-2.5 text-xs font-mono font-bold text-orange-400 group cursor-default"
            >
              <FaAws size={20} className="text-orange-500" />
              <span className="hidden sm:inline">AWS EC2/RDS</span>
            </motion.div>

            {/* Top Right: AI Integrator */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="absolute -top-3 -right-3 sm:-right-6 z-30 p-2.5 sm:p-3 rounded-2xl bg-surface/90 border border-primary/40 shadow-lg backdrop-blur-xl flex items-center gap-2.5 text-xs font-mono font-bold text-primary group cursor-default"
            >
              <Sparkles size={18} className="text-secondary animate-pulse" />
              <span className="hidden sm:inline">LangChain/LLMs</span>
            </motion.div>

            {/* Bottom Left: Node.js */}
            <motion.div
              animate={{ x: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-3 -left-3 sm:-left-4 z-30 p-2.5 sm:p-3 rounded-2xl bg-surface/90 border border-green-500/40 shadow-lg backdrop-blur-xl flex items-center gap-2.5 text-xs font-mono font-bold text-green-400 group cursor-default"
            >
              <FaNodeJs size={18} className="text-green-500" />
              <span className="hidden sm:inline">Node/Express</span>
            </motion.div>

            {/* Bottom Right: Docker / DevOps */}
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut" }}
              className="absolute -bottom-3 -right-3 sm:-right-4 z-30 p-2.5 sm:p-3 rounded-2xl bg-surface/90 border border-cyan-500/40 shadow-lg backdrop-blur-xl flex items-center gap-2.5 text-xs font-mono font-bold text-cyan-400 group cursor-default"
            >
              <SiDocker size={18} className="text-cyan-400" />
              <span className="hidden sm:inline">Docker & CI/CD</span>
            </motion.div>

            {/* Central Holographic Photo Portal Frame */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-2.5 border border-cyan-400/40 bg-black/60 backdrop-blur-2xl shadow-[0_0_35px_rgba(6,182,212,0.25)] group z-20 flex items-center justify-center overflow-hidden hud-corner">
              
              {/* Laser Scanline Sweeper */}
              <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden rounded-full">
                <div className="w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#06b6d4] absolute animate-laser"></div>
              </div>

              {/* Photo or Cyber Avatar Container */}
              <div className="w-full h-full rounded-full overflow-hidden relative bg-gradient-to-b from-surface via-black to-surface/80 flex items-center justify-center border-2 border-white/10">
                {!imageError ? (
                  <img
                    src={profilePhoto}
                    alt="Prakhar Shukla"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 filter contrast-105"
                  />
                ) : (
                  // Sleek Sci-Fi Tech Avatar Placeholder if no photo file present
                  <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-surface to-black relative">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-primary/30 to-secondary/30 border border-cyan-400/30 flex items-center justify-center mb-2 shadow-inner">
                      <ShieldCheck size={44} className="text-cyan-400 animate-pulse" />
                    </div>
                    <p className="font-mono text-sm font-bold text-white tracking-wide">PRAKHAR SHUKLA</p>
                    <p className="font-mono text-[10px] text-cyan-400 tracking-widest uppercase mt-0.5">Cloud & AI Engineer</p>
                  </div>
                )}

                {/* Sub-HUD bottom visualizer */}
                <div className="absolute bottom-2 left-0 right-0 z-20 flex justify-center items-end gap-1 px-8 pointer-events-none opacity-80">
                  <span className="w-1 h-3 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-1 h-5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-1 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  <span className="w-1 h-6 bg-cyan-300 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></span>
                  <span className="w-1 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '100ms' }}></span>
                  <span className="w-1 h-4 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '250ms' }}></span>
                </div>
              </div>
            </div>

            {/* Bottom Status Ribbon */}
            <div className="absolute -bottom-8 z-30 px-4 py-1.5 rounded-full bg-black/90 border border-cyan-400/40 backdrop-blur-xl shadow-lg flex items-center gap-2 font-mono text-[11px] text-gray-300">
              <Activity size={13} className="text-green-400 animate-pulse" />
              <span>CORE ARCHITECT</span>
              <span className="text-cyan-400">•</span>
              <span className="text-green-400 font-bold">READY TO HIRE</span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;

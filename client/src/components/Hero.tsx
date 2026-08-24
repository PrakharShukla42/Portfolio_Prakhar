import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaAws, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';

const Hero = () => {
  const words = ["Software Engineer", "Cloud Specialist", "Backend Developer", "Full Stack Developer", "AI & ML Integrator", "DevOps Engineer", "AWS & AI Enthusiast"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

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
    <section id="home" className="min-h-screen flex items-center justify-center pt-28 pb-16 px-6 relative overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1 text-left"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-mono mb-4 tracking-wider text-sm font-semibold uppercase"
          >
            🚀 Welcome to my universe
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-4 leading-tight text-foreground"
          >
            Hi, I'm <span className="gradient-text">Prakhar Shukla</span>
          </motion.h1>
          
          {/* Typing Effect Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="h-12 md:h-16 mb-6"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-foreground/80 flex items-center">
              I am a&nbsp;
              <span className="text-secondary font-mono underline decoration-primary decoration-wavy decoration-2">
                {currentText}
              </span>
              <span className="w-1 h-8 md:h-10 ml-1 bg-primary inline-block animate-ping"></span>
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-base md:text-lg text-textMuted mb-8 max-w-xl leading-relaxed font-sans"
          >
            Solutions-oriented Software Engineer and Cloud Specialist architecting highly available AWS infrastructures, scalable backend systems, and advanced AI workflows.
          </motion.p>
          
          {/* Primary Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#projects" className="btn-gradient">
              View Projects
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
            {/* Download Resume button points to the actual PDF */}
            <a 
              href="/Prakhar_Shukla_Resume.pdf" 
              download="Prakhar_Shukla_Resume.pdf"
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-outline flex items-center gap-2 cursor-pointer"
            >
              <FaDownload size={14} /> Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-6 mt-12"
          >
            <a href="https://github.com/PrakharShukla42" target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-foreground text-3xl transition-all hover:scale-110 duration-200">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/prakhar-shukla-b2362a252/" target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-primary text-3xl transition-all hover:scale-110 duration-200">
              <FaLinkedin />
            </a>
            <a href="mailto:therockstarop9956@gmail.com" className="text-textMuted hover:text-secondary text-3xl transition-all hover:scale-110 duration-200">
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>

        {/* Profile Card Section with drifting elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2 flex justify-center relative"
        >
          <div className="relative w-80 h-80 md:w-[420px] md:h-[420px]">
            {/* Rotating border effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-[90px] opacity-25 animate-pulse"></div>
            
            {/* Tech badges floating */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-4 left-6 p-4 rounded-2xl glass-card text-primary shadow-neon-primary text-3xl z-20 border border-primary/20 backdrop-blur-md"
            >
              <FaAws />
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="absolute top-1/2 -right-4 p-4 rounded-2xl glass-card text-secondary shadow-neon-secondary text-3xl z-20 border border-secondary/20 backdrop-blur-md"
            >
              <FaNodeJs />
            </motion.div>

            <motion.div
              animate={{ x: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="absolute bottom-6 left-12 p-4 rounded-2xl glass-card text-cyan-400 text-3xl z-20 border border-cyan-400/20 backdrop-blur-md"
            >
              <FaReact />
            </motion.div>

            <motion.div
              animate={{ x: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -top-4 right-1/4 p-4 rounded-2xl glass-card text-green-400 text-3xl z-20 border border-green-400/20 backdrop-blur-md"
            >
              <SiMongodb />
            </motion.div>

            {/* Inner Glowing Frame */}
            <div className="w-full h-full rounded-full overflow-hidden p-3 border-2 border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center relative z-10 shadow-2xl">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-surface to-background flex flex-col items-center justify-center border border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-30"></div>
                <span className="text-8xl select-none relative z-10 animate-bounce">💻</span>
                <div className="mt-4 text-center relative z-10">
                  <span className="font-mono text-xs text-secondary tracking-widest uppercase">System Architect</span>
                  <p className="font-bold font-mono text-lg text-white mt-1">AWS & NODE DEV</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;

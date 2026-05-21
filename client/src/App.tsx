
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import CodingProfiles from './components/CodingProfiles';
import TerminalSection from './components/TerminalSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CanvasParticles from './components/CanvasParticles';
import AIChatbot from './components/AIChatbot';

function App() {
  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Dynamic Canvas Particles Network */}
      <CanvasParticles />

      {/* Decorative glass glowing background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>
        <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        {/* Navigation bar with frosted glass theme switch */}
        <Navbar />
        
        <main>
          {/* Hero space with dynamic drift cards */}
          <Hero />
          
          {/* Detailed GLA University and statistics cards */}
          <About />
          
          {/* Skill grids with visual progress animations */}
          <Skills />
          
          {/* Vertical scroll-revealing professional journey */}
          <Experience />
          
          {/* Featured projects with category filters and interactive modal */}
          <Projects />
          
          {/* Credentials with glowing neon frames */}
          <Achievements />
          
          {/* Certification credentials grid */}
          <Certifications />
          
          {/* LeetCode, GitHub and HackerRank stats indicators */}
          <CodingProfiles />
          
          {/* Recruiter-friendly interactive CLI console */}
          <TerminalSection />
          
          {/* Responsive contact panel with active API inputs */}
          <Contact />
        </main>
        
        {/* Social-anchored custom Footer */}
        <Footer />
        
        {/* Floating AI Recruiter chat bubble helper */}
        <AIChatbot />
      </div>
    </div>
  );
}

export default App;

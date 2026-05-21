import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

interface HistoryItem {
  command: string;
  output: string | React.ReactNode;
}

const TerminalSection = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'welcome',
      output: (
        <div className="space-y-2">
          <p className="text-secondary font-bold font-mono">Prakhar Shukla OS v1.0.0 initialized.</p>
          <p className="text-gray-400">Type <span className="text-primary font-bold">help</span> to view all available commands.</p>
        </div>
      )
    }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let output: string | React.ReactNode = '';

    switch (trimmedCmd) {
      case 'help':
        output = (
          <div className="grid grid-cols-2 gap-x-8 gap-y-1 font-mono text-sm max-w-md">
            <div><span className="text-primary font-bold">about</span></div>
            <div className="text-gray-400">Show bio summary</div>
            <div><span className="text-primary font-bold">skills</span></div>
            <div className="text-gray-400">Show categorised technical stack</div>
            <div><span className="text-primary font-bold">projects</span></div>
            <div className="text-gray-400">Show featured developer projects</div>
            <div><span className="text-primary font-bold">contact</span></div>
            <div className="text-gray-400">Show email, phone and socials</div>
            <div><span className="text-primary font-bold">hack</span></div>
            <div className="text-gray-400">Run security scan easter egg</div>
            <div><span className="text-primary font-bold">clear</span></div>
            <div className="text-gray-400">Clear terminal console</div>
          </div>
        );
        break;

      case 'about':
        output = (
          <div className="space-y-2 font-mono text-sm max-w-2xl leading-relaxed text-gray-300">
            <p>
              <span className="text-white font-bold">Prakhar Shukla</span> is a Backend & Full Stack Developer and AWS & AI Enthusiast based in Hardoi, Uttar Pradesh, India.
            </p>
            <p>
              Specialises in designing scalable backend REST APIs, implementing cloud-powered infrastructures on AWS, and integrating intelligent AI architectures.
            </p>
            <p>
              Education: B.Tech in Computer Science (IoT) at GLA University, Mathura (Graduating 2026, CGPA: 7.54).
            </p>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-3 font-mono text-sm text-gray-300">
            <div>
              <span className="text-secondary font-bold">[Programming Languages]</span>: Java, Python, JavaScript
            </div>
            <div>
              <span className="text-secondary font-bold">[Backend Services]</span>: Node.js, Express.js, REST APIs, JWT, MVC
            </div>
            <div>
              <span className="text-secondary font-bold">[Databases]</span>: MongoDB, MySQL
            </div>
            <div>
              <span className="text-secondary font-bold">[Cloud & DevOps]</span>: AWS EC2, S3, RDS, CloudFront, Linux, Git, GitHub
            </div>
            <div>
              <span className="text-secondary font-bold">[IoT Hardware]</span>: Arduino Uno, Node MCU, ESP8266
            </div>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-4 font-mono text-sm text-gray-300">
            <div className="border-l-2 border-primary pl-3">
              <span className="text-white font-bold font-mono">1. Smart Shopping Cart (IoT)</span>
              <p className="text-gray-400">RFID-based scanning, ESP8266, real-time dashboard updates.</p>
              <p className="text-xs text-secondary">Tech: Arduino, Node MCU, HTML, CSS</p>
            </div>
            <div className="border-l-2 border-primary pl-3">
              <span className="text-white font-bold font-mono">2. Multi Website Hosting on AWS (Cloud)</span>
              <p className="text-gray-400">Apache server config, hosted multi-sites on single EC2, RDS, S3, CDN.</p>
              <p className="text-xs text-secondary">Tech: AWS EC2, S3, RDS, CloudFront, Linux, Apache</p>
            </div>
            <div className="border-l-2 border-primary pl-3">
              <span className="text-white font-bold font-mono">3. CRM Ticket System (Full Stack)</span>
              <p className="text-gray-400">Service ticketing app with JWT auth, role-based access controls.</p>
              <p className="text-xs text-secondary">Tech: Node.js, Express.js, MongoDB, JWT</p>
            </div>
            <div className="border-l-2 border-primary pl-3">
              <span className="text-white font-bold font-mono">4. Collaborative Task Manager (Full Stack)</span>
              <p className="text-gray-400">Real-time Kanban agility board with custom WebSocket coordination.</p>
              <p className="text-xs text-secondary">Tech: React.js, Node.js, Express.js, MongoDB, WebSockets</p>
            </div>
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-2 font-mono text-sm text-gray-300">
            <p><span className="text-primary font-bold">Email:</span> therockstarop9956@gmail.com</p>
            <p><span className="text-primary font-bold">Phone:</span> +91 8979513406</p>
            <p><span className="text-primary font-bold">LinkedIn:</span> linkedin.com/in/prakhar-shukla-b2362a252/</p>
            <p><span className="text-primary font-bold">GitHub:</span> github.com/PrakharShukla42</p>
          </div>
        );
        break;

      case 'hack':
        output = (
          <div className="space-y-1 font-mono text-xs text-green-500 animate-pulse">
            <p>&gt;&gt; Initiating bypass sequences...</p>
            <p>&gt;&gt; Injecting payloads in AWS S3 buckets...</p>
            <p>&gt;&gt; Elevating JWT clearance to ADMIN_ROLE...</p>
            <p>&gt;&gt; Bypass successful. CloudFront nodes decrypted.</p>
            <p className="text-white font-bold font-mono mt-1">&gt;&gt; Recruiter Access Granted! Proceed to Contact section.</p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        output = `Command not found: '${trimmedCmd}'. Type 'help' for a list of commands.`;
        break;
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  return (
    <section className="py-20 px-6 bg-surface/20">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Terminal className="text-primary text-3xl animate-pulse" />
            <h2 className="text-3xl md:text-5xl font-bold">
              Interactive <span className="gradient-text">Console</span>
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 max-w-xl mx-auto">
            Recruiter-friendly developer terminal. Try executing interactive commands directly inside the shell.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onClick={focusInput}
          className="relative rounded-2xl border border-white/10 bg-black/95 overflow-hidden shadow-2xl group cursor-text"
        >
          {/* CRT Scanline effect */}
          <div className="absolute inset-0 scanline pointer-events-none opacity-40 z-20"></div>

          {/* Terminal Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#0a0a0f] border-b border-white/5 relative z-10">
            <div className="flex gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-[#ef4444] inline-block shadow-md"></span>
              <span className="w-3.5 h-3.5 rounded-full bg-[#eab308] inline-block shadow-md"></span>
              <span className="w-3.5 h-3.5 rounded-full bg-[#22c55e] inline-block shadow-md"></span>
            </div>
            <div className="text-gray-500 font-mono text-xs select-none">
              guest@prakhar-shukla:~ (bash)
            </div>
            <div className="w-4"></div>
          </div>

          {/* Terminal Body */}
          <div ref={terminalBodyRef} className="p-6 h-96 overflow-y-auto font-mono text-sm leading-relaxed text-gray-300 relative z-10 scrollbar-none space-y-4">
            {history.map((item, index) => (
              <div key={index} className="space-y-1">
                {item.command !== 'welcome' && (
                  <div className="flex items-center gap-2">
                    <span className="text-secondary font-bold">guest@prakhar-shukla:~$</span>
                    <span className="text-white">{item.command}</span>
                  </div>
                )}
                <div className="pl-2 text-gray-300 font-mono">{item.output}</div>
              </div>
            ))}
            
            {/* Active Input Line */}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-secondary font-bold">guest@prakhar-shukla:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-transparent text-white focus:outline-none border-none outline-none p-0 m-0 flex-grow font-mono selection:bg-primary/50"
                autoComplete="off"
                autoCapitalize="off"
                spellCheck={false}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TerminalSection;

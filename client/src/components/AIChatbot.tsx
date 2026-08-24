import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, MessageSquare } from 'lucide-react';

interface ChatMessage {
  id: number;
  sender: 'bot' | 'user';
  text: string;
  timestamp: Date;
}

const PRESET_PROMPTS = [
  { text: "What is his tech stack?", tag: "skills" },
  { text: "Tell me about his AWS skills", tag: "aws" },
  { text: "List his main projects", tag: "projects" },
  { text: "Is he open to job offers?", tag: "hire" },
];

const BOT_RESPONSES: Record<string, string> = {
  welcome: "Hi there! I am Prakhar's AI Assistant. Ask me anything about his technical stack, certifications, projects, or background! How can I help you today?",
  skills: "Prakhar is a strong Solutions-oriented Software Engineer! His core stack includes Node.js, Express.js, MongoDB, React, Java, Python, and C++. He specializes in Cloud Architecture on AWS, integrating AI Workflows with LangChain/LLMs, and implementing strict DevOps CI/CD pipelines (Docker, Kubernetes).",
  aws: "Prakhar is a certified AWS Cloud Specialist! He holds several certifications including AWS Cloud Practitioner and AWS Prompt Engineering. He has architected scalable multi-website systems on AWS EC2, S3, RDS, IAM, VPC, and CloudFront, utilizing Auto Scaling and robust CI/CD deployments.",
  projects: "His 6 major projects include:\n1. Multi-Server Web Hosting Infrastructure (AWS EC2, S3, RDS)\n2. AI Agent Workflow Automation (LangChain, LLMs, Redis)\n3. Full-Stack Task Management System (Node, React, JWT)\n4. POSCO E-Commerce Food Delivery (MongoDB, Express, React, Node)\n5. Smart Shopping Cart (IoT - Arduino, ESP8266, RFID)\n6. CRM Ticket System (Node, MongoDB, JWT auth)",
  hire: "Yes! Prakhar is a Software Engineer & Cloud Specialist graduating with a B.Tech in Computer Science & Engineering (CGPA: 7.65) in 2026. He recently interned at Ethara AI as an LLM Post Training Intern. He is open to internship and junior roles! Contact him at therockstarop9956@gmail.com.",
  default: "I understand! Prakhar is highly passionate about building scalable cloud architectures, intelligent AI applications, and robust backend microservices. Feel free to contact him directly at therockstarop9956@gmail.com or call him at +91 8979513406!"
};

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      sender: 'bot',
      text: BOT_RESPONSES.welcome,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg: ChatMessage = {
      id: Date.now(),
      sender: 'user',
      text,
      timestamp: new Date()
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Analyze text for keywords to respond
    setTimeout(() => {
      let response = BOT_RESPONSES.default;
      const cleanText = text.toLowerCase();

      if (cleanText.includes('skill') || cleanText.includes('tech') || cleanText.includes('stack') || cleanText.includes('program')) {
        response = BOT_RESPONSES.skills;
      } else if (cleanText.includes('aws') || cleanText.includes('cloud') || cleanText.includes('amazon')) {
        response = BOT_RESPONSES.aws;
      } else if (cleanText.includes('project') || cleanText.includes('work') || cleanText.includes('build')) {
        response = BOT_RESPONSES.projects;
      } else if (cleanText.includes('hire') || cleanText.includes('job') || cleanText.includes('offer') || cleanText.includes('intern')) {
        response = BOT_RESPONSES.hire;
      } else if (cleanText.includes('contact') || cleanText.includes('email') || cleanText.includes('phone') || cleanText.includes('call')) {
        response = "You can reach out to Prakhar at:\n• Email: therockstarop9956@gmail.com\n• Phone: +91 8979513406\n• LinkedIn: linkedin.com/in/prakhar-shukla-b2362a252/";
      } else if (cleanText.includes('hello') || cleanText.includes('hi') || cleanText.includes('hey')) {
        response = "Hello! How is your day going? Ask me about Prakhar's technical credentials, AWS expertise, or projects!";
      }

      const botMsg: ChatMessage = {
        id: Date.now() + 1,
        sender: 'bot',
        text,
        timestamp: new Date()
      };
      // Overwrite text with the proper response
      botMsg.text = response;

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1200);
  };

  const triggerPreset = (tag: string, text: string) => {
    const userMsg: ChatMessage = {
      id: Date.now(),
      sender: 'user',
      text,
      timestamp: new Date()
    };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const response = BOT_RESPONSES[tag] || BOT_RESPONSES.default;
      const botMsg: ChatMessage = {
        id: Date.now() + 1,
        sender: 'bot',
        text: response,
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full shadow-lg shadow-primary/30 flex items-center justify-center hover:brightness-110 active:scale-95 transition-all duration-300 border border-white/10"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-2rem)] h-[500px] rounded-3xl border border-white/10 bg-black/90 backdrop-blur-2xl shadow-2xl flex flex-col overflow-hidden z-50"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-primary/20 to-secondary/20 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/20 text-primary rounded-xl border border-primary/20 animate-pulse">
                  <Bot size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm tracking-wide">Prakhar's Assistant</h4>
                  <span className="text-[10px] text-green-400 font-mono font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block animate-ping"></span>
                    ONLINE
                  </span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white p-1">
                <X size={18} />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-grow p-4 overflow-y-auto space-y-4 scrollbar-none">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-primary text-white rounded-tr-none'
                        : 'bg-white/5 text-gray-200 border border-white/5 rounded-tl-none'
                    }`}
                    style={{ whiteSpace: 'pre-line' }}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/5 rounded-2xl rounded-tl-none px-4 py-3 flex gap-1 items-center">
                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Presets */}
            {messages.length === 1 && !isTyping && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {PRESET_PROMPTS.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => triggerPreset(p.tag, p.text)}
                    className="text-xs px-3 py-1.5 rounded-lg bg-white/5 hover:bg-primary/20 hover:text-white text-gray-400 border border-white/5 transition-all"
                  >
                    {p.text}
                  </button>
                ))}
              </div>
            )}

            {/* Input Form */}
            <div className="p-4 border-t border-white/5 bg-black/40 flex items-center gap-2">
              <input
                type="text"
                placeholder="Ask about skills, experience..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
                className="flex-grow bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary/50 placeholder:text-gray-500"
              />
              <button
                onClick={() => handleSend(input)}
                className="p-2.5 bg-primary rounded-xl text-white hover:bg-primary-dark transition-colors flex items-center justify-center"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;

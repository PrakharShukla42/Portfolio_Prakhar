import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Sparkles, RefreshCw } from 'lucide-react';

interface ChatMessage {
  id: number;
  sender: 'bot' | 'user';
  text: string;
  timestamp: Date;
}

const PRESET_PROMPTS = [
  { text: "Why should we hire Prakhar?", prompt: "Why should a company hire Prakhar Shukla? What are his key strengths?" },
  { text: "Experience at Ethara AI", prompt: "Tell me about Prakhar's internship at Ethara AI and what he achieved." },
  { text: "AWS & Cloud Skills", prompt: "What are Prakhar's AWS and cloud infrastructure skills?" },
  { text: "Top Projects & Architecture", prompt: "Explain Prakhar's top projects and the architectures he built." },
  { text: "How can I contact him?", prompt: "How can recruiters get in touch with Prakhar directly?" },
];

const WELCOME_MESSAGE = 
  "Hello! I am **Prakhar's AI Career Ambassador**.\n\n" +
  "I have been trained on Prakhar's complete background, including his **LLM Post Training internship at Ethara AI**, his **AWS multi-server architectures**, **projects**, and **technical skills**.\n\n" +
  "Ask me anything about him!";

// Comprehensive Client-side Fallback (in case backend is waking up or network lags)
const FALLBACK_KNOWLEDGE: Record<string, string> = {
  whyHire: 
    "### **Why Hire Prakhar Shukla?**\n\n" +
    "• **Full-Stack & Cloud Synergy**: He doesn't just build APIs; he architects scalable AWS infrastructures (EC2, ECS, ASG, RDS, VPC) and containerizes them with Docker and CI/CD.\n" +
    "• **Real-World AI Experience**: Interned at **Ethara AI** working on LLM post-training pipelines and prompt engineering, driving a **15% measurable performance increase**.\n" +
    "• **Proven Leadership**: Served as **General Secretary of the CSE Club** at GLA University, demonstrating strong communication, technical mentorship, and teamwork.\n" +
    "• **Academics**: B.Tech in Computer Science & Engineering with a strong **7.65 CGPA**.",
  
  ethara:
    "### **Internship at Ethara AI (Mar 2026 – May 2026)**\n\n" +
    "As an **LLM Post Training Intern**, Prakhar:\n" +
    "• Engineered LLM post-training evaluation pipelines, optimizing prompt structures to drastically improve instruction adherence.\n" +
    "• Conducted rigorous data analysis on AI outputs, identifying edge cases and contributing to a **15% increase in model performance**.\n" +
    "• Implemented systematic feedback loops and advanced prompt engineering for factual, context-aware responses.",

  skills:
    "### **Prakhar's Technical Stack**\n\n" +
    "• **Cloud & DevOps**: AWS (EC2, S3, RDS, Lambda, VPC, IAM, CloudFront, ASG), Docker, Kubernetes, Terraform, Jenkins, GitHub Actions\n" +
    "• **Languages**: Java, Python, JavaScript, TypeScript, C++\n" +
    "• **Backend & APIs**: Node.js, Express.js, FastAPI, REST APIs, Microservices, JWT, RBAC, Redis, Kafka\n" +
    "• **AI & LLMs**: LangChain, OpenAI APIs, Google Gemini, Vector Databases, Prompt Engineering, Evaluation Pipelines\n" +
    "• **Databases**: MongoDB, MySQL, PostgreSQL, DynamoDB, Redis\n" +
    "• **Frontend**: React.js, Tailwind CSS, Framer Motion",

  projects:
    "### **Prakhar's Major Projects**\n\n" +
    "1. **Multi-Server Web Hosting on AWS**: Multi-tier architecture on EC2 with Auto Scaling, RDS MySQL, S3, and CloudFront CDN.\n" +
    "2. **AI Agent Workflow Automation Platform**: Scalable workflow builder powered by LangChain, LLMs, Redis state management, and MongoDB.\n" +
    "3. **Full-Stack Task Management System**: Node.js & Express REST API with JWT, RBAC, Docker containers, and AWS CI/CD.\n" +
    "4. **POSCO E-Commerce Food Delivery**: React & Node full-stack delivery app with MongoDB NoSQL dynamic catalog.\n" +
    "5. **Smart Shopping Cart**: IoT automated checkout using Arduino, ESP8266 Wi-Fi, and RFID scanning.\n" +
    "6. **CRM Ticket System**: Enterprise support ticketing system built with MVC and role-based permissions.",

  contact:
    "### **Contact Prakhar Directly**\n\n" +
    "• **Email**: [therockstarop9956@gmail.com](mailto:therockstarop9956@gmail.com)\n" +
    "• **Phone**: [+91 8979513406](tel:+918979513406)\n" +
    "• **LinkedIn**: [linkedin.com/in/prakhar-shukla-b2362a252](https://www.linkedin.com/in/prakhar-shukla-b2362a252/)\n" +
    "• **GitHub**: [github.com/PrakharShukla42](https://github.com/PrakharShukla42)\n" +
    "• **Location**: Hardoi, Uttar Pradesh, India (Open to Remote / Relocation)"
};

function getLocalFallback(query: string): string {
  const q = query.toLowerCase();
  if (q.includes('hire') || q.includes('why') || q.includes('strength')) return FALLBACK_KNOWLEDGE.whyHire;
  if (q.includes('ethara') || q.includes('intern') || q.includes('experience')) return FALLBACK_KNOWLEDGE.ethara;
  if (q.includes('skill') || q.includes('stack') || q.includes('aws') || q.includes('cloud')) return FALLBACK_KNOWLEDGE.skills;
  if (q.includes('project') || q.includes('built') || q.includes('architecture')) return FALLBACK_KNOWLEDGE.projects;
  if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('reach')) return FALLBACK_KNOWLEDGE.contact;
  return (
    `Prakhar Shukla is a Solutions-oriented Software Engineer and Cloud Specialist (GLA University B.Tech CSE, CGPA 7.65) with practical experience at Ethara AI (LLM Post Training Intern) and extensive mastery over AWS, Node.js, LangChain, and Docker.\n\n` +
    `Feel free to ask about his **internship**, **AWS cloud architectures**, **projects**, or **how to contact him**!`
  );
}

// Lightweight Markdown-like formatter for bullet points, bold text, links, and headers
const FormattedMessage = ({ text }: { text: string }) => {
  const lines = text.split('\n');

  return (
    <div className="space-y-1.5 text-xs sm:text-sm leading-relaxed">
      {lines.map((line, idx) => {
        const trimmed = line.trim();

        // Empty line
        if (!trimmed) {
          return <div key={idx} className="h-1.5" />;
        }

        // Header ###
        if (trimmed.startsWith('### ')) {
          return (
            <h5 key={idx} className="font-bold text-primary text-xs sm:text-sm pt-1 tracking-wide">
              {renderFormattedSpans(trimmed.replace('### ', ''))}
            </h5>
          );
        }

        // Bullet point • or -
        if (trimmed.startsWith('• ') || trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
          const bulletText = trimmed.replace(/^[•\-\*]\s+/, '');
          return (
            <div key={idx} className="flex items-start gap-1.5 pl-1">
              <span className="text-secondary select-none font-bold">•</span>
              <span className="flex-1">{renderFormattedSpans(bulletText)}</span>
            </div>
          );
        }

        // Numbered list
        const numMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
        if (numMatch) {
          return (
            <div key={idx} className="flex items-start gap-1.5 pl-1">
              <span className="text-primary font-mono text-xs font-bold select-none">{numMatch[1]}.</span>
              <span className="flex-1">{renderFormattedSpans(numMatch[2])}</span>
            </div>
          );
        }

        // Regular line
        return <p key={idx}>{renderFormattedSpans(trimmed)}</p>;
      })}
    </div>
  );
};

// Helper to parse **bold** and [link](url)
function renderFormattedSpans(text: string) {
  // Regex to match **bold** or [label](url)
  const regex = /(\*\*.*?\*\*|\[.*?\]\(.*?\))/g;
  const parts = text.split(regex);

  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-bold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
    if (linkMatch) {
      return (
        <a
          key={i}
          href={linkMatch[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary underline hover:text-primary transition-colors font-medium"
        >
          {linkMatch[1]}
        </a>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      sender: 'bot',
      text: WELCOME_MESSAGE,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = async (userPrompt: string) => {
    const trimmed = userPrompt.trim();
    if (!trimmed || isTyping) return;

    // Add user message
    const userMsg: ChatMessage = {
      id: Date.now(),
      sender: 'user',
      text: trimmed,
      timestamp: new Date()
    };

    const newHistory = [...messages, userMsg];
    setMessages(newHistory);
    setInput('');
    setIsTyping(true);

    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

    try {
      // Call backend /api/chat with 12s timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 12000);

      const response = await fetch(`${API_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: trimmed,
          history: newHistory.slice(-6).map((m) => ({
            sender: m.sender,
            text: m.text
          }))
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        const data = await response.json();
        const botReply = data.reply || getLocalFallback(trimmed);

        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            sender: 'bot',
            text: botReply,
            timestamp: new Date()
          }
        ]);
      } else {
        // Fallback gracefully
        const fallbackText = getLocalFallback(trimmed);
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            sender: 'bot',
            text: fallbackText,
            timestamp: new Date()
          }
        ]);
      }
    } catch {
      // Network error or server timeout -> smart fallback
      const fallbackText = getLocalFallback(trimmed);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: fallbackText,
          timestamp: new Date()
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: Date.now(),
        sender: 'bot',
        text: WELCOME_MESSAGE,
        timestamp: new Date()
      }
    ]);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label="Open AI Assistant"
        className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full shadow-lg shadow-primary/30 flex items-center justify-center hover:brightness-110 active:scale-95 transition-all duration-300 border border-white/20 group"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-cyan-500 border border-black"></span>
        </span>
        {isOpen ? <X size={24} /> : <Bot size={24} className="group-hover:rotate-12 transition-transform" />}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.92 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-4 sm:right-6 w-[94vw] sm:w-[420px] h-[560px] max-h-[80vh] rounded-3xl border border-white/10 bg-black/95 backdrop-blur-2xl shadow-2xl shadow-primary/20 flex flex-col overflow-hidden z-50"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-primary/20 via-surface/40 to-secondary/20 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-primary/20 text-primary rounded-xl border border-primary/30 relative">
                  <Bot size={20} />
                  <Sparkles size={10} className="absolute -top-1 -right-1 text-secondary animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-white font-bold text-sm tracking-wide">Prakhar's AI Assistant</h4>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-primary/20 text-primary font-mono font-semibold border border-primary/30">
                      Trained
                    </span>
                  </div>
                  <span className="text-[10px] text-green-400 font-mono font-medium flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block animate-ping"></span>
                    Verified Knowledge Base
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={handleResetChat}
                  title="Reset conversation"
                  className="text-gray-400 hover:text-white p-1.5 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <RefreshCw size={15} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white p-1.5 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-grow p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-white/10">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed shadow-md ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-primary to-primary-dark text-white rounded-tr-none shadow-primary/20'
                        : 'bg-surface/80 text-gray-200 border border-white/10 rounded-tl-none'
                    }`}
                  >
                    {msg.sender === 'bot' ? (
                      <FormattedMessage text={msg.text} />
                    ) : (
                      <p>{msg.text}</p>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-surface/80 border border-white/10 rounded-2xl rounded-tl-none px-4 py-3 flex gap-1.5 items-center">
                    <span className="text-[10px] text-textMuted font-mono mr-1">Thinking</span>
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Preset Question Chips */}
            {messages.length <= 2 && !isTyping && (
              <div className="px-3 pb-2 pt-1 border-t border-white/5 bg-black/40">
                <p className="text-[10px] uppercase font-mono text-gray-500 mb-1.5 font-bold tracking-wider">
                  Suggested Questions
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {PRESET_PROMPTS.map((p, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(p.prompt)}
                      className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 hover:bg-primary/20 hover:text-white text-gray-300 border border-white/5 transition-all text-left"
                    >
                      {p.text}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Form */}
            <div className="p-3 border-t border-white/10 bg-black/60 flex items-center gap-2">
              <input
                type="text"
                placeholder="Ask about my AWS skills, projects, Ethara AI..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
                disabled={isTyping}
                className="flex-grow bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-primary/50 placeholder:text-gray-500 disabled:opacity-50"
              />
              <button
                onClick={() => handleSend(input)}
                disabled={isTyping || !input.trim()}
                className="p-2.5 bg-gradient-to-r from-primary to-secondary rounded-xl text-white hover:brightness-110 transition-all flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed shadow-md shadow-primary/20"
              >
                <Send size={15} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;

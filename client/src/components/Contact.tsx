import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCopy, FaCheck } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const contactDetails = [
    {
      icon: <FaEnvelope className="text-xl text-primary" />,
      title: "Email Me Directly",
      value: "therockstarop9956@gmail.com",
      actionText: "Copy Email",
      copyVal: "therockstarop9956@gmail.com",
      fieldName: "email"
    },
    {
      icon: <FaPhone className="text-xl text-secondary" />,
      title: "Call or Message",
      value: "+91 8979513406",
      actionText: "Copy Phone",
      copyVal: "+918979513406",
      fieldName: "phone"
    },
    {
      icon: <FaMapMarkerAlt className="text-xl text-teal-400" />,
      title: "Current Location",
      value: "Hardoi, Uttar Pradesh, India",
      actionText: "Open Map",
      copyVal: "Hardoi, Uttar Pradesh, India",
      fieldName: "location",
      isLink: true,
      linkUrl: "https://maps.google.com/?q=Hardoi,UttarPradesh,India"
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 relative bg-surface/10 overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-secondary/5 rounded-full filter blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] bg-primary/5 rounded-full filter blur-[120px] pointer-events-none z-0"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="mt-6 text-textMuted max-w-xl mx-auto font-sans leading-relaxed text-sm md:text-base">
            Have a project in mind, looking to hire, or just want to connect? Hit the form or reach out directly!
          </p>
        </motion.div>

        {/* Dual Column Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between gap-6"
          >
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-2">
                Let's build something <span className="text-primary">extraordinary</span>
              </h3>
              <p className="text-textMuted font-sans leading-relaxed text-sm md:text-base mb-8">
                I am highly responsive to emails and phone inquiries. Feel free to copy my credentials or click through to connect immediately!
              </p>

              <div className="space-y-4">
                {contactDetails.map((detail, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -3 }}
                    className="glass-card p-6 border border-white/5 flex items-center justify-between gap-4 group hover:border-primary/20 hover:shadow-neon-primary transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3.5 bg-white/5 rounded-xl border border-white/10 group-hover:scale-110 transition-transform duration-300">
                        {detail.icon}
                      </div>
                      <div>
                        <span className="text-xs text-textMuted font-bold uppercase tracking-wider block mb-0.5">{detail.title}</span>
                        <span className="text-sm font-semibold text-foreground font-mono leading-none break-all">{detail.value}</span>
                      </div>
                    </div>

                    {detail.isLink ? (
                      <a
                        href={detail.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-2 bg-white/5 hover:bg-white/10 text-xs font-bold text-teal-400 font-mono rounded-lg border border-white/5 hover:border-teal-400/30 transition-all flex items-center gap-1 active:scale-95 shrink-0"
                      >
                        {detail.actionText}
                      </a>
                    ) : (
                      <button
                        onClick={() => copyToClipboard(detail.copyVal, detail.fieldName)}
                        className="px-3.5 py-2 bg-white/5 hover:bg-white/10 text-xs font-bold text-primary font-mono rounded-lg border border-white/5 hover:border-primary/30 transition-all flex items-center gap-1.5 active:scale-95 shrink-0 cursor-pointer"
                      >
                        {copiedField === detail.fieldName ? (
                          <>
                            <FaCheck className="text-green-400" /> Copied
                          </>
                        ) : (
                          <>
                            <FaCopy /> Copy
                          </>
                        )}
                      </button>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Glowing System Stat Status Box */}
            <div className="glass-card p-6 border border-white/5 bg-primary/5 mt-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-30"></div>
              <div className="flex items-center gap-3.5 relative z-10">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <div>
                  <span className="text-xs font-bold font-mono tracking-widest text-secondary block uppercase">Current Availability</span>
                  <p className="text-sm font-semibold text-foreground mt-0.5">Open for Internships & Full-time Roles</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Glassmorphism Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-8 md:p-10 border border-white/5 shadow-2xl relative h-full flex flex-col justify-between">
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 pl-1 uppercase tracking-wider block">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all font-sans placeholder:text-gray-600"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 pl-1 uppercase tracking-wider block">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all font-sans placeholder:text-gray-600"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 pl-1 uppercase tracking-wider block">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all font-sans placeholder:text-gray-600"
                    placeholder="Project Inquiry / Job Offer"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 pl-1 uppercase tracking-wider block">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all font-sans resize-none placeholder:text-gray-600 leading-relaxed"
                    placeholder="Hi Prakhar, let's collaborate on..."
                  ></textarea>
                </div>

                <div className="space-y-4">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-4 bg-gradient-to-r from-primary to-secondary rounded-xl text-white font-bold tracking-wider text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-neon-primary-bright active:scale-[0.98] transition-all duration-300 disabled:opacity-75 disabled:scale-100 cursor-pointer"
                  >
                    {status === 'loading' ? (
                      <span className="animate-pulse flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></span>
                        TRANSMITTING...
                      </span>
                    ) : (
                      <>
                        <FaPaperPlane className="text-xs animate-bounce" /> SEND DISPATCH
                      </>
                    )}
                  </button>

                  <AnimatePresence>
                    {status === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-center"
                      >
                        <p className="text-green-400 font-semibold text-xs md:text-sm font-sans">
                          🎉 Signal Received! Thank you. I will reply shortly.
                        </p>
                      </motion.div>
                    )}

                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-center"
                      >
                        <p className="text-red-400 font-semibold text-xs md:text-sm font-sans">
                          ❌ Network Timeout. Please connect at therockstarop9956@gmail.com.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </form>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;

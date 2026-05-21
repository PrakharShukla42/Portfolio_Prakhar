import { motion } from 'framer-motion';

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "Aug 2024",
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=400&auto=format&fit=crop",
    link: "https://github.com/PrakharShukla42"
  },
  {
    title: "Foundation of Prompt Engineering",
    issuer: "AWS & DeepLearning.AI",
    date: "Dec 2024",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=400&auto=format&fit=crop",
    link: "https://github.com/PrakharShukla42"
  },
  {
    title: "MongoDB Developer Associate",
    issuer: "MongoDB Inc.",
    date: "Feb 2025",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=400&auto=format&fit=crop",
    link: "https://github.com/PrakharShukla42"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-6 bg-surface/30">
      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        {/* Responsive Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="glass-card overflow-hidden border border-white/5 shadow-lg group relative cursor-default"
            >
              <div className="h-44 overflow-hidden relative">
                <div className="absolute inset-0 bg-background/50 group-hover:bg-background/20 transition-colors duration-300 z-10"></div>
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-6 relative z-20">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{cert.title}</h3>
                <div className="flex justify-between items-center text-xs text-textMuted font-medium mb-4">
                  <span>{cert.issuer}</span>
                  <span className="text-secondary font-mono">{cert.date}</span>
                </div>
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block text-xs font-bold text-primary hover:text-secondary hover:underline font-mono"
                >
                  VIEW CREDENTIALS &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

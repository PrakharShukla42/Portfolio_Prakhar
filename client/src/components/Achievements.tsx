import { motion } from 'framer-motion';
import { FaCloud, FaBrain, FaDatabase } from 'react-icons/fa';

const achievements = [
  {
    icon: <FaCloud className="text-4xl text-orange-400" />,
    title: "AWS Cloud Practitioner Essentials",
    description: "Deep knowledge of core AWS global infrastructures, security layers, billing practices, and essential compute, storage, and networking services."
  },
  {
    icon: <FaBrain className="text-4xl text-primary" />,
    title: "Foundation of Prompt Engineering",
    description: "Joint certification by AWS & DeepLearning.AI. Gained expertise in prompt patterns, LLM tokens, temperature tunings, and agent workflows."
  },
  {
    icon: <FaDatabase className="text-4xl text-secondary" />,
    title: "MongoDB Developer Certification",
    description: "Understood document schema design, complex query structures, index keys optimization, and architectural scaling paradigms inside MongoDB clusters."
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 px-6 bg-surface/20">
      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Key <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        {/* Grid cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="glass-card p-8 text-center border border-white/5 hover:border-primary/20 hover:shadow-neon-primary hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex justify-center mb-6 relative z-10">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:scale-110 duration-300 transition-transform shadow-lg">
                  {item.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-4 relative z-10 tracking-tight">{item.title}</h3>
              <p className="text-textMuted text-sm relative z-10 leading-relaxed font-sans">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { label: 'Projects Completed', value: '4+ Major' },
    { label: 'Technologies', value: '25+ Tools' },
    { label: 'Certifications', value: '5+' },
    { label: 'Academic CGPA', value: '7.65' },
  ];

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About</span> Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-12 gap-12 items-center">
          
          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 space-y-6 text-textMuted leading-relaxed font-sans"
          >
            <p className="text-lg text-foreground">
              Hello! I'm <span className="text-primary font-semibold">Prakhar Shukla</span>, a Solutions-oriented Software Engineer and Cloud Specialist passionate about driving technical excellence, optimizing system performance, and delivering robust software solutions.
            </p>
            <p>
              I am currently pursuing my <span className="text-secondary font-medium">Bachelor of Technology in Computer Science & Engineering (IoT focus)</span> at GLA University, Mathura (graduating in 2026, CGPA: 7.65). I serve as the General Secretary for the CSE Club. Over the course of my studies, I have developed a strong foundation in Data Structures, Object-Oriented Programming (OOPS), API integration, and cloud-native architecture.
            </p>
            <p>
              My expertise lies in building highly secure REST APIs (Node.js, Express.js, MongoDB), architecting resilient AWS infrastructure (EC2, ECS, S3, CloudFront), and integrating advanced AI workflows and LLMs into production applications. I also implement modern DevOps CI/CD pipelines using Docker, Kubernetes, and GitHub Actions.
            </p>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-6 text-center border border-white/5 shadow-lg relative overflow-hidden group cursor-default"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-3xl font-extrabold gradient-text mb-2 tracking-tight">{stat.value}</h3>
                <p className="text-xs text-textMuted font-bold uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;

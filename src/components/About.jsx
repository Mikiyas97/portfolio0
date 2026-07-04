import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BrainCircuit, Globe, Monitor, Sparkles } from 'lucide-react';
import pfp from '../assets/pfp.png';

const highlights = [
  {
    icon: <BrainCircuit className="text-accent" size={28} />,
    title: "AI & ML",
    description: "Integrating LLMs, Computer Vision, and generative AI into high-performance production applications."
  },
  {
    icon: <Globe className="text-accent" size={28} />,
    title: "Full-Stack",
    description: "Architecting scalable web ecosystems with React, Django, Node.js, and cloud infrastructure."
  },
  {
    icon: <Monitor className="text-accent" size={28} />,
    title: "Desktop Apps",
    description: "Crafting powerful, native-feeling desktop applications with PyQt6 and intelligent automation."
  }
];

const stats = [
  { value: "10+", label: "Projects Built" },
  { value: "3+", label: "Years Experience" },
  { value: "5+", label: "AI Integrations" },
  { value: "100%", label: "Passion Driven" },
];

const AnimatedStat = ({ value, label, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center"
    >
      <p className="text-3xl md:text-4xl font-heading font-bold text-accent tracking-tight">{value}</p>
      <p className="text-secondary/30 font-body text-[10px] tracking-[0.3em] uppercase mt-2">{label}</p>
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" className="relative py-32 bg-dark overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-12 mb-24"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedStat key={i} {...stat} index={i} />
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Portrait */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/[0.06] group">
              <img 
                src={pfp} 
                alt="Mikiyas Hulualem Portrait" 
                className="w-full h-full object-cover brightness-100 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-80" />
              
              {/* Profile Card */}
              <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/[0.08]">
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles size={16} className="text-accent" />
                  <p className="text-accent font-body text-[10px] tracking-widest uppercase">Creative Software Engineer</p>
                </div>
                <p className="text-secondary font-heading text-xl font-bold">Mikiyas Hulualem</p>
                <p className="text-secondary/40 font-body text-xs mt-2 leading-relaxed">
                  CS Student at Debre Berhan University, specializing in AI and Full-Stack development.
                </p>
              </div>
            </div>
            
            {/* Decorative */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-accent/20 rounded-tl-3xl" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-primary/20 rounded-br-3xl" />
          </motion.div>

          {/* Content */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-secondary/20 font-body text-xs md:text-sm tracking-[0.5em] uppercase mb-4">The Engineer</h2>
              <h3 className="text-4xl md:text-6xl font-heading font-bold text-secondary tracking-tighter leading-[1.1]">
                Bridging the gap between <br />
                <span className="text-accent italic font-light">Intelligence</span> & <span className="text-secondary/30">Design</span>
              </h3>
              <p className="mt-8 text-secondary/60 font-body text-lg leading-relaxed max-w-2xl">
                I am a specialized software engineer dedicated to building the next generation of digital systems. 
                My focus lies in creating seamless integrations between <span className="text-secondary/90 font-semibold">artificial intelligence</span> and <span className="text-secondary/90 font-semibold">premium user interfaces</span>, 
                ensuring that complex technology feels intuitive and cinematic.
              </p>
              <p className="mt-4 text-secondary/40 font-body text-base leading-relaxed max-w-2xl">
                Currently pursuing my Computer Science degree at Debre Berhan University, I combine academic rigor with 
                real-world project experience to deliver solutions that are both technically sound and visually stunning.
              </p>
            </motion.div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-accent/25 transition-all duration-500 group"
                >
                  <div className="mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <h4 className="text-secondary font-heading text-lg font-bold mb-2 tracking-tight">{item.title}</h4>
                  <p className="text-secondary/35 font-body text-xs leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Side Label */}
      <div className="absolute top-1/2 right-0 -rotate-90 origin-right translate-y-1/2 translate-x-20 opacity-[0.03] pointer-events-none select-none hidden xl:block">
        <h2 className="text-9xl font-heading font-black text-secondary tracking-widest uppercase">IDENTITY</h2>
      </div>
    </section>
  );
};

export default About;

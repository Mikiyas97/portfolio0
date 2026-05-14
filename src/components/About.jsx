import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, Monitor, Code2, BrainCircuit, Rocket } from 'lucide-react';
import pfp from '../assets/pfp.png';

const highlights = [
  {
    icon: <BrainCircuit className="text-accent" size={28} />,
    title: "AI Specialist",
    description: "Integrating LLMs and Computer Vision into functional, high-performance applications."
  },
  {
    icon: <Globe className="text-accent" size={28} />,
    title: "Full-Stack Dev",
    description: "Architecting scalable web ecosystems with modern frameworks and robust backends."
  },
  {
    icon: <Monitor className="text-accent" size={28} />,
    title: "Desktop Solutions",
    description: "Crafting powerful, native-feeling desktop applications with intelligent automation."
  }
];

const skills = [
  "React / Next.js", "Python / FastAPI", "Node.js", "Firebase", 
  "PostgreSQL", "Tailwind CSS", "Framer Motion", "OpenCV"
];

const About = () => {
  return (
    <section id="about" className="relative py-32 bg-dark overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Portrait Section (Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 group">
              <img 
                src={pfp} 
                alt="Mikiyas Hulualem Portrait" 
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-80" />
              
              {/* Profile Card Overlay */}
              <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10">
                <p className="text-secondary font-heading text-xl font-bold">Mikiyas Hulualem</p>
                <p className="text-accent font-body text-[10px] tracking-widest uppercase mt-1">Creative Software Engineer</p>
                <div className="flex gap-2 mt-4">
                  {skills.slice(0, 3).map((skill, i) => (
                    <span key={i} className="text-[8px] text-secondary/40 border border-white/10 px-2 py-1 rounded-full uppercase tracking-tighter">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-accent/30 rounded-tl-3xl" />
          </motion.div>

          {/* Content Section (Right) */}
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
                <span className="text-accent italic font-light">Intelligence</span> & <span className="text-secondary/40">Design</span>
              </h3>
              <p className="mt-8 text-secondary/70 font-body text-lg leading-relaxed max-w-2xl">
                I am a specialized software engineer dedicated to building the next generation of digital systems. 
                My focus lies in creating seamless integrations between artificial intelligence and premium user interfaces, 
                ensuring that complex technology feels intuitive and cinematic.
              </p>
            </motion.div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-accent/30 transition-all duration-500 group"
                >
                  <div className="mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <h4 className="text-secondary font-heading text-lg font-bold mb-2 tracking-tight">{item.title}</h4>
                  <p className="text-secondary/40 font-body text-xs leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Skills Preview */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="pt-8 border-t border-white/5"
            >
              <p className="text-secondary/30 font-body text-[10px] tracking-[0.3em] uppercase mb-6 flex items-center gap-4">
                Core Stack <span className="h-[1px] flex-1 bg-white/5" />
              </p>
              <div className="flex flex-wrap gap-x-10 gap-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="group flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/20 group-hover:bg-accent transition-colors duration-300" />
                    <span className="text-secondary/60 group-hover:text-secondary font-body text-sm font-bold tracking-wider transition-colors duration-300">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Side Label */}
      <div className="absolute top-1/2 right-0 -rotate-90 origin-right translate-y-1/2 translate-x-20 opacity-5 pointer-events-none select-none hidden xl:block">
        <h2 className="text-9xl font-heading font-black text-secondary tracking-widest uppercase">IDENTITY</h2>
      </div>
    </section>
  );
};

export default About;

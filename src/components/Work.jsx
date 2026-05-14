import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const projects = [
  {
    title: "Academic Advisor AI",
    category: "Full-Stack • AI Integration",
    description: "A sophisticated GPA Calculator and Academic Advisor that utilizes LLMs to provide personalized academic guidance and performance analytics.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop",
    tech: ["React", "Firebase", "Gemini API", "Tailwind CSS"],
    link: "#",
    github: "#",
    color: "accent"
  },
  {
    title: "NeuroSort AI",
    category: "Desktop App • Automation",
    description: "An intelligent desktop file organizer that uses computer vision and NLP to automatically categorize and sort local files based on content.",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2874&auto=format&fit=crop",
    tech: ["Python", "PyQt6", "OpenCV", "Gemini Pro"],
    link: "#",
    github: "#",
    color: "primary"
  },
  {
    title: "QueryChatBot",
    category: "Web App • NLP",
    description: "A persistent, high-performance academic chatbot with LaTeX support and context-aware memory for university students.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2832&auto=format&fit=crop",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    link: "#",
    github: "#",
    color: "golden"
  },
  {
    title: "Student Management System",
    category: "Enterprise • Database",
    description: "A robust relational system for managing university academic hierarchies, enrollments, and weighted grading systems.",
    image: "https://images.unsplash.com/photo-1454165833767-027ffea7028c?q=80&w=2940&auto=format&fit=crop",
    tech: ["React", "SQLite", "Express", "Material UI"],
    link: "#",
    github: "#",
    color: "accent"
  }
];

const Work = () => {
  return (
    <section id="work" className="relative py-32 bg-dark overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-secondary/20 font-body text-xs md:text-sm tracking-[0.5em] uppercase mb-4">Portfolio</h2>
            <h3 className="text-5xl md:text-7xl font-heading font-bold text-secondary tracking-tighter">
              Selected <span className="text-accent italic font-light">Works</span>
            </h3>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden md:block"
          >
            <p className="text-secondary/40 font-body text-sm max-w-[200px] text-right leading-relaxed">
              Explorations in AI, Full-stack architecture, and premium user experiences.
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index % 2 * 0.2 }}
              className="group"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl mb-8 border border-white/5 bg-dark-soft">
                {/* Project Image */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-6">
                  <a href={project.github} className="p-4 bg-secondary text-dark rounded-full hover:bg-accent hover:text-secondary transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <GithubIcon size={24} />
                  </a>
                  <a href={project.link} className="p-4 bg-secondary text-dark rounded-full hover:bg-accent hover:text-secondary transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75">
                    <ArrowUpRight size={24} />
                  </a>
                </div>
                
                {/* Tech Tags (Always visible or subtle) */}
                <div className="absolute bottom-6 left-6 flex flex-wrap gap-2 pointer-events-none">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-dark/80 backdrop-blur-md text-secondary/70 text-[10px] font-bold tracking-widest uppercase rounded-full border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className={`w-12 h-[1px] bg-${project.color}`} />
                  <span className="text-secondary/40 font-body text-[10px] tracking-[0.3em] uppercase">{project.category}</span>
                </div>
                
                <h4 className="text-3xl font-heading font-bold text-secondary group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h4>
                
                <p className="text-secondary/50 font-body text-sm leading-relaxed max-w-lg">
                  {project.description}
                </p>
                
                <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <a href={project.link} className="inline-flex items-center gap-2 text-secondary font-body text-xs font-bold tracking-widest uppercase hover:text-accent transition-colors">
                    View Case Study <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <button className="px-12 py-5 border border-white/10 rounded-full text-secondary font-body text-sm font-bold tracking-widest uppercase hover:bg-secondary hover:text-dark transition-all duration-500">
            View All Projects
          </button>
        </motion.div>
      </div>

      {/* Background Text Decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 pointer-events-none opacity-[0.02] select-none hidden lg:block">
        <h2 className="text-[20rem] font-heading font-black text-secondary leading-none">WORKS</h2>
      </div>
    </section>
  );
};

export default Work;

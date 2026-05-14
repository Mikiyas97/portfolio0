import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projectList = [
  {
    title: "GPA Calculator",
    description: "An AI-integrated academic management tool that helps students track their performance and receive intelligent advice on improving their GPA.",
    tech: ["React", "Firebase", "Gemini API", "Tailwind"],
    github: "https://github.com/Mikiyas97",
    demo: "#",
    image: null
  },
  {
    title: "QueryChatBot",
    description: "A persistent, high-performance academic chatbot designed to help students with complex university queries and context-aware information.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Node.js"],
    github: "https://github.com/Mikiyas97",
    demo: "#",
    image: null
  },
  {
    title: "Student Management System",
    description: "A robust enterprise-level system for managing university academic relational hierarchies, course enrollments, and weighted grading.",
    tech: ["React", "SQLite", "Express", "Material UI"],
    github: "https://github.com/Mikiyas97",
    demo: "#",
    image: null
  },
  {
    title: "Ethiopian Info Assistant",
    description: "A localized AI assistant specialized in providing accurate information about Ethiopian culture, history, and current affairs using advanced RAG techniques.",
    tech: ["Python", "LangChain", "Gemini", "Streamlit"],
    github: "https://github.com/Mikiyas97",
    demo: "#",
    image: null
  },
  {
    title: "NeuroSort-AI",
    description: "An intelligent desktop file organizer that utilizes AI to automatically categorize and sort local documents based on semantic content and visual patterns.",
    tech: ["PyQt6", "OpenCV", "Gemini Pro", "Python"],
    github: "https://github.com/Mikiyas97",
    demo: "#",
    image: null
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-32 bg-dark overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-secondary/20 font-body text-xs md:text-sm tracking-[0.5em] uppercase mb-4">Portfolio</h2>
            <h3 className="text-5xl md:text-7xl font-heading font-bold text-secondary tracking-tighter leading-none">
              Featured <span className="text-accent italic font-light">Creations</span>
            </h3>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:block text-right"
          >
            <p className="text-secondary/30 font-body text-sm max-w-xs leading-relaxed uppercase tracking-widest italic">
              "Building intelligent systems that feel as good as they function."
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32">
          {projectList.map((project, index) => (
            <ProjectCard 
              key={index} 
              {...project} 
              index={index} 
            />
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-40 text-center"
        >
          <div className="h-[1px] w-full bg-white/5 mb-20" />
          <h4 className="text-secondary/20 font-heading text-4xl md:text-6xl font-bold tracking-tighter mb-10">
            Intrigued by my <span className="text-accent">Process?</span>
          </h4>
          <button className="px-12 py-5 bg-white/[0.03] border border-white/10 rounded-full text-secondary font-body text-sm font-bold tracking-[0.3em] uppercase hover:bg-secondary hover:text-dark transition-all duration-500 hover:scale-105">
            Let's build something together
          </button>
        </motion.div>
      </div>
      
      {/* Background Label */}
      <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none select-none translate-x-1/3 -translate-y-1/4 hidden lg:block">
        <h2 className="text-[30rem] font-heading font-black text-secondary leading-none">WORKS</h2>
      </div>
    </section>
  );
};

export default Projects;

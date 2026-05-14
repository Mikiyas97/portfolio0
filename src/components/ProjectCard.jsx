import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const ProjectCard = ({ title, description, tech, github, demo, image, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative flex flex-col"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.02] mb-8">
        {/* Placeholder Image with Cinematic Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10 opacity-50 group-hover:opacity-30 transition-opacity duration-700" />
        <img 
          src={image || "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop"} 
          alt={title}
          className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-1000"
        />
        
        {/* Hover Overlay Reveal */}
        <div className="absolute inset-0 bg-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center gap-8 backdrop-blur-sm">
          <div className="flex gap-6">
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-secondary text-dark hover:bg-accent hover:text-secondary transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
            >
              <GithubIcon size={24} />
            </a>
            {demo && (
              <a 
                href={demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-secondary text-dark hover:bg-accent hover:text-secondary transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75"
              >
                <ExternalLink size={24} />
              </a>
            )}
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-secondary/60 font-body text-[10px] tracking-[0.4em] uppercase"
          >
            Explore Project
          </motion.div>
        </div>

        {/* Glow Effect on Hover */}
        <div className="absolute -inset-4 bg-accent/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10" />
      </div>

      {/* Project Content */}
      <div className="space-y-4 px-2">
        <div className="flex items-center gap-3">
          <div className="w-8 h-[1px] bg-accent/50" />
          <span className="text-secondary/40 font-body text-[10px] tracking-[0.3em] uppercase">Featured Project</span>
        </div>

        <div className="flex justify-between items-start">
          <h4 className="text-3xl font-heading font-bold text-secondary group-hover:text-accent transition-colors duration-300 tracking-tight">
            {title}
          </h4>
          <ArrowUpRight className="text-secondary/20 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" size={24} />
        </div>

        <p className="text-secondary/50 font-body text-sm leading-relaxed max-w-lg">
          {description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tech.map((t, i) => (
            <span key={i} className="text-[10px] font-body font-bold tracking-widest text-secondary/30 uppercase border border-white/5 px-3 py-1 rounded-full group-hover:border-accent/20 group-hover:text-secondary/50 transition-colors duration-500">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

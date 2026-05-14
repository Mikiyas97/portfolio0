import React from 'react';
import { motion } from 'framer-motion';

const SkillBadge = ({ name, slug, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: delay }}
      whileHover={{ y: -5, scale: 1.05 }}
      className="group relative px-4 py-2.5 rounded-full bg-white/[0.03] border border-white/10 hover:border-accent/40 transition-all duration-300 cursor-default flex items-center gap-3"
    >
      {/* Background Glow on Hover */}
      <div className="absolute inset-0 rounded-full bg-accent/5 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
      
      {/* Skill Logo */}
      <div className="relative z-10 w-4 h-4 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
        <img 
          src={`https://cdn.simpleicons.org/${slug}/F3EBDD`} 
          alt={name}
          className="w-full h-full object-contain opacity-50 group-hover:opacity-100 transition-opacity"
        />
      </div>

      <span className="relative z-10 text-secondary/70 group-hover:text-secondary font-body text-[11px] md:text-xs font-bold tracking-wider transition-colors duration-300">
        {name}
      </span>
      
      {/* Tiny Dot Decor */}
      <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

export default SkillBadge;

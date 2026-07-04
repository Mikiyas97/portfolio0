import React from 'react';
import { motion } from 'framer-motion';

const SkillCategory = ({ title, skills, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] group hover:border-accent/20 transition-all duration-500"
    >
      {/* Background Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative z-10">
        <h4 className="text-xl font-heading font-bold text-secondary mb-6 flex items-center gap-4">
          <span className="w-8 h-[1px] bg-accent/40" />
          {title}
        </h4>
        
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <div 
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 group/item cursor-default"
            >
              {/* Note: In a real implementation, you might want to map these slugs to actual icons using simple-icons or similar */}
              <div className="w-1.5 h-1.5 rounded-full bg-secondary/30 group-hover/item:bg-accent transition-colors duration-300" />
              <span className="text-secondary/70 font-body text-sm group-hover/item:text-secondary transition-colors duration-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCategory;

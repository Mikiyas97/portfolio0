import React from 'react';
import { motion } from 'framer-motion';
import SkillBadge from './SkillBadge';

const SkillCategory = ({ title, skills, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="space-y-8"
    >
      <div className="flex items-center gap-4">
        <h4 className="text-secondary/30 font-body text-[10px] tracking-[0.4em] uppercase whitespace-nowrap">
          {title}
        </h4>
        <div className="h-[1px] w-full bg-white/5" />
      </div>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, i) => (
          <SkillBadge 
            key={i} 
            name={skill.name} 
            slug={skill.slug}
            delay={index * 0.1 + i * 0.05} 
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCategory;

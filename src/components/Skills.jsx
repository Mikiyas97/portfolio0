import React from 'react';
import { motion } from 'framer-motion';
import SkillCategory from './SkillCategory';

const skillData = [
  {
    category: "Frontend",
    skills: [
      { name: "React", slug: "react" },
      { name: "Next.js", slug: "nextdotjs" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
      { name: "Framer Motion", slug: "framer" },
      { name: "TypeScript", slug: "typescript" },
      { name: "HTML5/CSS3", slug: "html5" },
      { name: "Zustand", slug: "react" },
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Django", slug: "django" },
      { name: "Django REST", slug: "django" },
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Express", slug: "express" },
      { name: "Python", slug: "python" },
      { name: "FastAPI", slug: "fastapi" },
    ]
  },
  {
    category: "AI & Machine Learning",
    skills: [
      { name: "Google Gemini", slug: "googlegemini" },
      { name: "OpenAI API", slug: "openai" },
      { name: "LangChain", slug: "langchain" },
      { name: "TensorFlow", slug: "tensorflow" },
      { name: "OpenCV", slug: "opencv" },
      { name: "Hugging Face", slug: "huggingface" },
    ]
  },
  {
    category: "Databases & Cloud",
    skills: [
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "Firebase", slug: "firebase" },
      { name: "Supabase", slug: "supabase" },
      { name: "MongoDB", slug: "mongodb" },
      { name: "SQLite", slug: "sqlite" },
      { name: "Redis", slug: "redis" },
    ]
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git/GitHub", slug: "github" },
      { name: "Docker", slug: "docker" },
      { name: "Vercel", slug: "vercel" },
      { name: "Railway", slug: "railway" },
      { name: "VS Code", slug: "visualstudiocode" },
      { name: "Linux", slug: "linux" },
    ]
  },
  {
    category: "Desktop Development",
    skills: [
      { name: "PyQt6", slug: "qt" },
      { name: "Electron", slug: "electron" },
      { name: "Python Automation", slug: "python" },
      { name: "Desktop UI/UX", slug: "figma" },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-32 bg-dark overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/4 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Header */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="sticky top-32"
            >
              <h2 className="text-secondary/20 font-body text-xs md:text-sm tracking-[0.5em] uppercase mb-4">Expertise</h2>
              <h3 className="text-5xl md:text-7xl font-heading font-bold text-secondary tracking-tighter leading-none mb-8">
                Technical <br />
                <span className="text-accent italic font-light">Arsenal</span>
              </h3>
              <p className="text-secondary/40 font-body text-sm leading-relaxed max-w-sm">
                A curated selection of technologies I use to build intelligent, high-performance digital products. Focused on scalability, speed, and cinematic user experiences.
              </p>
              
              <div className="mt-12 flex items-center gap-4 text-accent/50 font-body text-[10px] tracking-widest uppercase">
                <div className="w-12 h-[1px] bg-accent/25" />
                Continuously Evolving
              </div>

              {/* Quick Stats */}
              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <p className="text-2xl font-heading font-bold text-accent">30+</p>
                  <p className="text-secondary/25 font-body text-[10px] tracking-widest uppercase mt-1">Technologies</p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <p className="text-2xl font-heading font-bold text-accent">6</p>
                  <p className="text-secondary/25 font-body text-[10px] tracking-widest uppercase mt-1">Domains</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Categories */}
          <div className="lg:w-2/3 space-y-16">
            {skillData.map((data, index) => (
              <SkillCategory 
                key={index} 
                title={data.category} 
                skills={data.skills} 
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Background Text */}
      <div className="absolute bottom-10 left-10 opacity-[0.02] pointer-events-none select-none hidden lg:block">
        <h2 className="text-[15rem] font-heading font-black text-secondary leading-none">STK</h2>
      </div>
    </section>
  );
};

export default Skills;

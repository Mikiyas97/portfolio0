import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';

const timelineData = [
  {
    type: "education",
    title: "B.Sc. in Computer Science",
    organization: "Debre Berhan University",
    location: "Debre Berhan, Ethiopia",
    period: "2023 — Present",
    description: "Pursuing a comprehensive Computer Science degree with a focus on Software Engineering, Artificial Intelligence, and System Architecture. Active contributor to university tech projects and peer learning initiatives.",
    highlights: ["Software Engineering", "AI & Machine Learning", "Database Systems", "Data Structures & Algorithms"],
  },
  {
    type: "experience",
    title: "Full-Stack Developer",
    organization: "Freelance & Personal Projects",
    location: "Remote",
    period: "2023 — Present",
    description: "Designing and developing production-grade web applications, AI-integrated platforms, and desktop tools. Focused on React, Django, and modern AI integration for real-world solutions.",
    highlights: ["React / Next.js", "Django REST Framework", "AI Integration (Gemini, LangChain)", "PostgreSQL / Firebase"],
  },
  {
    type: "experience",
    title: "Platform Creator — SkillSwap DBU",
    organization: "University Project",
    location: "Debre Berhan University",
    period: "2025",
    description: "Architected and built a full-stack peer-to-peer educational matching platform using React, Django, and Google Gemini AI. Implemented real-time WebSocket chat, AI-driven skill matching, and secure Supabase authentication.",
    highlights: ["AI-Powered Matching", "Real-Time WebSockets", "Supabase Auth", "Full Deployment"],
  },
  {
    type: "experience",
    title: "Desktop App Developer",
    organization: "Independent Projects",
    location: "Addis Ababa, Ethiopia",
    period: "2024 — Present",
    description: "Building intelligent desktop applications using PyQt6 and Python, integrating computer vision (OpenCV) and generative AI for automated file organization and content analysis.",
    highlights: ["PyQt6 / Python", "OpenCV", "Desktop Automation", "AI Content Analysis"],
  }
];

const TimelineItem = ({ item, index }) => {
  const isEdu = item.type === "education";
  
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative pl-10 md:pl-16 pb-16 last:pb-0 group"
    >
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/[0.06]">
        <div className="absolute top-0 left-0 w-full h-0 group-hover:h-full bg-accent/30 transition-all duration-1000" />
      </div>

      {/* Timeline Dot */}
      <div className={`absolute left-0 top-1 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-500 ${
        isEdu 
          ? 'bg-primary/10 border-primary/30 group-hover:bg-primary/20 group-hover:border-primary/50' 
          : 'bg-accent/10 border-accent/30 group-hover:bg-accent/20 group-hover:border-accent/50'
      }`}>
        {isEdu ? <GraduationCap size={14} className="text-primary" /> : <Briefcase size={14} className="text-accent" />}
      </div>

      {/* Content Card */}
      <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-accent/15 transition-all duration-500 group-hover:bg-white/[0.03]">
        {/* Header */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className={`px-3 py-1 rounded-full text-[10px] font-body font-bold tracking-widest uppercase ${
            isEdu 
              ? 'bg-primary/10 text-primary border border-primary/20' 
              : 'bg-accent/10 text-accent border border-accent/20'
          }`}>
            {isEdu ? 'Education' : 'Experience'}
          </span>
          <div className="flex items-center gap-1.5 text-secondary/30">
            <Calendar size={12} />
            <span className="font-body text-[10px] tracking-wider">{item.period}</span>
          </div>
        </div>

        <h4 className="text-xl md:text-2xl font-heading font-bold text-secondary tracking-tight mb-2 group-hover:text-accent transition-colors duration-300">
          {item.title}
        </h4>
        
        <div className="flex items-center gap-4 mb-4">
          <span className="text-secondary/60 font-body text-sm font-semibold">{item.organization}</span>
          <div className="flex items-center gap-1 text-secondary/25">
            <MapPin size={11} />
            <span className="font-body text-[10px] tracking-wider">{item.location}</span>
          </div>
        </div>

        <p className="text-secondary/40 font-body text-sm leading-relaxed mb-6">
          {item.description}
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2">
          {item.highlights.map((h, i) => (
            <span key={i} className="text-[10px] font-body font-bold tracking-widest text-secondary/25 uppercase border border-white/[0.05] px-3 py-1 rounded-full group-hover:border-accent/15 group-hover:text-secondary/40 transition-colors duration-500">
              {h}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="relative py-32 bg-dark overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/4 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3"
          >
            <h2 className="text-secondary/20 font-body text-xs md:text-sm tracking-[0.5em] uppercase mb-4">Journey</h2>
            <h3 className="text-5xl md:text-7xl font-heading font-bold text-secondary tracking-tighter leading-none mb-8">
              Experience & <br />
              <span className="text-accent italic font-light">Education</span>
            </h3>
            <p className="text-secondary/40 font-body text-sm leading-relaxed max-w-sm">
              A timeline of my professional growth, academic pursuits, and the projects that have shaped my expertise in software engineering and AI.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="lg:w-2/3">
            {timelineData.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Background Text */}
      <div className="absolute bottom-10 left-10 opacity-[0.02] pointer-events-none select-none hidden lg:block">
        <h2 className="text-[12rem] font-heading font-black text-secondary leading-none">PATH</h2>
      </div>
    </section>
  );
};

export default Experience;

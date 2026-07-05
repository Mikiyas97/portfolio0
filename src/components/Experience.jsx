import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar, MapPin, BrainCircuit } from 'lucide-react';

const stackIcons = {
  "React": (
    <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5">
      <circle cx="12" cy="12" r="2.5" fill="#61DAFB" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)" />
    </svg>
  ),
  "Django REST": (
    <svg viewBox="0 0 24 24" fill="#0C4B33" className="w-3.5 h-3.5">
      <path d="M11.146 0h3.924v18.166c-2.013.382-3.49.535-5.1.535-4.791 0-7.288-2.166-7.288-6.32 0-3.955 2.688-6.51 6.86-6.51.637 0 1.121.05 1.604.153V0zm0 9.143a3.894 3.894 0 00-1.28-.178c-2.012 0-3.174 1.222-3.174 3.36 0 2.076 1.1 3.222 3.112 3.222.381 0 .698-.025 1.342-.102V9.143zM21.314 6.06v9.098c0 3.134-.229 4.638-.917 5.937-.637 1.222-1.478 1.996-3.22 2.905l-3.646-1.733c1.74-.856 2.58-1.58 3.13-2.7.573-1.147.78-2.472.78-5.86V6.06h3.873zM17.39.021h3.924v4.026H17.39V.021z" />
    </svg>
  ),
  "PostgreSQL": (
    <svg viewBox="0 0 24 24" fill="#336791" className="w-3.5 h-3.5">
      <path d="M17.128 0a10.134 10.134 0 00-2.755.403l-.063.02A10.922 10.922 0 0012.6.258C11.422.238 10.4.524 9.594 1.01 8.79.69 7.058.25 5.33.352 4.068.426 2.705.86 1.614 2.065c-1.092 1.204-1.678 3.063-1.39 5.666.076.687.589 2.78 1.324 4.883.365 1.05.793 2.098 1.3 2.9.254.402.548.765.9 1.04.35.274.788.455 1.248.384.38-.058.652-.272.874-.498.377-.384.654-.87.993-1.39l.003-.004A5.323 5.323 0 009.2 16.2c.493-.076.95-.216 1.332-.425 0 0 .001 0 0 0a5.003 5.003 0 00-.152 1.089c-.03.584.076 1.2.357 1.703.278.497.73.895 1.39 1.03.605.123 1.12-.004 1.565-.244.443-.24.823-.58 1.17-.96.348-.38.66-.802.927-1.2.176-.262.326-.52.453-.77a7.093 7.093 0 001.186.032c.875-.075 1.853-.363 2.586-.987.08-.067.157-.138.228-.214l.04.053c.244.33.618.677 1.117.798.273.067.56.048.83-.068.27-.116.476-.324.628-.55.303-.452.478-1.022.606-1.626.244-1.15.346-2.506.394-3.404.012-.217.02-.4.025-.554a4.48 4.48 0 001.1-1.694c.343-.92.49-2.066.373-3.457-.225-2.655-1.584-4.366-3.468-5.113A7.042 7.042 0 0017.128 0z" />
    </svg>
  ),
  "AI Integration": (
    <BrainCircuit size={14} className="text-accent" />
  ),
};

const timelineData = [
  {
    type: "education",
    title: "B.Sc. in Software Engineering",
    organization: "Debre Berhan University, Ethiopia",
    location: "Debre Berhan, Ethiopia",
    period: "2023 — Present",
    description: "Pursuing a degree in Software Engineering with a focus on Artificial Intelligence, System Architecture, and modern software development. Actively involved in practical projects and collaborative learning.",
    highlights: ["C++ Programming", "Python Programming", "Data Structures & Algorithms", "Advanced Database", "Object Oriented Programming", "Object Oriented System Design & Analysis", "Computer Organization & Assembly Language", "Software Engineering"],
  },
  {
    type: "experience",
    title: "Full-Stack Developer",
    organization: "Freelance & Personal Projects",
    location: "Remote",
    period: "2023 — Present",
    description: "Building modern web applications and AI-powered tools using React, Django, and related technologies, with a focus on performance, scalability, and clean architecture.",
    highlights: ["React", "Django REST", "PostgreSQL", "AI Integration"],
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
      <div className={`absolute left-0 top-1 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-500 ${isEdu
          ? 'bg-primary/10 border-primary/30 group-hover:bg-primary/20 group-hover:border-primary/50'
          : 'bg-accent/10 border-accent/30 group-hover:bg-accent/20 group-hover:border-accent/50'
        }`}>
        {isEdu ? <GraduationCap size={14} className="text-primary" /> : <Briefcase size={14} className="text-accent" />}
      </div>

      {/* Content Card */}
      <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-accent/15 transition-all duration-500 group-hover:bg-white/[0.03]">
        {/* Header */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className={`px-3 py-1 rounded-full text-[10px] font-body font-bold tracking-widest uppercase ${isEdu
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
          {item.highlights.map((h, i) => {
            const icon = stackIcons[h];
            return (
              <span key={i} className="flex items-center gap-1.5 text-[10px] font-body font-bold tracking-widest text-secondary/25 uppercase border border-white/[0.05] px-3 py-1 rounded-full group-hover:border-accent/15 group-hover:text-secondary/40 transition-colors duration-500">
                {icon && <span className="shrink-0 opacity-70">{icon}</span>}
                {h}
              </span>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="relative py-16 md:py-32 bg-dark overflow-hidden">
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

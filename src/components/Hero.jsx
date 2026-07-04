import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';
import pfp from '../assets/pfp.png';

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const TelegramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

// Animated particles background
const ParticleField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const count = Math.floor(window.innerWidth / 15);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.15 + 0.03,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(243, 235, 221, ${p.opacity})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(196, 107, 54, ${0.03 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    resize();
    createParticles();
    animate();
    window.addEventListener('resize', () => { resize(); createParticles(); });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />;
};

const Hero = () => {
  const scrollToWork = (e) => {
    e.preventDefault();
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-dark">
      {/* Particle Background */}
      <ParticleField />

      {/* Cinematic Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] bg-primary/8 rounded-full blur-[160px]" />
        <div className="absolute bottom-[15%] right-[5%] w-[35vw] h-[35vw] bg-accent/5 rounded-full blur-[140px]" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-violet/3 rounded-full blur-[200px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1 order-2 lg:order-1 text-center lg:text-left">

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald/10 border border-emerald/20 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
              <span className="text-emerald font-body text-xs font-semibold tracking-wider uppercase">Available for work</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-10"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold text-secondary leading-[1.05] tracking-tighter">
                SOFTWARE <br />
                <span className="text-accent italic font-light">ENGINEER</span> <span className="text-secondary/15">•</span> <br />
                AI <span className="relative inline-block">
                  BUILDER
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </span>
              </h1>
              <p className="mt-8 text-secondary/40 font-body text-xs md:text-sm tracking-[0.5em] uppercase">
                FULL-STACK DEVELOPER • SYSTEM ARCHITECT
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6 max-w-xl mx-auto lg:mx-0 mb-12"
            >
              <p className="text-secondary/80 font-body text-lg md:text-xl leading-relaxed">
                Creative Software Engineer building <span className="text-accent font-semibold">AI-powered systems</span>, cinematic interfaces, and modern digital experiences.
              </p>
              <p className="text-secondary/40 font-body text-sm md:text-base leading-relaxed max-w-lg">
                I develop modern web and desktop applications focused on intelligent systems, premium UI/UX, and scalable software engineering solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start"
            >
              <button
                onClick={scrollToWork}
                className="group relative px-10 py-5 bg-secondary text-dark rounded-full font-body font-bold transition-all duration-500 hover:bg-accent hover:text-secondary overflow-hidden shadow-[0_0_30px_rgba(243,235,221,0.08)] hover:shadow-[0_0_50px_rgba(196,107,54,0.25)]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  VIEW PROJECTS <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <a
                href="/Mikiyas_Hulualem_CV.pdf"
                download
                className="flex items-center gap-3 text-secondary/50 hover:text-secondary font-body font-bold transition-all duration-300 group tracking-wider"
              >
                <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
                DOWNLOAD CV
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
              className="flex items-center justify-center lg:justify-start gap-8 mt-16"
            >
              <div className="w-12 h-[1px] bg-white/10 hidden sm:block" />
              <div className="flex gap-6">
                <a href="https://github.com/Mikiyas97" target="_blank" rel="noopener noreferrer" className="text-secondary/25 hover:text-accent transition-all duration-500 hover:-translate-y-1">
                  <GithubIcon size={22} />
                </a>
                <a href="https://linkedin.com/in/mikiyas-hulualem" target="_blank" rel="noopener noreferrer" className="text-secondary/25 hover:text-accent transition-all duration-500 hover:-translate-y-1">
                  <LinkedinIcon size={22} />
                </a>
                <a href="https://t.me/Mikiyas97" target="_blank" rel="noopener noreferrer" className="text-secondary/25 hover:text-accent transition-all duration-500 hover:-translate-y-1">
                  <TelegramIcon size={22} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Image Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 order-1 lg:order-2 w-full lg:w-auto"
          >
            <div className="relative w-full max-w-[460px] aspect-[4/5] mx-auto group">
              {/* Artistic Background Frames */}
              <div className="absolute -inset-6 border border-white/[0.04] rounded-[3rem] rotate-6 group-hover:rotate-3 transition-transform duration-1000" />
              <div className="absolute -inset-6 border border-accent/[0.08] rounded-[3rem] -rotate-3 group-hover:-rotate-1 transition-transform duration-1000" />

              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-white/[0.08] z-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)]">
                <img
                  src={pfp}
                  alt="Mikiyas Hulualem — Software Engineer"
                  className="w-full h-full object-cover brightness-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-70" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.08] rounded-[2.5rem]" />

                {/* Floating Info */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="absolute bottom-8 right-0 left-8 flex items-center gap-4 z-20"
                >
                  <div className="h-[1px] flex-1 bg-white/15" />
                  <div className="text-right">
                    <p className="text-secondary font-heading text-xl font-bold leading-none">Mikiyas Hulualem</p>
                    <p className="text-accent font-body text-[10px] tracking-widest uppercase mt-1">Addis Ababa, Ethiopia</p>
                  </div>
                </motion.div>
              </div>

              {/* Hover Glow */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/15 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-secondary/20" />
        </motion.div>
        <span className="text-secondary/15 font-body text-[9px] tracking-[0.4em] uppercase">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;

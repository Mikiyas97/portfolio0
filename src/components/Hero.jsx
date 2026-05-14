import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
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

const TwitterIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z" />
  </svg>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-40 pb-20 overflow-hidden bg-dark">
      {/* Background Cinematic Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-[35vw] h-[35vw] bg-primary/10 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-[30vw] h-[30vw] bg-accent/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Left Content Area */}
          <div className="flex-1 order-2 lg:order-1 text-center lg:text-left">


            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-10"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold text-secondary leading-[1.05] tracking-tighter">
                SOFTWARE <br />
                <span className="text-accent italic font-light">ENGINEER</span> <span className="text-secondary/20">•</span> <br />
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
              <p className="text-secondary/90 font-body text-lg md:text-xl leading-relaxed italic">
                "Creative Software Engineer building AI-powered systems, cinematic interfaces, and modern digital experiences."
              </p>
              <p className="text-secondary/50 font-body text-sm md:text-base leading-relaxed max-w-lg">
                I develop modern web and desktop applications focused on intelligent systems, premium UI/UX, and scalable software engineering solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-8 justify-center lg:justify-start"
            >
              <button className="group relative px-10 py-5 bg-secondary text-dark rounded-full font-body font-bold transition-all duration-500 hover:bg-accent hover:text-secondary overflow-hidden shadow-[0_0_30px_rgba(243,235,221,0.1)] hover:shadow-[0_0_40px_rgba(196,107,54,0.3)]">
                <span className="relative z-10 flex items-center gap-3">
                  VIEW PROJECTS <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button className="flex items-center gap-3 text-secondary/60 hover:text-secondary font-body font-bold transition-all duration-300 group tracking-wider">
                <Download size={22} className="group-hover:translate-y-1 transition-transform" />
                DOWNLOAD CV
              </button>
            </motion.div>

            {/* Social Connection */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.2 }}
              className="flex items-center justify-center lg:justify-start gap-10 mt-20"
            >
              <div className="w-12 h-[1px] bg-white/10 hidden sm:block" />
              <div className="flex gap-8">
                <a href="https://github.com/Mikiyas97" target="_blank" rel="noopener noreferrer" className="text-secondary/30 hover:text-accent transition-all duration-500 hover:-translate-y-1">
                  <GithubIcon size={22} />
                </a>
                <a href="#" className="text-secondary/30 hover:text-accent transition-all duration-500 hover:-translate-y-1">
                  <LinkedinIcon size={22} />
                </a>
                <a href="#" className="text-secondary/30 hover:text-accent transition-all duration-500 hover:-translate-y-1">
                  <TwitterIcon size={22} />
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
            <div className="relative w-full max-w-[480px] aspect-[4/5] mx-auto group">
              {/* Artistic Background Frames */}
              <div className="absolute -inset-6 border border-white/5 rounded-[3rem] rotate-6 group-hover:rotate-3 transition-transform duration-1000" />
              <div className="absolute -inset-6 border border-accent/10 rounded-[3rem] -rotate-3 group-hover:-rotate-1 transition-transform duration-1000" />

              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-white/10 z-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
                <img
                  src={pfp}
                  alt="Mikiyas Hulualem"
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                />

                {/* Cinematic Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2.5rem]" />

                {/* Floating Meta Data */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="absolute bottom-10 right-0 left-10 flex items-center gap-4 z-20"
                >
                  <div className="h-[1px] flex-1 bg-white/20" />
                  <div className="text-right">
                    <p className="text-secondary font-heading text-xl font-bold leading-none">Mikiyas Hulualem</p>
                    <p className="text-accent font-body text-[10px] tracking-widest uppercase mt-1">Addis Ababa, Ethiopia</p>
                  </div>
                </motion.div>
              </div>

              {/* Aura Glow */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Vertical Scroll Label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-white/20 via-accent/50 to-transparent relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 80] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-accent/80 blur-[2px]"
          />
        </div>
        <span className="text-secondary/20 font-body text-[9px] tracking-[0.4em] uppercase vertical-text">Explore</span>
      </motion.div>
    </section>
  );
};

export default Hero;




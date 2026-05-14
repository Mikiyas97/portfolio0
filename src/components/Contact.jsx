import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, Phone } from 'lucide-react';

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

const Contact = () => {
  return (
    <section id="contact" className="relative py-32 bg-dark overflow-hidden">
      {/* Background Cinematic Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-accent/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Side: Text & Socials */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-secondary/20 font-body text-xs md:text-sm tracking-[0.5em] uppercase mb-4">Contact</h2>
              <h3 className="text-5xl md:text-8xl font-heading font-bold text-secondary tracking-tighter leading-none">
                Let's <span className="text-accent italic font-light">Collaborate</span>
              </h3>
              <p className="mt-8 text-secondary/50 font-body text-lg leading-relaxed max-w-md">
                Have a vision for a project? I'm currently open to selective collaborations and high-impact software engineering roles.
              </p>
            </motion.div>

            {/* Contact Info Pills */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-secondary group-hover:bg-accent group-hover:text-secondary transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-secondary/30 font-body text-[10px] tracking-widest uppercase">Email Me</p>
                  <p className="text-secondary font-body font-bold text-sm tracking-wider">mikiyas@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-secondary group-hover:bg-accent group-hover:text-secondary transition-all duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-secondary/30 font-body text-[10px] tracking-widest uppercase">Location</p>
                  <p className="text-secondary font-body font-bold text-sm tracking-wider">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="pt-12 border-t border-white/5"
            >
              <p className="text-secondary/20 font-body text-[10px] tracking-[0.3em] uppercase mb-8">Find me on</p>
              <div className="flex gap-8">
                <a href="#" className="text-secondary/40 hover:text-accent transition-all duration-500 hover:-translate-y-1">
                  <GithubIcon size={24} />
                </a>
                <a href="#" className="text-secondary/40 hover:text-accent transition-all duration-500 hover:-translate-y-1">
                  <LinkedinIcon size={24} />
                </a>
                <a href="#" className="text-secondary/40 hover:text-accent transition-all duration-500 hover:-translate-y-1">
                  <TwitterIcon size={24} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-sm relative group"
          >
            {/* Glow Decorative */}
            <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />
            
            <form className="space-y-8">
              <div className="space-y-2">
                <label className="text-secondary/30 font-body text-[10px] tracking-widest uppercase px-4">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-secondary font-body text-sm focus:outline-none focus:border-accent/50 focus:bg-white/[0.05] transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <label className="text-secondary/30 font-body text-[10px] tracking-widest uppercase px-4">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-secondary font-body text-sm focus:outline-none focus:border-accent/50 focus:bg-white/[0.05] transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <label className="text-secondary/30 font-body text-[10px] tracking-widest uppercase px-4">Message</label>
                <textarea 
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-secondary font-body text-sm focus:outline-none focus:border-accent/50 focus:bg-white/[0.05] transition-all duration-300 resize-none"
                />
              </div>

              <button className="w-full group relative px-10 py-5 bg-secondary text-dark rounded-full font-body font-bold transition-all duration-500 hover:bg-accent hover:text-secondary overflow-hidden flex items-center justify-center gap-3">
                <span className="relative z-10 flex items-center gap-3">
                  SEND MESSAGE <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

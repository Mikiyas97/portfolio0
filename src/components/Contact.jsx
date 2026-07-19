import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, Phone, CheckCircle, Loader2 } from 'lucide-react';

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

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-16 md:py-32 bg-dark overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-accent/4 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-primary/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left Side */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-secondary/20 font-body text-xs md:text-sm tracking-[0.5em] uppercase mb-4">Contact</h2>
              <h3 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-secondary tracking-tighter leading-none">
                Let's <span className="text-accent italic font-light">Collaborate</span>
              </h3>
              <p className="mt-8 text-secondary/45 font-body text-lg leading-relaxed max-w-md">
                Have a project in mind? I’m open to freelance work, collaborations, and software engineering opportunities where I can build impactful and scalable solutions.
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-5"
            >
              <a href="mailto:mikiyashulualem@gmail.com" className="flex items-center gap-5 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-secondary/60 group-hover:bg-accent group-hover:text-secondary group-hover:border-accent transition-all duration-300">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-secondary/25 font-body text-[10px] tracking-widest uppercase">Email</p>
                  <p className="text-secondary font-body font-semibold text-sm tracking-wider group-hover:text-accent transition-colors duration-300">mikiyashulualem@gmail.com</p>
                </div>
              </a>

              <a href="tel:+251970000789" className="flex items-center gap-5 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-secondary/60 group-hover:bg-accent group-hover:text-secondary group-hover:border-accent transition-all duration-300">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-secondary/25 font-body text-[10px] tracking-widest uppercase">Phone</p>
                  <p className="text-secondary font-body font-semibold text-sm tracking-wider group-hover:text-accent transition-colors duration-300">+251 970000789</p>
                </div>
              </a>
              <a href="https://github.com/Mikiyas97" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-secondary/60 group-hover:bg-accent group-hover:text-secondary group-hover:border-accent transition-all duration-300">
                  <GithubIcon size={18} />
                </div>
                <div>
                  <p className="text-secondary/25 font-body text-[10px] tracking-widest uppercase">GitHub</p>
                  <p className="text-secondary font-body font-semibold text-sm tracking-wider group-hover:text-accent transition-colors duration-300">github.com/Mikiyas97</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/mikiyas97/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-secondary/60 group-hover:bg-primary group-hover:text-secondary group-hover:border-primary transition-all duration-300">
                  <LinkedinIcon size={18} />
                </div>
                <div>
                  <p className="text-secondary/25 font-body text-[10px] tracking-widest uppercase">LinkedIn</p>
                  <p className="text-secondary font-body font-semibold text-sm tracking-wider group-hover:text-primary transition-colors duration-300">linkedin.com/in/mikiyas97</p>
                </div>
              </a>
              <a href="https://t.me/Mikiyas97" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-secondary/60 group-hover:bg-accent group-hover:text-secondary group-hover:border-accent transition-all duration-300">
                  <TelegramIcon size={18} />
                </div>
                <div>
                  <p className="text-secondary/25 font-body text-[10px] tracking-widest uppercase">Telegram</p>
                  <p className="text-secondary font-body font-semibold text-sm tracking-wider group-hover:text-accent transition-colors duration-300">@Mikiyas97</p>
                </div>
              </a>
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-secondary/60 group-hover:bg-primary group-hover:text-secondary group-hover:border-primary transition-all duration-300">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-secondary/25 font-body text-[10px] tracking-widest uppercase">Location</p>
                  <p className="text-secondary font-body font-semibold text-sm tracking-wider">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm relative group"
          >
            {/* Glow */}
            <div className="absolute -inset-1 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />

            <form onSubmit={handleSubmit} className="space-y-7">
              <div className="space-y-2">
                <label htmlFor="contact-name" className="text-secondary/25 font-body text-[10px] tracking-widest uppercase px-4">Full Name</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Mikiyas Hulualem"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl px-6 py-4 text-secondary font-body text-sm placeholder:text-secondary/15 focus:outline-none focus:border-accent/40 focus:bg-white/[0.04] transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-email" className="text-secondary/25 font-body text-[10px] tracking-widest uppercase px-4">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="mikiyashulualem@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl px-6 py-4 text-secondary font-body text-sm placeholder:text-secondary/15 focus:outline-none focus:border-accent/40 focus:bg-white/[0.04] transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-secondary/25 font-body text-[10px] tracking-widest uppercase px-4">Message</label>
                <textarea
                  id="contact-message"
                  rows="5"
                  required
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl px-6 py-4 text-secondary font-body text-sm placeholder:text-secondary/15 focus:outline-none focus:border-accent/40 focus:bg-white/[0.04] transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group relative px-10 py-5 bg-secondary text-dark rounded-full font-body font-bold transition-all duration-500 hover:bg-accent hover:text-secondary overflow-hidden flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_30px_rgba(243,235,221,0.05)]"
              >
                {isSubmitted ? (
                  <span className="flex items-center gap-3 text-emerald-600">
                    <CheckCircle size={18} /> MESSAGE SENT!
                  </span>
                ) : isSubmitting ? (
                  <span className="flex items-center gap-3">
                    <Loader2 size={18} className="animate-spin" /> SENDING...
                  </span>
                ) : (
                  <span className="relative z-10 flex items-center gap-3">
                    SEND MESSAGE <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

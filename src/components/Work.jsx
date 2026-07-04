import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Layers, Star } from 'lucide-react';

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const projects = [
  {
    title: "SkillSwap DBU",
    category: "Full-Stack • AI • Real-Time",
    description: "A peer-to-peer educational matching platform for Debre Berhan University students. Features AI-powered skill matching via Google Gemini, interactive swipe deck interface, real-time chat with WebSockets, and OTP-based authentication — all wrapped in a dark luxury glassmorphism UI.",
    image: "/projects/skillswap.png",
    tech: ["React", "Django", "Gemini AI", "Supabase", "Tailwind", "WebSockets", "Zustand"],
    link: null,
    github: "https://github.com/Mikiyas97/skillSwap",
    featured: true,
    highlights: [
      "AI-Powered Matching Engine with Gemini 2.5",
      "Real-Time Chat via Django Channels",
      "Swipe Deck UI with Framer Motion",
      "Passwordless OTP Authentication"
    ]
  },
  {
    title: "Academic Advisor AI",
    category: "Full-Stack • AI Integration",
    description: "A sophisticated GPA Calculator and Academic Advisor that utilizes Google Gemini to provide personalized academic guidance, performance analytics, and intelligent grade prediction.",
    image: "/projects/gpa-calculator.png",
    tech: ["React", "Firebase", "Gemini API", "Tailwind CSS"],
    link: null,
    github: "https://github.com/Mikiyas97",
    featured: false,
    highlights: []
  },
  {
    title: "QueryChatBot",
    category: "Web App • NLP",
    description: "A persistent, high-performance academic chatbot with LaTeX support, code block rendering, and context-aware memory designed for university students.",
    image: "/projects/querychatbot.png",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    link: null,
    github: "https://github.com/Mikiyas97",
    featured: false,
    highlights: []
  },
  {
    title: "NeuroSort AI",
    category: "Desktop App • Computer Vision",
    description: "An intelligent desktop file organizer that uses computer vision and NLP to automatically categorize and sort local documents based on semantic content and visual patterns.",
    image: "/projects/neurosort.png",
    tech: ["Python", "PyQt6", "OpenCV", "Gemini Pro"],
    link: null,
    github: "https://github.com/Mikiyas97",
    featured: false,
    highlights: []
  },
  {
    title: "Student Management System",
    category: "Enterprise • Database",
    description: "A robust enterprise-level system for managing university academic relational hierarchies, course enrollments, and weighted grading systems.",
    image: "/projects/student-management.png",
    tech: ["React", "SQLite", "Express", "Material UI"],
    link: null,
    github: "https://github.com/Mikiyas97",
    featured: false,
    highlights: []
  },
  {
    title: "Ethiopian Info Assistant",
    category: "AI • RAG • NLP",
    description: "A localized AI assistant specialized in providing accurate information about Ethiopian culture, history, and current affairs using advanced RAG techniques.",
    image: "/projects/ethiopian-assistant.png",
    tech: ["Python", "LangChain", "Gemini", "Streamlit"],
    link: null,
    github: "https://github.com/Mikiyas97",
    featured: false,
    highlights: []
  }
];

// Tech icon map — inline SVGs for all technologies
const techIcons = {
  "React": (
    <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5">
      <circle cx="12" cy="12" r="2.5" fill="#61DAFB"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)"/>
    </svg>
  ),
  "Django": (
    <svg viewBox="0 0 24 24" fill="#0C4B33" className="w-3.5 h-3.5">
      <path d="M11.146 0h3.924v18.166c-2.013.382-3.49.535-5.1.535-4.791 0-7.288-2.166-7.288-6.32 0-3.955 2.688-6.51 6.86-6.51.637 0 1.121.05 1.604.153V0zm0 9.143a3.894 3.894 0 00-1.28-.178c-2.012 0-3.174 1.222-3.174 3.36 0 2.076 1.1 3.222 3.112 3.222.381 0 .698-.025 1.342-.102V9.143zM21.314 6.06v9.098c0 3.134-.229 4.638-.917 5.937-.637 1.222-1.478 1.996-3.22 2.905l-3.646-1.733c1.74-.856 2.58-1.58 3.13-2.7.573-1.147.78-2.472.78-5.86V6.06h3.873zM17.39.021h3.924v4.026H17.39V.021z"/>
    </svg>
  ),
  "Gemini AI": (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
      <defs><linearGradient id="gemini1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#4285F4"/><stop offset="50%" stopColor="#9B72CB"/><stop offset="100%" stopColor="#D96570"/></linearGradient></defs>
      <path d="M12 2C12 2 8 8 2 12c6 4 10 10 10 10s4-6 10-10c-6-4-10-10-10-10z" fill="url(#gemini1)"/>
    </svg>
  ),
  "Gemini API": (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
      <defs><linearGradient id="gemini2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#4285F4"/><stop offset="50%" stopColor="#9B72CB"/><stop offset="100%" stopColor="#D96570"/></linearGradient></defs>
      <path d="M12 2C12 2 8 8 2 12c6 4 10 10 10 10s4-6 10-10c-6-4-10-10-10-10z" fill="url(#gemini2)"/>
    </svg>
  ),
  "Gemini Pro": (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
      <defs><linearGradient id="gemini3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#4285F4"/><stop offset="50%" stopColor="#9B72CB"/><stop offset="100%" stopColor="#D96570"/></linearGradient></defs>
      <path d="M12 2C12 2 8 8 2 12c6 4 10 10 10 10s4-6 10-10c-6-4-10-10-10-10z" fill="url(#gemini3)"/>
    </svg>
  ),
  "Gemini": (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
      <defs><linearGradient id="gemini4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#4285F4"/><stop offset="50%" stopColor="#9B72CB"/><stop offset="100%" stopColor="#D96570"/></linearGradient></defs>
      <path d="M12 2C12 2 8 8 2 12c6 4 10 10 10 10s4-6 10-10c-6-4-10-10-10-10z" fill="url(#gemini4)"/>
    </svg>
  ),
  "Supabase": (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
      <defs><linearGradient id="supa" x1="20.86%" y1="0%" x2="63.35%" y2="100%"><stop offset="0%" stopColor="#249361"/><stop offset="100%" stopColor="#3ECF8E"/></linearGradient></defs>
      <path d="M13.5 21.87c-.46.6-1.41.27-1.42-.5l-.16-7.37h7.67c1.17 0 1.82 1.35 1.08 2.24L13.5 21.87z" fill="url(#supa)"/>
      <path d="M10.5 2.13c.46-.6 1.41-.27 1.42.5l.16 7.37H4.41c-1.17 0-1.82-1.35-1.08-2.24L10.5 2.13z" fill="#3ECF8E" opacity=".7"/>
    </svg>
  ),
  "Tailwind": (
    <svg viewBox="0 0 24 24" fill="#06B6D4" className="w-3.5 h-3.5">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
    </svg>
  ),
  "Tailwind CSS": (
    <svg viewBox="0 0 24 24" fill="#06B6D4" className="w-3.5 h-3.5">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
    </svg>
  ),
  "WebSockets": (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
      <path d="M6.848 16.136L3.276 12.564 6.848 8.992l1.416 1.416-2.156 2.156 2.156 2.156-1.416 1.416zm10.304 0l-1.416-1.416 2.156-2.156-2.156-2.156 1.416-1.416 3.572 3.572-3.572 3.572z" fill="#F7DF1E"/>
      <path d="M10.5 18l-1.5-.5 4.5-12 1.5.5-4.5 12z" fill="#F7DF1E"/>
    </svg>
  ),
  "Zustand": (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
      <circle cx="12" cy="12" r="10" fill="#453F39"/>
      <circle cx="9" cy="10" r="1.5" fill="#F5D6A8"/>
      <circle cx="15" cy="10" r="1.5" fill="#F5D6A8"/>
      <path d="M8.5 14.5c0 0 1.5 2 3.5 2s3.5-2 3.5-2" stroke="#F5D6A8" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
    </svg>
  ),
  "Firebase": (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
      <path d="M3.89 15.673L6.255 1.618a.359.359 0 01.676-.116l2.533 4.73-1.014 1.903L3.89 15.673z" fill="#FFA000"/>
      <path d="M12.658 8.757L10.78 5.084 3.89 15.673l8.768-6.916z" fill="#F57C00"/>
      <path d="M17.297 3.889a.359.359 0 01.61.245l2.204 17.489-6.766 3.953a1.088 1.088 0 01-1.082.017L3.89 15.673l13.407-11.784z" fill="#FFCA28"/>
      <path d="M12.658 8.757l4.64-4.868a.359.359 0 01.61.245l2.204 17.489-6.766 3.953a1.088 1.088 0 01-1.082.017L3.89 15.673l8.768-6.916z" fill="#FFA000" opacity=".5"/>
    </svg>
  ),
  "Next.js": (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
      <circle cx="12" cy="12" r="11" fill="white"/>
      <path d="M9.5 8v8l7-8H9.5z" fill="black"/>
      <rect x="15" y="8" width="1.5" height="8" fill="black"/>
    </svg>
  ),
  "TypeScript": (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
      <rect width="24" height="24" rx="3" fill="#3178C6"/>
      <path d="M5.5 12.5h7v1.5h-2.6v6h-1.8v-6H5.5v-1.5zm7.8 0H15v1.3h1.8c.7 0 1.2.5 1.2 1.2v3c0 .7-.5 1.2-1.2 1.2h-2.3v-1.3h2v-2.7h-1.8c-.7 0-1.2-.5-1.2-1.2v-.3c0-.7.5-1.2 1.2-1.2h.6z" fill="white"/>
    </svg>
  ),
  "Node.js": (
    <svg viewBox="0 0 24 24" fill="#539E43" className="w-3.5 h-3.5">
      <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339a.29.29 0 00.272 0l8.795-5.076a.277.277 0 00.134-.238V6.921a.283.283 0 00-.137-.242l-8.791-5.072a.278.278 0 00-.271 0L3.075 6.68a.284.284 0 00-.139.241v10.15a.27.27 0 00.138.236l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675A1.857 1.857 0 011.152 17.07V6.921c0-.681.366-1.317.963-1.655L10.91.188a1.929 1.929 0 011.846 0l8.794 5.078c.598.339.965.975.965 1.655v10.15c0 .68-.367 1.316-.965 1.654l-8.794 5.078a1.86 1.86 0 01-.758.197z"/>
    </svg>
  ),
  "PostgreSQL": (
    <svg viewBox="0 0 24 24" fill="#336791" className="w-3.5 h-3.5">
      <path d="M17.128 0a10.134 10.134 0 00-2.755.403l-.063.02A10.922 10.922 0 0012.6.258C11.422.238 10.4.524 9.594 1.01 8.79.69 7.058.25 5.33.352 4.068.426 2.705.86 1.614 2.065c-1.092 1.204-1.678 3.063-1.39 5.666.076.687.589 2.78 1.324 4.883.365 1.05.793 2.098 1.3 2.9.254.402.548.765.9 1.04.35.274.788.455 1.248.384.38-.058.652-.272.874-.498.377-.384.654-.87.993-1.39l.003-.004A5.323 5.323 0 009.2 16.2c.493-.076.95-.216 1.332-.425 0 0 .001 0 0 0a5.003 5.003 0 00-.152 1.089c-.03.584.076 1.2.357 1.703.278.497.73.895 1.39 1.03.605.123 1.12-.004 1.565-.244.443-.24.823-.58 1.17-.96.348-.38.66-.802.927-1.2.176-.262.326-.52.453-.77a7.093 7.093 0 001.186.032c.875-.075 1.853-.363 2.586-.987.08-.067.157-.138.228-.214l.04.053c.244.33.618.677 1.117.798.273.067.56.048.83-.068.27-.116.476-.324.628-.55.303-.452.478-1.022.606-1.626.244-1.15.346-2.506.394-3.404.012-.217.02-.4.025-.554a4.48 4.48 0 001.1-1.694c.343-.92.49-2.066.373-3.457-.225-2.655-1.584-4.366-3.468-5.113A7.042 7.042 0 0017.128 0z"/>
    </svg>
  ),
  "Python": (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
      <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.03v-2.867s-.109-3.403 3.35-3.403h5.766s3.24.052 3.24-3.134V3.545S18.29 0 11.914 0zM8.708 2.048a1.042 1.042 0 110 2.084 1.042 1.042 0 010-2.084z" fill="#3776AB"/>
      <path d="M12.087 24c6.093 0 5.713-2.656 5.713-2.656l-.007-2.752h-5.814v-.826H20.1S24 18.211 24 12.031c0-6.18-3.403-5.96-3.403-5.96h-2.03v2.867s.109 3.403-3.35 3.403H9.45s-3.24-.052-3.24 3.134v4.98S5.71 24 12.087 24zm3.206-2.048a1.042 1.042 0 110-2.084 1.042 1.042 0 010 2.084z" fill="#FFD43B"/>
    </svg>
  ),
  "PyQt6": (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
      <rect width="24" height="24" rx="4" fill="#41CD52"/>
      <path d="M6 6h5v5H6V6zm7 0h5v5h-5V6zM6 13h5v5H6v-5zm8.5 1.5l3.5 3.5m0-3.5l-3.5 3.5" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
    </svg>
  ),
  "OpenCV": (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
      <circle cx="7" cy="16" r="4" fill="#FF0000" opacity="0.85"/>
      <circle cx="17" cy="16" r="4" fill="#00AA00" opacity="0.85"/>
      <circle cx="12" cy="8" r="4" fill="#0000FF" opacity="0.85"/>
    </svg>
  ),
  "SQLite": (
    <svg viewBox="0 0 24 24" fill="#003B57" className="w-3.5 h-3.5">
      <path d="M21.86 2.14a4.3 4.3 0 00-3.1-1.27 5.3 5.3 0 00-3.68 1.65l-.1.12C13.62 4.1 7.32 12.21 5.27 19.95c-.2.75-.35 1.47-.44 2.13l-.04.3c-.03.3-.04.56-.03.78.02.5.14.85.39 1.07.23.2.47.27.7.27.51 0 1.07-.33 1.61-.73l.16-.12c.8-.62 1.67-1.43 2.48-2.3a37 37 0 003.98-5.08l.02-.03c.27-.42.42-.9.42-1.39 0-.82-.39-1.6-1.05-2.1a2.82 2.82 0 00-1.7-.57c-.36 0-.72.07-1.06.2l-.02.01c1.35-2.33 3.06-4.88 4.38-6.35l.04-.05a3.6 3.6 0 012.5-1.17c.75 0 1.46.33 2.05.96.57.6.93 1.43 1.01 2.34.1 1.04-.14 2.15-.7 3.3-1.1 2.27-3.3 4.42-5.02 5.55l-.06.04c-.17.1-.28.3-.28.5 0 .33.27.6.6.6.11 0 .22-.03.32-.1 1.88-1.2 4.28-3.55 5.49-6.04.66-1.35.94-2.68.82-3.94-.1-1.15-.57-2.2-1.3-2.97z"/>
    </svg>
  ),
  "Express": (
    <svg viewBox="0 0 24 24" fill="#FFFFFF" className="w-3.5 h-3.5">
      <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.511 4.86 3.556-4.86a1.466 1.466 0 011.802-.708L14.9 11.95l5.1 6.638zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.868 1.21-.65a3.377 3.377 0 01-2.004 3.2c-3.63 1.677-7.584-.136-8.58-3.72a9.04 9.04 0 01-.244-1.228c-.048-.267-.14-.4-.436-.39L.002 11.576zm1.145-.376h10.765c-.047-3.138-2.064-5.27-4.952-5.283C3.56 5.904 1.446 7.91 1.147 11.2z"/>
    </svg>
  ),
  "Material UI": (
    <svg viewBox="0 0 24 24" fill="#007FFF" className="w-3.5 h-3.5">
      <path d="M0 2.475v10.39l3 1.74V7.67l6 3.48 6-3.48v3.456l-6 3.48-3 1.74 3 1.74 9-5.22V2.475l-9 5.22-9-5.22z"/>
      <path d="M24 2.475l-9 5.22v3.48l6-3.48v6.93l-3 1.74v-3.48l-6 3.48v3.456l9-5.22V2.475z"/>
    </svg>
  ),
  "LangChain": (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
      <path d="M12 2L4 6.5v11L12 22l8-4.5v-11L12 2z" fill="none" stroke="#1C3C3C" strokeWidth="1.5"/>
      <circle cx="12" cy="8" r="2" fill="#1C3C3C"/>
      <circle cx="8" cy="14" r="2" fill="#1C3C3C"/>
      <circle cx="16" cy="14" r="2" fill="#1C3C3C"/>
      <line x1="12" y1="10" x2="8" y2="12" stroke="#1C3C3C" strokeWidth="1"/>
      <line x1="12" y1="10" x2="16" y2="12" stroke="#1C3C3C" strokeWidth="1"/>
      <line x1="8" y1="14" x2="16" y2="14" stroke="#1C3C3C" strokeWidth="1"/>
    </svg>
  ),
  "Streamlit": (
    <svg viewBox="0 0 24 24" fill="#FF4B4B" className="w-3.5 h-3.5">
      <path d="M12 2L2 19.5h20L12 2zm0 5l6 10.5H6L12 7z"/>
    </svg>
  ),
};

const TechPill = ({ name }) => {
  const icon = techIcons[name];
  return (
    <span className="inline-flex items-center gap-1.5 text-[10px] font-body font-bold tracking-widest text-secondary/25 uppercase border border-white/[0.05] px-3 py-1.5 rounded-full group-hover:border-accent/15 group-hover:text-secondary/40 transition-colors duration-500">
      {icon && <span className="shrink-0">{icon}</span>}
      {name}
    </span>
  );
};



const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    className="group relative flex flex-col"
  >
    {/* Image */}
    <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-white/[0.05] bg-dark-card mb-8">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover brightness-100 group-hover:scale-110 transition-all duration-1000"
      />

      {/* Glow */}
      <div className="absolute -inset-4 bg-accent/15 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10" />
    </div>

    {/* Action Buttons — always visible */}
    <div className="flex gap-3 mb-6 px-2">
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-dark font-body text-xs font-bold tracking-wider uppercase hover:bg-accent/80 transition-all duration-300 hover:scale-105"
        >
          <ExternalLink size={14} />
          Live Demo
        </a>
      )}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.06] border border-white/[0.1] text-secondary/70 font-body text-xs font-bold tracking-wider uppercase hover:bg-white/[0.12] hover:text-secondary transition-all duration-300 hover:scale-105"
        >
          <GithubIcon size={14} />
          GitHub
        </a>
      )}
    </div>

    {/* Content */}
    <div className="space-y-4 px-2">
      <div className="flex items-center gap-3">
        <div className="w-8 h-[1px] bg-accent/40" />
        <span className="text-secondary/30 font-body text-[10px] tracking-[0.3em] uppercase">{project.category}</span>
      </div>

      <div className="flex justify-between items-start">
        <h4 className="text-2xl md:text-3xl font-heading font-bold text-secondary group-hover:text-accent transition-colors duration-300 tracking-tight">
          {project.title}
        </h4>
        <ArrowUpRight className="text-secondary/15 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0 ml-4" size={22} />
      </div>

      <p className="text-secondary/45 font-body text-sm leading-relaxed">
        {project.description}
      </p>

      {/* Tech Pills */}
      <div className="flex flex-wrap gap-2 pt-2">
        {project.tech.map((t, i) => (
          <TechPill key={i} name={t} />
        ))}
      </div>
    </div>
  </motion.div>
);

const Work = () => {

  const regularProjects = projects

  return (
    <section id="work" className="relative py-32 bg-dark overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-primary/4 rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-secondary/20 font-body text-xs md:text-sm tracking-[0.5em] uppercase mb-4">Portfolio</h2>
            <h3 className="text-5xl md:text-7xl font-heading font-bold text-secondary tracking-tighter leading-none">
              Selected <span className="text-accent italic font-light">Works</span>
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:block text-right"
          >
            <p className="text-secondary/25 font-body text-sm max-w-xs leading-relaxed italic">
              "Building intelligent systems that feel as good as they function."
            </p>
          </motion.div>
        </div>

        {/* Regular Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {regularProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 text-center"
        >
          <div className="section-divider mb-20" />
          <h4 className="text-secondary/15 font-heading text-4xl md:text-6xl font-bold tracking-tighter mb-10">
            Intrigued by my <span className="text-accent/40">Process?</span>
          </h4>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex px-12 py-5 bg-white/[0.03] border border-white/[0.08] rounded-full text-secondary font-body text-sm font-bold tracking-[0.3em] uppercase hover:bg-secondary hover:text-dark transition-all duration-500 hover:scale-105"
          >
            Let's build something together
          </a>
        </motion.div>
      </div>

      {/* Background Label */}
      <div className="absolute top-0 right-0 opacity-[0.02] pointer-events-none select-none translate-x-1/3 -translate-y-1/4 hidden lg:block">
        <h2 className="text-[30rem] font-heading font-black text-secondary leading-none">WORKS</h2>
      </div>
    </section>
  );
};

export default Work;

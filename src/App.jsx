import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <main className="relative bg-dark selection:bg-accent selection:text-white">
      {/* Background Noise/Grain Overlay */}
      <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.03] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)"/>
        </svg>
      </div>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      {/* Final Footer */}
      <footer className="py-12 bg-dark flex flex-col items-center justify-center border-t border-white/5 gap-4">
        <p className="text-secondary/10 font-body text-[9px] tracking-[0.8em] uppercase">Built with precision by Mikiyas Hulualem</p>
      </footer>
    </main>
  )
}

export default App

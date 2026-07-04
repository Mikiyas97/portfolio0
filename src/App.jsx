import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Work from './components/Work'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <main className="relative bg-dark selection:bg-accent selection:text-white">
      {/* Background Noise/Grain Overlay */}
      <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.02] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)"/>
        </svg>
      </div>

      <Navbar />
      <Hero />
      
      {/* Section Divider */}
      <div className="section-divider" />
      
      <About />
      
      <div className="section-divider" />
      
      <Skills />
      
      <div className="section-divider" />
      
      <Work />
      
      <div className="section-divider" />
      
      <Experience />
      
      <div className="section-divider" />
      
      <Contact />
      <Footer />
    </main>
  )
}

export default App

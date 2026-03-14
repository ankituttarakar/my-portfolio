import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications'; // Import added
import Contact from './components/Contact';

const SectionWrapper = ({ children, id }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {children}
  </motion.section>
);

function App() {
  return (
    <div className="bg-[#030712] text-white min-h-screen relative overflow-x-hidden">
      {/* 1. Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div 
          animate={{ x: [0, 80, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ x: [0, -80, 0], y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full"
        />
      </div>

      {/* Global Noise Texture Overlay */}
      <div className="fixed inset-0 bg-noise opacity-[0.02] pointer-events-none z-[9999]" />
      
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 space-y-40 pb-20">
        <Hero />
        
        <SectionWrapper id="skills">
          <Skills />
        </SectionWrapper>

        <SectionWrapper id="projects">
          <Projects />
        </SectionWrapper>

        <SectionWrapper id="experience">
          <Experience />
        </SectionWrapper>

        {/* Certifications Section Added */}
        <SectionWrapper id="certifications">
          <Certifications />
        </SectionWrapper>

        <SectionWrapper id="contact">
          <Contact />
        </SectionWrapper>
      </main>

      <footer className="py-10 text-center border-t border-white/5 text-gray-600 text-sm">
        <p>© 2026 Ankit Uttarakar. Crafted with Precision.</p>
      </footer>
    </div>
  );
}

export default App;
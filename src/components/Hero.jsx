import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="home" className="pt-40 flex flex-col md:flex-row items-center justify-between gap-12 min-h-[90vh]">
      <div className="flex-1 space-y-6">
        {/* Top Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1 rounded-md bg-blue-500/10 text-blue-400 text-xs font-bold border border-blue-500/20 uppercase tracking-widest"
        >
          Welcome to my portfolio
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          Hi, I'm <span className="text-blue-500">Ankit Uttarakar</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl font-medium"
        >
          Full Stack Web Developer | UI/UX Enthusiast | Tech Innovator | Open Source Contributor
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-500 max-w-xl leading-relaxed"
        >
          I build fast, modern, and visually engaging web applications with a focus on clean design, performance, and user experience.
        </motion.p>
        
        {/* Navigation Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex gap-4 pt-4"
        >
          <a 
            href="#projects" 
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-bold transition-all shadow-lg shadow-blue-600/20 text-center"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="border border-white/10 hover:bg-white/5 px-8 py-3 rounded-lg font-bold transition-all text-center"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex gap-6 pt-8 text-gray-500"
        >
          <a href="https://github.com/ankituttarakar" target="_blank" rel="noreferrer"><Github className="hover:text-white cursor-pointer transition-colors" size={22} /></a>
          <a href="https://linkedin.com/in/ankituttarakar" target="_blank" rel="noreferrer"><Linkedin className="hover:text-white cursor-pointer transition-colors" size={22} /></a>
          <a href="mailto:ankit.uttarakar@gmail.com" target="_blank" rel="noreferrer"><Mail className="hover:text-white cursor-pointer transition-colors" size={22} /></a>
        </motion.div>
      </div>
      
      {/* Profile Image with Fade-In Effect */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative group"
      >
        <div className="w-64 h-64 md:w-85 md:h-85 rounded-3xl overflow-hidden border-8 border-white/5 relative z-10 bg-white/5">
          
          {/* Loading Spinner */}
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
            </div>
          )}

          <motion.img 
            src="/profile.jpg" 
            alt="Ankit Uttarakar" 
            onLoad={() => setImageLoaded(true)}
            initial={{ opacity: 0 }}
            animate={{ opacity: imageLoaded ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
          />
        </div>

        {/* Status Badge */}
        <div className="absolute -bottom-4 -right-4 z-20 bg-blue-600 px-5 py-2 rounded-xl font-bold text-sm shadow-xl flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          Available for Work
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
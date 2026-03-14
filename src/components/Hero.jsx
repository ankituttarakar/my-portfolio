import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-40 flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="flex-1 space-y-6">
        <div className="inline-block px-4 py-1 rounded-md bg-blue-500/10 text-blue-400 text-xs font-bold border border-blue-500/20 uppercase tracking-widest">
          Welcome to my portfolio
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Hi, I'm <span className="text-blue-500">Ankit Uttarakar</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl font-medium">
          Full Stack Web Developer | UI/UX Enthusiast | Tech Innovator | Open Source Contributor
        </p>
        <p className="text-gray-500 max-w-xl leading-relaxed">
          I build fast, modern, and visually engaging web applications with a focus on clean design, performance, and user experience.
        </p>
        
        {/* Buttons converted to Link tags */}
        <div className="flex gap-4 pt-4">
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
        </div>

        <div className="flex gap-6 pt-8 text-gray-500">
          <a href="https://github.com/ankituttarakar" target="_blank" rel="noreferrer"><Github className="hover:text-white cursor-pointer transition-colors" size={22} /></a>
          <a href="https://linkedin.com/in/ankituttarakar" target="_blank" rel="noreferrer"><Linkedin className="hover:text-white cursor-pointer transition-colors" size={22} /></a>
          <a href="https://twitter.com/ankituttarakar" target="_blank" rel="noreferrer"><Twitter className="hover:text-white cursor-pointer transition-colors" size={22} /></a>
          <a href="mailto:ankituttarakar@gmail.com" target="_blank" rel="noreferrer"><Mail className="hover:text-white cursor-pointer transition-colors" size={22} /></a>
        </div>
      </div>
      
      <div className="relative group">
        <div className="w-64 h-64 md:w-85 md:h-85 rounded-3xl overflow-hidden border-8 border-white/5 relative z-10">
          <img src="/profile.jpg" alt="Ankit" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
        </div>
        <div className="absolute -bottom-4 -right-4 z-20 bg-blue-600 px-5 py-2 rounded-xl font-bold text-sm shadow-xl flex items-center gap-2">
          {/* Added a small pulsing dot for extra polish */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          Available for Work
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Shield, Activity, Brain, LineChart } from 'lucide-react';

const projects = [
  {
    title: "AI Infrastructure Monitor",
    description: "AWS-native serverless monitoring system using Kinesis Video Streams and AI-powered threat detection via Bedrock.",
    tech: ["AWS CDK", "Lambda", "Bedrock AI", "Kinesis", "S3"],
    icon: <Server className="text-blue-500" />,
    github: "https://github.com/ankituttarakar/ai-infrastructure-monitoring-system",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Telemetry",
    description: "High-performance real-time data monitoring and visualization system for tracking system metrics and performance.",
    tech: ["React", "Node.js", "WebSockets", "D3.js"],
    icon: <Activity className="text-blue-500" />,
    github: "https://github.com/ankituttarakar",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Secure Remote Command",
    description: "An encrypted communication protocol designed for executing remote system commands safely with advanced authentication.",
    tech: ["Python", "Cryptography", "Network Security"],
    icon: <Shield className="text-blue-500" />,
    github: "https://github.com/ankituttarakar",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "BiasShield-AI",
    description: "An AI-driven framework focused on detecting and mitigating algorithmic bias in machine learning models.",
    tech: ["Python", "TensorFlow", "NLP", "Scikit-Learn"],
    icon: <Brain className="text-blue-500" />,
    github: "https://github.com/ankituttarakar",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Gold Price Predictor",
    description: "Advanced financial forecasting tool utilizing Random Forest Regressors to analyze and predict gold market trends.",
    tech: ["Python", "Pandas", "Random Forest", "Matplotlib"],
    icon: <LineChart className="text-blue-500" />,
    github: "https://github.com/ankituttarakar",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl">
            A curated selection of my work in full-stack development, security, and machine learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-[#0B0F1A] border border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-500"
            >
              <div className="h-60 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/20 to-transparent" />
                
                <div className="absolute top-6 left-6 p-3 bg-black/60 backdrop-blur-md rounded-xl border border-white/10">
                  {project.icon}
                </div>
              </div>

              <div className="p-8 space-y-4">
                <div className="flex justify-between items-center text-white">
                  <h3 className="text-2xl font-bold tracking-tight group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                </div>

                <p className="text-gray-400 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tech.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-blue-500/5 border border-blue-500/10 text-blue-400/80 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
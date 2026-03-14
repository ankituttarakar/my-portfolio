import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Zap, Globe } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Building ML Models with Azure",
      org: "Microsoft Learn Student Ambassadors",
      date: "Dec 2025",
      skills: "Custom Vision, ML",
      icon: <Zap className="text-blue-500" />
    },
    {
      title: "Certificate Of Appreciation",
      org: "IEEE PESU ECC Student Branch",
      date: "Feb 2026",
      skills: "Logistics & Event Management",
      icon: <Award className="text-indigo-500" />
    },
    {
      title: "Green Glitch 2.0 Ideathon",
      org: "Gron IT PES",
      date: "Aug 2025",
      skills: "Green Cloud Computing",
      icon: <Globe className="text-green-500" />
    },
    {
      title: "Programming Using Python",
      org: "HackerRank",
      date: "Dec 2024",
      skills: "Python Development",
      icon: <ShieldCheck className="text-purple-500" />
    },
    {
      title: "Certificate Of Appreciation",
      org: "Shunya",
      date: "Dec 2025",
      skills: "Operations & Hospitality",
      icon: <Award className="text-pink-500" />
    },
    {
      title: "Ignition 1.0 Participation",
      org: "Team Vegavath PESU",
      date: "Nov 2025",
      skills: "IoT & Robotics",
      icon: <Zap className="text-orange-500" />
    }
  ];

  return (
    <div className="text-center">
      <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">
        Certifications & <span className="text-blue-500">Recognition</span>
      </h2>
      <p className="text-gray-500 mb-16 uppercase tracking-widest text-[10px] font-bold">
        Validated expertise across Engineering and Leadership
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5, borderColor: "rgba(59, 130, 246, 0.5)" }}
            className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 text-left relative overflow-hidden group transition-colors"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-white/5 rounded-2xl">
                {cert.icon}
              </div>
              <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">
                {cert.date}
              </span>
            </div>
            
            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
              {cert.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4 font-medium">{cert.org}</p>
            
            <div className="pt-4 border-t border-white/5">
              <span className="text-[9px] font-black uppercase tracking-tighter text-blue-500/80">
                Skills: {cert.skills}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
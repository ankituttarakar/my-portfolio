import React from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ name, level }) => (
  <div className="space-y-3">
    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-gray-500">
      <span>{name}</span>
      <span className="text-blue-500">{level}%</span>
    </div>
    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "circOut", delay: 0.2 }}
        className="h-full bg-blue-600 rounded-full" 
      />
    </div>
  </div>
);

const Skills = () => {
  return (
    <div className="text-center">
      <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">Technical Arsenal</h2>
      <p className="text-gray-500 mb-20 uppercase tracking-widest text-xs font-bold">Comprehensive expertise in modern engineering</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
        <motion.div 
          whileHover={{ borderColor: "rgba(59, 130, 246, 0.3)" }}
          className="p-10 bg-white/[0.02] rounded-[2.5rem] border border-white/5 space-y-8 transition-colors"
        >
          <h3 className="text-xl font-bold text-blue-500">Frontend Architecture</h3>
          <SkillBar name="React / Next.js" level={92} />
          <SkillBar name="JavaScript (ES6+)" level={88} />
          <SkillBar name="Tailwind / CSS" level={95} />
          <SkillBar name="Framer Motion" level={80} />
        </motion.div>

        <motion.div 
          whileHover={{ borderColor: "rgba(59, 130, 246, 0.3)" }}
          className="p-10 bg-white/[0.02] rounded-[2.5rem] border border-white/5 space-y-8 transition-colors"
        >
          <h3 className="text-xl font-bold text-blue-500">Systems & Backend</h3>
          <SkillBar name="Node.js" level={78} />
          <SkillBar name="Python / ML" level={85} />
          <SkillBar name="C++ / C" level={80} />
          <SkillBar name="MongoDB / SQL" level={75} />
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
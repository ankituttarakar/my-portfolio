import { motion } from 'framer-motion';
import { Globe, Zap, Shield, Code, BarChart3, Clock } from 'lucide-react';

const BentoGrid = () => {
  return (
    <section id="work" className="py-24 px-6 bg-black">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        
        {/* Project: QuickPoll */}
        <div className="md:col-span-2 h-112.5 rounded-[2.5rem] bg-[#080808] border border-white/5 p-10 flex flex-col justify-between group relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <Globe className="text-indigo-500" size={40} />
          <div>
            <div className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-2">Featured Project</div>
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tighter">QuickPoll</h2>
            <p className="text-gray-500 text-lg max-w-md">A real-time polling application built with the MERN stack, allowing seamless user interaction and live updates.</p>
          </div>
        </div>

        {/* Technical Arsenal */}
        <div className="md:row-span-2 rounded-[2.5rem] bg-[#080808] border border-white/5 p-10 flex flex-col justify-between relative overflow-hidden">
          <Code className="text-purple-500" size={40} />
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white tracking-tighter">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'Python', 'Machine Learning', 'C++', 'Tailwind', 'Flask'].map(t => (
                <span key={t} className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-[10px] text-gray-400 font-bold uppercase">{t}</span>
              ))}
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">Experienced in end-to-end project execution, from API design to cloud deployment.</p>
          </div>
        </div>

        {/* Project: Gold Price Prediction */}
        <div className="h-100 rounded-[2.5rem] bg-[#080808] border border-white/5 p-10 flex flex-col justify-between">
          <BarChart3 className="text-yellow-500" size={32} />
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tighter mb-2">Gold Price ML</h2>
            <p className="text-gray-400 text-sm">Predictive modeling using Random Forest Regressor and Scikit-learn.</p>
          </div>
        </div>

        {/* Mini-Project: Timer App */}
        <div className="h-100 rounded-[2.5rem] bg-[#080808] border border-white/5 p-10 flex flex-col justify-between">
          <Clock className="text-green-500" size={32} />
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tighter mb-2">Utility Tools</h2>
            <p className="text-gray-400 text-sm">Developed a high-precision Timer & Stopwatch app for web tech projects.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BentoGrid;
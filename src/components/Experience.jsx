import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: "Member Of Events Team",
      company: "Codechef PESUECC",
      date: "Dec 2025 - Present",
      desc: "Organizing competitive programming contests and technical workshops for student developers."
    },
    {
      role: "Member Of Backstage Team",
      company: "The Mangobites Club",
      date: "Nov 2025 - Present",
      desc: "Managing technical logistics and event flow for club activities."
    },
    {
      role: "Member Of Marketing Team",
      company: "IEEE PESU ECC Student Branch",
      date: "Oct 2025 - Present",
      desc: "Strategizing outreach and digital presence for flagship IEEE events in Bengaluru."
    },
    {
      role: "Member Of Logistics Team",
      company: "Equinox - The Space Club",
      date: "Oct 2025 - Present",
      desc: "Coordinating resources and equipment for astronomy and space-tech workshops."
    },
    {
      role: "Member Of Logistics Team",
      company: "Microsoft Learn Student Ambassadors",
      date: "Oct 2025 - Present",
      desc: "Supporting the MLSA community in hosting tech-focused learning sessions."
    },
    {
      role: "Member Of Operations & Hospitality",
      company: "Shunya",
      date: "Sep 2025 - Present",
      desc: "Managing guest relations and operational logistics for large-scale student gatherings."
    }
  ];

  return (
    <div className="text-center">
      <h2 className="text-4xl md:text-5xl font-black mb-16 tracking-tighter">Experience & <span className="text-blue-500">Leadership</span></h2>
      <div className="max-w-4xl mx-auto relative border-l-2 border-blue-600/20 ml-6 md:ml-auto">
        {experiences.map((exp, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="mb-12 ml-8 text-left relative"
          >
            <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#030712] border-4 border-blue-600 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
            <div className="p-8 bg-white/[0.02] rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all group">
              <span className="text-blue-500 font-bold text-xs uppercase tracking-widest">{exp.date}</span>
              <h3 className="text-2xl font-bold mt-2 text-white group-hover:text-blue-400 transition-colors">{exp.role}</h3>
              <p className="text-gray-400 font-medium mb-4">{exp.company}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{exp.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
import { motion } from 'framer-motion';

const Navbar = () => {
  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <div className="fixed top-8 left-0 right-0 z-[100] flex justify-center px-6">
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="h-14 px-2 flex items-center gap-1 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl"
      >
        {/* Logo */}
        <div className="px-4 py-2 text-white font-black text-sm tracking-tighter border-r border-white/10">
          ANKIT.
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="px-4 py-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white rounded-full transition-all"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Get in Touch button - now pointing to #contact */}
        <a 
          href="#contact" 
          className="ml-2 px-5 py-2 bg-white text-black text-xs font-bold rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-blue-600/40"
        >
          Get in Touch
        </a>
      </motion.nav>
    </div>
  );
};

export default Navbar;
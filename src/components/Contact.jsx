import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission goes here
    console.log("Form Submitted:", formData);
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400">Have a project in mind or just want to say hi? My inbox is always open.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <a 
                  href="mailto:ankit.uttarakar@gmail.com" 
                  className="flex items-center gap-4 text-gray-400 hover:text-blue-500 transition-colors group"
                >
                  <div className="p-3 bg-white/5 rounded-lg group-hover:bg-blue-500/10 border border-white/10 group-hover:border-blue-500/20">
                    <Mail size={20} />
                  </div>
                  ankit.uttarakar@gmail.com
                </a>
                <a 
                  href="https://linkedin.com/in/ankituttarakar" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-4 text-gray-400 hover:text-blue-500 transition-colors group"
                >
                  <div className="p-3 bg-white/5 rounded-lg group-hover:bg-blue-500/10 border border-white/10 group-hover:border-blue-500/20">
                    <Linkedin size={20} />
                  </div>
                  linkedin.com/in/ankituttarakar
                </a>
                <a 
                  href="https://github.com/ankituttarakar" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-4 text-gray-400 hover:text-blue-500 transition-colors group"
                >
                  <div className="p-3 bg-white/5 rounded-lg group-hover:bg-blue-500/10 border border-white/10 group-hover:border-blue-500/20">
                    <Github size={20} />
                  </div>
                  github.com/ankituttarakar
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Name"
              className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-white"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-white"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-white resize-none"
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            ></textarea>
            <button
              type="submit"
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
            >
              Send Message <Send size={18} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
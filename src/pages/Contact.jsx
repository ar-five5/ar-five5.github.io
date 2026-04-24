import React, { useState } from 'react';
import { MOCK_DATA } from '../mock';
import { Mail, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const SectionHeader = ({ num, title }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className="flex items-center gap-4 mb-12"
  >
    <span className="font-mono text-xs text-[#666]">0{num} / {title.toUpperCase()}</span>
    <div className="h-[1px] flex-1 bg-gradient-to-r from-[#222] to-transparent" />
  </motion.div>
);

const Contact = () => {
  const { profile } = MOCK_DATA;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${profile.contact.email}?subject=${subject}&body=${body}`;
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <div className="flex flex-col gap-16">
      <SectionHeader num={4} title="Contact" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-12"
        >
          <div>
            <h2 className="text-3xl font-medium text-white mb-6">Let's connect.</h2>
            <p className="text-[#888] text-sm leading-relaxed max-w-sm">
              Open to internship opportunities, research collaborations, and interesting problems. Fastest way to reach me is email.
            </p>
          </div>

          <div className="flex flex-col gap-6 relative">
            <div className="absolute left-6 top-6 bottom-6 w-[1px] bg-[#222] -z-10" />

            <a href={`mailto:${profile.contact.email}`} className="flex items-start gap-6 group hover-target">
              <div className="w-12 h-12 rounded-full bg-[#111] border border-[#222] flex items-center justify-center group-hover:scale-110 group-hover:border-[#555] transition-all duration-300">
                <Mail className="w-5 h-5 text-[#666] group-hover:text-white transition-colors" />
              </div>
              <div className="pt-2 flex flex-col gap-1">
                <p className="text-xs font-mono text-[#666]">Email</p>
                <p className="text-lg text-white group-hover:translate-x-2 transition-transform duration-300">{profile.contact.email}</p>
                <p className="text-sm text-[#888] group-hover:translate-x-2 transition-transform duration-300 delay-75">{profile.contact.collegeEmail}</p>
              </div>
            </a>

            <div className="flex items-start gap-6 group hover-target cursor-default">
              <div className="w-12 h-12 rounded-full bg-[#111] border border-[#222] flex items-center justify-center group-hover:scale-110 group-hover:border-[#555] transition-all duration-300">
                <MapPin className="w-5 h-5 text-[#666] group-hover:text-white transition-colors" />
              </div>
              <div className="pt-2">
                <p className="text-xs font-mono text-[#666] mb-1">Location</p>
                <p className="text-lg text-white group-hover:translate-x-2 transition-transform duration-300">{profile.contact.location}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-10"
        >
          <div className="flex flex-col gap-2 group relative">
            <label className="font-mono text-xs text-[#666] uppercase group-focus-within:text-white transition-colors">Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              className="bg-transparent border-b border-[#333] px-0 py-3 text-white text-lg focus:outline-none transition-colors hover-target w-full"
              placeholder="John Doe"
            />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-focus-within:scale-x-100 origin-left transition-transform duration-500 ease-[0.22,1,0.36,1]" />
          </div>

          <div className="flex flex-col gap-2 group relative">
            <label className="font-mono text-xs text-[#666] uppercase group-focus-within:text-white transition-colors">Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              className="bg-transparent border-b border-[#333] px-0 py-3 text-white text-lg focus:outline-none transition-colors hover-target w-full"
              placeholder="john@example.com"
            />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-focus-within:scale-x-100 origin-left transition-transform duration-500 ease-[0.22,1,0.36,1]" />
          </div>

          <div className="flex flex-col gap-2 group relative">
            <label className="font-mono text-xs text-[#666] uppercase group-focus-within:text-white transition-colors">Message</label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
              className="bg-transparent border-b border-[#333] px-0 py-3 text-white text-lg focus:outline-none transition-colors resize-none hover-target w-full"
              placeholder="Your message here..."
            />
            <div className="absolute bottom-1 left-0 w-full h-[1px] bg-white scale-x-0 group-focus-within:scale-x-100 origin-left transition-transform duration-500 ease-[0.22,1,0.36,1]" />
          </div>

          <button
            type="submit"
            className="hover-target group self-start flex items-center justify-between w-full md:w-auto md:min-w-[200px] px-8 py-4 bg-white text-black font-medium transition-all duration-300 rounded-sm mt-4 overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-[#ddd] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]" />
            <span className="relative z-10 flex items-center gap-3">
              {status === 'success' ? 'Opening email client...' : 'Send Message'}
              {status === 'idle' && <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />}
            </span>
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;

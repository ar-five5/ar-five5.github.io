import React from 'react';
import { MOCK_DATA } from '../mock';
import Pill from '../components/ui/pill';
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

const About = () => {
  const { profile } = MOCK_DATA;

  // Split name for staggered animation
  const nameChars = profile.name.split('');

  return (
    <div className="flex flex-col gap-16">
      <SectionHeader num={1} title="About" />
      
      <div>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tighter text-white mb-8 flex overflow-hidden">
          {nameChars.map((char, index) => (
            <motion.span
              key={index}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.03
              }}
              className={char === ' ' ? 'mr-4' : ''}
            >
              {char}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-[#555]"
          >
            .
          </motion.span>
        </h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl md:text-2xl text-[#888] leading-relaxed font-light max-w-3xl"
        >
          {profile.about}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <h3 className="font-mono text-sm text-[#666] mb-6 uppercase tracking-widest">Research Interests</h3>
        <div className="flex flex-wrap gap-3">
          {profile.researchInterests.map((interest, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + (i * 0.1), duration: 0.4 }}
            >
              <Pill className="hover-target">{interest}</Pill>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
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

const TimelineItem = ({ period, title, subtitle, description, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    className="flex flex-col md:flex-row gap-4 md:gap-12 group hover-target relative"
  >
    {/* Animated line on hover */}
    <div className="absolute left-[-2px] md:left-auto md:right-[-2px] top-0 bottom-0 w-[2px] bg-[#555] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 ease-[0.22,1,0.36,1]" />
    
    <div className="md:w-32 flex-shrink-0 pt-1">
      <span className="font-mono text-xs text-[#666] group-hover:text-white transition-colors duration-300">{period}</span>
    </div>
    
    <div className="flex-1 pb-12 border-l border-[#222] pl-6 md:border-none md:pl-0 relative overflow-hidden">
      <div className="absolute w-2 h-2 rounded-full bg-[#333] -left-[4.5px] top-1.5 md:hidden group-hover:bg-white transition-colors duration-300" />
      
      <h3 className="text-xl font-medium text-white mb-1 group-hover:translate-x-2 transition-transform duration-300 ease-[0.22,1,0.36,1]">{title}</h3>
      <h4 className="text-sm font-mono text-[#888] mb-4 group-hover:translate-x-2 transition-transform duration-300 delay-75 ease-[0.22,1,0.36,1]">{subtitle}</h4>
      <p className="text-sm text-[#A1A1AA] leading-relaxed max-w-2xl">{description}</p>
    </div>
  </motion.div>
);

const Resume = () => {
  const { resume } = MOCK_DATA;

  return (
    <div className="flex flex-col gap-20">
      <SectionHeader num={2} title="Resume" />

      {/* Experience */}
      <section>
        <motion.h2 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="font-mono text-sm text-[#666] mb-12 uppercase tracking-widest"
        >
          Experience
        </motion.h2>
        <div className="flex flex-col">
          {resume.experience.map((exp, index) => (
            <TimelineItem
              key={exp.id}
              index={index}
              period={exp.period}
              title={exp.role}
              subtitle={exp.company}
              description={exp.description}
            />
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <motion.h2 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="font-mono text-sm text-[#666] mb-12 uppercase tracking-widest"
        >
          Education
        </motion.h2>
        <div className="flex flex-col">
          {resume.education.map((edu, index) => (
            <TimelineItem
              key={edu.id}
              index={index}
              period={edu.period}
              title={edu.degree}
              subtitle={edu.institution}
              description={edu.description}
            />
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <motion.h2 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="font-mono text-sm text-[#666] mb-12 uppercase tracking-widest"
        >
          Capabilities
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {Object.entries(resume.skills).map(([category, skills], index) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h3 className="text-sm font-medium text-white mb-6 border-b border-[#222] pb-2">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <Pill key={skill} className="hover-target hover:border-white transition-colors">{skill}</Pill>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Resume;
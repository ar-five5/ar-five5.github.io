import React, { useRef } from 'react';
import { MOCK_DATA } from '../data/mock';
import Pill from '../components/ui/Pill';
import StatCounter from '../components/ui/StatCounter';
import { Github, ArrowUpRight } from 'lucide-react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const SectionHeader = ({ num, title }) => (
  <div className="flex items-center gap-4 mb-12">
    <span className="font-mono text-xs text-[#828282]">0{num} / {title.toUpperCase()}</span>
    <div className="h-[1px] flex-1 bg-gradient-to-r from-[#222] to-transparent" />
  </div>
);

const ProjectCard = ({ project }) => {
  const ref = useRef(null);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e) => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 4);
    rotateX.set(py * -4);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="group block border-b border-[#222] py-8 hover-target relative overflow-hidden"
    >
      {/* Subtle background sweep on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#111] to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-[0.22,1,0.36,1] z-0" />

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
          <div>
            <h3 className="text-2xl font-medium text-white mb-2 flex items-center gap-4 group-hover:pl-4 transition-all duration-300 ease-[0.22,1,0.36,1]">
              {project.title}
              <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} on GitHub`} className="text-[#828282] hover:text-white transition-colors opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 duration-300">
                <Github className="w-5 h-5" />
              </a>
            </h3>
            <span className="font-mono text-xs text-[#828282] group-hover:pl-4 transition-all duration-300 delay-75 ease-[0.22,1,0.36,1] block">{project.period}</span>
          </div>
          <div className="flex flex-wrap gap-2 justify-end">
            {project.tech.map(t => (
              <Pill key={t} className="group-hover:border-[#555] transition-colors duration-300">{t}</Pill>
            ))}
          </div>
        </div>

        <p className="text-[#A1A1AA] text-sm leading-relaxed mb-6 max-w-3xl">
          {project.description}
        </p>

        {project.stats && project.stats.length > 0 && (
          <div className="flex flex-wrap gap-x-10 gap-y-4 mb-6 py-4 border-y border-[#1a1a1a]">
            {project.stats.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </div>
        )}

        <ul className="flex flex-col gap-3">
          {project.highlights.map((highlight, idx) => (
            <li key={idx} className="text-sm text-[#888] flex items-start gap-3">
              <ArrowUpRight className="w-4 h-4 text-[#444] mt-0.5 group-hover:text-white transition-colors duration-300 shrink-0" />
              <span className="leading-relaxed">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { projects } = MOCK_DATA;

  return (
    <div className="flex flex-col gap-12">
      <SectionHeader num={3} title="Projects" />

      <p className="text-[#888] text-sm leading-relaxed max-w-2xl">
        Selected work across ML, forecasting, and product building.
      </p>

      <div className="flex flex-col">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

import React from 'react';
import { MOCK_DATA } from '../mock';
import { MapPin, Mail, Github, Linkedin } from 'lucide-react';

const Sidebar = () => {
  const { profile } = MOCK_DATA;

  return (
    <div className="h-full w-full flex flex-col p-8 lg:p-12 overflow-y-auto">
      <div className="flex flex-col gap-8 flex-1">

        {/* Avatar Placeholder */}
        <div className="w-20 h-20 bg-[#111] border border-[#333] rounded-sm flex items-center justify-center overflow-hidden group hover-target relative">
          <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1] z-0" />
          <span className="font-mono text-[#666] group-hover:text-black transition-colors duration-500 delay-100 text-xs uppercase tracking-widest relative z-10">AR</span>
        </div>

        {/* Identity */}
        <div>
          <h1 className="text-2xl font-medium tracking-tight text-white mb-2">{profile.name}</h1>
          <h2 className="text-sm font-mono text-[#888] mb-4">{profile.role}</h2>
          <p className="text-sm text-[#A1A1AA] leading-relaxed">
            {profile.tagline}
          </p>
        </div>

        {/* Contact info */}
        <div className="flex flex-col gap-4 mt-auto pt-8 border-t border-[#222]">
          <div className="flex items-center gap-3 text-sm text-[#A1A1AA] group cursor-default">
            <Mail className="w-4 h-4 text-[#666] group-hover:text-white transition-colors flex-shrink-0" />
            <div className="flex flex-col gap-1">
              <a href={`mailto:${profile.contact.email}`} className="font-mono text-xs group-hover:text-white transition-colors hover-target">{profile.contact.email}</a>
              <a href={`mailto:${profile.contact.collegeEmail}`} className="font-mono text-xs text-[#888] group-hover:text-white transition-colors hover-target">{profile.contact.collegeEmail}</a>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm text-[#A1A1AA] group cursor-default">
            <MapPin className="w-4 h-4 text-[#666] group-hover:text-white transition-colors" />
            <span className="font-mono text-xs hover-target">{profile.contact.location}</span>
          </div>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-4 pt-4">
          <a href={profile.contact.github} target="_blank" rel="noreferrer" className="text-[#666] hover:text-white transition-all hover:-translate-y-1 duration-300 hover-target">
            <Github className="w-5 h-5" />
          </a>
          <a href={profile.contact.linkedin} target="_blank" rel="noreferrer" className="text-[#666] hover:text-white transition-all hover:-translate-y-1 duration-300 hover-target">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;

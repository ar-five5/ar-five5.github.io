import React from 'react';
import { MOCK_DATA } from '../../data/mock';
import { MapPin, Mail, Github, Linkedin, Download } from 'lucide-react';
import Magnetic from '../ui/Magnetic';

// Drop a photo at src/assets/profile.jpg and it renders automatically —
// falls back to the monogram mark until then.
const profileImages = import.meta.glob('../../assets/profile.{jpg,jpeg,png}', {
  eager: true,
  query: '?url',
  import: 'default',
});
const profileImageSrc = Object.values(profileImages)[0];

const Sidebar = () => {
  const { profile } = MOCK_DATA;

  return (
    <div className="h-full w-full flex flex-col p-8 lg:p-12 overflow-y-auto">
      <div className="flex flex-col gap-8 flex-1">

        {/* Avatar */}
        <div className="w-20 h-20 bg-[#111] border border-[#333] rounded-sm flex items-center justify-center overflow-hidden group hover-target relative">
          {profileImageSrc ? (
            <img
              src={profileImageSrc}
              alt={profile.name}
              className="absolute inset-0 h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          ) : (
            <>
              <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1] z-0" />
              <span className="font-mono text-[#828282] group-hover:text-black transition-colors duration-500 delay-100 text-xs uppercase tracking-widest relative z-10">AR</span>
            </>
          )}
        </div>

        {/* Identity */}
        <div>
          <h1 className="text-2xl font-medium tracking-tight text-white mb-2">{profile.name}</h1>
          <h2 className="text-sm font-mono text-[#888] mb-4">{profile.role}</h2>
          <p className="text-sm text-[#A1A1AA] leading-relaxed">
            {profile.tagline}
          </p>
        </div>

        {/* Resume download */}
        <Magnetic strength={0.25}>
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            download
            className="hover-target group inline-flex items-center gap-2 border border-[#333] rounded-sm px-4 py-2 text-xs font-mono uppercase tracking-widest text-[#A1A1AA] hover:border-white hover:text-white transition-colors duration-300 w-fit"
          >
            <Download className="w-3.5 h-3.5" />
            Resume
          </a>
        </Magnetic>

        {/* Contact info */}
        <div className="flex flex-col gap-4 mt-auto pt-8 border-t border-[#222]">
          <div className="flex items-center gap-3 text-sm text-[#A1A1AA] group cursor-default">
            <Mail className="w-4 h-4 text-[#828282] group-hover:text-white transition-colors flex-shrink-0" />
            <div className="flex flex-col gap-1">
              <a href={`mailto:${profile.contact.email}`} className="inline-block py-1.5 font-mono text-xs group-hover:text-white transition-colors hover-target">{profile.contact.email}</a>
              <a href={`mailto:${profile.contact.collegeEmail}`} className="inline-block py-1.5 font-mono text-xs text-[#888] group-hover:text-white transition-colors hover-target">{profile.contact.collegeEmail}</a>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm text-[#A1A1AA] group cursor-default">
            <MapPin className="w-4 h-4 text-[#828282] group-hover:text-white transition-colors" />
            <span className="font-mono text-xs hover-target">{profile.contact.location}</span>
          </div>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-4 pt-4">
          <Magnetic>
            <a href={profile.contact.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-[#828282] hover:text-white transition-colors duration-300 hover-target block">
              <Github className="w-5 h-5" />
            </a>
          </Magnetic>
          <Magnetic>
            <a href={profile.contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-[#828282] hover:text-white transition-colors duration-300 hover-target block">
              <Linkedin className="w-5 h-5" />
            </a>
          </Magnetic>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;

import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const NAV_ITEMS = [
  { path: '/', label: 'About' },
  { path: '/resume', label: 'Resume' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
];

const TopNav = () => {
  const location = useLocation();

  return (
    <nav className="w-full px-6 md:px-12 flex items-center h-16 overflow-x-auto no-scrollbar">
      <ul className="flex items-center gap-8 min-w-max">
        {NAV_ITEMS.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <li key={item.path} className="relative">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-mono tracking-wider uppercase transition-colors duration-200 hover-target py-2 block ${
                    isActive ? 'text-white' : 'text-[#666] hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
              {isActive && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-white"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default TopNav;
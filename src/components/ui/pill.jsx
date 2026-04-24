import React from 'react';
import { cn } from '../../lib/utils';

const Pill = ({ children, className }) => {
  return (
    <span className={cn(
      "px-3 py-1 text-xs font-mono rounded-full border border-[#333] bg-[#0A0A0A] text-[#A1A1AA] hover:border-[#666] hover:text-white transition-colors cursor-default whitespace-nowrap",
      className
    )}>
      {children}
    </span>
  );
};

export default Pill;

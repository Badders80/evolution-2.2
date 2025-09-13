import React from 'react';
import { cn } from '@/lib/utils';

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  className?: string;
}

export const SocialIcon: React.FC<SocialIconProps> = ({ href, icon, label, className }) => {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center w-10 h-10 rounded-full",
        "text-gold hover:text-white hover:bg-gold/10",
        "transition-all duration-200 ease-in-out",
        "focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-black",
        className
      )}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="w-5 h-5">{icon}</span>
    </a>
  );
};

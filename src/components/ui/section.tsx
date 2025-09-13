import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ title, children, className, id }) => {
  return (
    <section id={id} className={cn("max-w-7xl mx-auto px-8 py-16", className)}>
      {title && <h2 className="text-3xl font-bold mb-8 font-bw-gradual">{title}</h2>}
      {children}
    </section>
  );
};
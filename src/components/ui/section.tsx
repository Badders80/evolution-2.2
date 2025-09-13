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
    <section id={id} className={cn("max-w-6xl mx-auto px-6 py-16 md:py-24", className)}>
      {title && <h2 className="text-2xl font-heading text-gold mb-6">{title}</h2>}
      {children}
    </section>
  );
};
import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ title, children, className, id }) => {
  return (
    <section id={id} className={cn("max-w-7xl mx-auto px-6 py-20 md:py-28 lg:py-32", className)}>
      {title && (
        <h2 className="text-3xl md:text-4xl font-heading text-gold mb-8 md:mb-12">{title}</h2>
      )}
      {children}
    </section>
  );
};

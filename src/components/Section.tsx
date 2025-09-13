import * as React from 'react';
import { cn } from '@/lib/utils';

export interface SectionProps
  extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * A wrapper component that constrains content to a max width and adds
 * horizontal and vertical padding.  
 * Accepts any additional HTML attributes.
 */
export default function Section({ className, children, ...props }: SectionProps) {
  return (
    <section className={cn('px-4 py-8 max-w-5xl mx-auto', className)} {...props}>
      {children}
    </section>
  );
}
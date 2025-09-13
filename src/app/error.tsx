'use client';

import Section from '@/components/Section';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

/**
 * Global error boundary component.  
 * Displays a branded error message and allows retrying the failed render.
 */
export default function GlobalError({ error, reset }: ErrorProps) {
  return (
    <Section className="text-center mt-16">
      <h1 className="text-3xl font-bw-gradual mb-4">Something went wrong</h1>
      <p className="text-lg text-gray mb-6">
        We\'re sorry, an unexpected error occurred. Please try again.
      </p>
      <button
        onClick={() => reset()}
        className="underline text-gold hover:text-foreground"
      >
        Retry
      </button>
    </Section>
  );
}
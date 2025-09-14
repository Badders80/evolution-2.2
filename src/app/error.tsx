"use client";

interface ErrorProps {
  reset: () => void;
}

/**
 * Global error boundary component.
 * Displays a branded error message and allows retrying the failed render.
 */
export default function GlobalError({ reset }: ErrorProps) {
  return (
    <div className="text-center p-6 bg-[#006400] text-white min-h-screen flex items-center justify-center">
      <div>
        <h1 className="text-4xl font-bw-gradual mb-4">Error</h1>
        <p className="text-lg mb-6">
          Something went wrong.{" "}
          <button onClick={() => reset()} className="underline hover:text-gold">
            Try again
          </button>
        </p>
      </div>
    </div>
  );
}

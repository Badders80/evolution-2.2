'use client';

import Section from '@/components/Section';
// import { useUser } from '@auth0/nextjs-auth0/client';

/**
 * My Stables page.  
 * This route is protected via middleware and requires authentication.
 */
export default function MyStables() {
  // const { user } = useUser() || {};
  const user = null; // Temporary
  return (
    <Section>
      <h1 className="text-3xl font-bw-gradual mb-4">My Stables</h1>
      {user ? (
        <p className="text-lg text-gray">
          Welcome back! Your stable details will appear here once
          the feature is fully implemented.
        </p>
      ) : (
        <p className="text-lg text-gray">
          Please log in to access your stable information.
        </p>
      )}
    </Section>
  );
}
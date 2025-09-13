import React from "react";
import { Section } from "@/components/ui/section";

/**
 * Not found page shown for unmatched routes.
 */
export default function NotFound() {
  return (
    <Section className="text-center mt-16">
      <h1 className="text-3xl font-heading mb-4">Page Not Found</h1>
      <p className="text-lg text-gray">Sorry, the page you are looking for does not exist.</p>
    </Section>
  );
}

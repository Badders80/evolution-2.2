import React from "react";
import { Section } from "@/components/ui/section";

/**
 * Contact page providing methods to reach the Evolution Stables team.
 */
export default function Contact() {
  return (
    <Section>
      <h1 className="text-3xl font-bw-gradual mb-4">Contact Us</h1>
      <p className="text-lg text-gray mb-4">
        We would love to hear from you! Reach out to us via email and we&apos;ll get back to you as
        soon as possible.
      </p>
      <p className="text-lg text-gray">
        Email:{" "}
        <a href="mailto:info@evolutionstables.com" className="text-gold hover:underline">
          info@evolutionstables.com
        </a>
      </p>
    </Section>
  );
}

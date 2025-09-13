import React from "react";
import { Section } from "@/components/ui/section";

/**
 * About Us page describing the team and mission of Evolution Stables.
 */
export default function About() {
  return (
    <Section>
      <h1 className="text-3xl font-bw-gradual mb-4">About Us</h1>
      <p className="text-lg text-gray mb-4">
        Evolution Stables is pioneering the future of fractional horse ownership. Our mission is to
        democratise access to the world of thoroughbred racing through technology, transparency and
        community.
      </p>
      <p className="text-lg text-gray mb-4">
        Founded by industry veterans and technology experts, we bring you the opportunity to invest
        in racehorses and share in their success. Join us on this exciting journey.
      </p>
    </Section>
  );
}

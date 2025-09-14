import React from "react";
import Hero from "@/components/Hero";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import CTA from "@/components/CTA";
import SimpleFooter from "@/components/SimpleFooter";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero */}
      <Hero />

      {/* Thin divider */}
      <div className="border-t border-gray-300"></div>

      {/* Sections */}
      <Section1 />

      {/* Thin divider */}
      <div className="border-t border-gray-300"></div>

      <Section2 />

      {/* Thin divider */}
      <div className="border-t border-gray-300"></div>

      {/* CTA */}
      <CTA />

      {/* Thin divider */}
      <div className="border-t border-gray-300"></div>

      {/* Footer */}
      <SimpleFooter />
    </div>
  );
}

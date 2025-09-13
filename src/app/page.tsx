import React from "react";
import Image from "next/image";
import { Header } from "@/components/ui/header";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { TextGenerateEffect } from "@/components/text-generate-effect";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white scroll-smooth">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center bg-black">
        {/* Background image */}
        <Image
          src="/assets/Horse-Double-Black.png"
          alt="Hero Background"
          fill
          className="object-cover opacity-70"
          priority
        />

        {/* Overlay */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Branded Logo */}
          <Image
            src="/assets/ES-Branded-Gold.png"
            alt="Evolution Stables Brand Logo"
            width={500}
            height={200}
            className="mx-auto"
            priority
          />

          {/* Animated tagline */}
          <div className="mt-6">
            <TextGenerateEffect
              words="Own the Experience"
              duration={2.5}
              className="text-[#d4a964] text-2xl md:text-4xl lg:text-5xl font-medium"
              filter
            />
          </div>
        </div>
      </section>

      <Section title="Services" id="services">
        <div className="bg-gray-900 h-60 flex items-center justify-center rounded-lg">
          <p className="text-gray-300">Services Placeholder</p>
        </div>
      </Section>

      <Section title="Process" id="process">
        <div className="bg-gray-800 h-60 flex items-center justify-center rounded-lg">
          <p className="text-gray-300">Process Placeholder</p>
        </div>
      </Section>

      <Section title="Pricing" id="pricing">
        <div className="bg-gray-700 h-60 flex items-center justify-center rounded-lg">
          <p className="text-gray-300">Pricing Placeholder</p>
        </div>
      </Section>

      <Section title="Blog" id="blog">
        <div className="bg-gray-600 h-60 flex items-center justify-center rounded-lg">
          <p className="text-gray-300">Blog Placeholder</p>
        </div>
      </Section>

      <Section title="Contact" id="contact">
        <div className="bg-gray-500 h-60 flex items-center justify-center rounded-lg">
          <p className="text-gray-300">Contact Placeholder</p>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="text-center">
          <h2 className="text-2xl font-heading text-gold mb-4">Ready to Own the Experience?</h2>
          <p className="text-gray-300 mb-8">Join Evolution Stables today and start your journey.</p>
          <Button variant="glow" size="lg" className="mt-6">
            Get Started
          </Button>
        </div>
      </Section>
    </div>
  );
}

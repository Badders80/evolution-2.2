"use client";

import Image from "next/image";
import { Header } from "@/components/ui/header";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white scroll-smooth">
      <Header />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-[80vh] text-center text-white bg-black">
        <Image
          src="/assets/Horse-Double-Black.png"
          alt="Hero Background"
          fill
          className="object-cover opacity-70 -z-10"
        />
        <h1 className="text-4xl md:text-6xl font-bold text-gold tracking-wide font-bw-gradual">
          EVOLUTION STABLES
        </h1>
        <p className="mt-6 text-xl md:text-2xl font-light text-gray font-ibm-plex">
          Own the Experience
        </p>
      </section>

      <Section title="Services" id="services">
        <div className="bg-gray-900 h-60 flex items-center justify-center rounded-lg">
          <p className="text-2xl font-bold">Services Placeholder</p>
        </div>
      </Section>

      <Section title="Process" id="process">
        <div className="bg-gray-800 h-60 flex items-center justify-center rounded-lg">
          <p className="text-2xl font-bold">Process Placeholder</p>
        </div>
      </Section>

      <Section title="Pricing" id="pricing">
        <div className="bg-gray-700 h-60 flex items-center justify-center rounded-lg">
          <p className="text-2xl font-bold">Pricing Placeholder</p>
        </div>
      </Section>

      <Section title="Blog" id="blog">
        <div className="bg-gray-600 h-60 flex items-center justify-center rounded-lg">
          <p className="text-2xl font-bold">Blog Placeholder</p>
        </div>
      </Section>

      <Section title="Contact" id="contact">
        <div className="bg-gray-500 h-60 flex items-center justify-center rounded-lg">
          <p className="text-2xl font-bold">Contact Placeholder</p>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gold mb-4 font-bw-gradual">Ready to Own the Experience?</h2>
          <p className="text-gray mb-8 font-ibm-plex">Join Evolution Stables today and start your journey.</p>
          <Button variant="glow" size="lg">Get Started</Button>
        </div>
      </Section>
    </div>
  );
}
import React from "react";
import Image from "next/image";
import { Header } from "@/components/ui/header";
import { Section } from "@/components/ui/section";
import { Hero } from "@/components/ui/hero";
import { Button } from "@/components/ui/button";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white scroll-smooth">
      <Header />

      {/* Hero Section - Full width with controlled height */}
      <Hero title="" backgroundImage="/assets/Horse-Double-Black.png" height="80vh" overlay={true}>
        {/* Branded Logo */}
        <Image
          src="/assets/ES-Branded-Gold.png"
          alt="Evolution Stables Brand Logo"
          width={500}
          height={200}
          className="mx-auto mb-6"
          priority
        />

        {/* Animated tagline */}
        <TextGenerateEffect
          words="Own the Experience"
          duration={2.5}
          className="text-gold text-2xl md:text-4xl lg:text-5xl font-medium mb-8"
          filter
        />

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="glow" size="lg">
            Get Started
          </Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </Hero>

      {/* Services Section */}
      <Section
        title="Premium Services"
        subtitle="Experience excellence in equine care and management"
        background="gray"
        id="services"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-black p-6 rounded-lg border border-gold/20">
            <h3 className="text-xl font-bw-gradual text-gold mb-3">Stabling</h3>
            <p className="text-gray text-sm">
              Premium individual stalls with climate control and 24/7 monitoring.
            </p>
          </div>
          <div className="bg-black p-6 rounded-lg border border-gold/20">
            <h3 className="text-xl font-bw-gradual text-gold mb-3">Training</h3>
            <p className="text-gray text-sm">
              Professional training programs tailored to your horse&apos;s needs.
            </p>
          </div>
          <div className="bg-black p-6 rounded-lg border border-gold/20">
            <h3 className="text-xl font-bw-gradual text-gold mb-3">Healthcare</h3>
            <p className="text-gray text-sm">
              Veterinary care and wellness programs for optimal health.
            </p>
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section
        title="Our Process"
        subtitle="A seamless experience from start to finish"
        id="process"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bw-gradual text-gold mb-4">Step 1: Consultation</h3>
            <p className="text-gray mb-6">
              We begin with a comprehensive assessment of your horse&apos;s needs and your
              requirements.
            </p>
            <h3 className="text-2xl font-bw-gradual text-gold mb-4">Step 2: Customization</h3>
            <p className="text-gray mb-6">
              Tailored solutions designed specifically for your horse&apos;s comfort and your peace
              of mind.
            </p>
            <h3 className="text-2xl font-bw-gradual text-gold mb-4">Step 3: Care</h3>
            <p className="text-gray">
              Ongoing professional care ensuring your horse thrives in our facilities.
            </p>
          </div>
          <div className="bg-gray p-8 rounded-lg">
            <div className="text-center">
              <div className="text-4xl font-bw-gradual text-gold mb-2">24/7</div>
              <div className="text-gray">Monitoring & Care</div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gold" size="sm">
        <div className="text-center">
          <h2 className="text-3xl font-bw-gradual text-black mb-4">Ready to Own the Experience?</h2>
          <p className="text-black/80 mb-8">Join Evolution Stables today and start your journey.</p>
          <Button variant="default" size="lg">
            Get Started Today
          </Button>
        </div>
      </Section>

      <Footer />
    </div>
  );
}

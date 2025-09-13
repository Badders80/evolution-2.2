"use client";

import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white scroll-smooth">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-12 py-4 bg-black/80 backdrop-blur border-b border-gray-800">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/assets/Logo-Gold.png"
            alt="Evolution Stables"
            width={40}
            height={40}
          />
        </div>

        {/* Nav links */}
        <nav className="flex space-x-8 text-sm font-medium">
          <a href="#services" className="text-gray-300 hover:text-[#D4AF37] transition">
            Services
          </a>
          <a href="#process" className="text-gray-300 hover:text-[#D4AF37] transition">
            Process
          </a>
          <a href="#pricing" className="text-gray-300 hover:text-[#D4AF37] transition">
            Pricing
          </a>
          <a href="#blog" className="text-gray-300 hover:text-[#D4AF37] transition">
            Blog
          </a>
          <a href="#contact" className="text-gray-300 hover:text-[#D4AF37] transition">
            Contact
          </a>
        </nav>

        {/* CTA Button */}
        <button className="ml-6 px-5 py-2 bg-[#D4AF37] text-black font-semibold rounded-lg hover:bg-[#e6c76a] transition">
          Get Template
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-[80vh] text-center text-white bg-black">
        <Image
          src="/assets/Horse-Double-Black.png"
          alt="Hero Background"
          fill
          className="object-cover opacity-70 -z-10"
        />
        <h1 className="text-6xl font-bold text-[#D4AF37] tracking-wide">
          EVOLUTION STABLES
        </h1>
        <p className="mt-6 text-2xl font-light text-gray-200">
          Own the Experience
        </p>
      </section>

      {/* SECTION PLACEHOLDERS */}
      <section
        id="services"
        className="h-[60vh] flex items-center justify-center bg-gray-900 text-4xl font-bold"
      >
        Services
      </section>
      <section
        id="process"
        className="h-[60vh] flex items-center justify-center bg-gray-800 text-4xl font-bold"
      >
        Process
      </section>
      <section
        id="pricing"
        className="h-[60vh] flex items-center justify-center bg-gray-700 text-4xl font-bold"
      >
        Pricing
      </section>
      <section
        id="blog"
        className="h-[60vh] flex items-center justify-center bg-gray-600 text-4xl font-bold"
      >
        Blog
      </section>
      <section
        id="contact"
        className="h-[60vh] flex items-center justify-center bg-gray-500 text-4xl font-bold"
      >
        Contact
      </section>
    </div>
  );
}
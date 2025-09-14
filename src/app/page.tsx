import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white scroll-smooth">
      {/* Navbar */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 bg-black/80 backdrop-blur border-b border-gray-800">
        <div className="flex items-center">
          <Image src="/assets/Logo-Black.png" alt="Evolution Stables Logo" width={40} height={40} />
        </div>
        <nav aria-label="Main navigation" className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#services" className="hover:text-gold transition">
            Services
          </a>
          <a href="#process" className="hover:text-gold transition">
            Process
          </a>
          <a href="#pricing" className="hover:text-gold transition">
            Pricing
          </a>
          <a href="#blog" className="hover:text-gold transition">
            Blog
          </a>
          <a href="#contact" className="hover:text-gold transition">
            Contact
          </a>
        </nav>
        <button className="border border-gold text-gold hover:bg-gold hover:text-black px-4 py-2 rounded-md text-sm font-medium hidden md:block">
          Get Started / Login
        </button>
      </header>

      {/* Hero */}
      <section
        className="relative w-full flex items-center h-[80vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/assets/Horse-Double-Black.png')` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 text-center">
          <Image
            src="/assets/ES-Branded-Gold.png"
            alt="Evolution Stables Brand"
            width={400}
            height={150}
            className="mx-auto mb-6"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Excellence in Equine Care</h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gold text-black px-6 py-3 rounded-md font-medium shadow hover:shadow-lg">
              Get Started
            </button>
            <button className="border border-gold text-gold px-6 py-3 rounded-md font-medium hover:bg-gold hover:text-black">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section id="services" className="py-section bg-gray">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-gold mb-4">Premium Services</h2>
          <p className="text-gray max-w-2xl mx-auto">
            Experience excellence in equine care and management.
          </p>
        </div>
      </section>

      <section id="process" className="py-section bg-black">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-gold mb-4">Our Process</h2>
          <p className="text-gray max-w-2xl mx-auto">A seamless experience from start to finish.</p>
        </div>
      </section>

      <section id="pricing" className="py-section bg-gray">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-gold mb-4">Pricing</h2>
          <p className="text-gray max-w-2xl mx-auto">Flexible plans for every rider.</p>
        </div>
      </section>

      <section id="blog" className="py-section bg-black">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-gold mb-4">Blog</h2>
          <p className="text-gray max-w-2xl mx-auto">
            Stories and insights from Evolution Stables.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gold text-black text-center">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4">Ready to Own the Experience?</h2>
          <p className="mb-8">Join Evolution Stables today and start your journey.</p>
          <button className="bg-black text-gold px-6 py-3 rounded-md font-medium hover:bg-gray-900">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray py-12 text-center text-sm text-gray">
        <div className="container">
          <p>© 2025 Evolution Stables. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

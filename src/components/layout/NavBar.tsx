"use client";

import React from "react";
import Image from "next/image";

export default function NavBar() {
  return (
    <header className="fixed top-0 w-full bg-black text-gold px-6 md:px-12 py-4 flex items-center justify-between z-50 border-b border-white/5">
      {/* Left: Logo */}
      <div className="flex items-center">
        <Image src="/assets/Logo-Gold.png" alt="Evolution Stables Logo" width={48} height={48} className="w-12 h-12" />
      </div>

      {/* Center: Navigation Menu */}
      <nav className="hidden md:flex items-center space-x-6" aria-label="Main navigation">
        {["Home", "About", "Tokinvest", "News", "Events", "Contact", "My Stables"].map((item) => (
          <a
            key={item}
            href={`/${item.toLowerCase().replace(' ', '-')}`}
            className="text-gold font-ibm-plex font-medium hover:text-white transition-colors"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button className="text-gold" aria-label="Open menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Right: Auth Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <button className="text-gold font-ibm-plex font-medium hover:text-white transition-colors px-4 py-2">
          Login
        </button>
        <button className="bg-gold text-black font-ibm-plex font-medium px-4 py-2 rounded hover:bg-opacity-90 transition-colors">
          Sign Up
        </button>
      </div>
    </header>
  );
}

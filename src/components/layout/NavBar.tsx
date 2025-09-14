"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { navPaddingClasses } from "@/lib/layout";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 w-full bg-[#000000] text-gold ${navPaddingClasses} py-4 flex items-center justify-between z-50 border-b border-white/5`}
    >
      {/* Left: Logo */}
      <div className="flex items-center">
        <Image
          src="/assets/Logo-Gold.png"
          alt="Evolution Stables Logo"
          width={48}
          height={48}
          className="w-12 h-12"
        />
      </div>

      {/* Center: Navigation Menu - Desktop */}
      <nav className="flex items-center space-x-6" aria-label="Main navigation">
        {["Home", "About", "Tokinvest", "News", "Events", "Contact", "My Stables"].map((item) => (
          <a
            key={item}
            href={`/${item.toLowerCase().replace(" ", "-")}`}
            className="text-gold font-ibm-plex font-medium hover:text-white transition-colors"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gold hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Right: Auth Buttons - Desktop */}
      <div className="flex items-center space-x-4">
        <Button variant="ghost" className="text-gold hover:text-white hover:bg-white/10">
          Login
        </Button>
        <Button variant="default" className="bg-gold text-black hover:bg-gold/80">
          Get Started
        </Button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#000000] border-b border-white/5 md:hidden">
          <nav className="flex flex-col space-y-4 p-4" aria-label="Mobile navigation">
            {["Home", "About", "Tokinvest", "News", "Events", "Contact", "My Stables"].map(
              (item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="text-gold font-ibm-plex font-medium hover:text-white transition-colors block py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ),
            )}
            <div className="flex flex-col space-y-2 pt-4 border-t border-white/10">
              <Button
                variant="ghost"
                className="text-gold hover:text-white hover:bg-white/10 justify-start"
              >
                Login
              </Button>
              <Button
                variant="default"
                className="bg-gold text-black hover:bg-gold/80 justify-start"
              >
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

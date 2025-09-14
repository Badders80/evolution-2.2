"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
// import { useUser } from "@auth0/nextjs-auth0"; // Temporarily disabled

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const { user } = useUser() || {}; // Temporarily disabled

  return (
    <>
      <header
        className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 bg-black/80 backdrop-blur border-b border-gray-800"
        role="banner"
      >
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/assets/Logo-Gold.png" alt="Evolution Stables Logo" width={40} height={40} />
        </div>

        {/* Desktop Nav links */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium" aria-label="Main navigation">
          <a
            href="#services"
            className="text-gray hover:text-gold transition focus:outline-none focus:ring-2 focus:ring-gold"
          >
            Services
          </a>
          <a
            href="#process"
            className="text-gray hover:text-gold transition focus:outline-none focus:ring-2 focus:ring-gold"
          >
            Process
          </a>
          <a
            href="#pricing"
            className="text-gray hover:text-gold transition focus:outline-none focus:ring-2 focus:ring-gold"
          >
            Pricing
          </a>
          <a
            href="#blog"
            className="text-gray hover:text-gold transition focus:outline-none focus:ring-2 focus:ring-gold"
          >
            Blog
          </a>
          <a
            href="#contact"
            className="text-gray hover:text-gold transition focus:outline-none focus:ring-2 focus:ring-gold"
          >
            Contact
          </a>
          {/* {user && (
            <a
              href="/my-stables"
              className="text-gray hover:text-gold transition focus:outline-none focus:ring-2 focus:ring-gold"
            >
              My Stables
            </a>
          )} */}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-gold"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* CTA Button */}
        <Button
          className="hidden md:block ml-4"
          variant="outline"
          aria-label="Login" // Temporarily always shows Login
        >
          Login
        </Button>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden bg-black/90 backdrop-blur border-b border-gray-800"
          id="mobile-menu"
          role="menu"
        >
          <nav className="flex flex-col space-y-4 p-6" aria-label="Mobile navigation">
            <a
              href="#services"
              className="text-gray hover:text-gold transition focus:outline-none focus:ring-2 focus:ring-gold"
              onClick={() => setIsMenuOpen(false)}
              role="menuitem"
            >
              Services
            </a>
            <a
              href="#process"
              className="text-gray hover:text-gold transition focus:outline-none focus:ring-2 focus:ring-gold"
              onClick={() => setIsMenuOpen(false)}
              role="menuitem"
            >
              Process
            </a>
            <a
              href="#pricing"
              className="text-gray hover:text-gold transition focus:outline-none focus:ring-2 focus:ring-gold"
              onClick={() => setIsMenuOpen(false)}
              role="menuitem"
            >
              Pricing
            </a>
            <a
              href="#blog"
              className="text-gray hover:text-gold transition focus:outline-none focus:ring-2 focus:ring-gold"
              onClick={() => setIsMenuOpen(false)}
              role="menuitem"
            >
              Blog
            </a>
            <a
              href="#contact"
              className="text-gray hover:text-gold transition focus:outline-none focus:ring-2 focus:ring-gold"
              onClick={() => setIsMenuOpen(false)}
              role="menuitem"
            >
              Contact
            </a>
            {/* {user && (
              <a
                href="/my-stables"
                className="text-gray hover:text-gold transition focus:outline-none focus:ring-2 focus:ring-gold"
                onClick={() => setIsMenuOpen(false)}
                role="menuitem"
              >
                My Stables
              </a>
            )} */}
            <Button
              className="mt-4"
              variant="outline"
              aria-label="Login"
              onClick={() => setIsMenuOpen(false)}
              role="menuitem"
            >
              Login
            </Button>
          </nav>
        </div>
      )}
    </>
  );
};

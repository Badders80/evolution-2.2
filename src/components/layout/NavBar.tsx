"use client";

import React from "react";
import Image from "next/image";

export default function NavBar() {
  return (
    <header className="w-full bg-gray-200 flex items-center justify-between px-6 py-4">
      {/* Left: Logo */}
      <div className="flex items-center">
        <Image src="/assets/Logo-Black.png" alt="Evolution Stables Logo" width={40} height={40} />
      </div>

      {/* Center: Placeholder */}
      <nav className="text-center flex-1">
        <span className="text-black font-medium">Nav Bar</span>
      </nav>

      {/* Right: Login / CTA */}
      <div className="text-sm text-gray-700">Get Started / Login</div>
    </header>
  );
}

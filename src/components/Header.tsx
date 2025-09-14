"use client";
import React from "react";
import Link from "next/link";
// import { useUser } from "@auth0/nextjs-auth0";
import { Button } from "@/components/ui/button";

/**
 * The site header containing the logo, navigation links and auth buttons.
 */
export default function Header() {
  // Access the Auth0 user on the client; it will be undefined on the server.
  // const { user } = useUser() || {};

  return (
    <header className="bg-background text-foreground px-4 py-4 border-b border-gray">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="font-heading text-xl md:text-2xl">
          Evolution Stables
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/about" className="hover:text-gold">
            About
          </Link>
          <Link href="/tokinvest" className="hover:text-gold">
            Tokinvest
          </Link>
          <Link href="/news" className="hover:text-gold">
            News
          </Link>
          <Link href="/events" className="hover:text-gold">
            Events
          </Link>
          <Link href="/contact" className="hover:text-gold">
            Contact
          </Link>
          {/* {user && (
            <Link href="/my-stables" className="hover:text-gold">
              My Stables
            </Link>
          )} */}
        </nav>
        <div className="ml-4 flex items-center space-x-2">
          {/* {user ? (
            <Link href="/api/auth/logout">
              <Button variant="outline">Logout</Button>
            </Link>
          ) : (
            <Link href="/api/auth/login">
              <Button>Login</Button>
            </Link>
          )} */}
          <Button aria-label="Login">Login</Button>
        </div>
      </div>
    </header>
  );
}

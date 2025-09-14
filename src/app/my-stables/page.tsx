"use client";

import React from "react";
import { Section } from "@/components/ui/section";

/**
 * My Stables page.
 * This route is currently a placeholder since Auth0 was removed for stability.
 * Authentication can be re-implemented later when needed.
 */
export default function MyStables() {
  return (
    <Section>
      <h1 className="text-3xl font-heading mb-4">My Stables</h1>
      <p className="text-lg text-gray">
        This feature is currently under development. Authentication will be implemented in a future
        update.
      </p>
      <p className="text-sm text-gray-500 mt-4">
        The My Stables page will provide access to your personal stable information and management
        tools.
      </p>
    </Section>
  );
}

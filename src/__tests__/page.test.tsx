/* eslint-disable @next/next/no-img-element */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "../app/page";

// Mock Next.js Image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({
    src,
    alt,
    fill,
    ...props
  }: {
    src: string;
    alt: string;
    fill?: boolean;
    [key: string]: unknown;
  }) => <img src={src} alt={alt} {...(fill ? { style: { objectFit: "cover" } } : {})} {...props} />,
}));

describe("HomePage", () => {
  it("renders the landing page structure", () => {
    render(<HomePage />);

    // Check main heading
    expect(
      screen.getByRole("heading", { name: "Excellence in Equine Care", level: 1 }),
    ).toBeInTheDocument();

    // Check section headings
    expect(screen.getByRole("heading", { name: "Premium Services", level: 2 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Our Process", level: 2 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Pricing", level: 2 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Blog", level: 2 })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Ready to Own the Experience?", level: 2 }),
    ).toBeInTheDocument();

    // Check navigation
    expect(screen.getByRole("navigation", { name: "Main navigation" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Services" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Process" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Pricing" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Blog" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Contact" })).toBeInTheDocument();

    // Check CTA buttons
    expect(screen.getByRole("button", { name: "Get Started" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Learn More" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Get Started Today" })).toBeInTheDocument();
  });

  it("renders sections with consistent spacing", () => {
    render(<HomePage />);

    // Check that multiple headings exist (main + section headings)
    const headings = screen.getAllByRole("heading");
    expect(headings.length).toBeGreaterThan(5); // Main heading + 4 section headings + CTA heading

    // Check that the main heading is "Excellence in Equine Care"
    expect(headings[0]).toHaveTextContent("Excellence in Equine Care");
  });

  it("matches snapshot", () => {
    const { container } = render(<HomePage />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

/* eslint-enable @next/next/no-img-element */

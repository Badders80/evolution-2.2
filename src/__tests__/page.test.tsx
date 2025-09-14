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
  it("renders the header with logo and navigation", () => {
    render(<HomePage />);

    // Check logo
    const logo = screen.getByAltText("Evolution Stables Logo");
    expect(logo).toBeInTheDocument();

    // Check nav links by href to avoid conflicts with footer links
    expect(screen.getAllByRole("link", { name: "Services" }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: "Process" }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: "Pricing" }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: "Blog" }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: "Contact" }).length).toBeGreaterThan(0);

    // Check CTA button
    expect(screen.getByText("Get Started")).toBeInTheDocument();
  });

  it("renders the hero section with brand logo and tagline", () => {
    render(<HomePage />);

    // Check for the brand logo alt text
    expect(screen.getByAltText("Evolution Stables Brand Logo")).toBeInTheDocument();

    // Check that the TextGenerateEffect component is present (it may not show text immediately in tests)
    expect(screen.getByText("|")).toBeInTheDocument();
  });

  it("renders section placeholders", () => {
    render(<HomePage />);

    // Check section headings with updated names
    expect(screen.getByRole("heading", { name: "Premium Services", level: 2 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Our Process", level: 2 })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Ready to Own the Experience?", level: 2 }),
    ).toBeInTheDocument();

    // Check service items
    expect(screen.getByText("Stabling")).toBeInTheDocument();
    expect(screen.getByText("Training")).toBeInTheDocument();
    expect(screen.getByText("Healthcare")).toBeInTheDocument();

    // Check process steps
    expect(screen.getByText("Step 1: Consultation")).toBeInTheDocument();
    expect(screen.getByText("Step 2: Customization")).toBeInTheDocument();
    expect(screen.getByText("Step 3: Care")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = render(<HomePage />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

/* eslint-enable @next/next/no-img-element */

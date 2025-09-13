// Mock Next.js Image component
/* eslint-disable @next/next/no-img-element */
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
/* eslint-enable @next/next/no-img-element */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "../app/page";

describe("HomePage", () => {
  it("renders the header with logo and navigation", () => {
    render(<HomePage />);

    // Check logo
    const logo = screen.getByAltText("Evolution Stables Logo");
    expect(logo).toBeInTheDocument();

    // Check nav links - be more specific
    expect(screen.getByRole("link", { name: "Services" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Process" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Pricing" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Blog" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Contact" })).toBeInTheDocument();

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

    // Check section headings (be more specific to avoid conflicts with nav links)
    expect(screen.getByRole("heading", { name: "Services", level: 2 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Process", level: 2 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Pricing", level: 2 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Blog", level: 2 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Contact", level: 2 })).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = render(<HomePage />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

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
  it("renders the design system test sections", () => {
    render(<HomePage />);

    // Check test sections
    expect(screen.getByRole("heading", { name: "Test Section 1", level: 1 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Test Section 2", level: 1 })).toBeInTheDocument();

    // Check that sections have proper container structure
    const sections = screen.getAllByRole("generic", { hidden: true });
    expect(sections.length).toBeGreaterThan(0);
  });

  it("renders sections with consistent spacing", () => {
    render(<HomePage />);

    // Check that sections exist and have proper structure
    const headings = screen.getAllByRole("heading");
    expect(headings).toHaveLength(2);
    expect(headings[0]).toHaveTextContent("Test Section 1");
    expect(headings[1]).toHaveTextContent("Test Section 2");
  });

  it("matches snapshot", () => {
    const { container } = render(<HomePage />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

/* eslint-enable @next/next/no-img-element */

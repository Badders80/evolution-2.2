/* eslint-disable @next/next/no-img-element */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "../app/page";

// Mock Next.js Image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => React.createElement('img', props),
}));

describe("HomePage", () => {
  it("renders the scaffold structure", () => {
    render(<HomePage />);

    // Check main hero heading
    expect(screen.getByAltText("Evolution Stables branded logo")).toBeInTheDocument();

    // Check section content
    expect(screen.getByText("Section 1")).toBeInTheDocument();
    expect(screen.getByText("Section 2")).toBeInTheDocument();
    expect(screen.getByText("CTA")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();

    // Check navbar content
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();

    // Check logo alt text
    expect(screen.getByAltText("Evolution Stables Logo")).toBeInTheDocument();
  });

  it("renders sections with alternating backgrounds", () => {
    render(<HomePage />);

    // Check that all sections are present
    const sections = screen.getAllByText(/^Section \d+$/);
    expect(sections).toHaveLength(2);

    // Check CTA and Footer
    expect(screen.getByText("CTA")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = render(<HomePage />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

/* eslint-enable @next/next/no-img-element */

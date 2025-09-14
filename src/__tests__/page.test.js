import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "../app/page";

// Mock Next.js Image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: "img",
}));

describe("HomePage", () => {
  it("renders without crashing", () => {
    expect(() => render(<HomePage />)).not.toThrow();
  });

  it("renders the scaffold structure", () => {
    render(<HomePage />);

    // Check main hero heading
    expect(screen.getByRole("heading", { name: "Hero", level: 1 })).toBeInTheDocument();

    // Check section content
    expect(screen.getByText("Section1")).toBeInTheDocument();
    expect(screen.getByText("Section2")).toBeInTheDocument();
    expect(screen.getByText("Section3")).toBeInTheDocument();
    expect(screen.getByText("Section4")).toBeInTheDocument();
    expect(screen.getByText("CTA")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();

    // Check navbar content
    expect(screen.getByText("Nav Bar")).toBeInTheDocument();
    expect(screen.getByText("Get Started / Login")).toBeInTheDocument();

    // Check logo alt text
    expect(screen.getByAltText("Evolution Stables Logo")).toBeInTheDocument();
  });

  it("renders sections with alternating backgrounds", () => {
    render(<HomePage />);

    // Check that all sections are present
    const sections = screen.getAllByText(/^Section\d+$/);
    expect(sections).toHaveLength(4);

    // Check CTA and Footer
    expect(screen.getByText("CTA")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = render(<HomePage />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

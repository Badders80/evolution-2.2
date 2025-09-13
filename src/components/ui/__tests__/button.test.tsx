import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "../button";

describe("Button", () => {
  it("renders default variant", () => {
    const { asFragment } = render(<Button>Click me</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders outline variant", () => {
    const { asFragment } = render(<Button variant="outline">Click me</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders glow variant", () => {
    const { asFragment } = render(<Button variant="glow">Click me</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders large size", () => {
    const { asFragment } = render(<Button size="lg">Click me</Button>);
    expect(asFragment()).toMatchSnapshot();
  });
});

import React from "react";
import Header from "./Header";
import { render, screen } from "@testing-library/react";

describe("Test Button component", () => {
  it("Expects to find  HTML element with className test in the DOM", () => {
    render(<Header />);
    const linkElement = screen.getByText(/React/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("component should be displayed", () => {
    render(<Header />);
    const divider = screen.getByTestId("test");
    expect(divider).toBeVisible();
  });
});

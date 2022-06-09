import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import NoteCard from "./NoteCard";

test("component should be displayed", () => {
  const mockFunction = jest.fn();
  render(<NoteCard onClick={mockFunction} src="" alt="book card" />);
  const divider = screen.getByTestId("field");
  expect(divider).toBeVisible();
});

test("component should be displayed second time", () => {
  const mockFunction = jest.fn();
  render(<NoteCard onClick={mockFunction} src="" alt="book card" />);
  const buttons = screen.getAllByRole("button");
  buttons.forEach((button) => fireEvent.click(button));
});

import { screen, render } from "@testing-library/react";
import CustomTab from "./CustomTab";

test("component should be displayed", () => {
  const mockFunction = jest.fn();
  render(<CustomTab onChange={mockFunction} onDeletd={mockFunction} />);
  const divider = screen.getByTestId("test");
  expect(divider).toBeVisible();
});

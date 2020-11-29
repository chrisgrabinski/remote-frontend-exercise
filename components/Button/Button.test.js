import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button from "./";

test("calls a function when clicked", () => {
  const mockFn = jest.fn();

  render(<Button onClick={() => mockFn()}>This is a button</Button>);
  userEvent.click(screen.getByRole("button"));

  expect(mockFn).toHaveBeenCalled();
});

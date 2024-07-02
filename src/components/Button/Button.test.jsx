import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<Button variant="default" label="Hello world!" />);
  });

  test("The Button component is visible", () => {
    const { getByText } = render(<Button label="Hello world!" />);
    const buttonElement = getByText("Hello world!");
    expect(buttonElement).toBeVisible();
  });

  test("background color changes when the button is disabled", () => {
    const { getByText } = render(
      <Button label="Disabled Button" disabled />
    );
    const buttonElement = getByText("Disabled Button");
    expect(buttonElement).toHaveStyle("opacity: 0.6");
    expect(buttonElement).toHaveStyle("cursor: not-allowed");
  });
});
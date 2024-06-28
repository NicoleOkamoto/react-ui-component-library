import React from "react";
import { getByText, render } from "@testing-library/react";
import Label from "./Label";

describe("Label", () => {
  test("renders the Label component", () => {
    render(<Label fontSize="16px" text="Label Text" htmlFor="test" color="black" />);
  });

  test("Label component change color", () => {
    const { getByText } = render(<Label text="This is a label" htmlFor="www.google.com" color="black" fontSize="20px"/> );
    const labelElement = getByText("This is a label");
    expect(labelElement).toBeVisible();
    expect(labelElement).toHaveStyle("color: black");
  });

});

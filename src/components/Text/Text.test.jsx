import React from "react";
import { render, screen } from "@testing-library/react";
import Text from "./Text";

describe("Text", () => {
  test("renders the Text component", () => {
    render(<Text text="React has become a top choice for" textalign="justify" />);
    const textElement = screen.getByText(/React has become a top choice for/i);
    expect(textElement).toBeInTheDocument();
  });
});
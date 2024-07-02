import React from "react";
import { render } from "@testing-library/react";
import Dropdown from "./Dropdown";

describe("Dropdown", () => {
  test("Dropdown component is visible", () => {
    const { getByText } = render(
      <Dropdown
        id="exampleDropdown"
        name="exampleDropdown"
        options={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' }
        ]}
      />
    );
    const dropdownOption = getByText("Option 1");
    expect(dropdownOption).toBeInTheDocument();
  });

  test("Dropdown component changes background color when disabled and cursor is not allowed", () => {
    const { getByText, container } = render(
      <Dropdown
        disabled
        id="exampleDropdown"
        name="exampleDropdown"
        options={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' }
        ]}
      />
    );
    const dropdownOption = getByText("Option 1");
    expect(dropdownOption).toBeInTheDocument();
    const dropdownContainer = container.querySelector("select");
    expect(dropdownContainer).toHaveStyle("cursor: not-allowed");
    expect(dropdownContainer).toHaveStyle("opacity: 0.6");
  });
});

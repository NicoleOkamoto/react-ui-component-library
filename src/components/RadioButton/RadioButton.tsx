import React, { useState } from "react";
import styled, { css } from "styled-components";
import { RadioButtonProps } from "./RadioButton.types";

const StyledRadioButton = styled.input.attrs({ type: "radio" })<RadioButtonProps>`
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
    `}
`;

const RadioButton: React.FC<RadioButtonProps> = ({ name, value, disabled = false }) => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
  };

  return (
    <StyledRadioButton
      name={name}
      value={value}
      checked={checked}
      disabled={disabled}
      onClick={handleClick}
    />
  );
};

export default RadioButton;
// src/components/Label/Label.tsx
import React from "react";
import styled, { css } from "styled-components";
import { LabelProps } from "./Label.types";

const StyledLabel = styled.label<LabelProps>`
  color: ${(props) => props.color || "#333"};
  font-family: "Helvetica", sans-serif;
  font-size: ${(props) => props.fontSize || "22px"};
  font-weight: bold;
  display: inline-block;
  margin: 10px 5px;
  paddind: 10px 10px;
  cursor: pointer;

  ${(props) =>
    props.disabled &&
   css`
     opacity: 0.6; // Example: reduce opacity for disabled state
     cursor: not-allowed;
   `}

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const Label: React.FC<LabelProps> = ({ text, color, fontSize, htmlFor, disabled = false, }) => {
  return (
    <StyledLabel color={color} fontSize={fontSize} htmlFor={htmlFor} text={text} disabled={disabled}>
      {text}
    </StyledLabel>
  );
};

export default Label;

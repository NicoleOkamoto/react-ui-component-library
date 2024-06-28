// src/components/Label/Label.tsx
import React from "react";
import styled, { css } from "styled-components";
import { LabelProps } from "./Label.types";

const StyledLabel = styled.label<LabelProps>`
  color: ${(props) => props.color || "black"};
  font-family: "Helvetica", sans-serif;
  font-size: ${(props) => props.fontSize || "18px"};
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
  margin: 5px 3px;
  padding: 5px 5px;
  }

  @media (max-width: 480px) {
  margin: 5px 0px;
  padding: 0px 0px;
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

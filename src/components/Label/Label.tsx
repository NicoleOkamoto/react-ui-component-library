// src/components/Label/Label.tsx
import React from "react";
import styled from "styled-components";
import { LabelProps } from "./Label.types";

const StyledLabel = styled.label<LabelProps>`
  color: ${(props) => props.color || "black"};
  font-family: "Helvetica", sans-serif;
  font-size: ${(props) => props.fontSize || "18px"};
  display: inline-block;
  margin: 10px 5px;
  paddind: 10px 10px;
  cursor: pointer;

  @media (max-width: 768px) {
  margin: 5px 3px;
  paddind: 5px 5px;
  }

  @media (max-width: 480px) {
  margin: 5px 0px;
  paddind: 0px 0px;
  }
`;

const Label: React.FC<LabelProps> = ({ text, color, fontSize, htmlFor }) => {
  return (
    <StyledLabel color={color} fontSize={fontSize} htmlFor={htmlFor} text={text}>
      {text}
    </StyledLabel>
  );
};

export default Label;

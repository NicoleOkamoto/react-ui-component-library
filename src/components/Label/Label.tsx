// src/components/Label/Label.tsx
import React from "react";
import styled from "styled-components";
import { LabelProps } from "./Label.types";

const StyledLabel = styled.label<LabelProps>`
  color: ${(props) => props.color || "black"};
  font-family: "Helvetica", sans-serif;
  font-size: ${(props) => props.fontSize || "16px"};
  display: inline-block;
  margin: 5px 0;
`;

const Label: React.FC<LabelProps> = ({ text, color, fontSize, htmlFor }) => {
  return (
    <StyledLabel color={color} fontSize={fontSize} htmlFor={htmlFor} text={text} >
      {text}
    </StyledLabel>
  );
};

export default Label;

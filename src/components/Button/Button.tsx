import React from "react";
import styled from "styled-components";

export interface ButtonProps {
  label: string;
  backgroundColor: string;
}

// Define styled component with ButtonProps
const StyledButton = styled.button<ButtonProps>`
  font-size: 60px;
  background-color: ${(props) => props.backgroundColor};
  color: white;
  border-radius: 40px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;

// Destructure label and backgroundColor from props
const Button: React.FC<ButtonProps> = ({ label, backgroundColor }) => {
  return (
    <StyledButton backgroundColor={backgroundColor} label={label}>
      {label}
    </StyledButton>
  );
};

export default Button;


// button {
//   font-size: 24px;
//   background-color: black;
//   color: white;
//   border-radius: 40px;
//   padding: 10px 20px;
//   border: none;
//   cursor: pointer;
// }
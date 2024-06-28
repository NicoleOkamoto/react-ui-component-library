import React from "react";
import styled, { css } from "styled-components";
import { ButtonProps } from './Button.types';


const StyledButton = styled.button<ButtonProps>`
  font-size: 24px;
  border-radius: 40px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;

  ${(props) =>
    props.variant === "default" &&
    css`
      background-color: ${props.backgroundColor};
      color: white;
    `}

  ${(props) =>
    props.variant === "outlined" &&
    css`
      background-color: transparent;
      border: 2px solid ${props.backgroundColor};
      color: ${props.backgroundColor};
    `}

  ${(props) =>
    props.variant === "text" &&
    css`
      background-color: transparent;
      color: ${props.backgroundColor};
    `}

   ${(props) =>
      props.disabled &&
     css`
       opacity: 0.6; // Example: reduce opacity for disabled state
       cursor: not-allowed;
     `}

   @media (max-width: 768px) {
    font-size: 18px;
    padding: 8px 16px;
  }

   @media (max-width: 480px) {
    font-size: 16px;
    padding: 6px 12px;
  }
`;

const Button: React.FC<ButtonProps> = ({ label, backgroundColor, variant = "default", disabled = false, }) => {
  return (
    <StyledButton backgroundColor={backgroundColor} variant={variant} label={label} disabled={disabled}>
      {label}
    </StyledButton>
  );
};

export default Button;
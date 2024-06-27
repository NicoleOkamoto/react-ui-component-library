import React from "react";
import styled, { css } from "styled-components";

export interface ButtonProps {
  label: string;
  backgroundColor: string;
  variant?: "default" | "outlined" | "text"; // Define possible variants
  disabled?: boolean;
}

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
`;

const Button: React.FC<ButtonProps> = ({ label, backgroundColor, variant = "default", disabled = false, }) => {
  return (
    <StyledButton backgroundColor={backgroundColor} variant={variant} label={label} disabled={disabled}>
      {label}
    </StyledButton>
  );
};

export default Button;


// import React from "react";
// import styled from "styled-components";

// export interface ButtonProps {
//   label: string;
//   backgroundColor: string;
// }

// // Define styled component with ButtonProps
// const StyledButton = styled.button<ButtonProps>`
//   font-size: 60px;
//   background-color: ${(props) => props.backgroundColor};
//   color: white;
//   border-radius: 40px;
//   padding: 10px 20px;
//   border: none;
//   cursor: pointer;
// `;

// // Destructure label and backgroundColor from props
// const Button: React.FC<ButtonProps> = ({ label, backgroundColor }) => {
//   return (
//     <StyledButton backgroundColor={backgroundColor} label={label}>
//       {label}
//     </StyledButton>
//   );
// };

// export default Button;


// button {
//   font-size: 24px;
//   background-color: black;
//   color: white;
//   border-radius: 40px;
//   padding: 10px 20px;
//   border: none;
//   cursor: pointer;
// }
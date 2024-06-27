import React from "react";
import './Button.css';

export interface ButtonProps {
  label: string;
  backgroundColor: string;
}

const Button = (props: ButtonProps) => {
  const { label, backgroundColor } = props;

  return (
    <button style={{ backgroundColor }}>
      {label}
    </button>
  );
};

export default Button;
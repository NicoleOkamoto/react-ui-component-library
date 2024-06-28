import React from "react";
import styled, { css } from "styled-components";
import { DropdownProps } from './Dropdown.types';

const StyledDropdown = styled.select<DropdownProps>`
  font-size: 26px;
  border-radius: 40px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  background-color: #ffffff;
  color: #333;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background-color: #f1f1f1;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  }

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

const Dropdown: React.FC<DropdownProps> = ({ name, id, options, disabled = false, }) => {
  return (
    <div>
        <StyledDropdown name={name} id={id} options={options} disabled={disabled}>
         {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
        </option>
        ))}
      </StyledDropdown>
    </div>
  );
};

export default Dropdown;

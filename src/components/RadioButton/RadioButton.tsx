import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const StyledRadioButton = styled.input.attrs({
  type: 'radio',
})<RadioButtonProps>`
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.6;
    `}
`;
const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  type,
  value,
  disabled = false,
}) => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  return (
    <StyledRadioButton
      type={type}
      name={name}
      value={value}
      checked={checked}
      disabled={disabled}
      onChange={handleClick}
    />
  );
};

export default RadioButton;

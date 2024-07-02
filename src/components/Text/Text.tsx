import React from 'react';
import styled, { css } from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.div<TextProps>`
  color: ${(props) => props.color || 'black'};
  font-family: 'Helvetica', sans-serif;
  font-size: ${(props) => props.fontSize || '14px'};
  text-align: ${(props) => props.textAlign || 'left'};
  margin: 8px 4px;
  padding: 10px 20px;

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
    `}

  @media (max-width: 768px) {
    margin: 6px 3px;
    padding: 6px 0px;
  }

  @media (max-width: 480px) {
    margin: 0px 0px;
    padding: 0px 0px;
  }
`;

const Text: React.FC<TextProps> = ({
  text,
  color,
  fontSize,
  textAlign,
  disabled = false,
}) => {
  return (
    <StyledText
      color={color}
      fontSize={fontSize}
      textAlign={textAlign}
      disabled={disabled}
      text={text}
    >
      {text}
    </StyledText>
  );
};

export default Text;

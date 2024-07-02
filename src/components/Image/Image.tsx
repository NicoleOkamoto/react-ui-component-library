import React from 'react';
import styled, { css } from 'styled-components';
import { ImageProps } from './Image.types';

const StyledImage = styled.img<ImageProps>`
  height: ${(props) => (props.height ? props.height : 'auto')};
  width: ${(props) => (props.width ? props.width : 'auto')};

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.6;
      filter: grayscale(100%);
      pointer-events: none;
    `}
`;

const Image: React.FC<ImageProps> = ({ src, alt, width, height, disabled }) => {
  return (
    <StyledImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      disabled={disabled}
    />
  );
};

export default Image;

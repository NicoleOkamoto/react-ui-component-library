import React from "react";
import styled from "styled-components";
import { ImageProps } from "./Image.types";

const StyledImage = styled.img<ImageProps>`
  height: ${(props) => (props.height ? props.height : 'auto')};
  width: ${(props) => (props.width ? props.width : 'auto')};
`;

const Image: React.FC<ImageProps> = ({ src, alt, width, height }) => {

  return (
    <StyledImage
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default Image;
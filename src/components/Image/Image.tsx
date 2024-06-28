import React from "react";
import styled from "styled-components";
import { ImageProps } from "./Image.types";

const StyledImage = styled.img<ImageProps>`
  max-width: 300px;
  height: auto;
  ${(props) => props.width && `width: ${props.width};`}
  ${(props) => props.height && `height: ${props.height};`}
`;

const Image: React.FC<ImageProps> = ({ src, alt }) => {

  return (
    <StyledImage
      src={src}
      alt={alt}
    />
  );
};

export default Image;
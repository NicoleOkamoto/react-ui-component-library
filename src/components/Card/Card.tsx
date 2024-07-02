import React from 'react';
import styled, { css } from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.div<{ disabled?: boolean; variant?: 'default' | 'imageRight' }>`
  display: flex;
  flex-direction: ${({ variant }) => (variant === 'imageRight' ? 'row' : 'column')};
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: #e0e0e0;
      cursor: not-allowed;
      color: #a0a0a0;
    `}
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0 0 20px 0;
`;

const CTAButton = styled.a<{ disabled?: boolean }>`
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #000080;
  color: #fff;
  border-radius: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  margin-top: 20px;

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: #a0a0a0;
      cursor: not-allowed;
      pointer-events: none;
    `}
`;

const Content = styled.div<{ variant?: 'default' | 'imageRight' }>`
  flex: 1;
  padding: ${({ variant }) => (variant === 'imageRight' ? '20px' : '0')};
  text-align: ${({ variant }) => (variant === 'imageRight' ? 'left' : 'center')};
`;

const ImageRight = styled.div<{ image: string }>`
  flex: 1;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  min-height: 200px;
  border-radius: 8px;

  @media (max-width: 768px) {
    min-height: 150px;
  }
`;

const ImagesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Image = styled.div<{ src: string }>`
  width: 100%;
  height: 200px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
`;

const ImageText = styled.p`
  margin: 10px 0 0 0;
  font-size: 16px;
`;

const Card: React.FC<CardProps> = ({ title, images, ctaText, ctaLink, disabled = false, variant = 'default' }) => {
  return (
    <StyledCard disabled={disabled} variant={variant}>
      <Content variant={variant}>
        <Title>{title}</Title>
        {variant === 'default' && (
          <ImagesContainer>
            {images.map((image, index) => (
              <ImageWrapper key={index}>
                <Image src={image.src} />
                <ImageText>{image.text}</ImageText>
              </ImageWrapper>
            ))}
          </ImagesContainer>
        )}
        {variant === 'imageRight' && (
          <>
            {images[0].text && <ImageText>{images[0].text}</ImageText>}
            {ctaText && ctaLink && (
              <CTAButton href={ctaLink} disabled={disabled}>
                {ctaText}
              </CTAButton>
            )}
          </>
        )}
      </Content>
      {variant === 'imageRight' && <ImageRight image={images[0].src} />}
    </StyledCard>
  );
};

export default Card;
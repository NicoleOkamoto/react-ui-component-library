import React from 'react';
import styled, { css } from 'styled-components';
import { HeroProps } from './Hero.types';

const StyledHero = styled.div<{ backgroundImage: string; disabled?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 600px;
  width: 1200px;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover; /* Cover the entire container */
  background-position: center;
  color: white;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden; /* Ensure the background image doesn't overflow */

  ${(props) =>
    props.disabled &&
    css`
      background-color: #e0e0e0;
      background-image: none;
      cursor: not-allowed;
      color: #a0a0a0;
    `}

  @media (max-width: 768px) {
    min-height: 150px;
    min-width: 300px;
  }

  @media (max-width: 576px) {
    min-height: 100px;
    min-width: 200px;
    padding: 10px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1; /* Ensure content appears above the overlay */
`;

const Title = styled.h1`
  font-size: 48px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 36px; /* Adjust font size for smaller screens */
  }
`;

const Subtitle = styled.h2`
  font-size: 24px;
  margin: 10px 0 20px;

  @media (max-width: 768px) {
    font-size: 18px; /* Adjust font size for smaller screens */
  }
`;

const CTAButton = styled.a<{ disabled?: boolean }>`
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  color: black;
  background-color: #fff;
  border-radius: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  ${(props) =>
    props.disabled &&
    css`
      background-color: #a0a0a0;
      cursor: not-allowed;
      pointer-events: none;
    `}

  @media (max-width: 768px) {
    font-size: 14px; /* Adjust font size for smaller screens */
    padding: 8px 16px; /* Adjust padding for smaller screens */
  }
`;

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  ctaText,
  ctaLink,
  disabled = false,
}) => {
  return (
    <StyledHero backgroundImage={backgroundImage} disabled={disabled}>
      <Overlay />
      <ContentWrapper>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        {ctaText && ctaLink && (
          <CTAButton href={ctaLink} disabled={disabled}>
            {ctaText}
          </CTAButton>
        )}
      </ContentWrapper>
    </StyledHero>
  );
};

export default Hero;

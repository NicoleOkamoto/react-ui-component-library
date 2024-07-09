import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  test('Card element is visible', () => {
    const { getByText } = render(
      <Card
        ctaLink="Test"
        ctaText="Learn More"
        images={[
          {
            src: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies tortor ac mi maximus, ac tempor arcu consectetur. Phasellus sit amet dolor interdum, accumsan nisi nec, bibendum ligula. Praesent ut molestie orci. Pellentesque vitae finibus nibh, sit amet tristique est. Quisque a commodo augue. Cras nec fringilla mauris. Nam nunc neque, luctus ut dui id, tempor rhoncus nunc. Cras consectetur nisi eu eros placerat tincidunt.',
          },
        ]}
        title="Sample Card"
        variant="imageRight"
      />,
    );
    const cardElement = getByText('Sample Card');
    expect(cardElement).toBeVisible();
  });

  test('The card component change background color when disabled and cursor is not allowed', () => {
    const { container } = render(
      <Card
        ctaLink="Test"
        ctaText="Learn More"
        disabled
        images={[
          {
            src: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies tortor ac mi maximus, ac tempor arcu consectetur. Phasellus sit amet dolor interdum, accumsan nisi nec, bibendum ligula. Praesent ut molestie orci. Pellentesque vitae finibus nibh, sit amet tristique est. Quisque a commodo augue. Cras nec fringilla mauris. Nam nunc neque, luctus ut dui id, tempor rhoncus nunc. Cras consectetur nisi eu eros placerat tincidunt.',
          },
        ]}
        title="Disabled Sample Card"
        variant="imageRight"
      />,
    );
    const cardContainer = container.firstChild;
    expect(cardContainer).toHaveStyle('cursor: not-allowed');
    expect(cardContainer).toHaveStyle('background-color: #e0e0e0');
  });
});

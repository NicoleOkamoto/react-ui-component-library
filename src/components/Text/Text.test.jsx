import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from './Text';

describe('Text', () => {
  test('renders the Text component', () => {
    render(
      <Text text="React has become a top choice for" textalign="justify" />,
    );
    const textElement = screen.getByText(/React has become a top choice for/i);
    expect(textElement).toBeInTheDocument();
  });

  test('Text component change background color when disabled and cursor is not allowed', () => {
    const { getByText } = render(
      <Text
        color="black"
        disabled
        fontSize="16px"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        textAlign="justify"
      />,
    );
    const textElement = getByText(
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    );
    expect(textElement).toBeVisible();
    expect(textElement).toHaveStyle('cursor: not-allowed');
    expect(textElement).toHaveStyle('opacity: 0.6');
  });
});

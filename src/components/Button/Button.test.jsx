import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  test('Button component is visible', () => {
    const { getByText } = render(<Button label="Hello world!" />);
    const buttonElement = getByText('Hello world!');
    expect(buttonElement).toBeVisible();
  });

  test('Button component change background color when disabled and cursor is not allowed', () => {
    const { getByText } = render(<Button label="Disabled Button" disabled />);
    const buttonElement = getByText('Disabled Button');
    expect(buttonElement).toHaveStyle('opacity: 0.6');
    expect(buttonElement).toHaveStyle('cursor: not-allowed');
  });
});

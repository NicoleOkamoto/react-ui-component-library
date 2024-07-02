import React from 'react';
import { render } from '@testing-library/react';
import RadioButton from './RadioButton';

describe('RadioButton', () => {
  test('Button component is visible', () => {
    const { getByRole } = render(
      <RadioButton name="options" type="radio" value="option1" />,
    );

    const radioButton = getByRole('radio');
    expect(radioButton).toBeVisible();
  });

  test('Button component changes background color when disabled and cursor is not allowed', () => {
    const { getByRole } = render(
      <RadioButton disabled name="options" value="option1" />,
    );

    const radioButton = getByRole('radio');
    expect(radioButton).toHaveStyle('cursor: not-allowed');
    expect(radioButton).toHaveStyle('opacity: 0.6;');
  });
});

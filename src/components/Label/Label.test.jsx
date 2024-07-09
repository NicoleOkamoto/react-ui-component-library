import React from 'react';
import { render } from '@testing-library/react';
import Label from './Label';

describe('Label', () => {
  test('Label component is visible', () => {
    const { getByText } = render(
      <Label fontSize="16px" text="Label Text" htmlFor="test" color="black" />,
    );
    const label = getByText('Label Text');
    expect(label).toBeVisible();
  });

  test('Label component change background color when disabled and cursor is not allowed', () => {
    const { getByText } = render(
      <Label color="black" disabled fontSize="16px" text="Label Text" />,
    );
    const labelElement = getByText('Label Text');
    expect(labelElement).toBeVisible();
    expect(labelElement).toHaveStyle('cursor: not-allowed');
    expect(labelElement).toHaveStyle('opacity: 0.6');
  });
});

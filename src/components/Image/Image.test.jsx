import React from 'react';
import { render } from '@testing-library/react';
import Image from './Image';

describe('Image', () => {
  test('Image component is visible', () => {
    const { getByAltText } = render(
      <Image
        alt="React"
        height="300px"
        src="https://reactjs.org/logo-og.png"
        width="500px"
      />,
    );
    const imageComponent = getByAltText('React');
    expect(imageComponent).toBeInTheDocument();
  });

  test('Image component gray out when disabled', () => {
    const { getByAltText } = render(
      <Image
        alt="Disabled React"
        disabled
        height="300px"
        src="https://reactjs.org/logo-og.png"
        width="500px"
      />,
    );
    const imageComponent = getByAltText('Disabled React');
    expect(imageComponent).toHaveStyle('filter: grayscale(100%)');
  });
});

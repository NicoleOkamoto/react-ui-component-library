import React from 'react';
import { render } from '@testing-library/react';
import Table from './Table';

describe('Table', () => {
  test('Table component is visible', () => {
    const { getByRole } = render(
      <Table
        caption="Demonstration purpose:"
        data={[
          {
            Age: 28,
            Email: 'aline@example.com',
            Name: 'Nicole Goncalves',
          },
          {
            Age: 32,
            Email: 'oka@example.com',
            Name: 'Aline Okamoto',
          },
        ]}
        headers={['Name', 'Age', 'Email']}
      />,
    );

    const table = getByRole('table');
    expect(table).toBeVisible();
  });

  test('Table component changes background color when disabled', () => {
    const { getByRole } = render(
      <Table
        caption="Demonstration purpose:"
        data={[
          {
            Age: 28,
            Email: 'aline@example.com',
            Name: 'Nicole Goncalves',
          },
          {
            Age: 32,
            Email: 'oka@example.com',
            Name: 'Aline Okamoto',
          },
        ]}
        headers={['Name', 'Age', 'Email']}
        disabled={true}
      />,
    );

    const table = getByRole('table');
    expect(table).toHaveStyle('background-color: #e0e0e0');
  });
});

import type { Meta, StoryObj } from '@storybook/react';
import Table from './Table';

const meta: Meta<typeof Table> = {
  title: 'ReactComponentLibrary/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    caption: 'Demonstration purpose:',
    headers: ['Name', 'Age', 'Email'],
    data: [
      { Name: 'Nicole Goncalves', Age: 28, Email: 'aline@example.com' },
      { Name: 'Aline Okamoto', Age: 32, Email: 'oka@example.com' },
    ],
  },
};

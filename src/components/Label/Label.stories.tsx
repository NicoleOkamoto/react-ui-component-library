import type { Meta, StoryObj } from '@storybook/react';

import Label from './Label';

const meta = {
  title: 'ReactComponentLibrary/Label',
  component: Label,
  argTypes: {
    text: { control: 'text' },
    color: { control: 'color' },
    fontSize: { control: 'text' },
    htmlFor: { control: 'text' },
  },

  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Label Text',
    color: 'black',
    fontSize: '16px',
    disabled: false,
  },
};

export const Colored: Story = {
  args: {
    text: 'Colored Label',
    color: 'blue',
    fontSize: '16px',
    disabled: false,
  },
};

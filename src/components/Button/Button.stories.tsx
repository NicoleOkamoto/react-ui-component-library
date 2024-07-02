import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'ReactComponentLibrary/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Button',
    backgroundColor: '#000080',
    disabled: false,
  },
};

export const Outlined: Story = {
  args: {
    label: "Outlined Button",
    backgroundColor: "#000080",
    variant: "outlined",
    disabled: false,
  },
};

export const Invisible: Story = {
  args: {
    label: "Invisible Button",
    backgroundColor: "#000080",
    variant: "text",
    disabled: false,
  },
};




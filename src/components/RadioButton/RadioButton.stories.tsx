// RadioButton.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import RadioButton from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'ReactComponentLibrary/RadioButton',
  component: RadioButton,
  argTypes: {
    name: { control: 'text' },
    value: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'options',
    value: 'option1',
    checked: false,
    disabled: false,
  },
};

export const Checked: Story = {
  args: {
    name: 'options',
    value: 'option1',
    checked: true,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    name: 'options',
    value: 'option1',
    checked: false,
    disabled: true,
  },
};

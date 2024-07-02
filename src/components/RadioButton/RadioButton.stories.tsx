// RadioButton.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import RadioButton from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'ReactComponentLibrary/RadioButton',
  component: RadioButton,
  argTypes: {
    name: { control: 'text' },
    value: { control: 'text' },
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
    type: 'radio',
    name: 'options',
    value: 'option1',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    type: 'radio',
    name: 'options',
    value: 'option1',
    disabled: true,
  },
};

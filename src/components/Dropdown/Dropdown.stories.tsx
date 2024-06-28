import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'ReactComponentLibrary/Dropdown',
  component: Dropdown,
  argTypes: {
    name: { control: 'text' },
    id: { control: 'text' },
    options: { control: 'object' },
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
    name: 'exampleDropdown',
    id: 'exampleDropdown',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    name: 'exampleDropdown',
    id: 'exampleDropdown',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
    disabled: true,
  },
};

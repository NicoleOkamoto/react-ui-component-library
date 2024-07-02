import React from '@storybook/react';
import { Meta, StoryObj } from '@storybook/react/types-6-0';
import Image from './Image';

const meta = {
  title: 'ReactComponentLibrary/Image',
  component: Image,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Image>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://reactjs.org/logo-og.png',
    alt: 'React',
  },
};

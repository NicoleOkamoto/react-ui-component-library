import { Meta, StoryObj } from '@storybook/react';
import Hero from './Hero';


const meta = {
  title: 'ReactComponentLibrary/Hero',
  component: Hero,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Hero>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  title: 'Meet Nicole...',
  subtitle: 'Full Stack Web Developer',
  backgroundImage: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ctaText: 'Learn More',
  ctaLink: '#',
}
};

export const Disabled: Story = {
  args: {
  title: 'Meet Nicole...',
  subtitle: 'Full Stack Web Developer',
  backgroundImage: 'https://via.placeholder.com/1200x400',
  ctaText: 'Learn More',
  ctaLink: '#',
  disabled: true,
  }
};

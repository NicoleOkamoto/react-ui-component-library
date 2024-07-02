import { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta = {
  title: 'ReactComponentLibrary/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    title: 'Sample Card',
    images: [
      { src: 'https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaG5vbG9neSUyMGZyZWV8ZW58MHx8MHx8fDA%3D', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies tortor ac mi maximus, ac tempor arcu consectetur. Phasellus sit amet dolor interdum, accumsan nisi nec, bibendum ligula. Praesent ut molestie orci. Pellentesque vitae finibus nibh, sit amet tristique est. Quisque a commodo augue. Cras nec fringilla mauris. Nam nunc neque, luctus ut dui id, tempor rhoncus nunc. Cras consectetur nisi eu eros placerat tincidunt.' },
      { src: 'https://images.unsplash.com/photo-1628329567705-f8f7150c3cff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaG5vbG9neSUyMGZyZWV8ZW58MHx8MHx8fDA%3D', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies tortor ac mi maximus, ac tempor arcu consectetur. Phasellus sit amet dolor interdum, accumsan nisi nec, bibendum ligula. Praesent ut molestie orci. Pellentesque vitae finibus nibh, sit amet tristique est. Quisque a commodo augue. Cras nec fringilla mauris. Nam nunc neque, luctus ut dui id, tempor rhoncus nunc. Cras consectetur nisi eu eros placerat tincidunt.' },
      { src: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya3xlbnwwfHwwfHx8MA%3D%3D', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies tortor ac mi maximus, ac tempor arcu consectetur. Phasellus sit amet dolor interdum, accumsan nisi nec, bibendum ligula. Praesent ut molestie orci. Pellentesque vitae finibus nibh, sit amet tristique est. Quisque a commodo augue. Cras nec fringilla mauris. Nam nunc neque, luctus ut dui id, tempor rhoncus nunc. Cras consectetur nisi eu eros placerat tincidunt.' },
    ],
    variant: 'default',
    }
  };

export const ImageRight: Story = {
  args: {
    title: 'Sample Card',
    images: [
      { src: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies tortor ac mi maximus, ac tempor arcu consectetur. Phasellus sit amet dolor interdum, accumsan nisi nec, bibendum ligula. Praesent ut molestie orci. Pellentesque vitae finibus nibh, sit amet tristique est. Quisque a commodo augue. Cras nec fringilla mauris. Nam nunc neque, luctus ut dui id, tempor rhoncus nunc. Cras consectetur nisi eu eros placerat tincidunt.' },
    ],
    ctaText: 'Learn More',
    ctaLink: 'Test',
    variant: 'imageRight',
  }
};

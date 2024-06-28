import React from "@storybook/react";
import { Meta, StoryObj } from "@storybook/react/types-6-0";
import Image from "./Image";

const meta = {
  title: "ReactComponentLibrary/Image",
  component: Image,
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Image>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  src: "./panagenics.png",
  alt: "Example Image"
  }
};
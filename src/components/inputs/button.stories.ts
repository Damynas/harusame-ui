import type { Meta, StoryObj } from '@storybook/react';
import Button from './button';

const meta = {
  title: 'Components/Inputs/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    label: {
      control: { type: 'text' }
    },
    variant: {
      control: { type: 'select' },
      options: ['contained', 'outlined', 'text'],
      defaultValue: { summary: 'contained' }
    }
  },
  args: {
    label: 'Button',
    variant: 'contained'
  }
} satisfies Meta<typeof meta>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Contained: Story = {
  args: {
    variant: 'contained'
  }
};

export const Outlined: Story = {
  args: {
    variant: 'outlined'
  }
};

export const Text: Story = {
  args: {
    variant: 'text'
  }
};

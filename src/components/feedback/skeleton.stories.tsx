import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Feedback/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    height: {
      control: { type: 'text' },
      defaultValue: {
        summary: '1.5rem'
      }
    },
    borderRadius: {
      control: { type: 'text' },
      defaultValue: {
        summary: '0.25rem'
      }
    }
  },
  args: {
    width: '20rem',
    height: '1.5rem',
    borderRadius: '0.25rem'
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: (args) => <Skeleton {...args} />
};

const Example: Story = {
  ...Template
};

export { Example };

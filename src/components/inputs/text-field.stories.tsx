import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './text-field';
import { TextFieldConstants } from './text-field.constants';

const meta: Meta<typeof TextField> = {
  title: 'Components/Inputs/Text Field',
  component: TextField,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: Object.getOwnPropertyNames(TextFieldConstants.TEXT_FIELD_SIZES)
    },
    borderRadius: {
      control: { type: 'text' },
      defaultValue: { summary: '0.25rem' }
    }
  },
  args: {
    label: TextFieldConstants.DISPLAY_NAME,
    required: false,
    disabled: false,
    borderRadius: '0.25rem'
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: (args) => <TextField {...args} />
};

const Example: Story = {
  ...Template
};

export { Example };

import type { Meta, StoryObj } from '@storybook/react';
import { NumberField } from './number-field';
import { NumberFieldConstants } from './number-field.constants';
import { TextFieldConstants } from './text-field.constants';

const meta: Meta<typeof NumberField> = {
  title: 'Components/Inputs/Number Field',
  component: NumberField,
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
    label: NumberFieldConstants.DISPLAY_NAME,
    required: false,
    disabled: false,
    allowNegative: false,
    allowDecimal: false,
    borderRadius: '0.25rem'
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: (args) => <NumberField {...args} />
};

const Example: Story = {
  ...Template
};

export { Example };

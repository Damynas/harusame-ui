import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { ButtonConstants } from './button.constants';
import { CloseIcon } from '@common/icons';
import { ButtonBaseConstants } from './button-base.constants';

const meta: Meta<typeof Button> = {
  title: 'Components/Inputs/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    text: {
      control: { type: 'text' }
    },
    variant: {
      control: { type: 'select' },
      options: Object.getOwnPropertyNames(ButtonConstants.BUTTON_VARIANTS),
      defaultValue: { summary: ButtonConstants.DEFAULT_BUTTON_VARIANT }
    },
    size: {
      control: { type: 'select' },
      options: Object.getOwnPropertyNames(ButtonBaseConstants.BUTTON_SIZES),
      defaultValue: { summary: ButtonBaseConstants.DEFAULT_BUTTON_SIZE }
    },
    loading: {
      control: { type: 'boolean' }
    },
    disabled: {
      control: { type: 'boolean' }
    },
    borderRadius: {
      control: { type: 'text' },
      defaultValue: { summary: '0.25rem' }
    },
    leadingIcon: {
      table: { disable: true }
    },
    trailingIcon: {
      table: { disable: true }
    }
  },
  args: {
    text: ButtonConstants.DISPLAY_NAME,
    variant: ButtonConstants.DEFAULT_BUTTON_VARIANT,
    size: ButtonBaseConstants.DEFAULT_BUTTON_SIZE,
    loading: false,
    disabled: false,
    borderRadius: '0.25rem'
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: (args) => <Button {...args} />
};

const Contained: Story = {
  ...Template,
  args: {
    variant: ButtonConstants.BUTTON_VARIANTS.contained
  }
};

const Outlined: Story = {
  ...Template,
  args: {
    variant: ButtonConstants.BUTTON_VARIANTS.outlined
  }
};

const Text: Story = {
  ...Template,
  args: {
    variant: ButtonConstants.BUTTON_VARIANTS.text
  }
};

const LeadingIcon: Story = {
  ...Template,
  args: {
    leadingIcon: <CloseIcon />
  }
};

const TrailingIcon: Story = {
  ...Template,
  args: {
    trailingIcon: <CloseIcon />
  }
};

export { Contained, Outlined, Text, LeadingIcon, TrailingIcon };

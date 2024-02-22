import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { ButtonConstants } from './button.constants';

const meta: Meta<typeof Button> = {
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
      options: Object.getOwnPropertyNames(ButtonConstants.BUTTON_VARIANTS),
      defaultValue: { summary: ButtonConstants.DEFAULT_BUTTON_VARIANT }
    }
  },
  args: {
    label: ButtonConstants.DISPLAY_NAME,
    variant: ButtonConstants.DEFAULT_BUTTON_VARIANT
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

export { Contained, Outlined, Text };

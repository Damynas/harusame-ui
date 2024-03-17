import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './icon-button';
import { ButtonBaseConstants } from './button-base.constants';
import { CloseIcon } from '../../../common/icons';

const meta: Meta<typeof IconButton> = {
  title: 'Components/Inputs/Icon Button',
  component: IconButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    icon: {
      table: { disable: true }
    },
    variant: {
      control: { type: 'select' },
      options: Object.getOwnPropertyNames(ButtonBaseConstants.BUTTON_VARIANTS),
      defaultValue: { summary: ButtonBaseConstants.DEFAULT_BUTTON_VARIANT }
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
    }
  },
  args: {
    icon: <CloseIcon />,
    variant: ButtonBaseConstants.DEFAULT_BUTTON_VARIANT,
    size: ButtonBaseConstants.DEFAULT_BUTTON_SIZE,
    loading: false,
    disabled: false,
    borderRadius: '0.25rem'
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: (args) => <IconButton {...args} />
};

const Contained: Story = {
  ...Template,
  args: {
    variant: ButtonBaseConstants.BUTTON_VARIANTS.contained
  }
};

const Outlined: Story = {
  ...Template,
  args: {
    variant: ButtonBaseConstants.BUTTON_VARIANTS.outlined
  }
};

const Text: Story = {
  ...Template,
  args: {
    variant: ButtonBaseConstants.BUTTON_VARIANTS.text
  }
};

export { Contained, Outlined, Text };

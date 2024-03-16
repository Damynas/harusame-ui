import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './text';
import { TextConstants } from './text.constants';
import { BoxLayout } from '../layouts';

const meta: Meta<typeof Text> = {
  title: 'Components/Data Display/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: Object.getOwnPropertyNames(TextConstants.TEXT_VARIANTS),
      defaultValue: { summary: TextConstants.DEFAULT_TEXT_VARIANT }
    },
    fontWeight: {
      control: { type: 'select' },
      options: Object.getOwnPropertyNames(TextConstants.FONT_WEIGHTS),
      defaultValue: { summary: TextConstants.DEFAULT_FONT_WEIGHT }
    },
    truncate: {
      control: { type: 'boolean' }
    },
    selectionDisabled: {
      control: { type: 'boolean' }
    }
  },
  args: {
    variant: TextConstants.DEFAULT_TEXT_VARIANT,
    fontWeight: TextConstants.DEFAULT_FONT_WEIGHT,
    truncate: false,
    selectionDisabled: false
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: (args) => (
    <Text {...args}>The quick brown fox jumps over the lazy dog.</Text>
  )
};

const Heading1: Story = {
  ...Template,
  args: {
    variant: TextConstants.TEXT_VARIANTS.heading1
  }
};

const Heading2: Story = {
  ...Template,
  args: {
    variant: TextConstants.TEXT_VARIANTS.heading2
  }
};

const Heading3: Story = {
  ...Template,
  args: {
    variant: TextConstants.TEXT_VARIANTS.heading3
  }
};

const Heading4: Story = {
  ...Template,
  args: {
    variant: TextConstants.TEXT_VARIANTS.heading4
  }
};

const Heading5: Story = {
  ...Template,
  args: {
    variant: TextConstants.TEXT_VARIANTS.heading5
  }
};

const Heading6: Story = {
  ...Template,
  args: {
    variant: TextConstants.TEXT_VARIANTS.heading6
  }
};

const Body1: Story = {
  ...Template,
  args: {
    variant: TextConstants.TEXT_VARIANTS.body1
  }
};

const Body2: Story = {
  ...Template,
  args: {
    variant: TextConstants.TEXT_VARIANTS.body2
  }
};

const Caption1: Story = {
  ...Template,
  args: {
    variant: TextConstants.TEXT_VARIANTS.caption1
  }
};

const Caption2: Story = {
  ...Template,
  args: {
    variant: TextConstants.TEXT_VARIANTS.caption2
  }
};

const Truncated: Story = {
  args: {
    truncate: true
  },
  render: (args) => (
    <BoxLayout width='11.5rem'>
      <Text {...args}>The quick brown fox jumps over the lazy dog.</Text>
    </BoxLayout>
  )
};

export {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Body1,
  Body2,
  Caption1,
  Caption2,
  Truncated
};

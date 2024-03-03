import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from './separator';
import { SeparatorConstants } from './separator.constants';
import { BoxLayout } from '..';

const meta: Meta<typeof Separator> = {
  title: 'Components/Data Display/Separator',
  component: Separator,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: Object.getOwnPropertyNames(SeparatorConstants.ORIENTATION),
      defaultValue: {
        summary: SeparatorConstants.DEFAULT_ORIENTATION
      }
    },
    color: {
      control: { type: 'color' }
    },
    size: {
      control: { type: 'text' },
      defaultValue: {
        summary: SeparatorConstants.DEFAULT_SEPARATOR_SIZE
      }
    }
  },
  args: {
    orientation: SeparatorConstants.DEFAULT_ORIENTATION,
    size: SeparatorConstants.DEFAULT_SEPARATOR_SIZE
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: (args) => (
    <BoxLayout
      {...(args.orientation === SeparatorConstants.ORIENTATION.vertical
        ? { horizontalAlignment: 'center' }
        : { verticalAlignment: 'center' })}
      width='25rem'
      height='3rem'
    >
      <Separator {...args} />
    </BoxLayout>
  )
};

const Horizontal: Story = {
  ...Template,
  args: {
    orientation: SeparatorConstants.ORIENTATION.horizontal
  }
};

const Vertical: Story = {
  ...Template,
  args: {
    orientation: SeparatorConstants.ORIENTATION.vertical
  }
};

export { Horizontal, Vertical };

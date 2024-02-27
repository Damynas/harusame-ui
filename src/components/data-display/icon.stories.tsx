import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './icon';
import { IconConstants } from './icon.constants';

const meta: Meta<typeof Icon> = {
  title: 'Components/Data Display/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    color: {
      control: { type: 'color' }
    },
    size: {
      control: { type: 'text' },
      defaultValue: { summary: IconConstants.DEFAULT_ICON_SIZE }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: (args) => (
    <Icon {...args}>
      <path
        d='M0 0h24v24H0V0z'
        fill='none'
      />
      <path d='M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z' />
    </Icon>
  )
};

const Example: Story = {
  ...Template
};

export { Example };

import type { Meta, StoryObj } from '@storybook/react';
import { DottedProgressIndicator } from './dotted-progress-indicator';
import { DottedProgressIndicatorConstants } from './dotted-progress-indicator.constants';

const meta: Meta<typeof DottedProgressIndicator> = {
  title: 'Components/Feedback/Dotted Progress Indicator',
  component: DottedProgressIndicator,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    color: {
      control: { type: 'color' }
    },
    size: {
      control: { type: 'select' },
      options: Object.getOwnPropertyNames(
        DottedProgressIndicatorConstants.DOTTED_PROGRESS_INDICATOR_SIZES
      ),
      defaultValue: {
        summary:
          DottedProgressIndicatorConstants.DEFAULT_DOTTED_PROGRESS_INDICATOR_SIZE
      }
    }
  },
  args: {
    size: DottedProgressIndicatorConstants.DEFAULT_DOTTED_PROGRESS_INDICATOR_SIZE
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: (args) => <DottedProgressIndicator {...args} />
};

const Example: Story = {
  ...Template
};

export { Example };

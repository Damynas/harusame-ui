import type { Meta, StoryObj } from '@storybook/react';
import { StackLayout, WrapLayout } from '@components/layouts';
import { convertCase } from '@utils/case-converter';
import { Text } from '@components/data-display';
import * as Icons from '../icons';

const meta: Meta = {
  title: 'Design System/Icons',
  parameters: {
    layout: 'centered'
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  render: () => (
    <WrapLayout
      rowGap='1rem'
      columnGap='1rem'
      horizontalAlignment='left'
      verticalAlignment='top'
    >
      {Object.entries(Icons).map(([name, Icon]) => (
        <StackLayout
          key={name}
          orientation='vertical'
          horizontalAlignment='center'
          verticalAlignment='center'
          width='6.25rem'
        >
          <Icon />
          <Text>{convertCase(name, 'pascalCase', 'titleCase')}</Text>
        </StackLayout>
      ))}
    </WrapLayout>
  )
};

export { Default };

import type { Meta, StoryObj } from '@storybook/react';
import { StackLayout, WrapLayout } from '../../components/layouts';
import { convertCase } from '../../utils';
import { Text } from '../../components/data-display';
import * as Icons from '../icons';

const meta: Meta = {
  title: 'Design System/Icons',
  parameters: {
    layout: 'padded'
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  render: () => (
    <WrapLayout
      padding='3rem'
      rowGap='1rem'
      columnGap='1rem'
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

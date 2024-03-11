import type { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';
import { commonColors, useTheme, type Theme } from '@common/theme';
import type { Nullable } from '@common/shared';
import { BoxLayout } from './box-layout';
import { BoxLayoutConstants } from './box-layout.constants';

const meta: Meta<typeof BoxLayout> = {
  title: 'Components/Layouts/Box Layout',
  component: BoxLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    horizontalAlignment: {
      control: { type: 'select' },
      options: Object.getOwnPropertyNames(
        BoxLayoutConstants.HORIZONTAL_ALIGNMENTS
      ),
      defaultValue: { summary: BoxLayoutConstants.DEFAULT_HORIZONTAL_ALIGNMENT }
    },
    verticalAlignment: {
      control: { type: 'select' },
      options: Object.getOwnPropertyNames(
        BoxLayoutConstants.VERTICAL_ALIGNMENTS
      ),
      defaultValue: { summary: BoxLayoutConstants.DEFAULT_VERTICAL_ALIGNMENT }
    },
    margin: {
      control: { type: 'text' }
    },
    padding: {
      control: { type: 'text' }
    },
    minWidth: {
      control: { type: 'text' }
    },
    minHeight: {
      control: { type: 'text' }
    },
    width: {
      control: { type: 'text' }
    },
    height: {
      control: { type: 'text' }
    },
    maxWidth: {
      control: { type: 'text' }
    },
    maxHeight: {
      control: { type: 'text' }
    },
    backgroundColor: {
      control: { type: 'color' }
    },
    border: {
      control: { type: 'text' }
    },
    borderRadius: {
      control: { type: 'text' }
    }
  },
  args: {
    horizontalAlignment: BoxLayoutConstants.DEFAULT_HORIZONTAL_ALIGNMENT,
    verticalAlignment: BoxLayoutConstants.DEFAULT_VERTICAL_ALIGNMENT,
    margin: '0.5rem',
    padding: '0.5rem',
    width: '16rem',
    height: '16rem',
    border: '0.06rem solid black'
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

const SquareBase = styled.div<{ $theme?: Nullable<Theme> }>`
  min-width: 3rem;
  min-height: 3rem;
  background-color: ${(props) =>
    props.$theme?.colors.primary500 ?? commonColors.black};
`;

const Square = () => {
  const theme = useTheme();
  return <SquareBase $theme={theme} />;
};

const Template: Story = {
  render: (args) => (
    <BoxLayout {...args}>
      <Square />
    </BoxLayout>
  )
};

const Stretched: Story = {
  ...Template,
  args: {
    horizontalAlignment: BoxLayoutConstants.HORIZONTAL_ALIGNMENTS.stretch,
    verticalAlignment: BoxLayoutConstants.VERTICAL_ALIGNMENTS.stretch
  }
};

const Centered: Story = {
  ...Template,
  args: {
    horizontalAlignment: BoxLayoutConstants.HORIZONTAL_ALIGNMENTS.center,
    verticalAlignment: BoxLayoutConstants.VERTICAL_ALIGNMENTS.center
  }
};

export { Stretched, Centered };

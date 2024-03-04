import type { Meta, StoryObj } from '@storybook/react';
import styled, { css } from 'styled-components';
import { useTheme, type Theme } from '@common/theme';
import type { Nullable } from '@common/shared';
import { StackLayout } from './stack-layout';
import { StackLayoutConstants } from './stack-layout.constants';

const meta: Meta<typeof StackLayout> = {
  title: 'Components/Layouts/Stack Layout',
  component: StackLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: Object.getOwnPropertyNames(StackLayoutConstants.ORIENTATION),
      defaultValue: {
        summary: StackLayoutConstants.DEFAULT_ORIENTATION
      }
    },
    horizontalAlignment: {
      control: { type: 'select' },
      options: Object.getOwnPropertyNames(
        StackLayoutConstants.HORIZONTAL_ALIGNMENT
      ),
      defaultValue: {
        summary: StackLayoutConstants.DEFAULT_HORIZONTAL_ALIGNMENT
      }
    },
    verticalAlignment: {
      control: { type: 'select' },
      options: Object.getOwnPropertyNames(
        StackLayoutConstants.VERTICAL_ALIGNMENT
      ),
      defaultValue: { summary: StackLayoutConstants.DEFAULT_VERTICAL_ALIGNMENT }
    },
    gap: {
      control: { type: 'text' }
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
    orientation: StackLayoutConstants.DEFAULT_ORIENTATION,
    horizontalAlignment: StackLayoutConstants.DEFAULT_HORIZONTAL_ALIGNMENT,
    verticalAlignment: StackLayoutConstants.DEFAULT_VERTICAL_ALIGNMENT,
    gap: '0.5rem',
    margin: '0.5rem',
    padding: '0.5rem',
    minWidth: '22rem',
    minHeight: '16rem',
    border: '0.06rem solid black'
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

const SquareBase = styled.div<{ $theme?: Nullable<Theme> }>`
  min-width: 3rem;
  min-height: 3rem;
  ${(props) =>
    props.$theme &&
    css`
      background-color: ${props.$theme.colors.primary500};
    `}
`;

const Square = () => {
  const theme = useTheme();
  return <SquareBase $theme={theme} />;
};

const Template: Story = {
  render: (args) => (
    <StackLayout {...args}>
      {Array.from({ length: 3 }).map((_, index) => (
        <Square key={index} />
      ))}
    </StackLayout>
  )
};

const Horizontal: Story = {
  ...Template,
  args: {
    orientation: StackLayoutConstants.ORIENTATION.horizontal
  }
};

const Vertical: Story = {
  ...Template,
  args: {
    orientation: StackLayoutConstants.ORIENTATION.vertical
  }
};

export { Horizontal, Vertical };
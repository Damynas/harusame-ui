import type { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';
import { commonColors, useTheme, type Theme } from '../../common/theme';
import type { Nullable } from '../../common/shared';
import { WrapLayout } from './wrap-layout';
import { WrapLayoutConstants } from './wrap-layout.constants';
import { Fragment } from 'react';

const meta: Meta<typeof WrapLayout> = {
  title: 'Components/Layouts/Wrap Layout',
  component: WrapLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: Object.getOwnPropertyNames(WrapLayoutConstants.ORIENTATIONS),
      defaultValue: {
        summary: WrapLayoutConstants.DEFAULT_ORIENTATION
      }
    },
    horizontalAlignment: {
      control: { type: 'select' },
      options: Object.getOwnPropertyNames(
        WrapLayoutConstants.HORIZONTAL_ALIGNMENTS
      ),
      defaultValue: {
        summary: WrapLayoutConstants.DEFAULT_HORIZONTAL_ALIGNMENT
      }
    },
    verticalAlignment: {
      control: { type: 'select' },
      options: Object.getOwnPropertyNames(
        WrapLayoutConstants.VERTICAL_ALIGNMENTS
      ),
      defaultValue: { summary: WrapLayoutConstants.DEFAULT_VERTICAL_ALIGNMENT }
    },
    rowGap: {
      control: { type: 'text' }
    },
    columnGap: {
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
    orientation: WrapLayoutConstants.DEFAULT_ORIENTATION,
    horizontalAlignment: WrapLayoutConstants.DEFAULT_HORIZONTAL_ALIGNMENT,
    verticalAlignment: WrapLayoutConstants.DEFAULT_VERTICAL_ALIGNMENT,
    rowGap: '0.5rem',
    columnGap: '0.5rem',
    margin: '0.5rem',
    padding: '0.5rem',
    border: `0.06rem solid ${commonColors.black}`
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

const RectangleBase = styled.div<{ $theme?: Nullable<Theme> }>`
  min-width: 4rem;
  min-height: 2rem;
  background-color: ${(props) =>
    props.$theme?.colors.neutral500 ?? commonColors.gray};
`;

const Rectangle = () => {
  const theme = useTheme();
  return <RectangleBase $theme={theme} />;
};

const Template: Story = {
  render: (args) => (
    <WrapLayout {...args}>
      {Array.from({ length: 12 }).map((_, index) => (
        <Fragment key={index}>
          <Square key={`square-${index}`} />
          <Rectangle key={`rectangle-${index}`} />
        </Fragment>
      ))}
    </WrapLayout>
  )
};

const Horizontal: Story = {
  ...Template,
  args: {
    orientation: WrapLayoutConstants.ORIENTATIONS.horizontal
  }
};

const Vertical: Story = {
  ...Template,
  args: {
    orientation: WrapLayoutConstants.ORIENTATIONS.vertical
  }
};

export { Horizontal, Vertical };

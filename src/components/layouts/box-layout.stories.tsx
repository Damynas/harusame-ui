import type { Meta, StoryObj } from '@storybook/react';
import styled, { css } from 'styled-components';
import { useTheme, type Theme } from '@common/theme';
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
        BoxLayoutConstants.HORIZONTAL_ALIGNMENT
      ),
      defaultValue: { summary: BoxLayoutConstants.DEFAULT_HORIZONTAL_ALIGNMENT }
    },
    verticalAlignment: {
      control: { type: 'select' },
      options: Object.getOwnPropertyNames(
        BoxLayoutConstants.VERTICAL_ALIGNMENT
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
    width: '19.75rem',
    height: '19.75rem',
    border: '0.06rem solid black'
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

const BoxBase = styled.div<{ $theme?: Nullable<Theme> }>`
  min-width: 6.25rem;
  min-height: 6.25rem;
  ${(props) =>
    props.$theme &&
    css`
      background-color: ${props.$theme.colors.primary500};
    `}
`;

const Box = () => {
  const theme = useTheme();
  return <BoxBase $theme={theme} />;
};

const Template: Story = {
  render: (args) => (
    <BoxLayout {...args}>
      <Box />
    </BoxLayout>
  )
};

const Stretched: Story = {
  ...Template,
  args: {
    horizontalAlignment: BoxLayoutConstants.HORIZONTAL_ALIGNMENT.stretch,
    verticalAlignment: BoxLayoutConstants.VERTICAL_ALIGNMENT.stretch
  }
};

const Centered: Story = {
  ...Template,
  args: {
    horizontalAlignment: BoxLayoutConstants.HORIZONTAL_ALIGNMENT.center,
    verticalAlignment: BoxLayoutConstants.VERTICAL_ALIGNMENT.center
  }
};

export { Stretched, Centered };

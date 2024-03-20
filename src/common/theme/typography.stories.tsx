import type { Meta, StoryObj } from '@storybook/react';
import { Fragment } from 'react';
import { typography, type Typography } from './typography';
import { TypographyConstants } from './typography.constants';
import { FontStyle } from './typography.types';
import { Themes } from './themes';
import type { ThemeVariant } from './themes.types';
import { StackLayout } from '../../components/layouts';
import { Separator, Text } from '../../components/data-display';
import type { FontWeight } from '../../components/data-display/text.types';
import { convertCase } from '../../utils';

const meta: Meta = {
  title: 'Design System/Typography',
  parameters: {
    layout: 'padded'
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

const renderTypographyBlock = (
  typography: Typography,
  fontStyle: FontStyle
) => {
  const fontStyleTypography = typography?.[fontStyle];
  if (!fontStyleTypography) return;
  return (
    <StackLayout
      key={fontStyle}
      orientation='vertical'
      gap='0.5rem'
    >
      <Text
        variant='heading2'
        fontWeight='black'
      >
        {convertCase(fontStyle, 'camelCase', 'titleCase')}
      </Text>
      <StackLayout
        gap='0.5rem'
        horizontalAlignment='left'
      >
        <Text
          variant='heading6'
          fontWeight='bold'
        >
          {fontStyleTypography.fontFamily}
        </Text>
        <Separator orientation='vertical' />
        <Text
          variant='heading6'
          fontWeight='bold'
        >
          {fontStyleTypography.fontSize}
        </Text>
        <Separator orientation='vertical' />
        <Text
          variant='heading6'
          fontWeight='bold'
        >
          {fontStyleTypography.lineHeight}
        </Text>
      </StackLayout>
      <Separator />
      <StackLayout
        horizontalAlignment='left'
        gap='0.5rem'
      >
        {Object.getOwnPropertyNames(fontStyleTypography.fontWeights).map(
          (fontWeight, index) => (
            <Fragment key={`${fontStyle}-${fontWeight}`}>
              {index !== 0 && <Separator orientation='vertical' />}
              <StackLayout
                orientation='vertical'
                horizontalAlignment='left'
                width='25rem'
                gap='0.5rem'
              >
                <Text
                  variant='heading6'
                  fontWeight='bold'
                >
                  {convertCase(fontWeight, 'camelCase', 'titleCase')}
                </Text>
                <Text
                  variant={fontStyle}
                  fontWeight={fontWeight as FontWeight}
                >
                  The quick brown fox jumps over the lazy dog.
                </Text>
              </StackLayout>
            </Fragment>
          )
        )}
      </StackLayout>
    </StackLayout>
  );
};

const renderTypography = (typography: Typography) => {
  const fontStyles = Object.getOwnPropertyNames(
    TypographyConstants.FONT_STYLES
  ) as FontStyle[];
  return (
    <StackLayout
      orientation='vertical'
      gap='2rem'
      padding='1rem'
      maxWidth='80rem'
    >
      {fontStyles.map((fontStyle) =>
        renderTypographyBlock(typography, fontStyle)
      )}
    </StackLayout>
  );
};

const Default: Story = {
  render: (_, context) => {
    const themeName = convertCase(
      context.globals.theme,
      'titleCase',
      'camelCase'
    ) as ThemeVariant;
    const theme = Themes[themeName];
    return renderTypography(theme?.typography ?? typography);
  }
};

export { Default };

import type { Meta, StoryObj } from '@storybook/react';
import type { ReactNode } from 'react';
import {
  commonColors,
  feedbackColors,
  type CommonColors,
  type FeedbackColors,
  type ThemeColors
} from './colors';
import { ColorConstants } from './colors.constants';
import type { CommonColor, FeedbackColor, ThemeColor } from './colors.types';
import { Themes } from './themes';
import type { ThemeVariant } from './themes.types';
import { BoxLayout, StackLayout, WrapLayout } from '../../components/layouts';
import { Text } from '../../components/data-display';
import { convertCase } from '../../utils';

const meta: Meta = {
  title: 'Design System/Colors',
  parameters: {
    layout: 'padded'
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

type Color = {
  name: string;
  value?: string;
  textColor?: string;
  hasBorder?: boolean;
};

const renderColor = (color: Color) => {
  return (
    <StackLayout
      key={color.name}
      orientation='vertical'
      verticalAlignment='spaceBetween'
      padding='0.5rem'
      width='10rem'
      height='3.5rem'
      backgroundColor={color.value}
      border={color.hasBorder ? `0.06rem solid ${commonColors.black}` : 'none'}
    >
      <BoxLayout
        horizontalAlignment='left'
        verticalAlignment='top'
      >
        <Text
          variant='body1'
          fontWeight='bold'
          color={color.textColor}
        >
          {color.name}
        </Text>
      </BoxLayout>
      <BoxLayout
        horizontalAlignment='right'
        verticalAlignment='bottom'
      >
        <Text
          variant='body2'
          color={color.textColor}
        >
          {color.value}
        </Text>
      </BoxLayout>
    </StackLayout>
  );
};

const renderPalette = (paletteName: string, colors: Color[]) => {
  return (
    <WrapLayout
      key={paletteName}
      horizontalAlignment='left'
    >
      {colors.map(renderColor)}
    </WrapLayout>
  );
};

const renderPaletteGroup = (groupName: string, palettes: ReactNode) => {
  return (
    <StackLayout
      orientation='vertical'
      padding='0.5rem 0'
      width='100%'
      gap='1rem'
    >
      <Text
        variant='heading3'
        fontWeight='bold'
      >
        {groupName}
      </Text>
      {palettes}
    </StackLayout>
  );
};

const renderThemeColors = (colors: ThemeColors) => {
  const themeColorNames = Object.getOwnPropertyNames(
    ColorConstants.THEME_COLORS
  ) as ThemeColor[];
  const palettes = themeColorNames.map((colorName) => {
    const filteredColors = Object.getOwnPropertyNames(colors).filter((color) =>
      color.startsWith(colorName)
    ) as (keyof ThemeColors)[];
    const paletteColors = filteredColors.map((colorName) => {
      const color: Color = {
        name: colorName,
        value: colors[colorName]
      };
      return color;
    });
    return renderPalette(colorName, paletteColors);
  });
  return renderPaletteGroup('Theme Colors', palettes);
};

const renderFeedbackColors = (colors: FeedbackColors) => {
  const feedbackColorNames = Object.getOwnPropertyNames(
    ColorConstants.FEEDBACK_COLORS
  ) as FeedbackColor[];
  const palettes = feedbackColorNames.map((colorName) => {
    const filteredColors = Object.getOwnPropertyNames(colors).filter((color) =>
      color.startsWith(colorName)
    ) as (keyof FeedbackColors)[];
    const paletteColors = filteredColors.map((colorName) => {
      const color: Color = {
        name: colorName,
        value: colors[colorName]
      };
      return color;
    });
    return renderPalette(colorName, paletteColors);
  });
  return renderPaletteGroup('Feedback Colors', palettes);
};

const renderCommonColors = (colors: CommonColors) => {
  const commonColorNames = Object.getOwnPropertyNames(
    ColorConstants.COMMON_COLORS
  ) as CommonColor[];
  const paletteColors = commonColorNames.map((colorName) => {
    const color: Color = {
      name: colorName,
      value: colors[colorName]
    };
    if (colorName === ColorConstants.COMMON_COLORS.black) {
      color.textColor = commonColors.white;
    }
    if (colorName === ColorConstants.COMMON_COLORS.white) {
      color.hasBorder = true;
    }
    return color;
  });
  const palette = renderPalette('common', paletteColors);
  return renderPaletteGroup('Common Colors', palette);
};

const Default: Story = {
  render: (_, context) => {
    const themeName = convertCase(
      context.globals.theme,
      'titleCase',
      'camelCase'
    ) as ThemeVariant;
    const theme = Themes[themeName];
    return (
      <StackLayout
        orientation='vertical'
        width='100%'
        padding='3rem'
        horizontalAlignment='left'
        gap='1rem'
      >
        {theme && renderThemeColors(theme.colors)}
        {renderFeedbackColors(theme?.colors ?? feedbackColors)}
        {renderCommonColors(theme?.colors ?? commonColors)}
      </StackLayout>
    );
  }
};

export { Default };

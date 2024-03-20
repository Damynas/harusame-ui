import styled, { css } from 'styled-components';
import { TextConstants } from './text.constants';
import type { FontWeight } from './text.types';
import type { Nullable } from '../../common/shared';
import { commonColors, typography, type Theme } from '../../common/theme';
import { FontStyle } from '../../common/theme/typography.types';

type StyledTextProps = {
  $color?: string;
  $truncate?: boolean;
  $selectionDisabled?: boolean;
  $fontWeight?: FontWeight;
  $theme: Nullable<Theme>;
};

type StyledText = typeof TextBase;

const getTypography = (
  theme: Nullable<Theme>,
  fontStyle: FontStyle,
  fontWeight?: FontWeight
) => css`
  font-size: ${theme?.typography?.[fontStyle].fontSize ??
  typography?.[fontStyle].fontSize};
  font-family: ${theme?.typography?.[fontStyle].fontFamily ??
  typography?.[fontStyle].fontFamily};
  line-height: ${theme?.typography?.[fontStyle].lineHeight ??
  typography?.[fontStyle].lineHeight};
  font-weight: ${theme?.typography?.[fontStyle].fontWeights[
    fontWeight ?? TextConstants.DEFAULT_FONT_WEIGHT
  ] ??
  typography?.[fontStyle].fontWeights[
    fontWeight ?? TextConstants.DEFAULT_FONT_WEIGHT
  ]};
`;

const TextBase = styled.span<StyledTextProps>`
  margin: 0;
  padding: 0;
  color: ${(props) =>
    props.$color ?? props.$theme?.colors.black ?? commonColors.black};
  ${(props) =>
    props.$truncate &&
    css`
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    `}
  ${(props) =>
    props.$selectionDisabled &&
    css`
      user-select: none;
    `}
`;

const Heading1 = styled(TextBase)`
  ${(props) => getTypography(props.$theme, 'heading1', props.$fontWeight)}
`;

const Heading2 = styled(TextBase)`
  ${(props) => getTypography(props.$theme, 'heading2', props.$fontWeight)}
`;

const Heading3 = styled(TextBase)`
  ${(props) => getTypography(props.$theme, 'heading3', props.$fontWeight)}
`;

const Heading4 = styled(TextBase)`
  ${(props) => getTypography(props.$theme, 'heading4', props.$fontWeight)}
`;

const Heading5 = styled(TextBase)`
  ${(props) => getTypography(props.$theme, 'heading5', props.$fontWeight)}
`;

const Heading6 = styled(TextBase)`
  ${(props) => getTypography(props.$theme, 'heading6', props.$fontWeight)}
`;

const Body1 = styled(TextBase)`
  ${(props) => getTypography(props.$theme, 'body1', props.$fontWeight)}
`;

const Body2 = styled(TextBase)`
  ${(props) => getTypography(props.$theme, 'body2', props.$fontWeight)}
`;

const Caption1 = styled(TextBase)`
  ${(props) => getTypography(props.$theme, 'caption1', props.$fontWeight)}
`;

const Caption2 = styled(TextBase)`
  ${(props) => getTypography(props.$theme, 'caption2', props.$fontWeight)}
`;

export {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Body1,
  Body2,
  Caption1,
  Caption2
};
export type { StyledText };

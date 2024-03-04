import styled, { css } from 'styled-components';
import { TextConstants } from './text.constants';
import type { FontWeight } from './text.types';
import type { Nullable } from '@common/shared';
import { commonColors, type Theme } from '@common/theme';

type StyledTextProps = {
  $color?: string;
  $truncate?: boolean;
  $selectionDisabled?: boolean;
  $fontWeight?: FontWeight;
  $theme: Nullable<Theme>;
};

type StyledText = typeof TextBase;

const TextBase = styled.span<StyledTextProps>`
  margin: 0;
  padding: 0;
  color: ${(props) =>
    props.color ?? props.$theme?.colors.black ?? commonColors.black};
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
  ${(props) =>
    props.$theme?.typography &&
    css`
      font-size: ${props.$theme.typography.heading1.fontSize};
      font-family: ${props.$theme.typography.heading1.fontFamily};
      line-height: ${props.$theme.typography.heading1.lineHeight};
      font-weight: ${props.$theme.typography.heading1.fontWeights[
        props.$fontWeight ?? TextConstants.DEFAULT_FONT_WEIGHT
      ]};
    `}
`;

const Heading2 = styled(TextBase)`
  ${(props) =>
    props.$theme?.typography &&
    css`
      font-size: ${props.$theme.typography.heading2.fontSize};
      font-family: ${props.$theme.typography.heading2.fontFamily};
      line-height: ${props.$theme.typography.heading2.lineHeight};
      font-weight: ${props.$theme.typography.heading2.fontWeights[
        props.$fontWeight ?? TextConstants.DEFAULT_FONT_WEIGHT
      ]};
    `}
`;

const Heading3 = styled(TextBase)`
  ${(props) =>
    props.$theme?.typography &&
    css`
      font-size: ${props.$theme.typography.heading3.fontSize};
      font-family: ${props.$theme.typography.heading3.fontFamily};
      line-height: ${props.$theme.typography.heading3.lineHeight};
      font-weight: ${props.$theme.typography.heading3.fontWeights[
        props.$fontWeight ?? TextConstants.DEFAULT_FONT_WEIGHT
      ]};
    `}
`;

const Heading4 = styled(TextBase)`
  ${(props) =>
    props.$theme?.typography &&
    css`
      font-size: ${props.$theme.typography.heading4.fontSize};
      font-family: ${props.$theme.typography.heading4.fontFamily};
      line-height: ${props.$theme.typography.heading4.lineHeight};
      font-weight: ${props.$theme.typography.heading4.fontWeights[
        props.$fontWeight ?? TextConstants.DEFAULT_FONT_WEIGHT
      ]};
    `}
`;

const Heading5 = styled(TextBase)`
  ${(props) =>
    props.$theme?.typography &&
    css`
      font-size: ${props.$theme.typography.heading5.fontSize};
      font-family: ${props.$theme.typography.heading5.fontFamily};
      line-height: ${props.$theme.typography.heading5.lineHeight};
      font-weight: ${props.$theme.typography.heading5.fontWeights[
        props.$fontWeight ?? TextConstants.DEFAULT_FONT_WEIGHT
      ]};
    `}
`;

const Heading6 = styled(TextBase)`
  ${(props) =>
    props.$theme?.typography &&
    css`
      font-size: ${props.$theme.typography.heading6.fontSize};
      font-family: ${props.$theme.typography.heading6.fontFamily};
      line-height: ${props.$theme.typography.heading6.lineHeight};
      font-weight: ${props.$theme.typography.heading6.fontWeights[
        props.$fontWeight ?? TextConstants.DEFAULT_FONT_WEIGHT
      ]};
    `}
`;

const Body1 = styled(TextBase)`
  ${(props) =>
    props.$theme?.typography &&
    css`
      font-size: ${props.$theme.typography.body1.fontSize};
      font-family: ${props.$theme.typography.body1.fontFamily};
      line-height: ${props.$theme.typography.body1.lineHeight};
      font-weight: ${props.$theme.typography.body1.fontWeights[
        props.$fontWeight ?? TextConstants.DEFAULT_FONT_WEIGHT
      ]};
    `}
`;

const Body2 = styled(TextBase)`
  ${(props) =>
    props.$theme?.typography &&
    css`
      font-size: ${props.$theme.typography.body2.fontSize};
      font-family: ${props.$theme.typography.body2.fontFamily};
      line-height: ${props.$theme.typography.body2.lineHeight};
      font-weight: ${props.$theme.typography.body2.fontWeights[
        props.$fontWeight ?? TextConstants.DEFAULT_FONT_WEIGHT
      ]};
    `}
`;

const Caption1 = styled(TextBase)`
  ${(props) =>
    props.$theme?.typography &&
    css`
      font-size: ${props.$theme.typography.caption1.fontSize};
      font-family: ${props.$theme.typography.caption1.fontFamily};
      line-height: ${props.$theme.typography.caption1.lineHeight};
      font-weight: ${props.$theme.typography.caption1.fontWeights[
        props.$fontWeight ?? TextConstants.DEFAULT_FONT_WEIGHT
      ]};
    `}
`;

const Caption2 = styled(TextBase)`
  ${(props) =>
    props.$theme?.typography &&
    css`
      font-size: ${props.$theme.typography.caption2.fontSize};
      font-family: ${props.$theme.typography.caption2.fontFamily};
      line-height: ${props.$theme.typography.caption2.lineHeight};
      font-weight: ${props.$theme.typography.caption2.fontWeights[
        props.$fontWeight ?? TextConstants.DEFAULT_FONT_WEIGHT
      ]};
    `}
`;

export {
  TextBase,
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

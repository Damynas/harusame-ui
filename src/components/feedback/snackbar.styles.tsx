import styled, { css, keyframes } from 'styled-components';
import { SnackbarConstants } from './snackbar.constants';
import { StackLayout } from '../layouts';
import { Text } from '../data-display';
import { Button, IconButton } from '../inputs';
import type { Nullable } from '../../common/shared';
import { commonColors, feedbackColors, type Theme } from '../../common/theme';

type StyledSnackbarProps = {
  $position: string;
  $margin?: string;
  $padding?: string;
  $width?: string;
  $height?: string;
  $backgroundColor?: string;
  $borderRadius?: string;
  $closeButtonHidden?: boolean;
  $actionButtonVisible?: boolean;
  $theme: Nullable<Theme>;
};

const getFadeAnimationKeyframes = (
  opacityFrom: number,
  opacityTo: number,
  scaleFrom: Nullable<number> = null,
  scaleTo: Nullable<number> = null
) => keyframes`
  from {
    opacity: ${opacityFrom};
    ${
      scaleFrom &&
      css`
        transform: scale(${scaleFrom});
      `
    }
  }
  to {
    opacity: ${opacityTo};
    ${
      scaleTo &&
      css`
        transform: scale(${scaleTo});
      `
    }
  }
`;

const getHoveredButtonColor = (variant: string, theme: Nullable<Theme>) => {
  switch (variant) {
    case 'info':
      return theme?.colors.info300 ?? feedbackColors.info300;
    case 'success':
      return theme?.colors.success300 ?? feedbackColors.success300;
    case 'warning':
      return theme?.colors.warning300 ?? feedbackColors.warning300;
    case 'error':
      return theme?.colors.error300 ?? feedbackColors.error300;
    default:
      return;
  }
};

const getPressedButtonColor = (variant: string, theme: Nullable<Theme>) => {
  switch (variant) {
    case 'info':
      return theme?.colors.info700 ?? feedbackColors.info700;
    case 'success':
      return theme?.colors.success700 ?? feedbackColors.success700;
    case 'warning':
      return theme?.colors.warning700 ?? feedbackColors.warning700;
    case 'error':
      return theme?.colors.error700 ?? feedbackColors.error700;
    default:
      return;
  }
};

const SnackbarBase = styled(StackLayout).attrs<StyledSnackbarProps>(
  (props) => ({
    orientation: 'horizontal',
    horizontalAlignment:
      !props.$closeButtonHidden || props.$actionButtonVisible
        ? 'spaceBetween'
        : 'left',
    verticalAlignment: 'center',
    margin: props.$margin ?? '0.5rem',
    padding: props.$padding ?? '0.5rem',
    height: props.$height ?? '3.125rem',
    width: props.$width ?? '18.75rem',
    backgroundColor:
      props.$backgroundColor ??
      props.$theme?.colors.white ??
      commonColors.white,
    borderRadius: props.$borderRadius ?? '0.25rem'
  })
)`
  position: absolute;
  z-index: 9999;

  box-shadow: 0 0.35rem 1rem rgba(0, 0, 0, 0.35);

  ${(props) =>
    props.$position === SnackbarConstants.SNACKBAR_POSITIONS.topLeft &&
    css`
      top: 0;
      left: 0;
    `}

  ${(props) =>
    props.$position === SnackbarConstants.SNACKBAR_POSITIONS.topMiddle &&
    css`
      top: 0;
      left: 0;
      right: 0;

      margin-left: auto;
      margin-right: auto;
    `}

  ${(props) =>
    props.$position === SnackbarConstants.SNACKBAR_POSITIONS.topRight &&
    css`
      top: 0;
      right: 0;
    `}

  ${(props) =>
    props.$position === SnackbarConstants.SNACKBAR_POSITIONS.bottomLeft &&
    css`
      bottom: 0;
      left: 0;
    `}

  ${(props) =>
    props.$position === SnackbarConstants.SNACKBAR_POSITIONS.bottomMiddle &&
    css`
      bottom: 0;
      left: 0;
      right: 0;

      margin-left: auto;
      margin-right: auto;
    `}

  ${(props) =>
    props.$position === SnackbarConstants.SNACKBAR_POSITIONS.bottomRight &&
    css`
      bottom: 0;
      right: 0;
    `}

  animation: ${getFadeAnimationKeyframes(0, 1, 0.8, 1)} 0.3s forwards;

  &[closing] {
    animation: ${getFadeAnimationKeyframes(1, 0, 1, 0.8)} 0.3s forwards;
  }
`;

const InfoSnackbar = styled(SnackbarBase).attrs((props) => ({
  backgroundColor: props.$theme?.colors.info500 ?? feedbackColors.info500
}))``;

const SuccessSnackbar = styled(SnackbarBase).attrs((props) => ({
  backgroundColor: props.$theme?.colors.success500 ?? feedbackColors.success500
}))``;

const WarningSnackbar = styled(SnackbarBase).attrs((props) => ({
  backgroundColor: props.$theme?.colors.warning500 ?? feedbackColors.warning500
}))``;

const ErrorSnackbar = styled(SnackbarBase).attrs((props) => ({
  backgroundColor: props.$theme?.colors.error500 ?? feedbackColors.error500
}))``;

const SnackbarMessage = styled(Text).attrs<{
  $variant: string;
  $color?: string;
  $theme: Nullable<Theme>;
}>((props) => {
  return {
    variant: 'body2',
    truncate: true,
    color:
      props.$variant === SnackbarConstants.DEFAULT_SNACKBAR_VARIANT
        ? props.$color ?? props.$theme?.colors.black ?? commonColors.black
        : props.$theme?.colors.white ?? commonColors.white
  };
})`
  padding: 0.5rem;
`;

const SnackbarActions = styled(StackLayout).attrs(() => ({
  orientation: 'horizontal',
  horizontalAlignment: 'spaceBetween',
  verticalAlignment: 'center',
  gap: '0.25rem'
}))``;

const SnackbarButton = styled(Button).attrs<{
  $variant: string;
  $color?: string;
  $hoveredColor?: string;
  $pressedColor?: string;
  $theme: Nullable<Theme>;
}>((props) => ({
  size: 'small',
  variant: 'text',
  textColor:
    props.$variant === SnackbarConstants.DEFAULT_SNACKBAR_VARIANT
      ? props.$color ?? props.$theme?.colors.black ?? commonColors.black
      : props.$theme?.colors.white ?? commonColors.white,
  hoveredBackgroundColor:
    props.$variant === SnackbarConstants.DEFAULT_SNACKBAR_VARIANT
      ? props.$hoveredColor
      : getHoveredButtonColor(props.$variant, props.$theme),
  pressedBackgroundColor:
    props.$variant === SnackbarConstants.DEFAULT_SNACKBAR_VARIANT
      ? props.$pressedColor
      : getPressedButtonColor(props.$variant, props.$theme)
}))`
  margin: 0;
`;

const SnackbarIconButton = styled(IconButton).attrs<{
  $variant: string;
  $color?: string;
  $hoveredColor?: string;
  $pressedColor?: string;
  $theme: Nullable<Theme>;
}>((props) => ({
  size: 'small',
  variant: 'text',
  iconColor:
    props.$variant === SnackbarConstants.DEFAULT_SNACKBAR_VARIANT
      ? props.$color ?? props.$theme?.colors.black ?? commonColors.black
      : props.$theme?.colors.white ?? commonColors.white,
  hoveredBackgroundColor:
    props.$variant === SnackbarConstants.DEFAULT_SNACKBAR_VARIANT
      ? props.$hoveredColor
      : getHoveredButtonColor(props.$variant, props.$theme),
  pressedBackgroundColor:
    props.$variant === SnackbarConstants.DEFAULT_SNACKBAR_VARIANT
      ? props.$pressedColor
      : getPressedButtonColor(props.$variant, props.$theme)
}))`
  margin: 0;
`;

export {
  SnackbarBase,
  InfoSnackbar,
  SuccessSnackbar,
  WarningSnackbar,
  ErrorSnackbar,
  SnackbarActions,
  SnackbarMessage,
  SnackbarButton,
  SnackbarIconButton
};

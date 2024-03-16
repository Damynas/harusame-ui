import styled from 'styled-components';
import { ButtonBase } from './button-base';
import type { Nullable } from '@common/shared';
import type { Theme } from '@common/theme';

type StyledButtonProps = {
  $theme: Nullable<Theme>;
};

const ContainedButton = styled(ButtonBase).attrs<StyledButtonProps>(
  (props) => ({
    textColor: props.textColor ?? props.$theme?.colors.white,
    hoveredTextColor: props.hoveredTextColor ?? props.$theme?.colors.white,
    pressedTextColor: props.pressedTextColor ?? props.$theme?.colors.white,
    disabledTextColor:
      props.disabledTextColor ?? props.$theme?.colors.neutral500,
    borderColor: props.borderColor ?? props.$theme?.colors.primary500,
    hoveredBorderColor:
      props.hoveredBorderColor ?? props.$theme?.colors.primary400,
    pressedBorderColor:
      props.pressedBorderColor ?? props.$theme?.colors.primary700,
    disabledBorderColor:
      props.disabledBorderColor ?? props.$theme?.colors.neutral400,
    backgroundColor: props.backgroundColor ?? props.$theme?.colors.primary500,
    hoveredBackgroundColor:
      props.hoveredBackgroundColor ?? props.$theme?.colors.primary400,
    pressedBackgroundColor:
      props.pressedBackgroundColor ?? props.$theme?.colors.primary700,
    disabledBackgroundColor:
      props.disabledBackgroundColor ?? props.$theme?.colors.neutral400,
    leadingIconColor: props.leadingIconColor ?? props.$theme?.colors.white,
    disabledLeadingIconColor:
      props.disabledLeadingIconColor ?? props.$theme?.colors.neutral500,
    trailingIconColor: props.trailingIconColor ?? props.$theme?.colors.white,
    disabledTrailingIconColor:
      props.disabledTrailingIconColor ?? props.$theme?.colors.neutral500,
    progressIndicatorColor:
      props.progressIndicatorColor ?? props.$theme?.colors.white,
    disabledProgressIndicatorColor:
      props.disabledProgressIndicatorColor ?? props.$theme?.colors.neutral500
  })
)``;

const OutlinedButton = styled(ButtonBase).attrs<StyledButtonProps>((props) => ({
  textColor: props.textColor ?? props.$theme?.colors.primary500,
  hoveredTextColor: props.hoveredTextColor ?? props.$theme?.colors.primary500,
  pressedTextColor: props.pressedTextColor ?? props.$theme?.colors.primary500,
  disabledTextColor: props.disabledTextColor ?? props.$theme?.colors.neutral500,
  borderColor: props.borderColor ?? props.$theme?.colors.primary500,
  hoveredBorderColor:
    props.hoveredBorderColor ?? props.$theme?.colors.primary500,
  pressedBorderColor:
    props.pressedBorderColor ?? props.$theme?.colors.primary500,
  disabledBorderColor:
    props.disabledBorderColor ?? props.$theme?.colors.neutral400,
  backgroundColor: props.backgroundColor ?? 'transparent',
  hoveredBackgroundColor:
    props.hoveredBackgroundColor ?? props.$theme?.colors.primary100,
  pressedBackgroundColor:
    props.pressedBackgroundColor ?? props.$theme?.colors.primary300,
  disabledBackgroundColor: props.disabledBackgroundColor ?? 'transparent',
  leadingIconColor: props.leadingIconColor ?? props.$theme?.colors.primary500,
  disabledLeadingIconColor:
    props.disabledLeadingIconColor ?? props.$theme?.colors.neutral500,
  trailingIconColor: props.trailingIconColor ?? props.$theme?.colors.primary500,
  disabledTrailingIconColor:
    props.disabledTrailingIconColor ?? props.$theme?.colors.neutral500,
  progressIndicatorColor:
    props.progressIndicatorColor ?? props.$theme?.colors.primary500,
  disabledProgressIndicatorColor:
    props.disabledProgressIndicatorColor ?? props.$theme?.colors.neutral500
}))``;

const TextButton = styled(ButtonBase).attrs<StyledButtonProps>((props) => ({
  textColor: props.textColor ?? props.$theme?.colors.primary500,
  hoveredTextColor: props.hoveredTextColor ?? props.$theme?.colors.primary500,
  pressedTextColor: props.pressedTextColor ?? props.$theme?.colors.primary500,
  disabledTextColor: props.disabledTextColor ?? props.$theme?.colors.neutral500,
  borderColor: props.borderColor ?? 'transparent',
  hoveredBorderColor: props.hoveredBorderColor ?? 'transparent',
  pressedBorderColor: props.pressedBorderColor ?? 'transparent',
  disabledBorderColor: props.disabledBorderColor ?? 'transparent',
  backgroundColor: props.backgroundColor ?? 'transparent',
  hoveredBackgroundColor:
    props.hoveredBackgroundColor ?? props.$theme?.colors.primary100,
  pressedBackgroundColor:
    props.pressedBackgroundColor ?? props.$theme?.colors.primary300,
  disabledBackgroundColor: props.disabledBackgroundColor ?? 'transparent',
  leadingIconColor: props.leadingIconColor ?? props.$theme?.colors.primary500,
  disabledLeadingIconColor:
    props.disabledLeadingIconColor ?? props.$theme?.colors.neutral500,
  trailingIconColor: props.trailingIconColor ?? props.$theme?.colors.primary500,
  disabledTrailingIconColor:
    props.disabledTrailingIconColor ?? props.$theme?.colors.neutral500,
  progressIndicatorColor: props.textColor ?? props.$theme?.colors.primary500,
  disabledProgressIndicatorColor:
    props.disabledProgressIndicatorColor ?? props.$theme?.colors.neutral500
}))``;

export { ContainedButton, OutlinedButton, TextButton };

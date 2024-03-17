import styled from 'styled-components';
import { ButtonBase } from './button-base';
import type { Nullable } from '../../../common/shared';
import type { Theme } from '../../../common/theme';
import { getButtonSize } from './button-base.styles';

type StyledIconButtonProps = {
  $theme: Nullable<Theme>;
};

const ContainedIconButton = styled(ButtonBase).attrs<StyledIconButtonProps>(
  (props) => ({
    iconColor: props.iconColor ?? props.$theme?.colors.white,
    disabledIconColor:
      props.disabledIconColor ?? props.$theme?.colors.neutral500,
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
    progressIndicatorColor:
      props.progressIndicatorColor ?? props.$theme?.colors.white,
    disabledProgressIndicatorColor:
      props.disabledProgressIndicatorColor ?? props.$theme?.colors.neutral500
  })
)`
  padding: 0.5rem;
  min-width: ${(props) => getButtonSize(props.size)};
`;

const OutlinedIconButton = styled(ButtonBase).attrs<StyledIconButtonProps>(
  (props) => ({
    iconColor: props.iconColor ?? props.$theme?.colors.primary500,
    disabledIconColor:
      props.disabledIconColor ?? props.$theme?.colors.neutral500,
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
    progressIndicatorColor:
      props.progressIndicatorColor ?? props.$theme?.colors.primary500,
    disabledProgressIndicatorColor:
      props.disabledProgressIndicatorColor ?? props.$theme?.colors.neutral500
  })
)`
  padding: 0.5rem;
  min-width: ${(props) => getButtonSize(props.size)};
`;

const TextIconButton = styled(ButtonBase).attrs<StyledIconButtonProps>(
  (props) => ({
    iconColor: props.iconColor ?? props.$theme?.colors.primary500,
    disabledIconColor:
      props.disabledIconColor ?? props.$theme?.colors.neutral500,
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
    progressIndicatorColor: props.textColor ?? props.$theme?.colors.primary500,
    disabledProgressIndicatorColor:
      props.disabledProgressIndicatorColor ?? props.$theme?.colors.neutral500
  })
)`
  padding: 0.5rem;
  min-width: ${(props) => getButtonSize(props.size)};
`;

export { ContainedIconButton, OutlinedIconButton, TextIconButton };

import styled from 'styled-components';
import { BoxLayout, StackLayout } from '../../layouts';
import { Separator, Text } from '../../data-display';
import { TextVariant } from '../../data-display/text.types';
import type { Nullable } from '../../../common/shared';
import { commonColors, type Theme } from '../../../common/theme';
import { IconButton } from '../../inputs/buttons';

const TitleContainer = styled(StackLayout).attrs({
  orientation: 'horizontal',
  horizontalAlignment: 'spaceBetween',
  verticalAlignment: 'center',
  padding: '0.25rem',
  height: '3.125rem'
})`
  flex: none;
`;

const ContentContainer = styled(BoxLayout).attrs<{ $totalHeight?: string }>({
  horizontalAlignment: 'left',
  verticalAlignment: 'top',
  padding: '0.25rem'
})``;

const ActionContainer = styled(StackLayout).attrs({
  orientation: 'horizontal',
  horizontalAlignment: 'right',
  verticalAlignment: 'center',
  padding: '0.25rem',
  height: '3.125rem'
})`
  flex: none;
`;

const Divider = styled(Separator)`
  flex-grow: 0;
`;

const Title = styled(Text).attrs<{
  $color?: string;
  $variant?: TextVariant;
}>((props) => {
  return {
    variant: props.$variant ?? 'heading3',
    fontWeight: 'bold',
    truncate: true,
    color: props.$color
  };
})`
  padding: 0.5rem;
`;

const CloseButton = styled(IconButton).attrs<{
  $theme: Nullable<Theme>;
}>((props) => ({
  size: 'small',
  variant: 'text',
  iconColor: props.$theme?.colors.black ?? commonColors.black
}))``;

const Message = styled(Text).attrs<{
  $color?: string;
  $variant?: TextVariant;
}>((props) => {
  return {
    variant: props.$variant ?? 'body1',
    fontWeight: 'regular',
    color: props.$color
  };
})`
  padding: 0.5rem;
  overflow-wrap: break-word;
`;

export {
  TitleContainer,
  ContentContainer,
  ActionContainer,
  Divider,
  Title,
  CloseButton,
  Message
};

import { createRef, type Ref } from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { Text, type TextElement, type TextProps } from './text';
import { TextConstants } from './text.constants';

const textTestId = 'text-test-id';

const defaultProps: TextProps = {};

const renderText = (
  props: TextProps = defaultProps,
  ref?: Ref<TextElement>
) => {
  render(
    <Text
      {...props}
      data-testid={textTestId}
      ref={ref}
    >
      {TextConstants.DISPLAY_NAME}
    </Text>
  );
};

describe('Text tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should render text with content', () => {
    renderText();
    const text = screen.queryByTestId(textTestId);
    expect(text).toBeDefined();
    expect(text).toHaveTextContent(TextConstants.DISPLAY_NAME);
  });

  it('Should render heading1', () => {
    const props: TextProps = {
      ...defaultProps,
      variant: TextConstants.TEXT_VARIANTS.heading1
    };
    renderText(props);
    const text = screen.queryByTestId(textTestId);
    expect(text).toBeDefined();
    expect(text).toHaveAttribute('data-variant', props.variant);
  });

  it('Should render heading2', () => {
    const props: TextProps = {
      ...defaultProps,
      variant: TextConstants.TEXT_VARIANTS.heading2
    };
    renderText(props);
    const text = screen.queryByTestId(textTestId);
    expect(text).toBeDefined();
    expect(text).toHaveAttribute('data-variant', props.variant);
  });

  it('Should render heading3', () => {
    const props: TextProps = {
      ...defaultProps,
      variant: TextConstants.TEXT_VARIANTS.heading3
    };
    renderText(props);
    const text = screen.queryByTestId(textTestId);
    expect(text).toBeDefined();
    expect(text).toHaveAttribute('data-variant', props.variant);
  });

  it('Should render heading4', () => {
    const props: TextProps = {
      ...defaultProps,
      variant: TextConstants.TEXT_VARIANTS.heading4
    };
    renderText(props);
    const text = screen.queryByTestId(textTestId);
    expect(text).toBeDefined();
    expect(text).toHaveAttribute('data-variant', props.variant);
  });

  it('Should render heading5', () => {
    const props: TextProps = {
      ...defaultProps,
      variant: TextConstants.TEXT_VARIANTS.heading5
    };
    renderText(props);
    const text = screen.queryByTestId(textTestId);
    expect(text).toBeDefined();
    expect(text).toHaveAttribute('data-variant', props.variant);
  });

  it('Should render heading6', () => {
    const props: TextProps = {
      ...defaultProps,
      variant: TextConstants.TEXT_VARIANTS.heading6
    };
    renderText(props);
    const text = screen.queryByTestId(textTestId);
    expect(text).toBeDefined();
    expect(text).toHaveAttribute('data-variant', props.variant);
  });

  it('Should render body1', () => {
    const props: TextProps = {
      ...defaultProps,
      variant: TextConstants.TEXT_VARIANTS.body1
    };
    renderText(props);
    const text = screen.queryByTestId(textTestId);
    expect(text).toBeDefined();
    expect(text).toHaveAttribute('data-variant', props.variant);
  });

  it('Should render body2', () => {
    const props: TextProps = {
      ...defaultProps,
      variant: TextConstants.TEXT_VARIANTS.body2
    };
    renderText(props);
    const text = screen.queryByTestId(textTestId);
    expect(text).toBeDefined();
    expect(text).toHaveAttribute('data-variant', props.variant);
  });

  it('Should render caption1', () => {
    const props: TextProps = {
      ...defaultProps,
      variant: TextConstants.TEXT_VARIANTS.caption1
    };
    renderText(props);
    const text = screen.queryByTestId(textTestId);
    expect(text).toBeDefined();
    expect(text).toHaveAttribute('data-variant', props.variant);
  });

  it('Should render caption2', () => {
    const props: TextProps = {
      ...defaultProps,
      variant: TextConstants.TEXT_VARIANTS.caption2
    };
    renderText(props);
    const text = screen.queryByTestId(textTestId);
    expect(text).toBeDefined();
    expect(text).toHaveAttribute('data-variant', props.variant);
  });

  it('Should render truncated text', () => {
    const props: TextProps = {
      ...defaultProps,
      truncate: true
    };
    renderText(props);
    const text = screen.queryByTestId(textTestId);
    expect(text).toBeDefined();
    expect(text).toHaveStyle({
      'text-overflow': 'ellipsis',
      'white-space': 'nowrap',
      'overflow': 'hidden'
    });
  });

  it('Should render not selectable text', () => {
    const props: TextProps = {
      ...defaultProps,
      selectionDisabled: true
    };
    renderText(props);
    const text = screen.queryByTestId(textTestId);
    expect(text).toBeDefined();
    expect(text).toHaveStyle({
      'user-select': 'none'
    });
  });

  it('Should forward a ref to the text', () => {
    const textRef = createRef<TextElement>();
    renderText(defaultProps, textRef);
    const text = screen.queryByTestId(textTestId);
    expect(text).toBeDefined();
    expect(textRef.current).not.toBeNull();
  });
});

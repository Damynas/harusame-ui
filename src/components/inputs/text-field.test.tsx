import { createRef, type Ref } from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import {
  TextField,
  type TextFieldElement,
  type TextFieldProps
} from './text-field';
import { TextFieldConstants } from './text-field.constants';

const textFieldTestId = 'text-field-test-id';

const defaultProps: TextFieldProps = {};

const renderTextField = (
  props: TextFieldProps = defaultProps,
  ref?: Ref<TextFieldElement>
) => {
  render(
    <TextField
      {...props}
      data-testid={textFieldTestId}
      ref={ref}
    />
  );
};

describe('TextField Tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should render text field', () => {
    renderTextField();
    const textField = screen.queryByTestId(textFieldTestId);
    expect(textField).toBeDefined();
  });

  it(`Should render text field's label`, () => {
    const props: TextFieldProps = {
      ...defaultProps,
      label: TextFieldConstants.DISPLAY_NAME
    };
    renderTextField(props);
    const textField = screen.queryByTestId(textFieldTestId);
    expect(textField).toBeDefined();
    expect(textField?.parentNode).toHaveTextContent(
      TextFieldConstants.DISPLAY_NAME
    );
  });

  it(`Should render text field's label with a star if it is required`, () => {
    const props: TextFieldProps = {
      ...defaultProps,
      label: TextFieldConstants.DISPLAY_NAME,
      required: true
    };
    renderTextField(props);
    const textField = screen.queryByTestId(textFieldTestId);
    expect(textField).toBeDefined();
    expect(textField?.parentNode).toHaveTextContent(
      `${TextFieldConstants.DISPLAY_NAME}*`
    );
  });

  it(`Should render text field's error`, () => {
    const props: TextFieldProps = {
      ...defaultProps,
      errorMessage: TextFieldConstants.DISPLAY_NAME
    };
    renderTextField(props);
    const textField = screen.queryByTestId(textFieldTestId);
    expect(textField).toBeDefined();
    expect(textField?.parentNode).toHaveTextContent(
      TextFieldConstants.DISPLAY_NAME
    );
  });

  it('Should forward a ref to the icon button', () => {
    const textFieldRef = createRef<TextFieldElement>();
    renderTextField(defaultProps, textFieldRef);
    const textField = screen.queryByTestId(textFieldTestId);
    expect(textField).toBeDefined();
    expect(textFieldRef.current).not.toBeNull();
  });
});

import { createRef, type Ref } from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import {
  NumberField,
  type NumberFieldElement,
  type NumberFieldProps
} from './number-field';

const numberFieldTestId = 'number-field-test-id';

const defaultProps: NumberFieldProps = {};

const renderNumberField = (
  props: NumberFieldProps = defaultProps,
  ref?: Ref<NumberFieldElement>
) => {
  render(
    <NumberField
      {...props}
      data-testid={numberFieldTestId}
      ref={ref}
    />
  );
};

describe('NumberField Tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should render number field', () => {
    renderNumberField();
    const numberField = screen.queryByTestId(numberFieldTestId);
    expect(numberField).toBeDefined();
  });

  it('Should remove non numeric characters', () => {
    renderNumberField();
    const numberField = screen.queryByTestId(numberFieldTestId);
    expect(numberField).toBeDefined();
    if (!(numberField instanceof HTMLInputElement))
      throw new Error('NumberField is not HTMLInputElement.');
    numberField.value = '-1.2.a';
    fireEvent.input(numberField);
    expect(numberField.value).toEqual('12');
  });

  it('Should allow negative input', () => {
    const props: NumberFieldProps = {
      ...defaultProps,
      allowNegative: true
    };
    renderNumberField(props);
    const numberField = screen.queryByTestId(numberFieldTestId);
    expect(numberField).toBeDefined();
    if (!(numberField instanceof HTMLInputElement))
      throw new Error('NumberField is not HTMLInputElement.');
    numberField.value = '-1.2';
    fireEvent.input(numberField);
    expect(numberField.value).toEqual('-12');
  });

  it('Should allow decimal input', () => {
    const props: NumberFieldProps = {
      ...defaultProps,
      allowDecimal: true
    };
    renderNumberField(props);
    const numberField = screen.queryByTestId(numberFieldTestId);
    expect(numberField).toBeDefined();
    if (!(numberField instanceof HTMLInputElement))
      throw new Error('NumberField is not HTMLInputElement.');
    numberField.value = '-1.2';
    fireEvent.input(numberField);
    expect(numberField.value).toEqual('1.2');
  });

  it('Should forward a ref to the number field', () => {
    const numberFieldRef = createRef<NumberFieldElement>();
    renderNumberField(defaultProps, numberFieldRef);
    const numberField = screen.queryByTestId(numberFieldTestId);
    expect(numberField).toBeDefined();
    expect(numberFieldRef.current).not.toBeNull();
  });
});

import { forwardRef, type ForwardedRef, type RefObject } from 'react';
import { NumberFieldConstants } from './number-field.constants';
import {
  TextField,
  type TextFieldElement,
  type TextFieldProps
} from './text-field';
import { useForwardRef } from '../../hooks/use-forward-ref';

type NumberFieldProps = {
  allowNegative?: boolean;
  allowDecimal?: boolean;
} & TextFieldProps;

type NumberFieldElement = TextFieldElement;

const handleInput = (
  numberFieldRef: RefObject<NumberFieldElement>,
  allowNegative?: boolean,
  allowDecimal?: boolean
) => {
  const numberField = numberFieldRef.current;
  if (!numberField || !numberField.value) return;

  let value = numberField.value;
  let allowedCharacters = NumberFieldConstants.ALLOWED_CHARACTERS;

  if (allowNegative) {
    value = value.replace(/-/g, (match, offset) => (offset === 0 ? match : ''));
    allowedCharacters += '\\-';
  }

  if (allowDecimal) {
    let firstDotFound = false;
    value = value.replace(/\./g, (match) =>
      !firstDotFound ? ((firstDotFound = true), match) : ''
    );
    allowedCharacters += '\\.';
  }

  const regex = new RegExp(`[^${allowedCharacters}]`, 'g');
  value = value.replace(regex, '');

  numberField.value = value;
};

const NumberFieldInner = (
  numberFieldProps: NumberFieldProps,
  forwardedRef: ForwardedRef<NumberFieldElement>
) => {
  const { allowNegative, allowDecimal, ...props } = numberFieldProps;

  const numberFieldRef = useForwardRef(forwardedRef);

  return (
    <TextField
      {...props}
      ref={numberFieldRef}
      onInput={() => handleInput(numberFieldRef, allowNegative, allowDecimal)}
    />
  );
};

const NumberField = forwardRef<NumberFieldElement, NumberFieldProps>(
  NumberFieldInner
);
NumberField.displayName = NumberFieldConstants.DISPLAY_NAME;

export { NumberField };
export type { NumberFieldElement, NumberFieldProps };

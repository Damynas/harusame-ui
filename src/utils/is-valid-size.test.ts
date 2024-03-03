import { cleanup } from '@testing-library/react';
import { isValidSize } from './is-valid-size';

describe('Size Validator Tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should return true if size string is valid', () => {
    const invalidSize = '10rem';
    const actual = isValidSize(invalidSize);
    expect(actual).toBeTruthy();
  });

  it('Should return false if size string is invalid', () => {
    const invalidSize = 'Invalid Size';
    const actual = isValidSize(invalidSize);
    expect(actual).toBeFalsy();
  });
});

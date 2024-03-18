import { cleanup } from '@testing-library/react';
import { isValidSize } from './is-valid-size';

describe('Size Validator Tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should return true if size string is valid', () => {
    const validSize = '10rem';
    const actual = isValidSize(validSize);
    expect(actual).toBeTruthy();
  });

  it('Should return false if size string is invalid', () => {
    const invalidSize = 'Invalid Size';
    const actual = isValidSize(invalidSize);
    expect(actual).toBeFalsy();
  });

  it('Should return true if size string is comprised of multiple sizes separated by a space', () => {
    const validSize = '1px 10rem 20px 30%';
    const actual = isValidSize(validSize);
    expect(actual).toBeTruthy();
  });
});

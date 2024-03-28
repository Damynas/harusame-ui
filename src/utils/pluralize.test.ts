import { cleanup } from '@testing-library/react';
import { pluralize } from './pluralize';

describe('Pluralize Tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should return not pluralized version of the word', () => {
    const expected = 'testWord';
    const actual = pluralize('testWord', 1);
    expect(actual).toEqual(expected);
  });

  it('Should return pluralized version of the word', () => {
    const expected = 'testWords';
    const actual = pluralize('testWord', 5);
    expect(actual).toEqual(expected);
  });

  it('Should return word with prefixed count', () => {
    const expected = '20 testWords';
    const actual = pluralize('testWord', 20, true);
    expect(actual).toEqual(expected);
  });
});

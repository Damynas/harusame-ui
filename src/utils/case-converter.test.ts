import { cleanup } from '@testing-library/react';
import { convertCase, type NamingConvention } from './case-converter';
import { CaseConverterConstants } from './case-converter.constants';

const testValues: Record<NamingConvention, string> = {
  camelCase: 'anAppleFellOffATreeInThePast',
  snakeCase: 'an_apple_fell_off_a_tree_in_the_past',
  kebabCase: 'an-apple-fell-off-a-tree-in-the-past',
  titleCase: 'An Apple Fell off a Tree in the Past',
  pascalCase: 'AnAppleFellOffATreeInThePast'
};

describe('Case Converter Tests', () => {
  describe('Camel Case Converters', () => {
    const value = testValues.camelCase;
    const originalNamingConvention: NamingConvention =
      CaseConverterConstants.NAMING_CONVENTIONS.camelCase;

    afterEach(() => {
      cleanup();
    });

    it('Should convert camel case to camel case', () => {
      const expected = testValues.camelCase;
      const actual = convertCase(
        value,
        originalNamingConvention,
        CaseConverterConstants.NAMING_CONVENTIONS.camelCase
      );
      expect(actual).toEqual(expected);
    });

    it('Should convert camel case to snake case', () => {
      const expected = testValues.snakeCase;
      const actual = convertCase(
        value,
        originalNamingConvention,
        CaseConverterConstants.NAMING_CONVENTIONS.snakeCase
      );
      expect(actual).toEqual(expected);
    });

    it('Should convert camel case to kebab case', () => {
      const expected = testValues.kebabCase;
      const actual = convertCase(
        value,
        originalNamingConvention,
        CaseConverterConstants.NAMING_CONVENTIONS.kebabCase
      );
      expect(actual).toEqual(expected);
    });

    it('Should convert camel case to title case', () => {
      const expected = testValues.titleCase;
      const actual = convertCase(
        value,
        originalNamingConvention,
        CaseConverterConstants.NAMING_CONVENTIONS.titleCase
      );
      expect(actual).toEqual(expected);
    });

    it('Should convert camel case to pascal case', () => {
      const expected = testValues.pascalCase;
      const actual = convertCase(
        value,
        originalNamingConvention,
        CaseConverterConstants.NAMING_CONVENTIONS.pascalCase
      );
      expect(actual).toEqual(expected);
    });
  });

  describe('Snake Case Converters', () => {
    const value = testValues.snakeCase;
    const originalNamingConvention: NamingConvention =
      CaseConverterConstants.NAMING_CONVENTIONS.snakeCase;

    afterEach(() => {
      cleanup();
    });

    it('Should convert snake case to camel case', () => {
      const expected = testValues.camelCase;
      const actual = convertCase(
        value,
        originalNamingConvention,
        CaseConverterConstants.NAMING_CONVENTIONS.camelCase
      );
      expect(actual).toEqual(expected);
    });

    it('Should convert snake case to snake case', () => {
      const expected = testValues.snakeCase;
      const actual = convertCase(
        value,
        originalNamingConvention,
        CaseConverterConstants.NAMING_CONVENTIONS.snakeCase
      );
      expect(actual).toEqual(expected);
    });

    it('Should convert snake case to kebab case', () => {
      const expected = testValues.kebabCase;
      const actual = convertCase(
        value,
        originalNamingConvention,
        CaseConverterConstants.NAMING_CONVENTIONS.kebabCase
      );
      expect(actual).toEqual(expected);
    });

    it('Should convert snake case to title case', () => {
      const expected = testValues.titleCase;
      const actual = convertCase(
        value,
        originalNamingConvention,
        CaseConverterConstants.NAMING_CONVENTIONS.titleCase
      );
      expect(actual).toEqual(expected);
    });

    it('Should convert snake case to pascal case', () => {
      const expected = testValues.pascalCase;
      const actual = convertCase(
        value,
        originalNamingConvention,
        CaseConverterConstants.NAMING_CONVENTIONS.pascalCase
      );
      expect(actual).toEqual(expected);
    });
  });

  describe('Kebab Case Converters', () => {
    const value = testValues.kebabCase;
    const originalNamingConvention: NamingConvention =
      CaseConverterConstants.NAMING_CONVENTIONS.kebabCase;

    afterEach(() => {
      cleanup();
    });

    it('Should convert kebab case to camel case', () => {
      const expected = testValues.camelCase;
      const actual = convertCase(
        value,
        originalNamingConvention,
        CaseConverterConstants.NAMING_CONVENTIONS.camelCase
      );
      expect(actual).toEqual(expected);
    });

    it('Should convert kebab case to snake case', () => {
      const expected = testValues.snakeCase;
      const actual = convertCase(
        value,
        originalNamingConvention,
        CaseConverterConstants.NAMING_CONVENTIONS.snakeCase
      );
      expect(actual).toEqual(expected);
    });

    it('Should convert kebab case to kebab case', () => {
      const expected = testValues.kebabCase;
      const actual = convertCase(
        value,
        originalNamingConvention,
        CaseConverterConstants.NAMING_CONVENTIONS.kebabCase
      );
      expect(actual).toEqual(expected);
    });

    it('Should convert kebab case to title case', () => {
      const expected = testValues.titleCase;
      const actual = convertCase(
        value,
        originalNamingConvention,
        CaseConverterConstants.NAMING_CONVENTIONS.titleCase
      );
      expect(actual).toEqual(expected);
    });

    it('Should convert kebab case to pascal case', () => {
      const expected = testValues.pascalCase;
      const actual = convertCase(
        value,
        originalNamingConvention,
        CaseConverterConstants.NAMING_CONVENTIONS.pascalCase
      );
      expect(actual).toEqual(expected);
    });
  });

  describe('Title Case Converters', () => {
    const value = testValues.titleCase;
    const originalNamingConvention: NamingConvention =
      CaseConverterConstants.NAMING_CONVENTIONS.titleCase;

    afterEach(() => {
      cleanup();
    });

    it('Should convert title case to camel case', () => {
      const expected = testValues.camelCase;
      const actual = convertCase(
        value,
        originalNamingConvention,
        CaseConverterConstants.NAMING_CONVENTIONS.camelCase
      );
      expect(actual).toEqual(expected);
    });

    it('Should convert title case to snake case', () => {
      const expected = testValues.snakeCase;
      const actual = convertCase(
        value,
        originalNamingConvention,
        CaseConverterConstants.NAMING_CONVENTIONS.snakeCase
      );
      expect(actual).toEqual(expected);
    });

    it('Should convert title case to kebab case', () => {
      const expected = testValues.kebabCase;
      const actual = convertCase(
        value,
        originalNamingConvention,
        CaseConverterConstants.NAMING_CONVENTIONS.kebabCase
      );
      expect(actual).toEqual(expected);
    });

    it('Should convert title case to title case', () => {
      const expected = testValues.titleCase;
      const actual = convertCase(
        value,
        originalNamingConvention,
        CaseConverterConstants.NAMING_CONVENTIONS.titleCase
      );
      expect(actual).toEqual(expected);
    });

    it('Should convert title case to pascal case', () => {
      const expected = testValues.pascalCase;
      const actual = convertCase(
        value,
        originalNamingConvention,
        CaseConverterConstants.NAMING_CONVENTIONS.pascalCase
      );
      expect(actual).toEqual(expected);
    });
  });

  describe('Pascal Case Converters', () => {
    const value = testValues.pascalCase;
    const originalNamingConvention: NamingConvention =
      CaseConverterConstants.NAMING_CONVENTIONS.pascalCase;

    afterEach(() => {
      cleanup();
    });

    it('Should convert pascal case to camel case', () => {
      const expected = testValues.camelCase;
      const actual = convertCase(
        value,
        originalNamingConvention,
        CaseConverterConstants.NAMING_CONVENTIONS.camelCase
      );
      expect(actual).toEqual(expected);
    });

    it('Should convert pascal case to snake case', () => {
      const expected = testValues.snakeCase;
      const actual = convertCase(
        value,
        originalNamingConvention,
        CaseConverterConstants.NAMING_CONVENTIONS.snakeCase
      );
      expect(actual).toEqual(expected);
    });

    it('Should convert pascal case to kebab case', () => {
      const expected = testValues.kebabCase;
      const actual = convertCase(
        value,
        originalNamingConvention,
        CaseConverterConstants.NAMING_CONVENTIONS.kebabCase
      );
      expect(actual).toEqual(expected);
    });

    it('Should convert pascal case to title case', () => {
      const expected = testValues.titleCase;
      const actual = convertCase(
        value,
        originalNamingConvention,
        CaseConverterConstants.NAMING_CONVENTIONS.titleCase
      );
      expect(actual).toEqual(expected);
    });

    it('Should convert pascal case to pascal case', () => {
      const expected = testValues.pascalCase;
      const actual = convertCase(
        value,
        originalNamingConvention,
        CaseConverterConstants.NAMING_CONVENTIONS.pascalCase
      );
      expect(actual).toEqual(expected);
    });
  });

  describe('Invalid Cases', () => {
    const value = 'Invalid naming convention test';
    const validNamingConvention =
      CaseConverterConstants.NAMING_CONVENTIONS.camelCase;
    const invalidNamingConvention = value as NamingConvention;

    afterEach(() => {
      cleanup();
    });

    it('Should return original value if source naming convention is invalid', () => {
      const expected = value;
      const actual = convertCase(
        value,
        invalidNamingConvention,
        validNamingConvention
      );
      expect(actual).toEqual(expected);
    });

    it('Should return original value if target naming convention is invalid', () => {
      const expected = value;
      const actual = convertCase(
        value,
        validNamingConvention,
        invalidNamingConvention
      );
      expect(actual).toEqual(expected);
    });
  });
});

import { CaseConverterConstants } from './case-converter.constants';

type NamingConvention = keyof typeof CaseConverterConstants.NAMING_CONVENTIONS;

/* Helper functions */

const isOfNamingConventionType = (value: string) =>
  Object.getOwnPropertyNames(
    CaseConverterConstants.NAMING_CONVENTIONS
  ).includes(value);

const returnOriginalValue = (value: string) => value;

const replaceFirstLetterToLowerCase = (value: string) =>
  value.charAt(0).toLowerCase() + value.slice(1);

const replaceFirstLetterToUpperCase = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1);

const spaceSeparatedCaseToTitleCase = (value: string) =>
  value.replace(/\b(\w)(\w*)\b/g, (match, firstLetter, rest, offset) =>
    (
      CaseConverterConstants.WORDS_TO_KEEP_IN_LOWER_CASE as unknown as string[]
    ).includes(match.toLowerCase()) &&
    offset !== 0 &&
    offset !== value.length - match.length
      ? match.toLowerCase()
      : firstLetter.toUpperCase() + rest.toLowerCase()
  );

/* Camel case converters */

const camelCaseToDelimiterSeparatedCase = (value: string, delimiter: string) =>
  value.replace(/([A-Z])/g, (match) => `${delimiter}${match.toLowerCase()}`);

const camelCaseToSnakeCase = (value: string) =>
  camelCaseToDelimiterSeparatedCase(value, '_');

const camelCaseToKebabCase = (value: string) =>
  camelCaseToDelimiterSeparatedCase(value, '-');

const camelCaseToTitleCase = (value: string) =>
  spaceSeparatedCaseToTitleCase(camelCaseToDelimiterSeparatedCase(value, ' '));

const camelCaseToPascalCase = (value: string) =>
  replaceFirstLetterToUpperCase(value);

const camelCaseConverters: Record<NamingConvention, (_: string) => string> = {
  camelCase: returnOriginalValue,
  snakeCase: camelCaseToSnakeCase,
  kebabCase: camelCaseToKebabCase,
  titleCase: camelCaseToTitleCase,
  pascalCase: camelCaseToPascalCase
};

/* Snake case converters */

const snakeCaseToDelimiterSeparatedCase = (value: string, delimiter: string) =>
  value.replace(/_/g, delimiter);

const snakeCaseToCamelCase = (value: string) =>
  value.replace(/(_\w)/g, (_, match) => match[1].toUpperCase());

const snakeCaseToKebabCase = (value: string) =>
  snakeCaseToDelimiterSeparatedCase(value, '-');

const snakeCaseToTitleCase = (value: string) =>
  spaceSeparatedCaseToTitleCase(snakeCaseToDelimiterSeparatedCase(value, ' '));

const snakeCaseToPascalCase = (value: string) =>
  replaceFirstLetterToUpperCase(snakeCaseToCamelCase(value));

const snakeCaseConverters: Record<NamingConvention, (_: string) => string> = {
  camelCase: snakeCaseToCamelCase,
  snakeCase: returnOriginalValue,
  kebabCase: snakeCaseToKebabCase,
  titleCase: snakeCaseToTitleCase,
  pascalCase: snakeCaseToPascalCase
};

/* Kebab case converters */

const kebabCaseToDelimiterSeparatedCase = (value: string, delimiter: string) =>
  value.replace(/-/g, delimiter);

const kebabCaseToCamelCase = (value: string) =>
  value.replace(/-([a-z])/g, (_, match) => match.toUpperCase());

const kebabCaseToSnakeCase = (value: string) =>
  kebabCaseToDelimiterSeparatedCase(value, '_');

const kebabCaseToTitleCase = (value: string) =>
  spaceSeparatedCaseToTitleCase(kebabCaseToDelimiterSeparatedCase(value, ' '));

const kebabCaseToPascalCase = (value: string) =>
  replaceFirstLetterToUpperCase(kebabCaseToCamelCase(value));

const kebabCaseConverters: Record<NamingConvention, (_: string) => string> = {
  camelCase: kebabCaseToCamelCase,
  snakeCase: kebabCaseToSnakeCase,
  kebabCase: returnOriginalValue,
  titleCase: kebabCaseToTitleCase,
  pascalCase: kebabCaseToPascalCase
};

/* Title case converters */

const titleCaseToDelimiterSeparatedCase = (
  value: string,
  delimiter: string,
  keepOriginalCasing: boolean = false
) =>
  keepOriginalCasing
    ? value.replace(/\s+/g, delimiter)
    : value.replace(/\s+/g, delimiter).toLowerCase();

const titleCaseToCamelCase = (value: string) =>
  replaceFirstLetterToLowerCase(titleCaseToPascalCase(value));

const titleCaseToSnakeCase = (value: string) =>
  titleCaseToDelimiterSeparatedCase(value, '_');

const titleCaseToKebabCase = (value: string) =>
  titleCaseToDelimiterSeparatedCase(value, '-');

const titleCaseToPascalCase = (value: string) =>
  titleCaseToDelimiterSeparatedCase(
    value.replace(/\b\w/g, (match) => match.toUpperCase()),
    '',
    true
  );

const titleCaseConverters: Record<NamingConvention, (_: string) => string> = {
  camelCase: titleCaseToCamelCase,
  snakeCase: titleCaseToSnakeCase,
  kebabCase: titleCaseToKebabCase,
  titleCase: returnOriginalValue,
  pascalCase: titleCaseToPascalCase
};

/* Pascal case converters */

const pascalCaseToDelimiterSeparatedCase = (value: string, delimiter: string) =>
  value.replace(/[A-Z]/g, (match) => delimiter + match.toLowerCase()).slice(1);

const pascalCaseToCamelCase = (value: string) =>
  replaceFirstLetterToLowerCase(value);

const pascalCaseToSnakeCase = (value: string) =>
  pascalCaseToDelimiterSeparatedCase(value, '_');

const pascalCaseToKebabCase = (value: string) =>
  pascalCaseToDelimiterSeparatedCase(value, '-');

const pascalCaseToTitleCase = (value: string) =>
  spaceSeparatedCaseToTitleCase(pascalCaseToDelimiterSeparatedCase(value, ' '));

const pascalCaseConverters: Record<NamingConvention, (_: string) => string> = {
  camelCase: pascalCaseToCamelCase,
  snakeCase: pascalCaseToSnakeCase,
  kebabCase: pascalCaseToKebabCase,
  titleCase: pascalCaseToTitleCase,
  pascalCase: returnOriginalValue
};

const convertCase = (
  value: string,
  originalNamingConvention: NamingConvention,
  targetNamingConvention: NamingConvention
) => {
  if (!isOfNamingConventionType(targetNamingConvention)) return value;
  switch (originalNamingConvention) {
    case CaseConverterConstants.NAMING_CONVENTIONS.camelCase:
      return camelCaseConverters[targetNamingConvention](value);
    case CaseConverterConstants.NAMING_CONVENTIONS.snakeCase:
      return snakeCaseConverters[targetNamingConvention](value);
    case CaseConverterConstants.NAMING_CONVENTIONS.kebabCase:
      return kebabCaseConverters[targetNamingConvention](value);
    case CaseConverterConstants.NAMING_CONVENTIONS.titleCase:
      return titleCaseConverters[targetNamingConvention](value);
    case CaseConverterConstants.NAMING_CONVENTIONS.pascalCase:
      return pascalCaseConverters[targetNamingConvention](value);
    default:
      return value;
  }
};

export { convertCase };
export type { NamingConvention };

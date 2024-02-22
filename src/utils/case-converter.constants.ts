const CaseConverterConstants = {
  NAMING_CONVENTIONS: {
    camelCase: 'camelCase',
    snakeCase: 'snakeCase',
    kebabCase: 'kebabCase',
    titleCase: 'titleCase',
    pascalCase: 'pascalCase'
  },
  WORDS_TO_KEEP_IN_LOWER_CASE: [
    'a',
    'an',
    'and',
    'as',
    'at',
    'but',
    'by',
    'down',
    'for',
    'from',
    'if',
    'in',
    'into',
    'like',
    'near',
    'nor',
    'of',
    'off',
    'on',
    'once',
    'onto',
    'or',
    'over',
    'past',
    'so',
    'than',
    'that',
    'the',
    'to',
    'upon',
    'when',
    'with',
    'yet'
  ]
} as const;

export { CaseConverterConstants };

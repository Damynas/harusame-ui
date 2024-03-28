import pluralizeWord from 'pluralize';

const pluralize = (word: string, count: number, prefixCount: boolean = false) =>
  pluralizeWord(word, count, prefixCount);

export { pluralize };

import type { JestConfigWithTsJest } from 'ts-jest/dist/types';

const config: JestConfigWithTsJest = {
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/components/**/*.tsx'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup.ts']
};

export default config;

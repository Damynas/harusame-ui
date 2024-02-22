import type { JestConfigWithTsJest } from 'ts-jest/dist/types';

const config: JestConfigWithTsJest = {
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: [
    '/index\\.ts',
    '\\.stories\\.tsx',
    '\\.constants\\.ts',
    '\\.test\\.(ts|tsx)'
  ],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  modulePaths: ['<rootDir>/src'],
  setupFilesAfterEnv: ['./jest.setup.ts']
};

export default config;

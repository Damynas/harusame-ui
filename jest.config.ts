import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: [
    '/index\\.ts',
    '\\.styles\\.tsx',
    '\\.stories\\.tsx',
    '\\.constants\\.ts',
    '\\.test\\.(ts|tsx)'
  ],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup.ts']
};

export default config;

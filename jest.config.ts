import { pathsToModuleNameMapper, type JestConfigWithTsJest } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';

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
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  setupFilesAfterEnv: ['./jest.setup.ts']
};

export default config;

import { JestConfigWithTsJest, pathsToModuleNameMapper } from 'ts-jest'
import { compilerOptions } from './tsconfig.json'

const config: JestConfigWithTsJest = {
  collectCoverageFrom: [
    './src/**/*.{js,jsx,ts,tsx}',
    '!./src/**/*.stories.{js,jsx,ts,tsx}',
    '!./src/qt-merge/**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
    '!./src/**/mocks/**',
  ],
  coverageReporters: ['lcov'],
  coverageDirectory: './coverage/',
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  resolver: 'ts-jest-resolver',
  moduleNameMapper: {
    '.(css|less|scss)$': 'identity-obj-proxy',
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: '<rootDir>/src',
    }),
  },
  moduleDirectories: ['node_modules', './test-utils', __dirname, './src'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  snapshotResolver: '<rootDir>/snapshot.resolver.js',
  passWithNoTests: true,
}

export default config

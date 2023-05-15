/* eslint-disable @typescript-eslint/no-var-requires */
const nextJest = require('next/jest');
const { pathsToModuleNameMapper } = require('ts-jest');

const { compilerOptions } = require('./tsconfig.json');

const createJestConfig = nextJest({ dir: './' });

const jestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: [
    'node_modules',
    './src/core/test',
    __dirname
  ],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>' })
}

module.exports = createJestConfig(jestConfig);
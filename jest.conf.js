const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, './'),
  verbose: true,
  moduleFileExtensions: ['js', 'json',],
  moduleNameMapper: {'^@/(.*)$': '<rootDir>/src/$1',},
  transform: {'^.+\\.js$': '<rootDir>/node_modules/babel-jest',},
  testPathIgnorePatterns: ['<rootDir>/test/e2e',],
  coverageDirectory: '<rootDir>/test/coverage/',
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/index.js',
    '!**/node_modules/**',
    '!src/.internal/**',
    '!src/*Cookie*.js',
  ],
};

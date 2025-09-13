/**
 * Jest configuration for Evolution-2.2.  
 * This configuration uses ts-jest to compile TypeScript on the fly and
 * defines a JSDOM environment suitable for testing React components.
 */
module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
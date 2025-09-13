/**
 * Jest configuration for Evolution-2.2.  
 * This configuration uses ts-jest to compile TypeScript on the fly and
 * defines a JSDOM environment suitable for testing React components.
 */
module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
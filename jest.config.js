 /** @type {import('ts-jest').JestConfigWithTsJest} */


// jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  // You may need to adjust the below line if you're using module aliases
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    // add other paths as needed
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  // specify any other configurations that ts-jest might need
};

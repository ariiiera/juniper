module.exports = {
  displayName: 'node',
  testEnvironment: 'node',
  testMatch: [
    './tests/**/*.test.js',
    './src/**/*.test.js',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/.github/',
    '/scripts/',
  ],
  collectCoverage: true,
  coverageDirectory: './coverage/node',
  testTimeout: 10000,
};

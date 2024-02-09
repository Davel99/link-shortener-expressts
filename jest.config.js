module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFiles: ['./jest.setup.js'],
    testMatch: ['**/*.test.ts'], // Match test files with .test.ts extension
    moduleNameMapper: {
        // Map module paths to mock files
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest"
      },
};

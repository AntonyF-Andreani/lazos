/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
module.exports = {
  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ["<rootDir>/src/{components,sections}/**/*.{ts,tsx}", "!**/node_modules/**"],
  //coverage minimo se recomienda como mínimo 80
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",
  // A list of reporter names that Jest uses when writing coverage reports
  // The maximum amount of workers used to run your tests. Can be specified as % or a number. E.g. maxWorkers: 10% will use 10% of your CPU amount + 1 as the maximum worker number. maxWorkers: 2 will use a maximum of 2 workers.
  // maxWorkers: "50%",
  moduleNameMapper: {
    // Handle CSS imports (with CSS modules)
    // https://jestjs.io/docs/webpack#mocking-css-modules
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    // Handle module aliases
    "^components/(.*)$": "<rootDir>/src/components/$1",
    "^services/(.*)$": "<rootDir>/src/services/$1",
    "^sections/(.*)$": "<rootDir>/src/sections/$1",
    "^utils$": "<rootDir>/src/utils",
    "^theme$": "<rootDir>/src/theme",
  },
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/", "<rootDir>/cypress/"],
  setupFilesAfterEnv: [
    "<rootDir>/__test__/setupTests.ts", // this file is used to configure jest
  ],
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  // The glob patterns Jest uses to detect test files
  testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
  testEnvironment: "jest-environment-jsdom",
  testURL: "http://localhost:3003",
  coverageReporters: ["json-summary", "text", "lcov", "json", "text-summary"],
};

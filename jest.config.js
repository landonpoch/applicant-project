module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: [
    "./**/?(*.)+(controller).ts?(x)",
    "!**/node_modules/**",
    "!**/vendor/**"
  ],
  coverageReporters: ["text"],
  collectCoverage: true,
};
module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.jest.json',
      babelConfig: true,
      diagnostics: false,
    },
  },
  coveragePathIgnorePatterns: ['/node_modules/', '/server/'],
  setupFilesAfterEnv: ['<rootDir>/test/jest.setup.ts'],
  coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/mocks.ts',
    '\\.(css|less|scss|html)$': '<rootDir>/test/mocks.ts',
    '^@(Components)(.*)$': '<rootDir>/src/components/$2',
    '^@(Definitions)(.*)$': '<rootDir>/src/models/definitions/$2',
    '^@(Interfaces)(.*)$': '<rootDir>/src/models/interfaces/$2',
    '^@(Pages)(.*)$': '<rootDir>/pages/$2',
    '^@(Redux)(.*)$': '<rootDir>/src/store/$2',
    '^@(Server)(.*)$': '<rootDir>/server/$2',
    '^@(Services)(.*)$': '<rootDir>/src/services/$2',
    '^@(Static)(.*)$': '<rootDir>/public/static/$2',
    '^@(Test)(.*)$': '<rootDir>/test/$2',
  },
  preset: 'ts-jest',
};

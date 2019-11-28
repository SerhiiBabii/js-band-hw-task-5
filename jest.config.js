module.exports = {
  transform: { '^.+\\.(js|jsx|ts)$': 'babel-jest' },
  collectCoverageFrom: true,
  collectCoverageFrom: ['./src/scripts/**/*.js'],
};

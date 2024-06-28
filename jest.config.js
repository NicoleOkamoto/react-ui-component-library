module.exports = {
  // Other Jest configuration options...
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleNameMapper: {
    ".(css|less|scss)$": "identity-obj-proxy",

  },

};
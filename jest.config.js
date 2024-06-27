module.exports = {
  // Other Jest configuration options...
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    ".(css|less|scss)$": "identity-obj-proxy",
  },
};
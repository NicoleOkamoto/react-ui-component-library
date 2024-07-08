module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current', // or specify specific Node.js versions like "12.0.0"
          // browsers: ["last 2 versions", "ie >= 11"], // Example for browser support
        },
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    'babel-plugin-styled-components',
    // Add other necessary plugins
  ],
};

const path = require('path'); // Correctly import path from Node.js core module

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // Resolves to the "dist" folder in your project root
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.pdf$/,
        type: 'asset/resource', // Ensures that PDF files are handled as resources
      },
      // other rules for JavaScript, CSS, etc.
    ],
  },
};

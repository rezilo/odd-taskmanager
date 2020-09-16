const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  devtool: 'source-map',
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  node: {
    __dirname: true,
  },
};

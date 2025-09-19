const path = require('path');
module.exports = {
  entry: './maines6.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
};
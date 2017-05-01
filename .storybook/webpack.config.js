const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /.less$/,
        loaders: ['style', 'css', 'less'],
        include: path.resolve(__dirname, '../')
      }
    ]
  }
}

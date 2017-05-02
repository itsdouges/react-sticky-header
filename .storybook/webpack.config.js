const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /.less$/,
        loaders: ['style', 'css', 'less'],
        include: path.resolve(__dirname, '../')
      }, {
        test: /\.(ico|jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
        include: path.resolve(__dirname, '../'),
        loader: 'file',
        query: {
          name: '[name]--[hash:8].[ext]',
        },
      }
    ]
  }
}

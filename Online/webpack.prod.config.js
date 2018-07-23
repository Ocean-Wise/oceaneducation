const webpack = require('webpack');

module.exports = {
  entry:  './wrapper.js',
  stats: {
    warnings: false,
    errors: false,
  },
  output: {
      libraryTarget: 'var',
      library: 'Online',
      path:     'builds',
      filename: 'Online.min.js',
  },
  module: {
      loaders: [
          {
              test:   /\.js/,
              loader: 'babel',
              include: __dirname,
          },
          {
              test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
              loader: 'file-loader',
          },
          {
            test: /\.(png|jpe?g|gif)$/,
            loader: 'url-loader',
          },
      ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
};

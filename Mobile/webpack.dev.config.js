module.exports = {
  entry:  './wrapper.js',
  output: {
      libraryTarget: 'var',
      library: 'Mobile',
      path:     'builds',
      filename: 'Mobile.js',
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
};

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
              test: /\.(eot|otf|ttf|woff|woff2)$/,
              loader: 'file-loader',
          },
          {
            test: /\.(png|jpe?g|gif|svg)$/,
            loader: 'url-loader',
          },
          {
            test: /\.css$/,
            loader: 'style-loader!css-loader',
          },
      ],
  },
};

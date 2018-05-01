module.exports = {
  entry:  './wrapper.js',
  output: {
      libraryTarget: 'var',
      library: 'Curriculum',
      path:     'builds',
      filename: 'Curriculum.js',
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
      ],
  },
};

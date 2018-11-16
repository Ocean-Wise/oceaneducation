module.exports = {
  entry:  './wrapper.js',
  output: {
      libraryTarget: 'var',
      library: 'ChildrenAndYouth',
      path:     'builds',
      filename: 'ChildrenAndYouth.js',
  },
  module: {
      loaders: [
          {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              query: {
                  plugins: ['transform-runtime'],
                  presets: ['es2015', 'react', 'stage-0']
              }
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

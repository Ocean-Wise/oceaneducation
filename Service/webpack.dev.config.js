module.exports = {
  entry:  './wrapper.js',
  output: {
      libraryTarget: 'var',
      library: 'GCSC',
      path:     'builds',
      filename: 'GCSC.js',
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
              test: /\.(eot|otf|ttf|woff|woff2)$/,
              loader: 'file-loader',
          },
          {
            test: /\.(png|svg|jpe?g|gif)$/,
            loader: 'url-loader',
          },
          {
            test: /\.css$/,
            loader: 'style-loader!css-loader',
          },
      ],
  },
};

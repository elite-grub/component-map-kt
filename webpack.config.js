module.exports = {
  entry: __dirname + '/client/src/index.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist',
    publicPath: '/',
  },
  devServer: {
    contentBase: './client/dist',
  },
  resolve: {
    extensions: ['.jsx', '.js', '.css', '.png'],
  },
};

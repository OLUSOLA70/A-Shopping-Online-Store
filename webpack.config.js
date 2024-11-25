const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // Set to 'production' for production builds
  entry: './src/index.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, // Clean the output directory before each build
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Matches .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Transpile modern JavaScript and JSX
        },
      },
      {
        test: /\.css$/, // Matches .css files
        use: ['style-loader', 'css-loader'], // Injects CSS and resolves imports
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Handle images
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Allow importing without file extensions
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Use your HTML template
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Serve content from 'public'
    },
    compress: true,
    port: 3020, // Specify the port
    hot: true, // Enable Hot Module Replacement
    open: true, // Open the browser automatically
  },
};

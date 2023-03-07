import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

const __dirname = path.resolve();

export default {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      }

    ],
  },
  devtool: 'source-map',
  entry: {
    main: './src/index.js',
    styles: './src/index.css',
    script: ['./src/Checkbox.js', './src/LoadTask.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "src/assets/images/*.png",
          to() {
            return Promise.resolve("dest/newPath/[name][ext]");
          },
        },
      ],
    }),
  ],
  output: {
    filename: '[name].[chunkhash].js',
    publicPath: '/PeerCodeReview/',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: './src/asset/[name].[ext]',
    chunkFilename: '[name].[chunkhash].js',
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "./")
    },
    compress: true,
    open: true,
    port: 3000,
    historyApiFallback: true,
    hot: true,

  },
};

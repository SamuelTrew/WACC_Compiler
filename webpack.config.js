const { CheckerPlugin } = require('awesome-typescript-loader')
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  
  target: 'node',

  // Currently we need to add '.ts' to the resolve.extensions array.
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },

  entry: './src/Index.ts',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
  },

  optimization: {
    minimizer: [new TerserPlugin({
      parallel: true,
      cache: true,
      terserOptions: {
        output: {
          comments: false
        },
        mangle: {
          reserved: ['process']
        }
      }
    })],
  },

  performance: {
    // 1GB Max Build Size
    maxEntrypointSize: 1073741824,
    maxAssetSize: 1073741824
  },

  mode: 'production',

  node: {
    console: true,
    global: true,
    process: true,
  },

  // Source maps support ('inline-source-map' also works)
  devtool: 'source-map',

  // Add the loader for .ts files.
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },

  plugins: [
    new CheckerPlugin()
  ]
};
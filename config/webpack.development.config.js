/*eslint-disable */
const path = require('path'),
      webpack = require('webpack'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin'),
      { alias, sassLoaders, extensions } = require('./webpack.shared.config.js'),
      dotenv = require('dotenv'),
      envVariables = dotenv.config({ path: path.join(__dirname, '.env') }).parsed,
      pack = require(path.resolve(process.cwd(), 'package.json')),
      name = pack.name,
      definitions = {}

definitions['PRODUCTION'] = JSON.stringify(false)
definitions['__USER__AGENT__'] = `${name}`

// Special mapping for replacingENV variables
Object.keys(envVariables).forEach((key) => {
  const k = `__${key.toUpperCase()}__`
  definitions[k] = JSON.stringify(envVariables[key])
})

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8002',
    'webpack/hot/only-dev-server',
    'src/index.js'
  ],
  output: {
    path: path.join(__dirname, '/build/'),
    filename: 'chat-app-zero.js',
    publicPath: '/'
  },
  resolve: {
    modules: [
      path.resolve(process.cwd()),
      "node_modules"
    ],
    alias,
    extensions
  },
  plugins: [
    new webpack.DefinePlugin(definitions),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    },
    {
      test: /\.css$/,
      loader: 'css-loader',
      options: {
        importLoaders: 2,
        modules: true,
        // namedExport: true, // this is  invalid Options ,I find it
        camelCase: true,
        localIdentName: '[path][name]__[local]--[hash:base64:5]',
      }
    },
    {
      test: /\.scss$/,
      loader: sassLoaders.join('!')
    },
    { test: /\.jpg$/, exclude: /node_modules/, loader: 'file-loader' },
    { test: /\.(png)$/, exclude: /node_modules/, loader: 'url-loader?limit=100000' },
    { test: /\.(eot|ttf|woff|woff2)$/, exclude: /node_modules/, loader: 'url-loader?name=[name].[ext]' },
    { test: /\.svg$/, exclude: /node_modules/, loader: 'raw-loader' }
  ]},
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
}

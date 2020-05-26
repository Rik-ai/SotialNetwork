/*eslint-disable */
const path = require('path')

const alias = {}
alias['shared'] = path.resolve(__dirname, '..', 'src', 'app', 'shared')
alias['assets'] = path.resolve(__dirname, '..', 'src', 'app', 'assets')
alias['components'] = path.resolve(__dirname, '..', 'src', 'app', 'components')
alias['state'] = path.resolve(__dirname, '..', 'src', 'app', 'state')


const sassLoaders = [
  'style-loader',
  'css-loader?&sourceMap&modules&importLoaders=2&localIdentName=[local]',
  'sass-loader?includePaths[]=node_modules'
]

const extensions = [
  ".js",
  ".jsx",
  ".json",
  ".scss",
  ".css"
]

module.exports = {
  alias,
  sassLoaders,
  extensions
}

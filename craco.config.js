const CracoAlias = require('craco-alias')
const CracoLessPlugin = require('craco-less')
const theme = require('./src/styles/antdTheme')

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'jsconfig',
        baseUrl: './src'
      }
    },
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: theme,
            javascriptEnabled: true
          }
        }
      }
    }
  ]
}

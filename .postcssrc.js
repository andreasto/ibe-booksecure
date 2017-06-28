// https://github.com/michael-ciniawsky/postcss-load-config
var webpack = require('webpack')

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserlist" field in package.json
    autoprefixer: false,
    postcss: [
      require('postcss-import')({
        addDependencyTo: webpack
      }),
      require('postcss-nested')(),
      require('postcss-cssnext')()
    ]
  }
}

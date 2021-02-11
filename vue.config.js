const path = require("path");

module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/styles/global.scss")]
    }
  },
  configureWebpack: (config) => {
    config.devtool = 'source-map'
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Curiosity-Website/'
    : '/'
};

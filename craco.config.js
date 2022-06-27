// to override the configuration provided by create-react-app
const webpackConfig = require("./webpack.config.js");
module.exports = {
  reactScriptsVersion: "react-scripts",
  style: {
    modules: {
      localIdentName: "",
    },
    css: {
      loaderOptions: {},
    },
    sass: {
      loaderOptions: {},
    },
    postcss: {
      mode: "extends" || "file",
      loaderOptions: {},
    },
  },
  eslint: {
    enable: true,
    mode: "extends" || "file",
    configure: {},

    pluginOptions: {},
  },
  babel: {
    presets: [],
    plugins: [],
    loaderOptions: {},
  },
  typescript: {
    enableTypeChecking: true,
  },
  webpack: {
    alias: {},
    plugins: {
      add: [],
      remove: [],
    },
    configure: {},
  },
  devServer: {},
};

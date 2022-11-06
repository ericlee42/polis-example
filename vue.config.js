// vue.config.js
module.exports = {
  devServer: {
    disableHostCheck: true,
    hot: true,
    open: true,
    host: "127.0.0.1",
    port: 8000,
    // proxy: {
    //   "/api": {
    //     target: "http://localhost:5000/",
    //     pathRewrite: {
    //       "^/api": "/api",
    //     },
    //     logLevel: "debug",
    //   },
    // },
  },
};

const merge = require("webpack-merge"),
  common = require("./webpack.common.js"),
  webpack = require("webpack")

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: "\"production\""
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ],
  devtool: "#source-map"
});

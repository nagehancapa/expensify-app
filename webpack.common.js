const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: {
    app: "./src/app.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Expensify",
      template: "./src/index.html",
    }),
    // [].concat(devMode ? [] : [new MiniCssExtractPlugin({
    //   filename: "styles.css"
    // })]),
  ],
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        // use: [
        //   devMode ? "style-loader" : MiniCssExtractPlugin.loader,
        //   "css-loader",
        //   "sass-loader",
        // ],
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};

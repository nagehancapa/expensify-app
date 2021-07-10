const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== "production";
process.env.NODE_ENV = process.env.NODE_ENV || "development";

if (process.env.NODE_ENV === "test") {
  require("dotenv").config({ path: ".env.test" });
} else if (process.env.NODE_ENV === "development") {
  require("dotenv").config({ path: ".env.development" });
}

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
    new webpack.DefinePlugin({
      "process.env.FIREBASE_API_KEY": JSON.stringify(
        process.env.FIREBASE_API_KEY
      ),
      "process.env.FIREBASE_AUTH_DOMAIN": JSON.stringify(
        process.env.FIREBASE_AUTH_DOMAIN
      ),
      "process.env.FIREBASE_DATABASE_URL": JSON.stringify(
        process.env.FIREBASE_DATABASE_URL
      ),
      "process.env.FIREBASE_PROJECT_ID": JSON.stringify(
        process.env.FIREBASE_PROJECT_ID
      ),
      "process.env.FIREBASE_STORAGE_BUCKET": JSON.stringify(
        process.env.FIREBASE_STORAGE_BUCKET
      ),
      "process.env.FIREBASE_MESSAGING_SENDER_ID": JSON.stringify(
        process.env.FIREBASE_MESSAGING_SENDER_ID
      ),
      "process.env.FIREBASE_APP_ID": JSON.stringify(
        process.env.FIREBASE_APP_ID
      ),
      "process.env.FIREBASE_MEASUREMENT_ID": JSON.stringify(
        process.env.FIREBASE_MEASUREMENT_ID
      ),
    }),
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

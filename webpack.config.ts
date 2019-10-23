import webpack from "webpack";
import path from "path";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import DtsBundlePlugin from "@ahrakio/witty-webpack-declaration-files";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import CompressionWebpackPlugin from "compression-webpack-plugin";
import TypedocWebpackPlugin from "typedoc-webpack-plugin";

const config: webpack.Configuration = {
  entry: path.resolve(__dirname, "./src/index.ts"),
  mode: process.env.NODE_ENV === "development" ? "development" : "production",
  devtool: "source-map",
  target: "web",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              babelrc: false,
              presets: ["@babel/preset-typescript", "@babel/preset-env"]
            }
          },
          {
            loader: "ts-loader",
            options: {
              context: __dirname,
              configFile: "tsconfig.json"
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CompressionWebpackPlugin({
      test: /^index\.js$/i,
      filename: "[path].br[query]",
      algorithm: "brotliCompress"
    }),
    new CompressionWebpackPlugin({
      test: /^index\.js$/i
    }),
    new CleanWebpackPlugin({
      verbose: true
    }),
    new DtsBundlePlugin({ merge: true })
    // new TypedocWebpackPlugin(
    //   {
    //     out: path.resolve(__dirname, "docs")
    //   },
    //   "./src"
    // )
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom"
    },
    "@emotion/core": "@emotion/core",
    "@emotion/styled": "@emotion/styled"
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    library: "swipeableTabs",
    libraryTarget: "umd"
  }
};

if (process.env.ANALYZE) {
  (config.plugins || []).push(new BundleAnalyzerPlugin());
}

export default config;

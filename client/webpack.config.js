const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        app: ["@babel/polyfill", "./src/index.js"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
        ],
    },
    devServer: {
        proxy: {
            "/api": "http://localhost:5000",
            hot: true
        },
    },
    devtool: "source-map",
    plugins: [new HtmlWebPackPlugin({ template: "./public/index.html" }), new MiniCssExtractPlugin()]
};
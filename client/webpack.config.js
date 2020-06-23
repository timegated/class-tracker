const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        app: ["@babel/polyfill", "./src/index.js"]
    },
    output: {
        publicPath:  "/",
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
        historyApiFallback: true,
        hot: true,
        proxy: {
            "/api": "http://localhost:5000",
        },
    },
    devtool: "source-map",
    plugins: [new HtmlWebPackPlugin({ template: "./public/index.html" }), new MiniCssExtractPlugin()]
};
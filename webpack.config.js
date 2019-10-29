const port = 4000;

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PRODUCTION = 'production';
const DEVELOPMENT = 'development';

const env = process.env.NODE_ENV;
const isProduction = env && env.trim() === PRODUCTION;
const isDevelopment = !isProduction;
const distPath = path.join(__dirname, '/dist');

module.exports = {
    mode: isProduction ? PRODUCTION : DEVELOPMENT,
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        filename: 'bundle.js',
        path: distPath,
    },
    devtool: isDevelopment ? 'source-map' : 'none',
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader',
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: ['babel-loader', 'eslint-loader'],
            },
            {
                test: /\.(scss)$/,
                exclude: /node_modules/,
                use: [
                    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('autoprefixer')({
                                    overrideBrowserslist: ['last 2 versions'],
                                }),
                            ],
                        },
                    },
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: path.resolve(__dirname, 'src', 'index.html'),
        }),
    ],
    devServer: {
        port: port || 3000,
        hot: true,
    }
}

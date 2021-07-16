const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 4200,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
        })
    ],
    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                use: ['style-loader', 'css-loader', 'sass-loader' ]
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env'
                    ]
                }                
            }
        ]
    }
}
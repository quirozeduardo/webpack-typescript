var path = require('path');

module.exports = {
    entry: [
        './src/main.ts'
    ],
    output: {
        path: path.resolve(__dirname, './dist/'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: "ts-loader"
            }
        ]
    }
};
const path = require('path');

module.exports = {
    entry: './src/app/index.ts',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        library: 'bubbleRange',
        filename: 'main.js',
        publicPath: 'dist/'
    },
};
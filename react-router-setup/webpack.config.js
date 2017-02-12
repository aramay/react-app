module.exports = {
    entry: './src/main.js',
    output: {
        // path: __dirname'./src',
        path: __dirname + './src',
        filename: 'bundle.js',
    },
    devServer:{
        inline: true,
        contentBase: './src',
        port: 3333
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
}
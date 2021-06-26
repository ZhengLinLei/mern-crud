const path = require('path');

module.exports = {
    entry: './src/views/index.js',
    output: {
        path: __dirname + '/src/public',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                use: {
                    loader: 'babel-loader'
                },
                test: /\.js$/,
                exclude: path.join(__dirname, '/node_modules')
            }
        ]
    }
}
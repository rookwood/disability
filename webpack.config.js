var webpack = require('webpack');
module.exports = {
    entry: [
      'webpack/hot/only-dev-server',
      "./src/index.js"
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]
};
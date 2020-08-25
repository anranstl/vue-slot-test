module.exports = {
    entry: __dirname + "/index.js",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist",
    },
    resolve: {
        extensions: ['js'], 
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    mode: "development",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [
                    {
                        loader: "babel-loader"
                    },
                ]
            }
        ]
    }
}
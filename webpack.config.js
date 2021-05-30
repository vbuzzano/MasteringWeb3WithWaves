const path = require('path');

const main = (name, minimize) => ({
	entry: [
		'@babel/polyfill',
		'./src/main.js'
	],
    mode: "production",
    optimization: {
        minimize,
        usedExports: true
    },
	output: {
        globalObject: "this",
        filename: name,
        path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
		]
	}
})

module.exports = [
    {
        ...main('build.js', false),
        devtool: 'inline-source-map',
        mode: "development",
    },
    {
        ...main('build.min.js', true)
    }
]
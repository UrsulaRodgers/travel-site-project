var path = require('path');

module.exports = {
	entry:"./app/assets/scripts/App.js",
	output: {
		path: path.resolve(__dirname, "./app/temp/scripts"),
		filename: "App.js"
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				},
				test: /\.js$/,
				//applies babel loader to js files only
				exclude: /node_modules/
			}
		]
	}
}
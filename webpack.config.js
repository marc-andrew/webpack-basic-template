const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		app: './src/js/app.js',
		other: './src/js/other.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['es2015']
						}
					}
				]
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		stats: "errors-only",
		// open: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			excludeChunks: ['other'],
			// minify: {
			// 	collapseWhitespace: true
			// },
			hash: true
		}),
		new HtmlWebpackPlugin({
			template: './src/page-2.html',
			filename: 'page-2.html',
			chunks: ['other'], // just include other
			// minify: {
			// 	collapseWhitespace: true
			// },
			hash: true
		}),
		new ExtractTextPlugin({
			filename: 'css/style.css'
		}),
		new CleanWebpackPlugin(['dist'])
	]
}
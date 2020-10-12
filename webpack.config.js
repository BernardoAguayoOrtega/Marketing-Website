const HtmlWebPackPlugin = require('html-webpack-plugin');

const babelRules = {
	test: /\.js$/,
	exclude: /node_modules/,
	loader: 'babel-loader',
	options: {
		presets: [['@babel/preset-react'], ['@babel/preset-env']],
	},
};

module.exports = {
	output: {
		filename: 'bundle.[contentHash].js',
	},
	module: {
		rules: [babelRules],
	},
	plugins: [
		new HtmlWebPackPlugin({
			title: 'Marketing website',
			template: './public/index.html',
		}),
	],
};

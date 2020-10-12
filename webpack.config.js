//import webpack plugins
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
		filename: 'app.[contentHash].js',
	},
	module: {
		rules: [babelRules],
	},
	plugins: [
		new HtmlWebPackPlugin({
			title: 'Learn webpack',
			template: './public/index.html',
		}),
	],
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 3000,
	},
};

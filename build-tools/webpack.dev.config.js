const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [path.resolve('src/index.tsx')],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].bundle.js',
	},
	devtool: 'inline-source-map',
	devServer: {
		static: '/dist',
		port: 8888,
	},
	resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '~': path.resolve('src/')
    },
    mainFields: ['main'],
  },
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: '/node_modules',
				loader: 'babel-loader',
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		})
	]
}
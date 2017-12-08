const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry:{
		'browser':['./src/interface-prototype.js'],
		'test/browser.dist':['./test/test.js'],
	},
	output: {
		filename: '[name].js',
		library: "interface-prototype",
		libraryTarget: "umd"
	},
    module: {
		rules : [
			{
				test: /\.(js)?$/,
				exclude: /node_modules/,
				loader: "babel-loader",
			},
		],
    },
    devtool: 'source-map',
};

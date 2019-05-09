const path = require('path');

module.exports = {
	entry: './src/js/index.js',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
			},
			// {
			// 	test: /\.scss$/,
			// 	use: [
			// 		{ loader: 'style-loader' },
			// 		{ loader: 'css-loader' },
			// 		{ loader: 'sass-loader' },
			// 	],
			// },
			// {
			// 	test: /\.(png|gif|jpg|svg)$/,
			// 	use: {
			// 		loader: 'url-loader',
			// 		options: {
			// 			limit: 50000,
			// 		},
			// 	},
			// },
		],
	},
	resolve: {
		extensions: ['.scss', '.js', '.json', '.png', '.gif', '.jpg', '.svg'],
	},
	output: {
		path: path.resolve(__dirname, 'dist/'),
		publicPath: '',
		filename: 'rtdigital-react-components.js',
		libraryTarget: 'umd',
	},
};

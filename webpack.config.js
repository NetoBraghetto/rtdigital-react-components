const path = require('path');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
	entry: './src/index.js',
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
			{
				test: /\.scss$/,
				use: [
					{ loader: MiniCssExtractPlugin.loader },
					{ loader: 'css-loader' },
					{ loader: 'sass-loader' },
				],
			},
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
    plugins: [
        new MiniCssExtractPlugin({
            filename: "rtdigital-react-components.min.css",
            chunkFilename: "[id].css"
        })
    ],
    optimization: {
        minimizer: [
            new TerserJSPlugin({
                terserOptions: {
                    safari10: true,
                },
            }),
            new OptimizeCSSAssetsPlugin({})
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

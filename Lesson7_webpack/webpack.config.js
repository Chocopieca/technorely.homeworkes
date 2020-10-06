const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const StylelintPlugin = require('stylelint-webpack-plugin');
const postcss = require("postcss");


const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

const optimization = () => {
	const config = {
		splitChunks: {
			chunks: "all",
		},
	};

	if (isProd) {
		config.minimizer = [
			new OptimizeCssAssetsWebpackPlugin(),
			new TerserWebpackPlugin(),
		];
	}
	return config;
};

const cssloader = (loader) => {
	const loaders = [
		{
			loader: MiniCssExtractPlugin.loader,
			options: {
				hmr: isDev,
				reloadAll: true,
			},
		},
        "css-loader",
        {
            loader: "postcss-loader",
            options: {
                postcssOptions: {
                    config: path.resolve(__dirname, 'postcss.config.js')
                },
            }
        }
	];

	if (loader) {
    loaders.push(loader)
	}

	return loaders;
};

const bableOpbions = (preset) => {
	const opts = {
		presets: ["@babel/preset-env"],
	};

	if (preset) {
		opts.presets.push(preset);
	}

	return opts;
};

const jsLoaders = () => {
	const loaders = [
		{
			loader: "babel-loader",
			options: bableOpbions(),
		},
	];

	if (isDev) {
		loaders.push("eslint-loader");
	}

	return loaders;
};

const plagins = () => {
	const base = [
		new HTMLWebpackPlugin({
			template: "./index.html",
			minify: {
				collapseWhitespace: isProd,
			},
		}),
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve("src/webpack.ico"),
					to: path.resolve(__dirname, "dist"),
				},
			],
		}),
		new MiniCssExtractPlugin({
			filename: filename("css"),
        }),
        // new StylelintPlugin({
        //     configFile: path.resolve(__dirname, ".stylelintrc"),
        //     context: path.resolve(__dirname, "src/styles"), 
        // })
	];

	// if (isProd) {
	//     base.push(new BundleAnalyzerPlugin())
	// }

	return base;
};

module.exports = {
	context: path.resolve(__dirname, "src"),
	mode: "development",
	entry: {
		main: ["@babel/polyfill", "./index.js"],
	},
	output: {
		filename: filename("js"),
		path: path.resolve(__dirname, "dist"),
	},
	resolve: {
		extensions: [".js", ".json", ".ts"],
		alias: {
			"@comp": path.resolve(__dirname, "src/components"),
			"@sty": path.resolve(__dirname, "src/styles"),
			"@": path.resolve(__dirname, "src"),
		},
	},
	optimization: optimization(),
	devServer: {
		port: 4200,
		hot: isDev,
	},
	devtool: isDev ? "source-map" : "",
	plugins: plagins(),
	module: {
		rules: [
			{
				test: /\.css$/,
				use: cssloader(),
			},
			{
				test: /\.s[ac]ss$/,
				use: cssloader("sass-loader"),
			},
			{
				test: /\.(png|jpg|svg|gif)$/,
				use: ["file-loader"],
			},
			{
				test: /\.(ttf|woff|woff2|eot)$/,
				use: ["file-loader"],
			},
			{
				test: /\.js$/,
				exclude: /node-modules/,
				use: jsLoaders(),
			},
			{
				test: /\.ts$/,
				exclude: /node-modules/,
				loader: {
					loader: "babel-loader",
					options: bableOpbions("@babel/preset=typescipt"),
				},
			},
			{
				test: /\.jsx$/,
				exclude: /node-modules/,
				loader: {
					loader: "babel-loader",
					options: bableOpbions("@babel/preset-react"),
				},
			},
		],
	},
};

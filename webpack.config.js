"use strict"

const path = require("path")

module.exports = {
	devtool: "inline-source-map",
	entry: "./src/index.tsx",
	mode: "development",
	output: {
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "ts-loader"
			}
		]
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"]
	}
}

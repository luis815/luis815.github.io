const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
	root: resolve(__dirname, "./src/"),
	publicDir: false,
	build: {
		outDir: resolve(__dirname, "./dist/"),
		emptyOutDir: true,
	},
});

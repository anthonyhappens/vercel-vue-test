const CopyWebpackPlugin = require("copy-webpack-plugin");

const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [{ from: "src/assets/config.json", to: "." }],
      }),
    ],
  },
});

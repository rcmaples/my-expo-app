module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "transform-inline-environment-variables",
      "transform-remove-console",
      ["@fullstory/babel-plugin-annotate-react", { native: true }],
      ["react-native-reanimated/plugin"],
    ],
  };
};

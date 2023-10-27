/* eslint-disable no-undef */
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@authentication": "./src/authentication",
            "@i18n": "./src/i18n",
            "@routes": "./src/routes",
            "@theme": "./src/theme",
          },
          extensions: [".ts", ".tsx"],
        },
      ],
    ],
  };
};

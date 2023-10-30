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
            "@components": "./src/components",
            "@i18n": "./src/i18n",
            "@routes": "./src/routes",
            "@theme": "./src/theme",
            "@ui": "./src/ui",
          },
          extensions: [".ts", ".tsx"],
        },
      ],
    ],
  };
};

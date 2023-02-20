// This file is being synced from WordPress/openverse. Any changes made to it
// here will be overwritten. Please make any necessary edits to these files:
// - https://github.com/WordPress/openverse/blob/main/templates/prettier.config.js.jinja
// - https://github.com/WordPress/openverse/blob/main/templates/prettier.config.local.js.jinja

module.exports = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: false,
  singleQuote: false,
  proseWrap: "always",
  overrides: [
    {
      files: ["*.yml", "*.yaml"],
      options: {
        proseWrap: "preserve",
      },
    },
    {
      files: ["frontend/**/*"],
      options: {
        plugins: [require("prettier-plugin-tailwindcss")],
        tailwindConfig: "frontend/tailwind.config.js",
        vueIndentScriptAndStyle: false,
      },
    },
  ],
}

// https://eslint.org/docs/user-guide/configuring

module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jest/globals": true,
  },
  "globals": {
    "ENV": true,
  },
  "extends": ["eslint:recommended", "plugin:jest/recommended"],
  "plugins": ["jest"],
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    "indent": [2, 2, { "SwitchCase": 1 }],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error","always"],
    "object-curly-spacing": [0, "never"],
    "global-require": "off",
    "import/no-unresolved": "off",
    "no-console": "off",
    "no-debugger": "error",
    "no-underscore-dangle": "off",
    "no-new-func": "off",
    "no-param-reassign": "off",
    "react/prefer-stateless-function": "off",
    "react/no-multi-comp": "off",
    "react/jsx-no-bind": "off",
    "react/jsx-indent": "off",
    "react/jsx-first-prop-new-line": "off",
    "react/jsx-filename-extension": "off",
    "no-restricted-syntax": "off",
    "linebreak-style": "off",
    "import/no-extraneous-dependencies": "off",
    "react/no-unused-prop-types": "off"
  }
}

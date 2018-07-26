module.exports =  {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true
  },
  "globals": {
    "Babel": true
  },
  "plugins": [],
  "rules": {
    "indent": [2, 2, { "SwitchCase": 1 }],
    "object-curly-spacing": [0, "never"],
    "global-require": "off",
    "import/no-dynamic-require": "off",
    "import/no-unresolved": "off",
    "no-console": process.env.NODE_ENV === 'production' ? '2' : 'off',
    "no-debugger": process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-underscore-dangle": "off",
    "no-new-func": "off",
    "no-param-reassign": "off",
    "linebreak-style": "off",
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "webpack.dev.conf.js"
      }
    }
  }
}

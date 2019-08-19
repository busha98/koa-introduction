module.exports = {
    "env": {
        "node": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
      "max-len": ["error", {
        "code": 100,
        "ignoreStrings": true
      }],
      "comma-dangle": [ "error", "never" ],
      "semi": ["error", "never"]
    }
};

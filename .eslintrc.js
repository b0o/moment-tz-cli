module.exports = {
  extends: [
    "airbnb",
    "plugin:react/recommended",
  ],
  env: {
    es6:     true,
    browser: true,
  },
  rules: {
    semi:           ["error", "never"],
    "comma-dangle": ["warn", "always-multiline"],
    quotes:         ["warn", "double"],

    "one-var": ["error", {
      uninitialized: "consecutive",
      initialized:   "never",
    }],

    "one-var-declaration-per-line": ["error", "initializations"],

    "newline-per-chained-call": "off",
    "no-multiple-empty-lines":  ["error", { max: 1 }],

    "key-spacing": ["warn", {
      singleLine: {
        beforeColon: false,
        afterColon:  true,
      },
      multiLine: {
        beforeColon: false,
        afterColon:  true,
        align:       "value",
      },
    }],

    indent: ["warn", 2, {
      SwitchCase:         0,
      VariableDeclarator: { var: 2, let: 2, const: 3 },
    }],
  },

  overrides: [
    {
      files: [
        ".eslintrc.js",
      ],
      env: {
        node:    true,
        browser: false,
        react:   false,
      },
    },
    {
      files: [
        "**/*.test.js",
        "**/*.test.jsx",
      ],
      env: {
        jest: true,
      },
      plugins: ["jest"],
      rules:   {
        "jest/consistent-test-it":      "error",
        "jest/lowercase-name":          "error",
        "jest/no-disabled-tests":       "warn",
        "jest/no-focused-tests":        "error",
        "jest/no-identical-title":      "error",
        "jest/no-jest-import":          "error",
        "jest/prefer-to-have-length":   "error",
        "jest/prefer-to-be-null":       "error",
        "jest/prefer-to-be-undefined":  "error",
        "jest/valid-expect":            "error",
        "jest/valid-expect-in-promise": "error",
      },
    },
  ],
}

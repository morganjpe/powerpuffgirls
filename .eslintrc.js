module.exports = {
  env: {
    browser: true, // Allows for the use of predefined global variables for browsers (document, window, etc.)
    jest: true, // Allows for the use of predefined global variables for Jest (describe, test, etc.)
    node: true, // Allows for the use of predefined global variables for Node.js (module, process, etc.)
  },
  extends: [
    'react-app', // Use the recommended rules from eslint-config-react-app (bundled with Create React App)
    'eslint:recommended', // Use the recommened rules from eslint
    'plugin:@typescript-eslint/recommended', // Use the recommended rules from @typescript-eslint/eslint-plugin
    'plugin:react/recommended', // Use the recommended rules from eslint-plugin-react
    // 'prettier/@typescript-eslint', // Use eslint-config-prettier to disable ESLint formatting rules from @typescript-eslint/eslint-plugin that would conflict with Prettier
    // 'prettier/react', // Use eslint-config-prettier to disable ESLint formatting rules from eslint-plugin-react that would conflict with with Prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier to display Prettier errors as ESLint errorsq
    'plugin:jsx-a11y/strict',
  ],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    sourceType: 'module', // Allows for the use of imports
  },
  plugins: [
    '@typescript-eslint', // Allows for manually setting @typescript-eslint/* rules
    'react', // Allows for manually setting react/* rules
    'prettier',
    'jsx-a11y',
  ],
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  rules: {
    // suppress errors for missing 'import React' in files
    'react/react-in-jsx-scope': 'off',
    // allow jsx syntax in js files (for next.js project)
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ], //should add ".ts" if typescript project
  },
};

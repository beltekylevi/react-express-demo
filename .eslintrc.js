module.exports = {
  'extends': ['eslint:recommended', 'google'],
  'env': {
    'es6': true,
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
  },
  'rules': {
    'require-jsdoc': 0,
    'react/jsx-uses-vars': 2,
    'react/jsx-uses-react': 2,
    'indent': [2, 2],
  },
  'plugins': [
    'react',
  ],
  'overrides': [
    {
      'files': ['src/client/**/*.js'],
      'parserOptions': {
        'sourceType': 'module',
      },
      'env': {
        'browser': true,
      },
    },
    {
      'files': [
        'webpack.*.js',
        '.eslintrc.js',
        'jest.config.js',
        'test/**/*.test.js',
        'src/server/**/*.js',
      ],
      'env': {
        'node': true,
      },
    },
    {
      'files': ['src/client/**/*.test.js'],
      'env': {
        'jest': true,
      },
    },
    {
      'files': ['test/**/*.test.js'],
      'env': {
        'mocha': true,
      },
    },
    {
      'files': ['src/server/**/*.js'],
      'rules': {
        'no-console': 0,
      },
    },
  ],
};

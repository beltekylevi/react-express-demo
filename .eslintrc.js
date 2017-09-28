module.exports = {
  'extends': 'google',
  'env': {
    'es6': true,
    'browser': true,
    'node': true,
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
    },
  ],
};

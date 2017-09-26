module.exports = {
  'extends': 'google',
  'parser': 'babel-eslint',
  'env': {
    'browser': true,
    'node': true,
  },
  'rules': {
    'require-jsdoc': 0,
    'react/jsx-uses-vars': 2,
    'react/jsx-uses-react': 2,
  },
  'plugins': [
    'react',
  ],
};

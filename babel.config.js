module.exports = {
  presets: ['next/babel'],
  plugins: [
    'inline-react-svg',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-optional-chaining',
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@components': './src/Component',
          '@hooks': './src/hooks',
          '@pages': './src/pages',
          '@core': './src/core',
          '@styles': './src/styles',
          '@public': './public',
        },
        extensions: ['.js', '.jsx', 'ts', 'tsx'],
      },
    ],
  ],
  env: {
    test: {
      presets: [['next/babel', { 'preset-env': { targets: { node: 'current' } } }]],
      plugins: [
        '@babel/plugin-proposal-nullish-coalescing-operator',
        '@babel/plugin-proposal-optional-chaining',
        'dynamic-import-node',
      ],
    },
  },
};

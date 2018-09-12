module.exports = {
  presets: ['@vue/app'],
  plugins: [
    '@babel/plugin-proposal-export-default-from',
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true,
      },
      'vant',
    ],
  ],
};

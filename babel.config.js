module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@src': './src',
          '@components': './src/components',
          '@assets': './src/assets',
          '@utils': './src/utils',
          '@constants': './src/constants',
          '@hooks': './src/hooks',
          '@navigations': './src/navigation',
          '@services': './src/services',
          '@types': './src/types',
          '@views': './src/views',
        },
      },
    ],
  ],
};

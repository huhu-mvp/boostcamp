module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'], //表示哪个目录开始设置绝对路径
        alias: {
          //别名的配置
          '@/pages': './src/pages',
          '@/navigator': './src/navigator',
          '@/components': './src/components',
          '@/assets': './src/assets',
          '@/request': './src/request',
          '@/interfaces': './src/interfaces',
          '@/hooks': './src/hooks',
        },
      },
    ],
  ],
};

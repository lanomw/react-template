// 是否是开发模式
const isDEV = process.env.NODE_ENV === 'development';

module.exports = {
  // @babel/preset-env如果指定了 useBuiltIns: 'usage', 则需要配置 sourceType: "unambiguous"
  // 参考：https://stackoverflow.com/questions/60243597/why-does-using-babel-preset-env-with-usebuiltins-usage-cause-an-error-in-ha
  ignore: [/core-js/],
  sourceType: 'unambiguous',
  presets: [
    [
      '@babel/preset-env',
      {
        // 根据配置的浏览器兼容,以及代码中使用到的api进行引入polyfill按需添加
        useBuiltIns: 'usage',
        // 配置使用core-js使用的版本
        corejs: 3,
        // 不对ES6模块化进行更改，还是使用import引入模块
        modules: false
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  plugins: [
    // 开发模式启动react热更新插件
    isDEV && require.resolve('react-refresh/babel'),
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3
      },
    ]
  ].filter(Boolean) // 过滤空值
};

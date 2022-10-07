module.exports = {
  extends: [
    // 配置stylelint拓展插件
    'stylelint-config-standard',
    // 配置stylelint和prettier兼容
    'stylelint-config-prettier',
    // 配置stylelint css属性书写顺序插件
    'stylelint-config-recess-order',
  ],
  plugins: ['stylelint-less', 'stylelint-order'],
  rules: {
    'color-no-invalid-hex': true,
    'less/color-no-invalid-hex': true,
    'max-empty-lines': 2,
    'selector-class-pattern': [
      // 命名规范 -
      // '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      // {
      //   message: 'Expected class selector to be kebab-case',
      // },
      // 命名规范 _
      '^([a-z][a-z0-9]*)(_[a-z0-9]+)*$',
      {
        message: 'Expected class selector to be snake_case',
      },
    ],
    'string-quotes': 'single', // 单引号
    'at-rule-empty-line-before': null,
    'at-rule-no-unknown': null,
    'at-rule-name-case': 'lower', // 指定@规则名的大小写
    'length-zero-no-unit': true, // 禁止零长度的单位（可自动修复）
    'shorthand-property-no-redundant-values': true, // 简写属性
    'number-leading-zero': 'never', // 小数不带0
    'declaration-block-no-duplicate-properties': true, // 禁止声明快重复属性
    'no-descending-specificity': true, // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器。
    'selector-max-id': 1, // 限制一个选择器中 ID 选择器的数量
    'max-nesting-depth': 3,
    indentation: [
      2,
      {
        // 指定缩进  warning 提醒
        severity: 'warning',
      },
    ],
    'order/properties-order': [
      // 规则顺序
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      'display',
      'float',
      'width',
      'height',
      'max-width',
      'max-height',
      'min-width',
      'min-height',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'margin-collapse',
      'margin-top-collapse',
      'margin-right-collapse',
      'margin-bottom-collapse',
      'margin-left-collapse',
      'overflow',
      'overflow-x',
      'overflow-y',
      'clip',
      'clear',
      'font',
      'font-family',
      'font-size',
      'font-smoothing',
      'osx-font-smoothing',
      'font-style',
      'font-weight',
      'line-height',
      'letter-spacing',
      'word-spacing',
      'color',
      'text-align',
      'text-decoration',
      'text-indent',
      'text-overflow',
      'text-rendering',
      'text-size-adjust',
      'text-shadow',
      'text-transform',
      'word-break',
      'word-wrap',
      'white-space',
      'vertical-align',
      'list-style',
      'list-style-type',
      'list-style-position',
      'list-style-image',
      'pointer-events',
      'cursor',
      'background',
      'background-color',
      'border',
      'border-radius',
      'content',
      'outline',
      'outline-offset',
      'opacity',
      'filter',
      'visibility',
      'size',
      'transform',
    ],
  },
};
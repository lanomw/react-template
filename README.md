# react-template
手动构建react项目


# 代码规范

## 1. 代码格式规范和语法检测
- prettier: 保存文件自动格式化代码。
- eslint: 检测代码语法规范和错误。
- stylelint: 检测样式代码语法规范和错误。
- lint-staged: 只检测暂存区文件代码，优化eslint检测速度。

## 2. 代码git提交规范
- husky:可以监听githooks执行，在对应hook执行阶段做一些处理的操作。
- pre-commit：githooks之一， 在commit提交前使用tsc和eslint对语法进行检测。
- commit-msg：githooks之一，在commit提交前对commit备注信息进行检测。

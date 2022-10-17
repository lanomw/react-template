# react-template

手动构建 react 项目

# 代码规范

## 1. 代码格式规范和语法检测

- prettier: 保存文件自动格式化代码。
- eslint: 检测代码语法规范和错误。
- stylelint: 检测样式代码语法规范和错误。
- lint-staged: 只检测暂存区文件代码，优化 eslint 检测速度。

## 2. 代码 git 提交规范

- husky:可以监听 githooks 执行，在对应 hook 执行阶段做一些处理的操作。
- pre-commit：githooks 之一， 在 commit 提交前使用 tsc 和 eslint 对语法进行检测。
- commit-msg：githooks 之一，在 commit 提交前对 commit 备注信息进行检测。

module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:import/recommended",
        "plugin:@typescript-eslint/recommended",
        // 如果同时使用了eslint和prettier发生冲突了，会关闭掉与prettier有冲突的规则，也就是使用prettier认为对的规则
        "plugin:prettier/recommended"
    ],
    "overrides": [],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        // eslint 会使用 prettier 的规则对代码格式化
        "prettier",
        "jsx-a11y"
    ],
    "rules": {
        "jsx-a11y/rule-name": 2,
        // 对于不符合prettier规范的写法，eslint会提示报错
        "prettier/prettier": 2
    }
}

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',  // 关闭接口名称前缀规则
    '@typescript-eslint/explicit-function-return-type': 'off',  // 关闭显式函数返回类型规则
    '@typescript-eslint/explicit-module-boundary-types': 'off',  // 关闭显式模块边界类型规则
    '@typescript-eslint/no-explicit-any': 'off',  // 允许使用 any 类型
    '@typescript-eslint/no-var-requires': 'off',  // 允许使用 require
    '@typescript-eslint/no-empty-function': 'off',  // 允许空函数
    '@typescript-eslint/ban-types': 'off',  // 关闭禁止特定类型的规则
    'prettier/prettier': ['error', { endOfLine: 'auto' }],  // 确保 Prettier 使用自动行尾格式
    'prefer-const': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'quotes': ['0'] //忽略单双引号
  },
  overrides: [
    {
      files: ['src/common/middleware/auth/auth.middleware.ts'],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off', // 在特定文件中关闭该规则
      },
    },
  ],
};

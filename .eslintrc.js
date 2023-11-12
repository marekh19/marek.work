module.exports = {
  $schema: 'https://json.schemastore.org/eslintrc',
  root: true,
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'tailwindcss'],
  rules: {
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/classnames-order': 'off', // done via prettier plugin
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
    'no-restricted-imports': [
      'error',
      {
        name: 'react',
        importNames: ['default'],
        message:
          "Default React import is not necessary for JSX to work. Please use named imports. (e.g. `import { useEffect } from 'react'`) (https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html)",
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        fixStyle: 'inline-type-imports',
      },
    ],
  },
  settings: {
    tailwindcss: {
      callees: ['cn', 'cva'],
      config: 'tailwind.config.js',
    },
  },
}

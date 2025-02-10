import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  {
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    ignores: ['dist', 'node_modules'],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/boolean-prop-naming': [
        'error',
        {
          rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
          message:
            'It is better if your prop ({{ propName }}) matches this pattern: ({{ pattern }})',
          validateNested: true,
        },
      ],
      'react/jsx-sort-props': [
        'warn',
        {
          callbacksLast: true,
          shorthandFirst: true,
          multiline: 'last',
          noSortAlphabetically: true,
        },
      ],
      'react/jsx-handler-names': ['error', {
        eventHandlerPrefix: 'handler',
        eventHandlerPropPrefix: 'on',
        checkLocalVariables: true
      }]
    },
  },
];

import newlineDestructuring from 'eslint-plugin-newline-destructuring';
import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginJs from '@eslint/js';
import stylisticJs from '@stylistic/eslint-plugin-js';

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ['**/*.{js,ts,jsx,tsx}'] },
    {
        languageOptions: { globals: globals.browser },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        ignores: ['dist', 'node_modules'],
        plugins: {
            'simple-import-sort': simpleImportSort,
            '@stylistic/js': stylisticJs,
            'react-hooks': reactHooks,
            'newline-destructuring': newlineDestructuring,
        },
        rules: {
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            'newline-destructuring/newline': ['warn', { items: 1 }],
            'react/react-in-jsx-scope': 'off',
            '@/newline-before-return': 'warn',
            'react/jsx-wrap-multilines': [
                'warn',
                {
                    logical: 'parens-new-line',
                },
            ],
            // 'react/jsx-newline': [
            //     'warn',
            //     {
            //         prevent: true,
            //         allowMultilines: true,
            //     },
            // ],
            '@stylistic/js/quotes': [
                'error',
                'single',
                {
                    avoidEscape: true,
                },
            ],
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
            'react/jsx-handler-names': [
                'error',
                {
                    eventHandlerPrefix: 'handle',
                    eventHandlerPropPrefix: 'on',
                    checkLocalVariables: true,
                    checkInlineFunction: true,
                },
            ],
            'simple-import-sort/imports': [
                'error',
                {
                    groups: [
                        // Packages. react related packages come first.
                        ['^react', '^@{0}\\w', '^@?\\w'],
                        ['^ui-kit', '^ui-kit/(.*)'],
                        ['hooks', 'hooks/(.*)'],
                        ['^@app/[a-zA-Z]+$'], //TODO: Исправить при ошибке с импортами в app
                        ['^@pages/(.*)$'],
                        ['^@widgets/(.*)$'],
                        ['^@features/(.*)$'],
                        ['^@entities/(.*)$'],
                        ['^@shared/(.*)$'],
                        // Side effect imports.
                        ['^\\u0000'],
                        // Parent imports. Put .. last.
                        ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                        // Other relative imports. Put same-folder imports and . last.
                        ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                        // Style imports.
                        ['^.+\\.s?css$'],
                    ],
                },
            ],
            '@/key-spacing': [
                'error',
                {
                    afterColon: true,
                    mode: 'strict',
                },
            ],
            '@/comma-spacing': [
                'error',
                {
                    before: false,
                    after: true,
                },
            ],
            '@/curly': 'error',
        },
    },
];

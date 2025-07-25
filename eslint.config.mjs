import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-plugin-prettier';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import unusedImports from 'eslint-plugin-unused-imports';
import importPlugin from 'eslint-plugin-import';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...fixupConfigRules(compat.extends('next', 'plugin:react/recommended', 'next/core-web-vitals', 'next/typescript')),
  {
    plugins: {
      react: fixupPluginRules(react),
      'react-hooks': fixupPluginRules(reactHooks),
      prettier,
      'unused-imports': unusedImports,
      import: fixupPluginRules(importPlugin),
    },
    rules: {},
  },
  {
    files: ['**/*.ts', '**/*.tsx'],

    rules: {
      'comma-dangle': ['error', 'always-multiline'],
      'for-direction': 'error',
      'getter-return': 'error',
      'no-async-promise-executor': 'error',
      'no-await-in-loop': 'error',
      'no-compare-neg-zero': 'error',
      'no-cond-assign': 'error',
      'no-constant-condition': 'error',
      'no-control-regex': 'error',
      'no-debugger': 'error',
      'no-dupe-args': 'error',
      'no-dupe-else-if': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-empty-character-class': 'error',

      'no-empty': [
        'error',
        {
          allowEmptyCatch: true,
        },
      ],

      'no-empty-static-block': 'error',
      'no-ex-assign': 'error',
      'no-extra-boolean-cast': 'error',
      'react/react-in-jsx-scope': 'off',
      'no-extra-semi': 'error',
      'no-func-assign': 'error',
      'no-import-assign': 'error',
      'no-inner-declarations': 'error',
      'no-invalid-regexp': 'error',
      'no-loss-of-precision': 'error',
      'no-misleading-character-class': 'error',
      'no-obj-calls': 'error',
      'no-promise-executor-return': 'error',
      'no-prototype-builtins': 'error',
      'no-regex-spaces': 'error',
      'no-setter-return': 'error',
      'no-sparse-arrays': 'error',
      'no-template-curly-in-string': 'error',
      'no-unreachable': 'error',
      'no-unreachable-loop': 'error',
      'no-unsafe-finally': 'error',

      'no-unsafe-negation': [
        'error',
        {
          enforceForOrderingRelations: true,
        },
      ],

      'no-unsafe-optional-chaining': [
        'error',
        {
          disallowArithmeticOperators: true,
        },
      ],

      'no-useless-backreference': 'error',
      'use-isnan': 'error',

      'valid-typeof': [
        'error',
        {
          requireStringLiterals: false,
        },
      ],

      'no-unexpected-multiline': 'error',

      'accessor-pairs': [
        'error',
        {
          enforceForClassMembers: true,
        },
      ],

      'array-callback-return': [
        'error',
        {
          allowImplicit: true,
        },
      ],

      'block-scoped-var': 'error',
      complexity: 'off',
      curly: 'error',
      'default-case': 'error',
      'default-case-last': 'error',
      'dot-notation': 'error',
      'dot-location': ['error', 'property'],
      eqeqeq: 'error',
      'grouped-accessor-pairs': ['error', 'getBeforeSet'],
      'guard-for-in': 'error',
      'no-alert': 'off',
      'no-caller': 'error',
      'no-case-declarations': 'error',
      'no-constructor-return': 'error',

      'no-else-return': [
        'error',
        {
          allowElseIf: false,
        },
      ],

      'no-empty-pattern': 'error',
      'no-eq-null': 'error',
      'no-eval': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-extra-label': 'error',
      'no-fallthrough': 'error',
      'no-floating-decimal': 'error',
      'no-global-assign': 'error',
      'no-implicit-coercion': 'error',
      'no-implicit-globals': 'error',
      'no-implied-eval': 'error',
      'no-iterator': 'error',
      'no-labels': 'error',
      'no-lone-blocks': 'error',
      'no-multi-spaces': 'error',
      'no-multi-str': 'error',
      'no-new-func': 'error',
      'no-new-wrappers': 'error',
      'no-nonoctal-decimal-escape': 'error',
      'no-new': 'error',
      'no-octal-escape': 'error',
      'no-octal': 'error',
      'no-proto': 'error',
      'no-redeclare': 'error',
      'no-return-assign': ['error', 'always'],
      'no-return-await': 'error',
      'no-script-url': 'error',

      'no-self-assign': [
        'error',
        {
          props: true,
        },
      ],

      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-throw-literal': 'error',
      'no-unmodified-loop-condition': 'error',

      'no-unused-expressions': [
        'off',
        {
          enforceForJSX: true,
          allowTernary: true,
        },
      ],

      'no-unused-labels': 'error',
      'no-useless-call': 'error',
      'no-useless-catch': 'error',
      'no-useless-concat': 'error',
      'no-useless-escape': 'error',
      'no-useless-return': 'error',
      'no-void': 'error',
      'no-warning-comments': 'warn',
      'no-with': 'error',

      'prefer-promise-reject-errors': [
        'error',
        {
          allowEmptyReject: true,
        },
      ],

      'prefer-regex-literals': [
        'error',
        {
          disallowRedundantWrapping: true,
        },
      ],

      radix: 'error',

      'wrap-iife': [
        'error',
        'inside',
        {
          functionPrototypeMethods: true,
        },
      ],

      yoda: 'error',
      'no-delete-var': 'error',
      'no-label-var': 'error',
      'no-restricted-globals': ['error', 'event'],
      'no-shadow-restricted-names': 'error',
      'no-undef-init': 'error',

      'no-undef': [
        'error',
        {
          typeof: true,
        },
      ],

      'no-unused-vars': [
        'off',
        {
          vars: 'all',
          args: 'none',
          ignoreRestSiblings: true,
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
        },
      ],

      'no-buffer-constructor': 'error',

      'no-restricted-imports': ['error', 'domain', 'freelist', 'smalloc', 'punycode', 'sys', 'querystring', 'colors'],

      'array-bracket-newline': ['error', 'consistent'],
      'array-bracket-spacing': ['error', 'never'],
      'array-element-newline': ['error', 'consistent'],

      'brace-style': [
        'error',
        '1tbs',
        {
          allowSingleLine: false,
        },
      ],

      'capitalized-comments': [
        'error',
        'always',
        {
          ignorePattern: 'pragma|ignore|prettier-ignore|webpack\\w+:|c8|type-coverage:',
          ignoreInlineComments: true,
          ignoreConsecutiveComments: true,
        },
      ],

      'comma-spacing': [
        'error',
        {
          before: false,
          after: true,
        },
      ],

      'comma-style': ['error', 'last'],

      'computed-property-spacing': [
        'error',
        'never',
        {
          enforceForClassMembers: true,
        },
      ],

      'eol-last': 'error',
      'func-call-spacing': ['error', 'never'],

      'func-name-matching': [
        'error',
        {
          considerPropertyDescriptor: true,
        },
      ],

      'func-names': ['error', 'never'],
      'function-call-argument-newline': ['error', 'consistent'],

      indent: [
        'off',
        'tab',
        {
          SwitchCase: 1,
        },
      ],

      'jsx-quotes': ['error', 'prefer-single'],

      'key-spacing': [
        'error',
        {
          beforeColon: false,
          afterColon: true,
        },
      ],

      'keyword-spacing': 'error',
      'linebreak-style': ['error', 'unix'],

      'lines-between-class-members': [
        'error',
        'always',
        {
          exceptAfterSingleLine: true,
        },
      ],

      'max-params': [
        'warn',
        {
          max: 4,
        },
      ],

      'max-statements-per-line': 'error',

      'new-cap': [
        'off',
        {
          newIsCap: true,
          capIsNew: true,
        },
      ],

      'new-parens': 'error',
      'no-array-constructor': 'error',
      'no-bitwise': 'error',
      'no-lonely-if': 'error',

      'no-mixed-operators': [
        'error',
        {
          groups: [
            ['&', '|', '^', '~', '<<', '>>', '>>>'],
            ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
            ['&&', '||'],
            ['in', 'instanceof'],
          ],

          allowSamePrecedence: true,
        },
      ],

      'no-mixed-spaces-and-tabs': 'off',
      'no-multi-assign': 'error',

      'no-multiple-empty-lines': [
        'error',
        {
          max: 1,
        },
      ],

      'no-new-object': 'error',
      'no-whitespace-before-property': 'error',
      'no-trailing-spaces': 'error',
      'no-unneeded-ternary': 'error',
      'one-var': ['error', 'never'],
      'one-var-declaration-per-line': 'error',
      'operator-assignment': ['error', 'always'],
      'operator-linebreak': ['error', 'before'],

      'padded-blocks': [
        'error',
        'never',
        {
          allowSingleLineBlocks: false,
        },
      ],

      'prefer-exponentiation-operator': 'error',
      'prefer-object-spread': 'error',
      'quote-props': ['error', 'as-needed'],
      quotes: ['error', 'single'],

      'semi-spacing': [
        'error',
        {
          before: false,
          after: true,
        },
      ],

      'semi-style': ['error', 'last'],
      semi: ['error', 'always'],
      'space-before-blocks': ['error', 'always'],

      'space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          named: 'never',
          asyncArrow: 'always',
        },
      ],

      'space-in-parens': ['error', 'never'],
      'space-infix-ops': 'error',
      'space-unary-ops': 'error',

      'spaced-comment': [
        'error',
        'always',
        {
          line: {
            exceptions: ['-', '+', '*'],
            markers: ['!', '/', '=>'],
          },

          block: {
            exceptions: ['-', '+', '*'],
            markers: ['!', '*'],
            balanced: true,
          },
        },
      ],

      'switch-colon-spacing': [
        'error',
        {
          after: true,
          before: false,
        },
      ],

      'template-tag-spacing': ['error', 'never'],
      'unicode-bom': ['error', 'never'],
      'arrow-parens': ['off', 'as-needed'],

      'arrow-spacing': [
        'error',
        {
          before: true,
          after: true,
        },
      ],

      'constructor-super': 'error',
      'generator-star-spacing': ['error', 'both'],
      'no-class-assign': 'error',
      'no-const-assign': 'error',
      'no-constant-binary-expression': 'error',
      'no-dupe-class-members': 'error',
      'no-new-native-nonconstructor': 'error',
      'no-this-before-super': 'error',

      'no-useless-computed-key': [
        'error',
        {
          enforceForClassMembers: true,
        },
      ],

      'no-useless-constructor': 'error',
      'no-useless-rename': 'error',
      'no-var': 'error',

      'object-shorthand': [
        'error',
        'always',
        {
          avoidExplicitReturnArrows: true,
        },
      ],

      'prefer-arrow-callback': [
        'error',
        {
          allowNamedFunctions: true,
        },
      ],

      'prefer-const': [
        'error',
        {
          destructuring: 'all',
        },
      ],

      'prefer-destructuring': [
        'error',
        {
          VariableDeclarator: {
            array: false,
            object: true,
          },

          AssignmentExpression: {
            array: false,
            object: false,
          },
        },
        {
          enforceForRenamedProperties: false,
        },
      ],

      'prefer-numeric-literals': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'require-yield': 'error',
      'rest-spread-spacing': ['error', 'never'],
      'symbol-description': 'error',
      'template-curly-spacing': 'error',
      'yield-star-spacing': ['error', 'both'],
      'implicit-arrow-linebreak': 'off',

      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: '*',
          next: 'return',
        },
        {
          blankLine: 'always',
          prev: ['const', 'let', 'var'],
          next: '*',
        },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var'],
        },
        {
          blankLine: 'always',
          prev: ['const', 'let', 'var'],
          next: ['if', 'case'],
        },
      ],

      'no-console': 'error',

      'no-irregular-whitespace': [
        'error',
        {
          skipComments: true,
        },
      ],

      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/ban-ts-ignore': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/interface-name-prefix': 'off',
      'react/no-deprecated': 'off',
      'react/prop-types': 'off',
      'react/display-name': 'off',
      'react/no-unescaped-entities': 'off',
      'react/no-unused-state': 'error',

      'object-curly-spacing': [
        'error',
        'always',
        {
          objectsInObjects: true,
          arraysInObjects: true,
        },
      ],

      'arrow-body-style': ['error', 'as-needed'],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      'no-negated-condition': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'react/jsx-curly-brace-presence': [
        'error',
        {
          props: 'always',
          children: 'never',
        },
      ],
      'unused-imports/no-unused-imports': 'warn',

      // Import plugin rules
      'import/no-unresolved': ['error', {
        'ignore': ['^@/']
      }],
      'import/default': 'error',
      'import/namespace': 'error',
      'import/export': 'error',
      'import/no-duplicates': 'error',
      'import/order': ['error', {
        'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        'alphabetize': {
          'order': 'asc',
          'caseInsensitive': true
        }
      }],
      'import/newline-after-import': 'error',
      'import/no-mutable-exports': 'error',
      'import/no-amd': 'error',
      'import/no-commonjs': 'error',
      'import/first': 'error',
      'import/no-self-import': 'error',
      'import/no-cycle': 'error',
      'import/no-useless-path-segments': 'error',
      'import/no-empty-named-blocks': 'error',
      "@typescript-eslint/no-empty-object-type": "off",
    },
  },
];

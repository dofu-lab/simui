// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');
const prettier = require('eslint-config-prettier');

module.exports = tseslint.config(
	{
		files: ['**/*.ts'],
		extends: [
			eslint.configs.recommended,
			...tseslint.configs.recommended,
			...tseslint.configs.stylistic,
			...angular.configs.tsRecommended,
			prettier,
		],
		processor: angular.processInlineTemplates,
		plugins: {
			'@angular-eslint/template': angular.templatePlugin,
		},
		rules: {
			// Angular 22's migration adds Eager to preserve pre-v22 behavior.
			// Re-enable this rule after the tracked OnPush migration batches finish.
			'@angular-eslint/prefer-on-push-component-change-detection': 'off',
			'@angular-eslint/template/interactive-supports-focus': 'warn',
			'@angular-eslint/directive-selector': [
				'error',
				{
					type: 'attribute',
					prefix: ['app', 'sim', 'hlm'],
					style: 'camelCase',
				},
			],
			'@angular-eslint/component-selector': [
				'error',
				{
					type: 'element',
					prefix: ['app', 'sim', 'hlm'],
					style: 'kebab-case',
				},
			],
		},
	},
	{
		files: ['**/*.html'],
		extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
		rules: {},
	},
);

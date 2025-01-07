import { FlatCompat } from '@eslint/eslintrc'
import { fixupConfigRules } from '@eslint/compat'
import js from '@eslint/js'

const compat = new FlatCompat({
	baseDirectory: import.meta.dirname,
	recommendedConfig: js.configs.recommended,
})

const eslintConfig = [
	...fixupConfigRules(compat.extends('next/core-web-vitals')),
	...compat.extends('eslint:recommended', 'plugin:prettier/recommended'),
	...compat.config({
		env: {
			browser: true,
			es2021: true,
		},
		rules: {
			'no-unused-vars': 'warn',
			'no-console': 'warn',
			'react/button-has-type': 'warn',
			'react/prop-types': 'warn',
			'react/react-in-jsx-scope': 'warn',
			'react/jsx-uses-react': 'warn',
			'react/display-name': 'warn',
			'react/no-children-prop': 'warn',
			'no-extra-boolean-cast': 'off',
			'prettier/prettier': 'warn',
		},
		ignorePatterns: ['**/node_modules/*', '**/.next/*'],
	}),
]

export default eslintConfig

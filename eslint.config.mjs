import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierRecommended from 'eslint-plugin-prettier/recommended'; // Import prettier

export default defineConfig([
  { files: ['*/.{js,mjs,cjs,ts}'] },
  { files: ['*/.{js,mjs,cjs,ts}'], languageOptions: { globals: globals.browser } },
  { files: ['*/.{js,mjs,cjs,ts}'], plugins: { js }, extends: ['js/recommended'] },
  tseslint.configs.recommended,
  prettierRecommended, // add prettier
  {
    files: ['*.ts'],
    rules: {
      'prettier/prettier': 'error',
    },
  },
]);

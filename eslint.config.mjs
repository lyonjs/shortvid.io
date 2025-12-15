import { config as remotionConfig } from "@remotion/eslint-config-flat";
import gitignore from "eslint-config-flat-gitignore";
import importPlugin from "eslint-plugin-import";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tseslint from "typescript-eslint";

export default tseslint.config(
    gitignore(),
    ...remotionConfig,
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        plugins: {
            "simple-import-sort": simpleImportSort,
            import: importPlugin,
        },
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
            },
            globals: {
                process: true,
                console: true,
                module: true,
                require: true,
                __dirname: true,
                __filename: true,
                Buffer: true,
                global: true,
            },
        },
        rules: {
            "no-console": [
                "error",
                {
                    allow: ["warn", "error"],
                },
            ],
            "@typescript-eslint/no-unused-vars": "error",
            "@typescript-eslint/no-empty-function": "off",
            "no-unused-vars": "off",
            "import/order": "off",
            "simple-import-sort/imports": [
                "error",
                {
                    groups: [
                        // Mocks imports. eg: `import React from '../../mocks/react';`
                        ["^.*/mocks.*$"],
                        // Packages `react` related packages come first.
                        ["^react", "^@?\\w"],
                        // Internal packages.
                        ["^(@|components)(/.*|$)"],
                        // Side effect imports.
                        ["^\\u0000"],
                        // Parent imports. Sort by most deep first.
                        // eg: `import { foo } from '../../foo';` before `import { bar } from '../bar';`
                        ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
                        // Relative imports. Sort by most deep first.
                        // eg: `import { foo } from './foo/foo';` before `import { bar } from './bar';`
                        ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
                        // Style imports. eg: import './home.module.css';'
                        ["^.+\\.?(css)$"],
                    ],
                },
            ],
            "import/first": "error",
            "import/newline-after-import": "error",
            "import/no-duplicates": "error",
        },
    }
);


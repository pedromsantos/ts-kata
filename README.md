# Typescript kata starter

## Project status and ratings

### GitHub

[![Build Status](https://github.com/pedromsantos/ts-kata/actions/workflows/main.yml/badge.svg)](https://github.com/pedromsantos/ts-kata/actions/workflows/main.yml)
![GitHub commit activity](https://img.shields.io/github/commit-activity/w/pedromsantos/ts-kata) ![GitHub last commit](https://img.shields.io/github/last-commit/pedromsantos/ts-kata) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/pedromsantos/ts-kata)
![GitHub top language](https://img.shields.io/github/languages/top/pedromsantos/ts-kata) ![GitHub](https://img.shields.io/github/license/pedromsantos/ts-kata)

### Sonar

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=pedromsantos_ts-kata&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=pedromsantos_ts-kata) [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=pedromsantos_ts-kata&metric=coverage)](https://sonarcloud.io/summary/new_code?id=pedromsantos_ts-kata)[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=pedromsantos_ts-kata&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=pedromsantos_ts-kata) [![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=pedromsantos_ts-kata&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=pedromsantos_ts-kata) [![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=pedromsantos_ts-kata&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=pedromsantos_ts-kata) [![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=pedromsantos_ts-kata&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=pedromsantos_ts-kata) [![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=pedromsantos_ts-kata&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=pedromsantos_ts-kata) [![Bugs](https://sonarcloud.io/api/project_badges/measure?project=pedromsantos_ts-kata&metric=bugs)](https://sonarcloud.io/summary/new_code?id=pedromsantos_ts-kata) [![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=pedromsantos_ts-kata&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=pedromsantos_ts-kata) [![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=pedromsantos_ts-kata&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=pedromsantos_ts-kata) [![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=pedromsantos_ts-kata&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=pedromsantos_ts-kata)

### Code Scene

[![CodeScene Code Health](https://codescene.io/projects/39302/status-badges/code-health)](https://codescene.io/projects/39302) [![CodeScene System Mastery](https://codescene.io/projects/39302/status-badges/system-mastery)](https://codescene.io/projects/39302)

## About

This project contains a number of katas with instructions ordered in a proven path described in my book [Agile Technical Practices Distilled](https://leanpub.com/agiletechnicalpracticesdistilled)

## Instructions

### Execute tests

Just run the test suite

```sh
yarn test
```

#### Run the test suit with code coverage

```sh
yarn test:ci
```

#### Execute mutation tests

```sh
yarn mutants
```

#### Run the tests in watch mode

```sh
yarn watch
```

#### There are scripts to run each kata test suite on its own

```sh
yarn fizz
yarn leap
yarn fib
yarn stack
yarn roman
yarn prime
yarn tic
yarn yahtzee
yarn tennis
yarn rose
yarn golf
yarn smelly
yarn copier
yarn esa
```

### Build

```sh
yarn ci
```

or

```sh
yarn precommit
```

### Lint

```sh
yarn lint
```

## Tools

There are a few tools preconfigured in the project

- Code
  - ESLint
    - `eslint`: JavaScript and TypeScript linter that identifies and reports code quality issues.
    - `@typescript-eslint/parser`: Parser that allows ESLint to understand TypeScript syntax.
    - `typescript-eslint/eslint-plugin`: ESLint plugin that provides linting rules specific to TypeScript code.
    - `eslint-plugin-jest`: ESLint plugin with additional rules for Jest tests.
    - `eslint-plugin-sonarjs`: ESLint plugin that provides additional rules for detecting code smells and security vulnerabilities.
    - `eslint-plugin-prettier`: ESLint plugin that integrates Prettier into ESLint, enabling automatic formatting.
    - `eslint-config-prettier`: ESLint configuration that disables conflicting rules with Prettier, a code formatter.
    - `eslint-plugin-import`: ESLint plugin that provides linting rules for importing modules.
    - `eslint-plugin-simple-import-sort`: ESLint plugin for sorting imports using a simple convention.
  - Prettier
    - `prettier`: Opinionated code formatter that enforces consistent code style.
  - Type coverage
    - `ts-coverage`: Tool for generating coverage reports for TypeScript projects.
    - `type-coverage`: Tool for measuring the percentage of type coverage in a TypeScript project.
    - `typescript-coverage-report`: Tool for generating coverage reports for TypeScript projects.
- Testing
  - Libraries
    - `jest`: JavaScript testing framework for writing unit tests.
    - `fast-check`: Property-based testing library for JavaScript and TypeScript.
    - `@stryker-mutator/core`: Core library for Stryker Mutator, a mutation testing framework for JavaScript and TypeScript.
    - `@stryker-mutator/jest-runner`: Stryker Mutator plugin for running mutation tests with Jest.
    - `@stryker-mutator/typescript-checker`: Stryker Mutator plugin for type checking TypeScript code during mutation testing.
- CI/CD
  - Commit Lint
    - `@commitlint/cli`: Command-line interface for commitlint, a tool to enforce commit message conventions.
    - `@commitlint/config-conventional`: Configuration preset for commitlint that enforces conventional commit message format.
    - `@commitlint/format`: Utility to format commitlint messages for printing.
  - Husky
    - `husky`: Git hooks management tool that allows running scripts before committing or pushing code.
  - GitHub actions
    - Build
    - Dependabot
  - Sonar
    - Sonar cloud integration for code metrics
  - CodeScene
    - CodeScene cloud integration for code metrics

## Configuration files

ChatGPT generated documentation

### Typescript

**compilerOptions**:

- `alwaysStrict`: Enables strict mode semantics in all TypeScript files.
- `baseUrl`: Specifies the base directory for resolving module names.
- `downlevelIteration`: Enables emitting down-level iteration for `for...of` loops.
- `emitDecoratorMetadata`: Enables emitting decorator metadata for design-time type checking of decorators.
- `esModuleInterop`: Enables interoperability between CommonJS and ES modules by using default imports and exports.
- `forceConsistentCasingInFileNames`: Enforces consistent casing of file names, preventing issues on case-insensitive file systems.
- `isolatedModules`: Enables faster incremental compilation by treating each file as a separate module.
- `lib`: Specifies the libraries to be included in the compilation process (in this case, ES2020).
- `module`: Specifies the module system to be used (in this case, CommonJS).
- `moduleResolution`: Specifies how modules are resolved (in this case, Node.js-style module resolution).
- `noEmit`: Disables emitting output files from the compilation process.
- `noFallthroughCasesInSwitch`: Flags switch statements that fall through without `break` statements as errors.
- `noImplicitAny`: Flags declarations with an implied `any` type as errors.
- `noImplicitOverride`: Flags overrides that are incompatible with the overridden method as errors.
- `noImplicitReturns`: Flags functions that lack a return statement as errors.
- `noImplicitThis`: Flags `this` expressions that don't have an explicit type as errors.
- `noPropertyAccessFromIndexSignature`: Disallows property access via an index signature on a type with `noUncheckedIndexedAccess`.
- `noUncheckedIndexedAccess`: Adds runtime checks for indexed access to avoid potential undefined or null values.
- `noUnusedLocals`: Flags unused local variables as errors.
- `noUnusedParameters`: Flags unused function parameters as errors.
- `outDir`: Specifies the output directory for emitted files (in this case, "./lib").
- `removeComments`: Removes all comments from the emitted code.
- `skipLibCheck`: Skips type checking of declaration files (\*.d.ts) from the `lib` option.

**exclude**: Specifies file and directory patterns to be excluded from the compilation process (in this case, `node_modules`).

**include**: Specifies file and directory patterns to be included in the compilation process (in this case, files matching the pattern `src/**/*.ts`).

### ESLint

ESLint is a popular JavaScript and TypeScript linter. Here's an explanation of each key in the configuration:

- `"parser": "@typescript-eslint/parser`: Specifies the parser to be used for parsing TypeScript code. In this case, it uses the @typescript-eslint/parser parser.
- `"env": { "es2021": true, "jest": true, "node": true }`: Specifies the environments in which the code will run. It indicates that the code is targeting ES2021, using Jest for testing, and running in a Node.js environment.
- `"extends": [...]`: Extends various ESLint configurations and plugins to enhance the linting rules and enforce coding standards. Here are the extensions used:
  - `"plugin:@typescript-eslint/eslint-recommended"`: Recommends ESLint rules specifically for TypeScript code.
  - `"plugin:@typescript-eslint/recommended"`: Recommends additional ESLint rules for TypeScript code.
  - `"plugin:@typescript-eslint/recommended-requiring-type-checking"`: Recommends rules that require type checking for TypeScript code.
  - `"plugin:prettier/recommended"`: Integrates ESLint with Prettier, ensuring consistent code formatting.
  - `"plugin:sonarjs/recommended"`: Provides additional ESLint rules from SonarJS, a static code analyzer.
  - `"plugin:jest/recommended"`: Recommends ESLint rules for Jest tests.
  - `"plugin:jest/style"`: Provides additional ESLint rules for enforcing stylistic conventions in Jest tests.
- `"ignorePatterns": ["/node_modules/**"]`: Specifies the patterns of files and directories that should be ignored during linting. In this case, it ignores all files and directories within the node_modules directory.
- `"parserOptions": { "ecmaVersion": 2021, "project": "./tsconfig.eslint.json", "sourceType": "module"`: Provides additional options for the parser. It sets the ECMAScript version to 2021, specifies the path to the TypeScript configuration file (tsconfig.eslint.json), and sets the source type to "module" to indicate the use of ES modules.
- `"plugins": ["@typescript-eslint/eslint-plugin", "simple-import-sort", "import"]`: Specifies the ESLint plugins used in the configuration. These plugins include @typescript-eslint/eslint-plugin, which provides additional rules for TypeScript code, as well as simple-import-sort and import plugins that offer import-related rules.
- `"rules": { ... }`: Defines specific ESLint rules and their configurations. Here are some examples:
  - `"no-console"`: 1: Warns when using console statements.
  - `"import/first"`: "error": Throws an error if an import statement is not placed at the beginning of a module.
  - `"import/newline-after-import"`: "error": Throws an error if there is no newline after an import statement.
  - `"import/no-duplicates": "error"`: Throws an error if duplicate import statements are found.
  - `"simple-import-sort/exports": "error"`: Throws an error if export statements are not sorted using a specific convention.
  - `"simple-import-sort/imports": "error"`: Throws an error if import statements are not sorted using a specific convention.

Overall, this configuration sets up ESLint to lint TypeScript code, extends various ESLint configurations and plugins, defines rules for linting, and configures parser options and environments for the linting process.

### Stryker

Stryker is a mutation testing framework for JavaScript and TypeScript. Here's an explanation of each key in the configuration:

- `"$schema": "./node_modules/@stryker-mutator/core/schema/stryker-schema.json"`: Specifies the JSON schema file for validation of the configuration.
- `"coverageAnalysis": "perTest"`: Sets the coverage analysis mode to "perTest", which means the code coverage will be measured for each individual test.
- `"mutate": ["src/**/*kata.ts"]`: Defines the files to be mutated. It specifies the glob pattern `src/**/*kata.ts`, which includes all TypeScript files with "kata" in their names under the "src" directory.
- `"reporters": ["progress", "dots", "dashboard", "html"]`: Specifies the reporters to be used for reporting the mutation testing results. In this case, it includes "progress", "dots", "dashboard", and "html" reporters.
- `"testRunner": "jest"`: Sets the test runner to "jest", indicating that Jest will be used to run the tests.
- `"checkers": ["typescript"]`: Specifies the checkers to be used. In this case, it includes the "typescript" checker, which performs additional static analysis on the TypeScript code.
- `"tsconfigFile": "tsconfig.json"`: Sets the path to the TypeScript configuration file, "tsconfig.json".
- `"ignoreStatic": true`: Enables ignoring static analysis errors during mutation testing.
- `"jest": {...}`: Configures specific options for Jest, such as the project type, the path to the Jest configuration file, and enabling the feature to find related tests.
- `"clearTextReporter": {...}`: Configures options for the clear text reporter, including allowing colors, emojis, logging tests, and specifying the maximum number of tests to log.
- `"mutator": {...}`: Configures options for the mutator, such as plugins to use (set to null in this case) and excluded mutations (specifically, the "StringLiteral" mutation is excluded).

Overall, this configuration sets up Stryker Mutator with the specified options to perform mutation testing on the defined files using the Jest test runner and generate various reports and output formats.

### Commitlint

Commitlint is a tool used to enforce commit message conventions. Here's an explanation of each key in the configuration:

- `extends": ["@commitlint/config-conventional"]`: Specifies that the configuration should extend the preset provided by @commitlint/config-conventional. This preset enforces the conventional commit message format, which typically includes a type, optional scope, and a subject.
- `"formatter": "@commitlint/format"`: Specifies the formatter to be used for displaying commitlint messages. In this case, it uses the @commitlint/format formatter.
- `"rules": { "subject-case": [2, "never", ["start-case", "pascal-case"]] }`: Defines a rule called subject-case with its corresponding configuration. This rule specifies how the subject (the commit message summary) should be written. In this case, the rule is set to a severity level of 2 (error), and it disallows both "start-case" and "pascal-case" formats.

Overall, this configuration extends the conventional commit message format, sets the formatter, and enforces a rule that restricts the use of sentence case and title case in the commit message subject.

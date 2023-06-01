# Typescript kata starter

This project contains a number of katas with instructions ordered in a proven path described in my book [Agile Technical Practices Distilled](https://leanpub.com/agiletechnicalpracticesdistilled)

## Project status and ratings

I know the stats look really bad :) There is some very ugly code to be refactored in this repository.
Hopefuly as you implement the exercises in the katas these stats should improve.

### GitHub

[![Build Status](https://github.com/pedromsantos/ts-kata/actions/workflows/main.yml/badge.svg)](https://github.com/pedromsantos/ts-kata/actions/workflows/main.yml)
![GitHub commit activity](https://img.shields.io/github/commit-activity/w/pedromsantos/ts-kata) ![GitHub last commit](https://img.shields.io/github/last-commit/pedromsantos/ts-kata) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/pedromsantos/ts-kata)
![GitHub top language](https://img.shields.io/github/languages/top/pedromsantos/ts-kata) ![GitHub](https://img.shields.io/github/license/pedromsantos/ts-kata)

### Sonar

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=pedromsantos_ts-kata&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=pedromsantos_ts-kata) [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=pedromsantos_ts-kata&metric=coverage)](https://sonarcloud.io/summary/new_code?id=pedromsantos_ts-kata)[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=pedromsantos_ts-kata&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=pedromsantos_ts-kata) [![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=pedromsantos_ts-kata&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=pedromsantos_ts-kata) [![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=pedromsantos_ts-kata&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=pedromsantos_ts-kata) [![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=pedromsantos_ts-kata&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=pedromsantos_ts-kata) [![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=pedromsantos_ts-kata&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=pedromsantos_ts-kata) [![Bugs](https://sonarcloud.io/api/project_badges/measure?project=pedromsantos_ts-kata&metric=bugs)](https://sonarcloud.io/summary/new_code?id=pedromsantos_ts-kata) [![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=pedromsantos_ts-kata&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=pedromsantos_ts-kata) [![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=pedromsantos_ts-kata&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=pedromsantos_ts-kata) [![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=pedromsantos_ts-kata&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=pedromsantos_ts-kata)

### Code Scene

[![CodeScene Code Health](https://codescene.io/projects/39302/status-badges/code-health)](https://codescene.io/projects/39302) [![CodeScene System Mastery](https://codescene.io/projects/39302/status-badges/system-mastery)](https://codescene.io/projects/39302)

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
    - `jest-extended-snapshot`: Additional Jest matchers for snapshot testing
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

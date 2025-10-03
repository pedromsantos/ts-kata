# TypeScript Kata Starter

A collection of coding katas following the learning path from [Agile Technical Practices Distilled](https://leanpub.com/agiletechnicalpracticesdistilled).

## Status

[![Build Status](https://github.com/pedromsantos/ts-kata/actions/workflows/main.yml/badge.svg)](https://github.com/pedromsantos/ts-kata/actions/workflows/main.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=pedromsantos_ts-kata&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=pedromsantos_ts-kata)
[![CodeScene Code Health](https://codescene.io/projects/39302/status-badges/code-health)](https://codescene.io/projects/39302)

> **Note**: This repository contains code intended for refactoring practice. The initial metrics are expected to improve as you work through the katas.

## License

Copyright (c) 2025 Pedro Santos

Licensed under the EUPL-1.2

This work is licensed under the European Union Public Licence v. 1.2. You may obtain a copy of the License at https://eupl.eu/1.2/en/

This is a reference kit for educational and development purposes. You are free to use, modify, and distribute this work under the terms of the EUPL-1.2 license.

## Getting Started

### Testing

```sh
# Run all tests
yarn test

# Run with coverage
yarn test:ci

# Run mutation tests
yarn mutants

# Watch mode
yarn watch
```

### Individual Kata Tests

```sh
yarn fizz     # FizzBuzz
yarn leap     # Leap Year
yarn fib      # Fibonacci
yarn stack    # Stack Kata
yarn roman    # Roman Numerals
yarn prime    # Prime Factors
yarn tic      # Tic Tac Toe
yarn yahtzee  # Yahtzee
yarn mars     # Mars Rover
yarn tennis   # Tennis
yarn rose     # Gilded Rose
yarn golf     # All Refactoring Golf Tests
yarn smelly   # Smelly Tic Tac Toe
yarn copier   # Character Copier
yarn tac      # Tic Tac Toe (Alternative)
yarn esa      # ESA Mars Rover
yarn katacombs # Katacombs

# Refactoring Golf Individual Holes
yarn golf1    # Golf Hole 1
yarn golf2    # Golf Hole 2
yarn golf3    # Golf Hole 3
yarn golf4    # Golf Hole 4
yarn golf5    # Golf Hole 5
yarn golf6    # Golf Hole 6
yarn golf7    # Golf Hole 7
yarn golf8    # Golf Hole 8
yarn golf9    # Golf Hole 9
yarn golf10   # Golf Hole 10
yarn golf11   # Golf Hole 11
yarn golf12   # Golf Hole 12
```

### Development

```sh
# Build project
yarn ci

# Lint code
yarn lint
```

## Project Tools

### Code Quality

- **ESLint** - Linting with TypeScript support
- **Prettier** - Code formatting
- **Type Coverage** - TypeScript type analysis

### Testing & Quality

- **Jest** - Test framework
- **Fast-Check** - Property-based testing
- **Stryker** - Mutation testing

### CI/CD

- **Commit Lint** - Conventional commit messages
- **Husky** - Git hooks
- **GitHub Actions** - Automated workflows
- **Sonar Cloud** - Code analysis
- **CodeScene** - Code health metrics

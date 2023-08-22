# Hole 7 to Hole 8

Change the code in hole 7 to be identical to the code on hole 8, both implenentation and tests can change.

## Refactorings

- Tackle domain language as result of new abstractions
  - Rename constants, variables, arguments, methods to better express domain language

## Tips

- Use a diff tool to identify the code changes you need to perform
- Check the code coverage is enough to detect any unintended behaviour changes

### While refactoring

- Stay in the green while refactoring
  - Run the tests after each refactor
    - Check all tests still pass
    - Check code coverage has not dropped
- Commit after each refactor
- In case of persistent test fails, use `git reset` to go back to green

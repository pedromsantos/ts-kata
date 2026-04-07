# Hole 5 to Hole 6

Change the code in hole 5 to be identical to the code on hole 6, both implenentation and tests can change.

## Refactorings

- Tackle feature envy
  - Move method

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

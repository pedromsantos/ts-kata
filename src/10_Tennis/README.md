# Tennis kata

## Source

<https://github.com/emilybache/Tennis-Refactoring-Kata>

## The problem

Imagine you work for a consultancy company, and one of your colleagues has been doing some work for the Tennis Society. The contract is for 10 hours billable work, and your colleague has spent 8.5 hours working on it. Unfortunately he has now fallen ill. He says he has completed the work, and the tests all pass. Your boss has asked you to take over from him. She wants you to spend an hour or so on the code so she can bill the client for the full 10 hours. She instructs you to tidy up the code a little and perhaps make some notes so you can give your colleague some feedback on his chosen design. You should also prepare to talk to your boss about the value of this refactoring work, over and above the extra billable hours.

## Your task

Refactor the code to improve its readability.

### Guidelines

#### Before you start

- Make sure the tests have a good coverage
  - Use a code coverage tool to make sure code coverage by tests is very high
  - For this exercise code coverage is high (100%)
    - Run `yarn test:ci` and check for yourself

```txt
--------------------------|---------|----------|---------|---------|-------------------
File                      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
--------------------------|---------|----------|---------|---------|-------------------
All files                 |   86.28 |    67.74 |   96.61 |   86.03 |
 10_Tennis                |     100 |      100 |     100 |     100 |
  kata.ts                 |     100 |      100 |     100 |     100 |
...
```

#### While refactoring

- Stay in the green while refactoring
  - Run the tests after each refactor
    - Check all tests still pass
    - Check code coverage has not dropped
- Commit after each refactor
- In case of persistent test fails, use `git reset` to go back to green

#### Improve readability

1. Tackle clutter by
   - Formatting the code, a simple and very effective technique
     - Format consistently and don’t force the reader to waste timed due to inconsistent formatting
   - Renaming bad names on variables, arguments, instance variables, methods, and classes
   - Renaming abbreviations to make them explicit
2. Tackle Comments and Dead Code by
   - Deleting useless comments
   - Deleting useful comments by extracting a method named after them
   - Deleting dead code
     - Don’t make the reader waste time figuring out code that is not used
3. Tackle implicit knowledge by
   - Extracting constants from magic numbers and strings
   - Extracting complex conditional expressions
4. Tackle scattering by
   - Refinining the scope for variables
   - Ensuring variables are declared close to where they are used
   - Grouping public methods at the top of the class to show first what matters the most

#### Reduce complexity

1. Tackle complexity by
   - Extracting smaller private methods from long methods
     - Also encapsulate any cryptic code (that cannot be made more explicit) in private methods
   - Extracting private methods from nested code blocks
   - Returning from methods as soon as possible
2. Tackle duplication by
   - Removing duplicated knowledge

## Useful tools

- <https://github.com/nicoespeon/abracadabra>

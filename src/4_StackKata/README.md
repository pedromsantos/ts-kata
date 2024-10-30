# Stack Kata

## Requirements

Implement a Stack class with the following public methods:

- `push(value: number): void` - Adds a value to the top of the stack
- `pop(): number` - Removes and returns the top value from the stack
- The stack should throw an exception when attempting to pop from an empty stack

## Test Cases

| Input (push) | Expected Output (pop) |
| ------------ | --------------------- |
| Empty Stack  | throws Exception      |
| push(1)      | 1                     |
| push(2)      | 2                     |
| push(1,2)    | 2, then 1             |
| push(1,2,3)  | 3, then 2, then 1     |

## TDD Rules

1. ✅ Write production code only to pass a failing unit test
2. ✅ Write only enough of a unit test to make it fail
3. ✅ Write only enough production code to make the failing test pass

## Additional Guidelines

- Follow the "Red-Green-Refactor" cycle
- Keep tests and production code as simple as possible
- Commit after each successful test

## Resources

- [TestDesiderata by Kent Beck](https://kentbeck.github.io/TestDesiderata)

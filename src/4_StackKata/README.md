# Stack kata

- Implement a Stack class with the following public methods:
  - `push(value: number) : void`
  - `pop() : number`
- Stack should throw an exception if popped when empty.

| **push** | **pop** |
| -------- | ------- |
| --       | throw   |
| 1        | 1       |
| 2        | 2       |
| 1, 2     | 2, 1    |
| 1, 2, 3  | 3, 2, 1 |

## Folow TDD rules stryctly

1. Write production code only to pass a failing unit test.
2. Write no more of a unit test than sufficient to fail (compilation failures are failures).
3. Write no more production code than necessary to pass the one failing unit test.

## Resources

TestDesiderata by Kent Beck: <https://kentbeck.github.io/TestDesiderata>

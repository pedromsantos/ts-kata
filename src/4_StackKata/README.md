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

## Resources

TestDesiderata by Kent Beck: <https://kentbeck.github.io/TestDesiderata>

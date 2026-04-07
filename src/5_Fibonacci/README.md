# Fibonacci Kata

## Problem Description

Write a function that returns the Fibonacci number at a given position.

### Function Signature

```typescript
function fibonacci(position: number): number;
```

### Sequence Definition

The Fibonacci sequence is defined where each number is the sum of the two preceding ones, starting from 0 and 1.

### Examples

The first 10 Fibonacci numbers are:

| Position | Value |
| -------- | ----- |
| 0        | 0     |
| 1        | 1     |
| 2        | 1     |
| 3        | 2     |
| 4        | 3     |
| 5        | 5     |
| 6        | 8     |
| 7        | 13    |
| 8        | 21    |
| 9        | 34    |

## TDD Rules

1. ✅ Write production code only to pass a failing unit test
2. ✅ Write only enough of a unit test to make it fail
3. ✅ Write only enough production code to make the failing test pass

## Suggested Test Cases

1. Test position 0 returns 0
2. Test position 1 returns 1
3. Test position 2 returns 1
4. Test larger positions (e.g., 8 returns 21)
5. Test negative positions (should handle edge case)

## Resources

- [Test Desiderata by Kent Beck](https://kentbeck.github.io/TestDesiderata)
- [Fibonacci Sequence on Wikipedia](https://en.wikipedia.org/wiki/Fibonacci_number)

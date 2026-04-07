# Stats Calculator Kata

## Problem Description

Your task is to process a sequence of integer numbers to determine the following statistics:

- minimum value
- maximum value
- number of elements in the sequence
- average value

### Function Signature

```typescript
interface Stats {
  min: number;
  max: number;
  count: number;
  average: number;
}

function calculateStats(numbers: number[]): Stats;
```

### Example

For the input: `[6, 9, 15, -2, 92, 11]`

The result should be:

| Statistic                          | Value     |
| ---------------------------------- | --------- |
| minimum value                      | -2        |
| maximum value                      | 92        |
| number of elements in the sequence | 6         |
| average value                      | 21.833333 |

## TDD Rules

1. ✅ Write production code only to pass a failing unit test
2. ✅ Write only enough of a unit test to make it fail
3. ✅ Write only enough production code to make the failing test pass

## Suggested Test Cases

1. Test single element sequence
2. Test sequence with all same numbers
3. Test sequence with negative numbers
4. Test sequence with positive and negative numbers
5. Test empty sequence (edge case - decide how to handle)
6. Test average calculation precision

## Resources

- [Test Desiderata by Kent Beck](https://kentbeck.github.io/TestDesiderata)

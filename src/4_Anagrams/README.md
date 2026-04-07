# Anagrams Kata

## Problem Description

Write a program to generate all potential anagrams of an input string.

### Function Signature

```typescript
function anagrams(input: string): string[];
```

### Example

For the input: `"biro"`

The potential anagrams are:

- biro bior brio broi boir bori
- ibro ibor irbo irob iobr iorb
- rbio rboi ribo riob roib robi
- obir obri oibr oirb orbi orib

## TDD Rules

1. ✅ Write production code only to pass a failing unit test
2. ✅ Write only enough of a unit test to make it fail
3. ✅ Write only enough production code to make the failing test pass

## Suggested Test Cases

1. Test single character string (e.g., "a" → ["a"])
2. Test two character string (e.g., "ab" → ["ab", "ba"])
3. Test three character string
4. Test four character string (like "biro")
5. Test empty string (edge case)
6. Test string with duplicate characters

## Resources

- [Test Desiderata by Kent Beck](https://kentbeck.github.io/TestDesiderata)

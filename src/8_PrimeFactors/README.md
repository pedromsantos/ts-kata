# Prime Factors Kata

Write a function that decomposes a positive integer into its prime factors.

## Problem Description

Given a positive integer, return an array of its prime factors in ascending order. A prime factor is a prime number that divides the input number without leaving a remainder.

## Examples

| **Input** | **Output** | **Explanation** |
| --------- | ---------- | --------------- |
| 2         | `[2]`      | 2 is prime      |
| 3         | `[3]`      | 3 is prime      |
| 4         | `[2,2]`    | 4 = 2 × 2       |
| 6         | `[2,3]`    | 6 = 2 × 3       |
| 9         | `[3,3]`    | 9 = 3 × 3       |
| 12        | `[2,2,3]`  | 12 = 2 × 2 × 3  |
| 15        | `[3,5]`    | 15 = 3 × 5      |

## TDD Rules

Follow these Test-Driven Development rules strictly:

1. ✅ Write production code only to pass a failing unit test
2. ✅ Write only enough of a unit test to make it fail
3. ✅ Write only enough production code to make the failing test pass

## Getting Started

1. Create a function that takes a positive integer as input
2. Return an array of prime factors
3. Follow the TDD cycle: Red → Green → Refactor

## Edge Cases to Consider

- Input of 1 should return an empty array
- Input must be a positive integer
- Large numbers should still work efficiently

Source: [Cyber-Dojo](http://cyber-dojo.org/)

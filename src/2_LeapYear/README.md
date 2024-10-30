# Leap year kata

Write a function that returns true or false depending on whether its input integer is a leap year or not.

- A leap year is defined as one that:

  - is divisible by 4
  - but is not otherwise divisible by 100
  - unless it is also divisible by 400.

- For example:
  - 2001 is a typical common year
  - 1996 is a typical leap year
  - 1900 is an atypical common year
  - 2000 is an atypical leap year

| **Input** | **Output** |
| --------- | ---------- |
| **1**     | false      |
| **2**     | false      |
| **3**     | false      |
| **4**     | true       |
| **5**     | false      |
| **6**     | false      |
| **7**     | false      |
| **8**     | true       |
| **100**   | false      |
| **200**   | false      |
| **300**   | false      |
| **400**   | true       |
| **500**   | false      |
| **2001**  | false      |
| **1996**  | true       |
| **1900**  | false      |
| **2000**  | true       |

## Follow TDD rules strictly

1. ✅ Write production code only to pass a failing unit test
2. ✅ Write only enough of a unit test to make it fail
3. ✅ Write only enough production code to make the failing test pass

## Resources

- [TestDesiderata](https://kentbeck.github.io/TestDesiderata) by Kent Beck

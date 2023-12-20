# Fizzbuzz kata

- Write a function that takes a number and returns it as a string.
- For multiples of three return "fizz" instead of the stringified number.
- For the multiples of five return “buzz" instead of the strigified number.
- For numbers which are multiples of both three and five return “fizzbuzz" instead of the stringified number.

## Examples

| **Input** | **Output** |
| --------- | ---------- |
| **1**     | "1"        |
| **2**     | "2"        |
| **3**     | "fizz"     |
| **4**     | "4"        |
| **5**     | "buzz"     |
| **6**     | "fizz"     |
| **7**     | "7"        |
| **8**     | "8"        |
| **9**     | "fizz"     |
| **10**    | "buzz"     |
| **11**    | "11"       |
| **12**    | "fizz"     |
| **13**    | "14"       |
| **14**    | "15"       |
| **15**    | "fizzbuzz" |

## Folow TDD rules stryctly

1. Write production code only to pass a single failing unit test.
2. Write no more of a unit test than sufficient to fail (compilation failures are failures).
3. Write no more production code than necessary to pass the one failing unit test.

## Great habits

There is a set of good habits you should aim to internalize.

### Considerations when writing a new test

- Tests should **test one thing only.**

  Imagine you have 1,000 tests and a failing test. Can you spot a single failing behavior? It does not mean you should write a single assertion. It is fine to have multiple assertions, as long as they are testing the same behavior.

- Create more specific tests to drive a more generic solution (**triangulate**) by adding new tests that force your code to pivot.

- Give your tests meaningful names (behavior/goal-oriented) expressing your business domain.

  - Avoid technical names for tests. _Example:_ myMethodNameReturnsSomething
  - Avoid leaking implementation details in test names _Example:_ myTestReturnsFalse or CommandPatternTest
  - Avoid writing technical tests; you should test behaviors, not the technicality of components.

- Always see the test fail for the right reason.

  An unexpected failure is not a valid failure. _Examples:_ Unexpected exception is thrown; missing library, missing import

- Ensure you have meaningful feedback from the failing test.

  Ensure your test name, examples, and assertions provide good feedback when a test fails. When a test fails, you should be able to intuitively pinpoint the broken behavior intuitively.

- Keep your tests and production code separate.

  Do not mix test code with production code. You do not want to deploy test code with your production code.

- Organize your unit tests to reflect your production code.

  Test projects should follow a structure similar to the production code structure.

### Considerations when making a failing test pass

- Write the simplest code to pass the test.
- Fake it or use obvious implementation.
- It is okay to write any code that makes you get to the refactor phase more quickly.
- It is okay to write any code that you might improve at a later stage.
- Don't be embarrassed by writing simple code.
  Trying to be clever too early is often not the best choice.

### Considerations after the test passes

- Use the Rule of Three to tackle duplication.
  - If you need something once, build it.
  - If you need something twice, pay attention.
  - If you need it a third time, abstract it.

Keep in mind that duplication is easier to tackle than the wrong abstractions. That's why we want to see duplication three times before cleaning it.

## Resources

TestDesiderata by Kent Beck: <https://kentbeck.github.io/TestDesiderata>

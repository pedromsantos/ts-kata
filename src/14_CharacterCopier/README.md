# Character Copier kata

## Source

<https://www.planetgeek.ch/2010/03/31/mocking-kata-copier-net/>

## Problem Description

The Character Copier is a simple class that reads characters from a source and copies them to a destination one character at a time.

### Behavior

- When the `Copy` method is called, it reads characters from the source and copies them to the destination
- The copying continues until a newline character (`\n`) is encountered
- The newline character should not be copied to the destination

### Implementation Requirements

- Implement the character copier using Test Doubles for the source and destination
- Explore different testing approaches:
  - Using Spies (manually written mocks)
  - Using a mocking framework

### Example Input/Output

| Input (GetChar) | Output (SetChar) | Notes                 |
| --------------- | ---------------- | --------------------- |
| 'a'             | 'a'              | Copy single character |
| 'b'             | 'b'              | Copy single character |
| '\n'            | NA               | Stop on newline       |

### Interface

The implementation should work with the provided definitions in `kata.ts`.

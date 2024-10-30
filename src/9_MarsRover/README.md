# Mars Rover kata

## Problem Description

A NASA robot rover has landed on Mars. The rover must navigate a rectangular plateau divided into a grid, capturing terrain images with its on-board cameras to send back to Earth.

## Input Specification

The rover accepts three lines of input:

1. **Plateau Size**: Upper-right coordinates (e.g., `5 5`)

   - Lower-left coordinates are always `0 0`
   - Format: `<x> <y>`

2. **Initial Position**: Starting position and direction (e.g., `1 2 N`)

   - Format: `<x> <y> <direction>`
   - Direction can be N(orth), E(ast), S(outh), or W(est)
   - Moving North from (x, y) leads to (x, y+1)

3. **Command Sequence**: Series of movement instructions (e.g., `LMLMLMLMM`)
   - `L`: Rotate 90° left
   - `R`: Rotate 90° right
   - `M`: Move forward one grid point

### Sample Input

```text
5 5
1 2 N
LMLMLMLMM
```

**Note**: NASA guarantees valid input messages within the defined grid.

## Output Specification

The rover reports its final coordinates and heading.

### Sample Output

```text
1 3 N
```

## Test Cases

### Test Case 1

Input:

```text
5 5
1 2 N
LMLMLMLMM
```

Output:

```text
1 3 N
```

### Test Case 2

Input:

```text
5 5
3 3 E
MMRMMRMRRM
```

Output:

```text
5 1 E
```

## Implementation Guidelines

### First Implementation

1. Use Test-Driven Development (TDD)
2. Start with the provided acceptance tests
3. Basic implementation example:

```typescript
const rover = new Rover();
const finalPosition = rover.execute('5 5\n1 2 N\nLMLMLMLMM');
```

### Refactoring Phase

- Refactor using design patterns:
  - Command Pattern
  - State Pattern
  - Strategy Pattern
- Reference: [Mars Rover Kata: Refactoring to Patterns](https://www.codurance.com/publications/2019/01/22/mars-rover-kata-refactoring-to-patterns)

### TDD Rules

1. ✅ Only write production code to pass a failing test
2. ✅ Write minimal test code to cause failure
3. ✅ Write minimal production code to pass the test

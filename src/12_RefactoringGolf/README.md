# Refactoring Golf

## Game Rules

- Progress through holes sequentially (1 → 2 → 3 ... → 13)
- For each hole:
  - Compare current hole's code with next hole using a diff tool
  - Refactor current code to match the target (next hole)
  - Keep code compiling and tests passing at all times
  - Run tests and commit after each successful refactor
  - Feel free to revert to previous working state when needed
  - Give each hole at least 3 attempts

## Preparation

1. Identify all code smells in the starting hole
2. Verify build and tests pass: `pnpm golf`
3. Use hole-specific test scripts: `pnpm golf1`, `pnpm golf2`, etc.

## Challenge Runs

### Run 1: Initial Attempt

Track your score:

- Compilation error = 1 strike
- Failed test = 2 strikes

### Run 2: Guided Refactoring

Follow treatments from [refactoring.guru](https://refactoring.guru/refactoring/smells)
Track same scoring as Run 1

### Run 3: IDE-Focused Refactoring

Use automated IDE refactoring tools whenever possible
Track:

- Manual edit = 1 strike
  - Excluding: formatting, blank line/space removal
- Compilation error = 1 strike
- Failed test = 2 strikes

## Leaderboard

### Best Known Scores (IntelliJ)

| Hole | Best Score |
| ---- | ---------- |
| 1-13 | TBD        |

Current Course Record: TBD

## Refactoring Priority Guide

1. Readability

   - Comments
   - Dead code
   - Magic values
   - Scope optimization
   - Clutter removal
   - Implicit knowledge
   - Naming improvements

2. Complexity Reduction

   - Duplicated code
   - Long methods

3. Responsibility Organization

   - Data classes
   - Message chains
   - Feature envy
   - Inappropriate intimacy
   - Large classes

4. Abstraction Refinement

   - Long parameter lists
   - Data clumps
   - Primitive obsession
   - Middle man

5. Design Pattern Implementation

   - Switch statements using:
     - Strategy
     - State
     - Command
     - Other patterns

6. SOLID Principles
   - Refused bequest
   - Divergent change
   - Shotgun surgery
   - Speculative generality
   - Parallel inheritance

# Refactoring Golf

- Start on hole 1 and refactor the code to be like the code in hole 2
  - Use a diff tool to see the differences in code between the starting hole and end hole
- Move to hole 2 and refactor the code from hole 2 to be like the code in hole 3
- Apply the same pattern until you reach hole 13
- Remember to keep the code compiling and the tests passing at all times during the refactor
- For every refactor run the tests and if they pass commit
- It's ok, and actually hevely encouraged, to revert back to a previous working state at any moment
- Give each hole at least 3 attemps, for each run.

## Before you start

- Make sure you have identified as many code smells present on the starting hole as you can.
- Make sure the code builds and tests are passing `yarn golf`
- Each hole has its own test script use `yarn golf1` for the first hole and so on for each hole.

## First run

- Refactor the code as best as you can.
  - Using pen and pencil take note of the foolowing:
    - For every compilation error you get during or after a refactor count 1 strike.
    - For every failing test during or after a refactor count 2 strikes.

## Second run

- Refactor the code following the treatment available for each code smell in <https://refactoring.guru/smells>.
  - Using pen and pencil take note of the foolowing:
    - For every compilation error you get during or after a refactor count 1 strike.
    - For every failing test during or after a refactor count 2 strikes.

## Third run

- Refactor the code following the treatment available for each code smell in <https://refactoring.guru/smells>. Use automated IDE refactoring as much as possibe.
  - Using pen and pencil take note of the foolowing:
    - For every manual edit count 1 strike.
    - For every compilation error you get during or after a refactor count 1 strike.
    - For every failing test during or after a refactor count 2 strikes.

## Refactoring Priority Premise

### The kata uses the folowing order of code smells to refactor

- Refactor readability
  - Comments
  - Dead code
  - Magic strings and numbers
  - Scope (variables, blocks)
  - Clutter
  - Implicit knowledge
  - Naming
- Reduce complexity
  - Duplicated code
  - Long method
- Reorder responsibilities
  - Data class
  - Message chain
  - Feature Envy
  - Inappropriate Intimacy
  - Large class
- Refine abstractions
  - Long parameter list
  - Data clump
  - Primitive obsession
  - Middle man
- Refactor to design patterns
  - Switch statments
  - Strategy
  - State
  - Command
  - others
- Refactor to SOLID
  - Refused bequest
  - Divergent change
  - Shotgun surgery
  - Speculative generality
  - Paralell inheritance

# Code Smells Kata - TicTacToe Refactoring

## Overview

This kata contains a deliberately "smelly" implementation of TicTacToe that needs refactoring. Your goal is to identify and fix various code smells while maintaining functionality.

## Code Smells to Look For

The implementation contains the following code smells:

1. **Primitive Obsession**

   - Using primitive types where objects would be more appropriate

2. **Feature Envy**

   - A method accessing data from another object more than its own

3. **Data Class**

   - Classes with only getters/setters and no behavior

4. **Message Chain**

   - Long chains of method calls (Law of Demeter violations)

5. **Long Method**

   - Methods that are too long and do multiple things

6. **Comments**

   - Excessive or unnecessary comments that could be replaced with clearer code

7. **Long Parameter List**

   - Methods with too many parameters

8. **Shotgun Surgery**

   - Changes requiring multiple small edits across many classes

9. **Duplicated Code**

   - Similar code appearing in multiple places

10. **Large Class**

    - Classes that have too many responsibilities

11. **Divergent Change**

    - Class being changed for multiple different reasons

12. **Data Clump**

    - Groups of data items that always appear together

13. **Lazy Class**

    - Classes that don't do enough to justify their existence

14. **Dead Code**
    - Unused code that should be removed

## Tasks

1. Review the code and identify all code smells
2. Add comments marking each code smell you find
3. Refactor the code using small, incremental steps
4. Ensure all tests remain passing after each refactoring

## Tips

- Make one change at a time
- Run tests after each change
- Follow the boy scout rule: leave the code better than you found it

## Resources

- [Code Smells Video Tutorial](https://www.youtube.com/watch?v=MM6_tyvBRXE)
- [Refactoring Guru - Code Smells](https://refactoring.guru/refactoring/smells)
- [Comprehensive Code Smells Guide](https://luzkan.github.io/smells/)

## Sample Code Review - TicTacToe Implementation

1. **Data Clumps**

   - `x` and `y` coordinates appear together throughout the codebase (Play, TileAt, AddTileAt methods and Tile interface)
   - Consider introducing a `Position` value object to encapsulate this concept

   ```typescript
   class Position {
     constructor(
       private readonly x: number,
       private readonly y: number,
     ) {}
   }
   ```

2. **Primitive Obsession**

   - Game symbols represented as primitive strings (`' '`, `'O'`, `'X'`)
   - Board positions as raw numbers
   - Domain errors as generic Error with strings
   - Recommend creating proper types:
     - `Player` enum/value object
     - Domain-specific exceptions (`InvalidFirstPlayerError`, etc.)

3. **Long Method & Duplication**

   - `Winner()` method contains repeated row-checking logic
   - Consider extracting to something like:

   ```typescript
   private checkRow(rowIndex: number): GameSymbol
   private checkWinningLine(positions: Position[]): GameSymbol
   ```

4. **Feature Envy & Inappropriate Intimacy**

   - `Game` class knows too much about `Board`'s internals
   - Move winning condition logic to `Board` class
   - Encapsulate board operations better

5. **Data Class**

   - `Tile` is just a data holder
   - Should be a proper class with behavior and encapsulation

6. **Large Class**

   - Both `Game` and `Board` have multiple responsibilities
   - Consider extracting:
     - `WinningStrategy`
     - `GameRules`
     - `GameState`

7. **Message Chains**

   - `this._board.TileAt(x, y).Symbol` violates Law of Demeter
   - Introduce methods that encapsulate these operations

8. **Poor Encapsulation**

   - `TileAt` exposes internal state
   - Prefer exposing behavior over state

9. **Comments**

   - The code uses comments to explain what the code does rather than having self-documenting code
   - Problem: Comments can become outdated and don't improve the underlying code structure
   - Solution: Refactor the code to be self-documenting through better method and variable names

10. **Switch Statements**

    - in form of if-else chains
    - Multiple if-else conditions in Play method for game rules
    - Problem: Makes code rigid and harder to extend

11. **Magic Numbers/Strings**

    - Hard-coded `3` for board size
    - Hard-coded `' '` for empty spaces
    - Recommend creating named constants or configuration

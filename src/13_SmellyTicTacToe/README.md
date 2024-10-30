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

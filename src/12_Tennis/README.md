# Tennis kata

## Source

<https://github.com/emilybache/Tennis-Refactoring-Kata>

## Problem Statement

You are taking over a tennis scoring system project from a colleague who:

- Has spent 8.5 hours of a 10-hour billable project
- Claims the work is complete with passing tests
- Is currently unavailable due to illness

Your manager has requested you to:

1. Spend the remaining billable time (~1 hour) improving the code
2. Prepare feedback on the current design
3. Be ready to discuss the value of refactoring beyond billable hours

## Refactoring Task

Your goal is to improve code readability while maintaining functionality.

### Prerequisites

- Verify high test coverage (currently 100%)

  ```bash
  pnpm test:ci
  ```

### Refactoring Guidelines

#### Best Practices

1. Maintain Working Code

   - Run tests after each change
   - Verify coverage remains high
   - Commit frequently
   - Use `git reset` if tests fail

2. Improve Readability

   - **Remove Clutter**

     - Standardize formatting
     - Use clear, descriptive names
     - Eliminate abbreviations

   - **Clean Documentation**

     - Remove redundant comments
     - Convert useful comments to well-named methods
     - Delete unused code

   - **Make Knowledge Explicit**

     - Replace magic numbers/strings with constants
     - Simplify complex conditions

   - **Optimize Structure**
     - Refine variable scope
     - Keep declarations close to usage
     - Organize methods (public methods first)

3. Reduce Complexity

   - **Simplify Code**

     - Break down long methods
     - Encapsulate complex logic
     - Minimize nesting
     - Exit methods early when possible

   - **Eliminate Duplication**
     - Remove redundant logic

### Recommended Tools

- [Abracadabra VSCode Extension](https://github.com/nicoespeon/abracadabra)

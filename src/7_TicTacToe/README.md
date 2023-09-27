# Tic Tac Toe kata

## Rules

- The game is played on a grid that's 3 squares by 3 squares
- Players alternate placing X’s and O’s in empty squares
- X always plays first
- Players cannot play on a played square
- A Player wins when it has three squares in a row
  - Horizontally
  - Vertically
  - Diagonally
- If all nine squares are filled and neither player has won, the game is a draw

## First run

Implement Tic Tac Toe as best as you can using TDD.

## Second run

Implement Tic Tac Toe striclly applying object calisthenics rules.

## Object calisthenics

### In order of importance (defined by Pedro)

- Wrap all primitives and strings
  - Wrap primitives in a type, specially if it has behaviour or it’s an important domain concept
- First class collections
  - Wrap collections in a type, specially if it has behaviour or it’s an important domain concept
- One dot per line
  - Do not write dog.Body.Tail.Wag() write dog.ExpressHappiness() - Law of Demeter
- No getters/setters/properties, no access to private data, none! - TELL DON’T ASK!
- No classes with more than two instance variables
- Only one level of indentation per method
- Don't use the ELSE keyword
- Don't abbreviate names
- Keep all entities small
  - 10 files per package/namespace
  - 50 lines per class
  - 5 lines per method
  - 2-3? arguments per method

## Resources

<https://levelup.gitconnected.com/learn-these-9-rules-to-start-writing-clean-code-immediately-a7ee40fe1e1b>
<https://williamdurand.fr/2013/06/03/object-calisthenics/>

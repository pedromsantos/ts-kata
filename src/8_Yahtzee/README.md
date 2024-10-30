# Yahtzee kata

## Rules

The game of yahtzee is a simple dice game.

Each round, each player rolls five six sided dice.
The player may choose to reroll some or all of the dice up to three times (including the original roll).

The player then places the roll at a category, such as ones, twos, sixes, pair, two pairs etc.
If the roll is compatible with the score, the player gets a score for this roll according to the rules.
If the roll is not compatible, the player gets a score of zero for this roll.

The kata consists of creating the rules to score rolls, calculate player totals and determine when game is finished.

## Implementation

### Rolling Phase (Not part of implementation)

- Player rolls 5 dice
- Player can re-roll any number of dice up to 3 times total (including initial roll)

### Scoring Phase (To Implement)

1. Category Assignment

   - Player assigns final roll to an available category
   - Each category can only be used once per game
   - Invalid assignments score zero points

2. Scoring Rules
   - Calculate score based on category rules (see below)
   - Update player's total score
   - Game ends when all categories have been assigned

### Categories & Scoring Rules

#### Number Categories (Ones through Sixes)

- Score: Sum of all dice matching the category number
- Examples:
  - Roll [1,1,2,4,4] on "Fours" scores 8 points
  - Roll [2,2,2,5,6] on "Twos" scores 6 points
  - Roll [1,3,3,3,3] on "Threes" scores 12 points
  - Roll [5,5,5,5,5] on "Fives" scores 25 points
  - Roll [1,2,3,4,6] on "Sixes" scores 6 points
  - Roll [1,2,3,4,5] on "Ones" scores 1 point
  - Roll [4,4,4,1,2] on "Twos" scores 2 points

#### Combinations

- **Pair**

  - Score: Sum of the two highest matching dice
  - Example: [3,3,3,4,4] scores 8 (using the 4s)

- **Two Pairs**

  - Score: Sum of all dice in both pairs
  - Example: [1,1,3,3,2] scores 8

- **Three of a Kind**

  - Score: Sum of the three matching dice
  - Example: [3,3,3,4,5] scores 9

- **Four of a Kind**

  - Score: Sum of the four matching dice
  - Example: [2,2,2,2,5] scores 8

- **Small Straight**

  - Must be exactly [1,2,3,4,5]
  - Score: 15 (sum of dice)

- **Large Straight**

  - Must be exactly [2,3,4,5,6]
  - Score: 20 (sum of dice)

- **Full House**

  - Requires three of one number and two of another
  - Score: Sum of all dice
  - Example: [1,1,2,2,2] scores 8

- **Yahtzee**
  - All five dice showing same number
  - Score: 50 points

## Follow TDD rules strictly

1. ✅ Write production code only to pass a failing unit test
2. ✅ Write only enough of a unit test to make it fail
3. ✅ Write only enough production code to make the failing test pass

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

## Great habits

### Considerations when writing a new test

- Tests should test one thing only.
- Create more specific tests to drive a more generic solution (triangulate).
- Give your tests meaningful names (behavior/goal-oriented) that reflect your business domain.
- See the test fail for the right reason.
- Ensure you have meaningful feedback from failing tests.
- Keep your tests and production code separate.
- Organize your unit tests to reflect your production code (similar project structure).
- Organize your test in arrange, act and assert blocks.
- Write the, or at least focus on the, assertion first and work backward.
- Write fast, isolated, repeatable and self-validating tests.

### Considerations when making a failing test pass

- Write the simplest code to pass the test.
- Write any code that makes you get to the refactor phase quicker.
- Use Transformation Priority Premise.
- Consider using object calisthenics to drive design decisions.

### Considerations after the test passes

- Use the Rule of Three to tackle duplication.
- Refactor design constantly.
- Apply object calisthenics to improve your design.

## Resources

<https://levelup.gitconnected.com/learn-these-9-rules-to-start-writing-clean-code-immediately-a7ee40fe1e1b>
<https://williamdurand.fr/2013/06/03/object-calisthenics/>

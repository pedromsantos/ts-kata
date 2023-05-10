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

### Offline (No need to implement this part)

- Player rolls 5 die
- Player can re-roll any number of die
- Player can re-roll any number of die
- Player can re-roll any number of die

### Implement

- Player assigns final roll to a category (see catagory list below)
- Cannot assign to already assigned category
- Calculate score for player/roll/category
  - If roll is compatible score
  - If roll is not compatible score zero
- Update player score
- Game finishes when all players have assigned rolls to all categories

### Categories

- Ones, Twos, Threes, Fours, Fives, Sixes
  - The player scores the sum of the dice that reads one, two, three, four, five or six, respectively.
  - Example roll: 1, 1, 2, 4, 4 placed on “fours” scores 8 points.
- Pair
  - The player scores the sum of the two highest matching dice.
  - Example roll: 3, 3, 3, 4, 4 placed on “pair” scores 8.
- Two pairs
  - If there are two pairs of dice with the same number, the player scores the sum of these dice.
  - For example, 1, 1, 2, 3, 3 placed on “two pairs” scores 8.
- Three of a kind
  - If there are three dice with the same number, the player scores the sum of these dice.
  - Example roll: 3, 3, 3, 4, 5 places on “three of a kind” scores 9.
- Four of a kind
  - If there are four dice with the same number, the player scores the sum of these dice.
  - Example roll: 2, 2, 2, 2, 5 places on “four of a kind” scores 8.
- Small straight
  - If the roll starts on 1
  - Example roll: 1,2,3,4,5, the player scores 15 (the sum of all the dice).
- Large straight
  - If the roll starts on 2
  - Example roll: 2,3,4,5,6, the player scores 20 (the sum of all the dice).
- Full house
  - If the dice are two of a kind and three of a kind, the player scores the sum of all the dice.
  - Example roll: 1,1,2,2,2 placed on “full house” scores 8.
- Yahtzee
  - If all dice have the same number, the player scores 50 points.

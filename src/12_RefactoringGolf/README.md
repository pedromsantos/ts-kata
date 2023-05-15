# Refactoring Golf

## Source

<https://github.com/cicomsa/refactoring-golf-typescript>

## The problem

Refactoring Golf is a game designed to stretch your refactoring muscles and get you to explore your IDE to see what's really possible using shortcuts and automation.

This repo contains several source trees, or numbered "Holes" based on a single exercise.
Each hole carries on from the last for a single exercise - which is the application of a tax amount to a set of monetary amount.

Your goal is to safely and efficiently as possible refactor the Hole-X code to look like the Hole X+1 code.
You must aim to do it in as few "strokes" as possible.
A "stroke" is essentially a change made to the code, and every stroke costs you points.

Your pairing partner should carefully score you as follows:

- 0 points for code formatting
  - e.g., deleting whitespace, adding new lines or optimizing imports
- 1 point for every change made to the code using a shortcut or automated IDE feature
  - e.g., an automated refactoring, code template, or Find/Replace
- 2 points for every manual edit
  - Note that a single "edit" could cover multiple lines of code
- Double points for every change made while the code cannot pass the tests after the previous change

Allow yourselves a maximum of 2 attempts at each round to determine your best score.

## Acknowledgements

These instructions were mostly stolen from @daviddenton's Java version

## Links

- <https://refactoring.com/catalog/>
- <https://refactoring.guru/refactoring/techniques>

## Useful tools

- <https://github.com/nicoespeon/abracadabra>

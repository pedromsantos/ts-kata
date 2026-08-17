# Legacy Game Random Kata

## Source

Adapted from the `Game.Play()` random-dice seam example in
`2-07-TestingLegacyCode.md`.

## Situation

`Game.play()` decides whether a player receives an ordinary or bonus turn.
The behavior depends directly on `Math.random()`, so a test cannot reliably
exercise the six-rolled case.

## Goal

Add a minimal, behavior-preserving seam so tests can control the dice roll.
Then characterize both outcomes:

- a six produces `bonus turn`;
- any non-six result produces `ordinary turn`;
- each call increments the played-turn count exactly once.

## Constraints

- Keep production behavior unchanged for existing callers.
- Do not mock `Math.random()` globally in the test.
- Keep the seam local to the random dependency.
- Use real `Game` behavior in tests.
- Run focused mutation testing after the characterization tests pass.

## Explore

The book presents two valid seam families:

- an object seam, where a test subclass controls the roll;
- a function seam, also called Peel and Slice, where a roll function is passed
  to the behavior under test.

Choose the smallest idiomatic TypeScript path and explain rejected alternatives.

## Run

```sh
npm run legacygame
```

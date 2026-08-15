# Legacy Code & Test Smells Kata - Shopping Cart

## Overview

This kata is a **fixture, not a from-scratch TDD exercise**. It has the same
objective as `16_SmellyMarsRover`, but with a more everyday domain: a shopping
cart (inspired by `21_ShoppingCart`), built across the same
Domain/Application/Infrastructure layers, deliberately as legacy code. It
exists to practice (or to exercise tooling for):

- detecting legacy testability blockers and choosing a seam or fallback
  strategy
- characterization testing of code with no tests and no documentation
- detecting and refactoring test smells in an existing, badly-tested suite
- deciding, for one codebase, which parts need "add tests" work and which
  parts need "fix the existing tests" work

Unlike `15_SmellyTicTacToe` (which bakes in **production code smells** to
refactor), this kata bakes in **testability blockers** and **test smells** --
the two things that make legacy code hard to safely add tests to.

Unlike `16_SmellyMarsRover`, which is a single-file fixture, this kata is
laid out across the three layers of a small hexagonal application so you can
practice all three test types on the same codebase: acceptance, unit, and
integration.

None of the `.ts` files in this kata contain explanatory comments. Finding
and naming each blocker and each smell is part of the exercise -- this
README intentionally does not say where they are.

## Current State

| Layer          | Coverage      | What's wrong                                     |
| -------------- | ------------- | -------------------------------------------------- |
| Domain         | mixed, 0%-partial | no test deliberately targets the aggregate's core behavior |
| Application    | **0%**        | no tests at all                                    |
| Domain (services) | tested     | tests exist in `Tests/unit.test.ts`, but nearly all are smelly |
| Infrastructure | tested        | tests exist in `Tests/integration.test.ts`, but nearly all are smelly |

## Problem Description

A customer builds a cart by adding products from this catalogue:

| Code    | Name       | Price   |
| ------- | ---------- | ------- |
| VOUCHER | Voucher    | 5.00 €  |
| TSHIRT  | T-Shirt    | 20.00 € |
| MUG     | Coffee Mug | 7.50 €  |

Two promotions apply when the subtotal is calculated:

1. **Buy One Get One Free (2-for-1)** on `VOUCHER` items.
2. **Bulk Purchase Discount** on `TSHIRT` items: 3 or more drops the unit
   price to 19.00 €.

Checking out is the full end-to-end flow: load a cart, price it, generate an
order confirmation code, timestamp it, and email the customer a
confirmation. That flow is the acceptance-level seam for this kata.

## What to Look For

The application layer has zero test coverage and several deliberate
testability blockers -- things that make a class hard or impossible to put
under test as-is. Before writing a single test, identify each one and name
it using a legacy-code testability taxonomy of your choice (constructor does
real work, hardcoded dependency, singleton/global state, static method with
a side effect, non-determinism with no seam, etc.). There are more blockers
than in `16_SmellyMarsRover`, spread across two layers.

The domain aggregate at the center of this kata is never deliberately
tested either, even though it looks, at first glance, like it has decent
coverage -- look closely at *which* of its methods are actually exercised,
and by what.

The existing unit and integration test suites both currently pass, but both
are deliberately smelly. Together they represent every smell from this
catalogue at least once, and you'll see several of them show up differently
depending on whether they're in a unit test or an integration test:

Logic in Test, Mock Overuse, Test Interdependence, Fragile Test, Mystery
Guest, Eager Test, Assertion Roulette, Obscure Test, Test Code Duplication,
Conditional Test Logic, Hard-Coded Test Data, Testing Private Methods, Slow
Unit Test, Mocking Final/Concrete Classes, Mocking Value Objects,
Implementation Coupling, Shared Mutable State, Port-Boundary Violations,
Testing Theater.

Some smells overlap in the same test. None of them are labeled in the code.

## Tasks

Pick one direction (or all three, on separate branches):

1. **Write the missing acceptance test, outside-in** -- the checkout flow has
   no test. Start at the acceptance level (create a cart, add products,
   check out, assert on the receipt), then decide what seam each hardcoded
   dependency needs before any of that is even possible.
2. **Fix the existing unit tests** -- everything in `Tests/unit.test.ts`
   currently passes, but almost none of it protects real behavior. Detect
   each smell, then refactor it without ever weakening or deleting a test to
   make it pass.
3. **Fix the existing integration tests** -- same exercise, but for
   `Tests/integration.test.ts`. Pay attention to how the same smell can look
   different against a repository than it does against a domain service.

## Tips

- Do not fix a testability blocker and add new tests in the same change --
  seam refactors are a separate, behavior-preserving change from test
  additions.
- The smelly tests currently pass. That is the point: passing is not the
  same as protecting anything.
- Run mutation testing after any test addition or fix -- high coverage with
  weak assertions is exactly what several of the smells above look like
  from the outside.

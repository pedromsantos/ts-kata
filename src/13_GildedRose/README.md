# GildedRose kata

## Source

<https://github.com/NotMyself/GildedRose>
<https://github.com/emilybache/GildedRose-Refactoring-Kata>

## The Problem

Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime location in a prominent city ran by a friendly innkeeper named Allison. We also buy and sell only the finest goods. Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We have a system in place that updates our inventory for us. It was developed by a no-nonsense type named Leeroy, who has moved on to new adventures.

## Tasks Overview

### 1. Characterization Tests

- Goal: document the system as it is. Grow tests along a path of increasing generality: start with unit tests, expand them with parameterized cases, and finish with property-based checks. Keep code coverage on to spot missing scenarios throughout.

#### 1.1 Unit tests

- Describe current behavior with focused assertions (actual behavior over intended behavior)
- Test-driven loop:
  1. Write a failing assertion
  2. Run to observe actual behavior
  3. Update expectation to match reality
  4. Repeat and watch coverage to find gaps

#### 1.2 Parameterized tests

- Generalize unit tests by enumerating meaningful input sets to cover more branches
- Use coverage reports to see which combinations still need attention

#### 1.3 Property Based tests

- Capture broader invariants with random or generated data
- Leverage coverage to confirm new properties explore previously untested paths

### 2. Golden Master tests (AKA Approval tests or snapshot tests)

- Capture the full current output and lock it in snapshots; reruns reveal regressions automatically
- Coverage is critical: ensure snapshots exercise all code paths worth protecting
- Utilize Jest extended snapshot support:

  ```typescript
  function doUpdateQuality(name: string, sellIn: number, quality: number): Item {
    const gildedRose = new GildedRose([new Item(name, sellIn, quality)]);
    return gildedRose.updateQuality()[0];
  }

  test('should update quality', () => {
    expect(doUpdateQuality).toVerifyAllCombinations(
      [
        'foo',
        'Aged Brie',
        'Backstage passes to a TAFKAL80ETC concert',
        'Sulfuras, Hand of Ragnaros',
      ],
      [-1, 0, 1, 11],
      [0, 1, 2, 49, 50],
    );
  });
  ```

### Characterization vs Golden Master

| Aspect         | Characterization tests                         | Golden Master tests                                 |
| -------------- | ---------------------------------------------- | --------------------------------------------------- |
| Purpose        | Document current behavior                      | Freeze full outputs to detect regressions wholesale |
| Granularity    | Fine-grained assertions on specific behaviors  | Coarse snapshots of overall results                 |
| Evolution      | Easy to adjust per case as understanding grows | Stable baseline; snapshots updated deliberately     |
| Coverage role  | Highlights missing cases as you generalize     | Ensures snapshots actually exercise critical paths  |
| Failure signal | Points to a specific scenario                  | Signals any change; inspect diff to diagnose        |

### 3. Mutation Testing

#### Code coverage vs test coverage

- **Code coverage** answers "which lines executed?" — a line that runs is not necessarily tested
- **Test coverage** answers "do assertions actually catch bugs?" — mutation testing measures this
- High coverage with weak assertions gives false confidence; mutants expose those gaps

#### Why mutation tests matter for legacy code

- Legacy systems often have tests added after the fact that execute code without truly verifying behavior
- Mutations (small code changes like flipping `<` to `<=`) simulate real bugs; if tests still pass, the safety net has holes
- Before refactoring, surviving mutants reveal which behaviors are unprotected
- Killing mutants forces you to write assertions that lock in the actual logic, not just exercise it

#### Running mutation tests

- Run: `pnpm mutants`
- Review reports at:
  - `reports/mutation/mutation.html`
  - `reports/mutation/mutation.html#mutant/11_GildedRose/kata.ts`
- Add tests to kill any surviving mutants before proceeding to refactor

### 4. Refactoring Code

- Refactor the code of the Gilded Rose app using the "Lift-Up conditional" refactoring.
  - More on Lift-Up conditional
    - <https://www.youtube.com/watch?v=0bhfWtZocF8>
    - <https://github.com/nicoespeon/abracadabra/blob/main/REFACTORINGS.md#lift-up-conditional>
    - <https://www.eficode.com/blog/advanced-testing-refactoring-techniques-2>
    - <https://sourcery.ai/blog/refactoring-gilded-rose/>
    - <https://alcor.academy/p/2023-01-25-CSSCH-Code_Renovation-PhilippEichenberger>

#### Lift up conditional algorithm

1. Extract code to refactor into new method "bar"
2. Identify and copy condition to lift-up
3. Make the condition positive
4. Select all body of extracted method ("bar") and extract temporary method “foo”
5. On extracted method ("bar") paste the condition you copied and call “foo”. On the else call “foo” as well
6. Inline both calls to “foo” and delete "foo"
7. Use coverage to delete dead code on method "bar"
8. Repeat (GoTo 1)

### 5. Refactoring Design

- Refactor the design of the Gilded Rose code using the "Replace Conditional with Polymorphism" refactor
  - Step 1 Replace Type Code with Subclasses
  - Step 2 Use the factory pattern and the strategy pattern.
  - Links:
    - <https://refactoring.guru/replace-conditional-with-polymorphism>
    - <https://www.youtube.com/watch?v=NADVhSjeyJA>

### Useful tools

- <https://github.com/nicoespeon/abracadabra>

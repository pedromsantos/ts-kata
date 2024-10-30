# GildedRose kata

## Source

<https://github.com/NotMyself/GildedRose>
<https://github.com/emilybache/GildedRose-Refactoring-Kata>

## The Problem

Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime location in a prominent city ran by a friendly innkeeper named Allison. We also buy and sell only the finest goods. Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We have a system in place that updates our inventory for us. It was developed by a no-nonsense type named Leeroy, who has moved on to new adventures.

## Tasks Overview

### 1. Characterization Testing

- Write tests to describe the current behavior of the code
- Focus on documenting actual behavior, not expected behavior
- Use test-driven approach:
  1. Write a failing assertion
  2. Run the test to discover actual behavior
  3. Update test to match actual behavior
  4. Repeat
- Use code coverage tools to ensure comprehensive testing

### 2. Mutation Testing

- Run mutation tests: `yarn mutants`
- Review reports at:
  - `reports/mutation/mutation.html`
  - `reports/mutation/mutation.html#mutant/11_GildedRose/kata.ts`
- Add tests to catch any uncovered mutations

### 3. Approval Testing

- Implement approval (golden master/snapshot) tests
- Compare advantages vs characterization tests
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

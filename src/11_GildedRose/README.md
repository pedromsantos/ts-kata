# Tennis kata

## Source

<https://github.com/NotMyself/GildedRose>
<https://github.com/emilybache/GildedRose-Refactoring-Kata>

## The problem

Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime location in a prominent city ran by a friendly innkeeper named Allison. We also buy and sell only the finest goods. Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We have a system in place that updates our inventory for us. It was developed by a no-nonsense type named Leeroy, who has moved on to new adventures.

## Your tasks

### First run - Add Characterization tests

Write characterization tests to describe the code as is.

More on characterizations <https://michaelfeathers.silvrback.com/characterization-testing>

#### Guidelines

- Write an assertion that you know will fail
- Run the test and let the failure tell you what the actual behaviour is
- Change the test so that it expects the behaviour that the code actually produces
- Repeat
- Use a code coverage tool to help you identify areas of the code that have no test coverage

Write characterization tests to describe the code as is.

### Second run - Configure mutation testing

- Use mutation tests to further increase the confidence on your tests
- Add any missing tests the mutation tool uncovers

### Third run - Add approval (aka golden master/snapshot) tests

- Use approval tests to test the solution instead of characterization tests
- Note the advantages/disadvantages of using one approach or the other

Jest extension tyo support combinations
<https://github.com/nicoespeon/jest-extended-snapshot#readme>

### Fourth run - Refactor design

- Refactor the design of the Gilded Rose app using the "Lift-Up conditional" refactoring.
  - More on Lift-Up conditional
    - <https://www.youtube.com/watch?v=0bhfWtZocF8>
    - <https://github.com/nicoespeon/abracadabra/blob/main/REFACTORINGS.md#lift-up-conditional>
    - <https://www.eficode.com/blog/advanced-testing-refactoring-techniques-2>
    - <https://sourcery.ai/blog/refactoring-gilded-rose/>
    - <https://alcor.academy/p/2023-01-25-CSSCH-Code_Renovation-PhilippEichenberger>

#### Useful tools

- <https://github.com/nicoespeon/abracadabra>

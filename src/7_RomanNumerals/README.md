# Roman numerals kata

## First run

- Implement a Roman numeral converter.
- The code must be able to take numbers up to 3999 and convert to their Roman equivalent.

| **Arabic number** | **Roman numeral** |
| ----------------- | ----------------- |
| **1**             | I                 |
| **2**             | II                |
| **3**             | III               |
| **4**             | IV                |
| **5**             | V                 |
| **6**             | VI                |
| **7**             | VII               |
| **8**             | VIII              |
| **9**             | IX                |
| **10**            | X                 |
| **20**            | XX                |
| **30**            | XXX               |
| **40**            | XL                |
| **50**            | L                 |
| **60**            | LX                |
| **70**            | LXX               |
| **80**            | LXXX              |
| **90**            | XC                |
| **100**           | C                 |
| **200**           | CC                |
| **300**           | CCC               |
| **400**           | CD                |
| **500**           | D                 |
| **600**           | DC                |
| **700**           | DCC               |
| **800**           | DCCC              |
| **900**           | CM                |
| **1000**          | M                 |
| **2000**          | MM                |
| **3000**          | MMM               |

## Follow TDD rules strictly

1. ✅ Write production code only to pass a failing unit test
2. ✅ Write only enough of a unit test to make it fail
3. ✅ Write only enough production code to make the failing test pass

## Second run

Use the Transformation Priority Premise (TPP) to evolve your code.

### TPP table

| #   | Transformation              | Start code         | End code                                 |
| --- | --------------------------- | ------------------ | ---------------------------------------- |
| 1   | {} → nil                    | {}                 | [return] nil                             |
| 2   | nil → constant              | [return] nil       | [return] "1"                             |
| 3   | constant → constant+        | [return] "1"       | [return] "1" + "2"                       |
| 4   | constant → scalar           | [return] "1" + "2" | [return] argument                        |
| 5   | statement → statements      | [return] argument  | [return] min(max(0, argument), 10)       |
| 6   | unconditional → conditional | [return] argument  | if(condition) [return] 1 else [return] 0 |
| 7   | scalar → array              | dog                | [dog, cat]                               |
| 8   | array → container           | [dog, cat]         | {dog="DOG", cat="CAT"}                   |
| 9   | statement → tail recursion  | a + b              | a + recursion                            |
| 10  | if → loop                   | if(condition)      | loop(condition)                          |
| 11  | statement → recursion       | a + recursion      | recursion                                |
| 12  | expression → function       | today – birth      | calculateBirthDate()                     |
| 13  | variable → mutation         | day                | var day = 10; day = 11;                  |

Transformations at the top of the list have priority over those at the bottom. It is better (or simpler) to change a constant into a variable than it is to add an `if` statement. So when making a test pass, favor simpler transformations (top of the list) over those more complicated (bottom of the list).

Another way to use the Transformation Priority Premise is to keep writing new code using obvious implementation. Whenever duplication is detected, refactor to the next transformation to remove it. When refactoring, first try to use a simpler one. That does not always work; sometimes, you must move to a more complicated transformation or a mix of both.

### Example using Transformation Priority Premise on Fibonacci sequence

| Input | Expected output | Transformation              | Implementation                                                          |
| ----- | --------------- | --------------------------- | ----------------------------------------------------------------------- |
| 0     | 0               | {} → nil                    | :warning: Does not work                                                 |
| 0     | 0               | nil → constant              | `return 0`                                                              |
| 1     | 1               | constant → scalar           | `return index`                                                          |
| 2     | 1               | unconditional → conditional | `if number < 2 then return index else return index - 1`                 |
| 3     | 2               | unconditional → conditional | `if number < 2 then return index else return index - 1` NO CHANGE       |
| 4     | 3               | unconditional → conditional | `if number < 2 then return index else return index - 1` NO CHANGE       |
| 5     | 5               | scalar → array              | `var fibs = [0, 1, 1, 2, 3, 5]; return fibs[index]`                     |
| 6     | 8               | scalar → array              | `var fibs = [0, 1, 1, 2, 3, 5, 8]; return fibs[index]`                  |
| 7     | 13              | scalar → array(duplication) | `var fibs = [0, 1, 1, 2, 3, 5, 8, 13]; return fibs[index]`              |
| 8     | 21              | statement → tail recursion  | `if index < 2 return index else return fib(index - 1) + fib(index - 2)` |

The Transformation Priority Premise aims to evolve code while keeping complexity under control.

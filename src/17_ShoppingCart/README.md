# Shopping cart kata

## Goal

- Implement the shopping cart use cases for this company.
- Use a Domain Driven Design and Hexagonal architecture approach.
- Start from the use cases, we will not be implementing the transport layer for this project.
- Use a in-memory database implementation.

- Create a testing suite that can be confidently used to test your code.
  - Acceptance tests (Scenarios covering everything except repositories)
  - Unit Tests (use cases, aggregates/entities, and domain services)
  - Integration tests (Testing the real repository implementation)
  - Your tests code should be a first level citizen, treat it as production code.

## Overview

A company wants to sell their products online, one of the core features is the shopping cart.
The company wants to sell online the following products:

```txt
Code         | Name                     |  Price
---------------------------------------------
VOUCHER      | Voucher             |   5.00 €
TSHIRT       | T-Shirt             |  20.00 €
MUG          | Coffee Mug          |   7.50 €
```

### Examples

```txt
Items: VOUCHER, TSHIRT, MUG
Subtotal: 32.50€
```

## Extension

- Two different offers will be used to boost sales:
  - buy one get one free (aka two for the price of one)
  - multibuy discount (buying at least a quantity of a product its unit price is discounted)
- The promotional strategy planned by the company is to apply:
  - buy one get one free to `VOUCHER` items
  - multibuy discount to `TSHIRT` items for a quantity of 3 or more and reducing the unit price to 19.00 €

### Extension examples

```txt
Items: VOUCHER, TSHIRT, VOUCHER
Subtotal: 25.00€

Items: TSHIRT, TSHIRT, TSHIRT, VOUCHER, TSHIRT
Subtotal: 81.00€

Items: VOUCHER, TSHIRT, VOUCHER, VOUCHER, MUG, TSHIRT, TSHIRT
Subtotal: 74.50€
```

### Unit vs Integration vs Acceptance

|                       | **Unit**                    | **Integration aka contract**                            | **Acceptance aka system**                           |
| --------------------- | --------------------------- | ------------------------------------------------------- | --------------------------------------------------- |
| **Boundary**          | Class, Aggregate            | Class - External dependency                             | Application code (mock/stub) external dependencies  |
| **Size**              | Tiny                        | Tiny to Small                                           | Small to Medium                                     |
| **Environment**       | Development                 | Integration test env                                    | Developement/QA                                     |
| **Data**              | Mock data                   | Test data                                               | Fake or Data                                        |
| **System Under Test** | Isolated behaviour          | Integration layer and external dependency               | App flow with (mocked/stubed) external dependencies |
| **Scenarios**         | Developer                   | Developer                                               | Developer/QA                                        |
| **When**              | Before each commit/on build | On build                                                | Before each commit/on build                         |
| **Execution time**    | Very fast                   | Medium to slow (depending on external dependency speed) | Very fast to fast, on worst case medium             |

# Shopping cart kata

## Overview

A company wants to sell their products online, one of the core features is the shopping cart.
The company wants to sell online the following products:

```txt
Code         | Name                     |  Price
--------------------------------------------------
VOUCHER      | AcME Voucher             |   5.00 €
TSHIRT       | AcME T-Shirt             |  20.00 €
MUG          | AcME Coffee Mug          |   7.50 €
```

### Examples

```txt
Items: VOUCHER, TSHIRT, MUG
Subtotal: 32.50€
```

## Goal

Implement the shopping cart use cases for this company using a Domain Driven Design and Hexagonal architecture approach.
Start from the use cases, we will not be implementing the transport layer for this project.
Use a in-memory database implementation.

- Create a testing suite that can be confidently used to test your code.
  - Acceptance tests (Scenarios covering everything except repositories)
  - Unit Tests (Unit testing Entities, use cases, and domain services)
  - Integration tests (Testing the real repository implementation)

## Requirements

Your tests code should be a first level citizen, treat it as production code.

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

# Shopping Cart Kata

## Goal

Implement a shopping cart system using:

- Domain Driven Design and Hexagonal architecture
- Use case driven development
- In-memory database implementation
- Comprehensive testing strategy

## Testing Requirements

Create a robust testing suite including:

- **Acceptance Tests**: End-to-end scenarios (excluding repositories)
- **Unit Tests**: For use cases, aggregates/entities, and domain services
- **Integration Tests**: For repository implementations
- Tests should be treated as first-class citizens with production-quality code

## Product Catalog

| Code    | Name       | Price   |
| ------- | ---------- | ------- |
| VOUCHER | Voucher    | 5.00 €  |
| TSHIRT  | T-Shirt    | 20.00 € |
| MUG     | Coffee Mug | 7.50 €  |

## Basic Shopping Cart

### Example

```txt
Items: VOUCHER, TSHIRT, MUG
Subtotal: 32.50€
```

## Promotional Rules

The system supports two types of promotions:

1. **Buy One Get One Free (2-for-1)**

   - Applied to: VOUCHER items

2. **Bulk Purchase Discount**
   - Applied to: TSHIRT items
   - Condition: 3 or more items
   - Discounted price: 19.00€ per unit

### Promotion Examples

```txt
# 2-for-1 Example
Items: VOUCHER, TSHIRT, VOUCHER
Subtotal: 25.00€

# Bulk Discount Example
Items: TSHIRT, TSHIRT, TSHIRT, VOUCHER, TSHIRT
Subtotal: 81.00€

# Combined Promotions
Items: VOUCHER, TSHIRT, VOUCHER, VOUCHER, MUG, TSHIRT, TSHIRT
Subtotal: 74.50€
```

## Testing Strategy Reference

| Aspect      | Unit Tests        | Integration Tests            | Acceptance Tests      |
| ----------- | ----------------- | ---------------------------- | --------------------- |
| Scope       | Class/Aggregate   | Class ↔ External Dependency | Full Application Flow |
| Size        | Tiny              | Small                        | Small-Medium          |
| Environment | Dev               | Integration                  | Dev/QA                |
| Data        | Mocked            | Test Data                    | Fake/Test Data        |
| Focus       | Isolated Behavior | Integration Points           | Business Flows        |
| Authors     | Developers        | Developers                   | Devs/QA               |
| Execution   | Per Commit        | On Build                     | Per Commit/Build      |
| Speed       | Very Fast         | Medium-Slow                  | Fast-Medium           |

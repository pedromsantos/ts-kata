import { Cart } from '../Domain/Models/Cart';
import { Product } from '../Domain/Models/Product';
import { ShoppingCartRepository } from '../Domain/Repositories/ShoppingCartRepository';
import { InMemoryShoppingCartRepository } from '../Infrastructure/Repositories/InMemoryShoppingCartRepository';

const aCartWithProducts = (id: string): Cart => {
  const cart = new Cart(id, 'Ada Lovelace');
  cart.addProduct(new Product('MUG', 'Coffee Mug', 7.5), 2);
  cart.addProduct(new Product('VOUCHER', 'Gift Voucher', 5), 1);
  return cart;
};

describe('InMemoryShoppingCartRepository integration', () => {
  let repository: ShoppingCartRepository;

  beforeEach(() => {
    InMemoryShoppingCartRepository.clear();
    repository = new InMemoryShoppingCartRepository();
  });

  afterEach(() => {
    InMemoryShoppingCartRepository.clear();
  });

  it('FindsCart_WhenSavedThroughRepository', async () => {
    const cart = aCartWithProducts('repository-integration-cart-1');

    await repository.save(cart);
    const found = await repository.findById(cart.id);

    expect(found).toEqual(cart);
  });

  it('ReturnsNull_WhenCartIdIsUnknown', async () => {
    await expect(repository.findById('unknown-cart')).resolves.toBeNull();
  });
});

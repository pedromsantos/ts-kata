import { Id } from './Requests';
import { Item } from './Responses';

export interface GetItemDescriptionUseCase {
  query(itemId: Id): Item;
}

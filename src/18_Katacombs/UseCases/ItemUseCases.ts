import { Id } from './Requests';
import { Item } from './Responses';

export interface GetItemDescriptionUseCase {
  execute(itemId: Id): Item;
}

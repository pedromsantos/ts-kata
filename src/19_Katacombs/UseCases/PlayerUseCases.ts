import { Action, Direction, Id } from './Requests';
import { Bag, Help, Item, Location } from './Responses';

export interface GetHelpAndHintsuseCase {
  query(playerId: Id): Help;
}

export interface LookArroundUseCase {
  query(playerId: Id): Location;
}

export interface GetDirectionDescriptionSeCase {
  query(playerId: Id, direction: Direction): Location;
}

export interface GetBagUseCase {
  query(playerId: Id): Bag;
}

export interface UseItemUseCase {
  execute(playerId: Id, itemId: Id, action: Action): void;
}

export interface MoveUseCase {
  execute(playerId: Id, direction: Direction): void;
}

export interface GetItemDescriptionUseCase {
  query(itemId: Id): Item;
}
